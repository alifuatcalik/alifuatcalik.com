# Git Kuralları

> Hook ile zorlanır: `.claude/hooks/guard-git.sh` main'e commit/push'u engeller; `settings.json` commit/push/PR/merge için her seferinde onay ister.
> İstisna: repo'nun **ilk commit'i** zorunlu olarak main'e atılır (kullanıcı onayıyla, hook'u geçici devre dışı bırakmadan önce sorulur).

## Branch
- `main` üzerinde **asla** commit atılmaz. Commit öncesi `git branch --show-current` kontrol edilir.
- Branch adı: `<type>/<kapsam>` — `refactor/<component>`, `feat/<konu>`, `fix/<konu>`, `chore/<konu>`, `docs/<konu>`
- Bir branch = bir iş (ör. `feat/hero`, `feat/i18n`, `chore/deploy`).
- Bir branch'in işi bitmeden (push → PR → squash merge → main pull) yenisi açılmaz.
- `develop` branch'i yok; repo **squash merge** kullanır.

## Commit
- Kullanıcı kodu kendisi test eder. Açıkça **"commitle"** demeden `git commit` çalıştırılmaz.
- İş bitince: "Build başarılı, test edebilirsin" de ve dur.
- Sadece işle ilgili dosyalar `git add` edilir (`git add -A` / `git add .` kullanma).
- Mesaj formatı (conventional): `feat(signals/table): ...`, `fix(select): ...`, `chore(claude): ...`, `docs: ...`

## Push / PR / Merge
- Kullanıcı açıkça **"pushla"** demeden `git push`, `gh pr create`, `gh pr merge` çalıştırılmaz.
- "pushla" akışı: build doğrula → `git push -u origin <branch>` → `gh pr create --base main` → `gh pr merge --squash --delete-branch` → `git checkout main && git pull`.

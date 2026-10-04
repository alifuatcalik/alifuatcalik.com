# alifuatcalik.com — Claude Code Instructions

Ali Fuat Çalık'ın kişisel portföy sitesi. Angular 21 (standalone, Signals), statik prerender, Cloudflare Pages. TR + EN.

**Önce oku:** [PLAN.md](./PLAN.md) — kararlar, yapılacaklar sırası, açık sorular. Görsel referans: [docs/prototype/index.html](./docs/prototype/index.html) (onaylanmış prototip).

## Çalışma İlkeleri
- Kullanıcıyla Türkçe konuş. İstek dışı değişiklik yapma; belirsizlikte sor.
- Kullanıcı plan istediyse planı sun, **açık onay gelene kadar koda dokunma**.
- Görsel değişiklikleri önce göster (tarayıcı / artifact), sonra kodla; kullanıcı küçük mock'larda karar veremiyor → gerçek içerik ve gerçek ölçekte göster.
- İş bitince build'i doğrula, "test edebilirsin" de ve dur. Commit/push sadece kullanıcı "commitle" / "pushla" deyince ([.claude/rules/git.md](./.claude/rules/git.md)).
- Paket eklemeden önce gerekçesini söyle. `any` yasak. Hardcoded renk yerine CSS custom property token'ları.

## Kod Kuralları
- Standalone component, `ChangeDetectionStrategy.OnPush`, signal API (`input()`, `output()`, `computed()`), template'de `@if` / `@for`.
- SCSS + BEM; renkler `:root` token'larında (prototipteki `--bg`, `--surface`, `--fg`, `--accent` …), light + dark (`prefers-color-scheme` + `[data-theme]`).
- Erişilebilirlik: anlamlı başlık sırası, görünür focus, `prefers-reduced-motion`, kontrast (metin ≥ 4.5).
- Kişisel veri: telefon numarası sitede **yok** (kullanıcı kararı); e-posta, LinkedIn, GitHub var.

## Komutlar
| Komut | Açıklama |
|---|---|
| `npm start` | Dev server (http://localhost:4200) |
| `npm run build` | Prerender build → `dist/alifuatcalik/browser` |

## Ortam notu
Sistem npm'i 11.21 (11.3.0'daki `edgesOut` hatası nedeniyle yükseltildi); `packageManager` buna sabit. Node sürümü `.node-version` ile tam sabit 22.14.0 (Cloudflare build de bunu kullanır; yalnızca `22` yazınca Cloudflare en yeni 22.x'i kurmaya çalışıp başarısız olabiliyor). npm 12, Node 22.14'ü desteklemiyor — kullanma.

## İlgili
UI kütüphanesi ayrı repoda: `~/Desktop/bzdk-ui` (adı değişecek, henüz yayınlanmadı). Site ilk aşamada kütüphanesiz; kütüphane hazır olunca geçilecek.

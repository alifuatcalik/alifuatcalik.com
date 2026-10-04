# alifuatcalik.com — Plan

> 2026-10-04'te `bzdk-ui` reposundaki sohbetten devredildi. Bu dosya tek takip listesi: biten adımı işaretle, yeni kararı "Kararlar"a yaz.

## Kararlar (kullanıcı onaylı)
- **Domain:** `alifuatcalik.com` — Cloudflare Registrar, otomatik yenileme açık. (`alifuat.com` ve GitHub `alifuat` başkasına ait; `alifuatcalik` GitHub kullanıcı adıyla tutarlı.)
- **Marka yapısı:** üst marka = Ali Fuat Çalık / alifuatcalik.com; ürünler (ör. UI kütüphanesi) kendi adıyla bunun altında.
- **Teknik:** ayrı repo, Angular 21, statik prerender, Cloudflare Pages.
- **Dil:** Türkçe + İngilizce.
- **Bölümler:** giriş (hero) · seçilmiş işler · deneyim · yetkinlikler · hizmetler · iletişim. **Yazılar/blog yok** (ileride gerekirse eklenir — önerme).
- **Görsel:** onaylanmış prototip `docs/prototype/index.html` (artifact: https://claude.ai/artifact/RKLmbKG2oP9NyM6yrjbaoF). Zinc nötrler + mor vurgu (#7333CC / dark #B899FF); fontlar Bricolage Grotesque (başlık), Geist (gövde), Geist Mono. İmza öğesi: hero'da `ng build` raporu (9,4 MB → 2,04 MB).
- **İçerik kaynağı:** kullanıcının CV'si (Eylül 2026). Telefon numarası sitede yok.
- **Kütüphane:** ilk aşamada kullanılmıyor; site sade Angular + SCSS.
- **Repo:** `alifuatcalik/alifuatcalik.com`, public. `alifuatcalik/alifuatcalik` GitHub profil README'si olarak kalır (siteye link sonradan eklenebilir).

## Yapılacaklar (sırayla — her madde ayrı branch)
1. [x] Proje iskeleti (`ng new`, SCSS, routing, SSR/prerender) — build doğrulandı
2. [x] **Git + GitHub:** ilk commit main'de (`chore: initial project scaffold`); public repo https://github.com/alifuatcalik/alifuatcalik.com
3. [x] **Statik çıktı:** `outputMode: "static"`; `server.ts`, `express`, `@types/express` kaldırıldı. Çıktı `dist/alifuatcalik/browser` (prerender, `server/` yok)
4. [x] **Prototip → Angular:** token'lar `styles.scss`'te; bölümler `src/app/sections/*` component'leri; içerik `src/app/content/*.ts` (`Localized` = `{ tr, en }`), aktif dil `LanguageService.lang` sinyali (şimdilik sabit `tr`). Dil/tema düğmeleri 5. ve 6. adımda
5. [ ] **i18n:** TR + EN. Seçenek A: `@angular/localize` (Angular resmi, derleme zamanı, `/tr` `/en` ayrı çıktı). Seçenek B: tek build + basit sinyal tabanlı sözlük (prototipteki gibi). Kullanıcıya sor; SEO için A daha iyi
6. [ ] **Tema:** light/dark (sistem + manuel), seçim `localStorage`'da
7. [ ] **SEO & paylaşım:** `<title>`, meta description, Open Graph görseli, `hreflang`, `sitemap.xml`, `robots.txt`, favicon
8. [ ] **Yayın:** Cloudflare Pages ← GitHub repo; build komutu `npm run build`, çıktı `dist/alifuatcalik/browser`; custom domain `alifuatcalik.com` + `www` yönlendirmesi
9. [ ] **E-posta (isteğe bağlı):** Cloudflare Email Routing → `ali@alifuatcalik.com` → Gmail

## Açık sorular (kullanıcıya)
- İletişimde hangi e-posta? (`alif.calik@gmail.com` prototipte; domain'li adres kurulursa o)
- Şirket ürün adı (Noctua) sitede geçsin mi?
- CV indirilebilir PDF olarak eklensin mi?
- Kullanıcının fotoğrafı eklenecek mi?

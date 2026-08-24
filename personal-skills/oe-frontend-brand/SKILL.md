---
name: oe-frontend-brand
description: >
  Crea oggetti web HTML standalone on-brand per OpenEconomics, guidando colleghi con
  competenze eterogenee. Sei tipi di asset web (analisi one-page, minisito verticale,
  web report, presentazione a scroll, dashboard, repository) per i brand OE e Civiqa.
  USA QUESTA SKILL quando l'utente chiede di creare un asset web, minisito, landing,
  one-pager, presentazione, dashboard, report web o pagina HTML in contesto OE.
---

# oe-frontend-brand

Costruisci oggetti web **HTML standalone** (si aprono nel browser, nessun build) seguendo il
design system OpenEconomics embeddato in `ds-kit/`. Nessun codice prima dell'approvazione delle
sezioni.

## Principio
Dipendi da `ds-kit/` (copia pinnata del DS). Non reinventare token, font o componenti: usali da lì.

## Flusso a 4 fasi
1. **Intake** — segui `references/intake.md` (usa `AskUserQuestion`). Linguaggio per il collega:
   "tipo di asset web", mai "archetipo".
2. **Mappa pagine** *(solo asset multi-pagina, es. minisito verticale)* → attendi approvazione.
3. **Mappa sezioni** (per pagina: pretitolo chip + titolo + componente + sfondo) → attendi approvazione.
4. **Build + check + consegna:**
   - Parti dallo scaffold in `kits/<tipo>/` e compilalo coi contenuti.
   - Linka `ds-kit/` con percorsi relativi (CSS, fonts.css, tokens.js, chart-preset.js, image-slot.js).
   - Applica il footer di default (Analisi → `footers/footer-analisi.html`; altri → `footer-standard.html`).
   - Esegui `references/checks.md` PRIMA di consegnare.
   - Apri nel browser (`open <file>`), itera, poi crea lo ZIP (senza file di lavoro).

## Carattere per tipo (densità/linguaggio) — vedi spec §5.1
- Analisi: il dato prima di tutto, testo essenziale.
- Minisito verticale: editoriale persuasivo.
- Web report: testi verbatim, completi.
- Presentazione a scroll: sintetica, una idea per sezione, schematizza i contenuti lunghi.
- Dashboard: scansione rapida, zero fronzoli.
- Repository: funzionale, trovabilità + download.

## Tipi di asset web e relativi kit
| Tipo | Kit | Natura |
|---|---|---|
| Analisi one-page | `kits/analisi-one-page/` | data-driven (Chart.js) |
| Minisito verticale | `kits/minisito-verticale/` | editoriale multi-sezione |
| Web report | `kits/web-report/` | editoriale verbatim |
| Presentazione a scroll | `kits/presentazione-scroll/` | narrativo |
| Dashboard | `kits/dashboard/` | data-driven |
| Repository | `kits/repository/` | elenco asset + download |

## Immagini
Slot con caricamento dove manca un'immagine (`ds-kit/image-slot.js`); icone dalla libreria DS;
trattamento brand proposto caso per caso. Vedi `references/intake.md`.

## Brand
OE corporate (default) e Civiqa. Per Civiqa, applica l'overlay `ds-kit/brands/civiqa.css` quando
disponibile (in arrivo dal designer); fino ad allora avvisa l'utente che la variante Civiqa non è
ancora completa.

# Intake — domande guidate (linguaggio per il collega: "tipo di asset web")

Poni le domande con `AskUserQuestion`. Salta quelle a cui l'utente ha già risposto.

## Domande base
1. **Per quale brand?** → OpenEconomics / Civiqa *(default: OpenEconomics)*
2. **Che tipo di asset web?** → Analisi one-page · Minisito verticale · Web report · Presentazione a scroll · Dashboard · Repository
3. **Titolo e tema** del progetto.
4. **Vuoi solo i titoli di sezione o anche i pretitoli?** Il pretitolo è una chip (box verde lime).
   Esempio: `EXECUTIVE SUMMARY | Il nord paga il conto più salato`.
5. **Quali sono i titoli (e gli eventuali pretitoli) delle sezioni?**
   Convenzione: PRETITOLO IN STAMPATELLO MAIUSCOLO / Titolo in sentence case.
6. **Materiali disponibili?** → testi, dati, Excel (.xls/.xlsx), .pptx, .md, PDF, immagini, logo.
7. **Footer** → default per tipo (Analisi → footer analisi; gli altri → footer standard); sovrascrivibile.

## Domande condizionali per tipo
- **Analisi / Dashboard** → "Dove sono i dati?" (Excel/CSV/incollati/.pptx/.md) + "Quali KPI/grafici principali?"
- **Web report** → "C'è un documento fonte di verità?" → testi VERBATIM (nessuna parafrasi/riordino).
- **Minisito verticale / Presentazione** → "Quali macro-sezioni/messaggi?"
- **Repository** → "Quali asset, e con quale tassonomia (brand/obiettivo/formato)?"

## Immagini
- Le immagini le fornisce il collega; in mancanza, si attinge a `Brand Identity/.../06. IMG DATABASE`.
- Dove manca un'immagine, inserisci uno **slot con caricamento** (`ds-kit/image-slot.js`).
- Trattamento brand (gradiente Bluette / pixel) proposto caso per caso, mai forzato.
- Icone: sempre dalla libreria DS, mai casuali o emoji.

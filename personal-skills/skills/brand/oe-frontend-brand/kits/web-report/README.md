# Kit — Web report

Scaffold per un report one-page HTML (rif.: Minireport Lombardia).

## Come si compila
1. Copia la cartella `kits/web-report/` nel progetto, insieme a `ds-kit/`.
2. Rinomina `content.example.js` in `content.js` e riempi le sezioni.
   Tipi: `text`, `accordion`, `callout`, `figure-flourish`, `figure-chart`. Ogni sezione ha un `id` (per la TOC).
3. Imposta `brand: "oe"` oppure `"civiqa"` (Civiqa richiede l'overlay del DS).
4. Footer: già **analisi** (con CONDIZIONI D'USO) e INLINE (non usare fetch).
5. Esegui i check in `references/checks.md`, poi apri `template.html` nel browser.

## Carattere (regola dell'archetipo) — vedi spec §5.1
- **Testi VERBATIM** dal documento fonte: nessuna parafrasi, nessun riordino, nessuna sintesi.
- **Statico → interattivo**: il report è testo statico per natura; l'HTML aggiunge interattività —
  **accordion** per i testi lunghi, **TOC scroll-spy**, **hover** su callout e figure. Sentiti libero
  di proporre UI utile alla lettura, senza alterare i testi.
- I contenuti tabellari/matrice → tabella, non card.

## Flourish (mappe/grafici)
- Usa il tipo `figure-flourish` con `flourishId: "visualisation/ID"`: il kit genera l'embed + didascalia.
- Lo script `embed.js` è incluso **una sola volta** in fondo al body — NON aggiungerne altri.
- ⚠️ **Richiede internet**: gli embed Flourish caricano da `public.flourish.studio`. Un report con
  Flourish non è offline al 100%. Per offline totale, esportare la viz come immagine e usare uno slot.

## Chart.js interattivi
- Usa il tipo `figure-chart` per grafici interattivi Chart.js:
  ```js
  { tipo:"figure-chart", id:"grafico1", titolo:"Titolo grafico", sottotitolo:"Nota metodologica",
    didascalia:"Figura 1 — Didascalia.",
    chart:{ tipo:"bar", labels:["A","B","C"], serie:[{nome:"Serie 1",dati:[10,20,30]}], suffix:"%" } }
  ```
- `chart.tipo`: qualsiasi tipo Chart.js (`bar`, `line`, `pie`, …). Default: `bar`.
- `chart.serie`: array di `{nome, dati}`. I colori vengono assegnati automaticamente dalla palette OE.
- `chart.suffix`: suffisso opzionale nei tooltip e sull'asse Y (es. `"%"`, `"€"`).
- Le sezioni `figure-chart` (e `figure-flourish`) sono escluse dalla TOC automaticamente.

## Hero
- **Immagine di background** (consigliata): imposta `heroImage` nel content (percorso immagine). Il kit
  applica in automatico l'overlay gradiente Bluette per la leggibilità del testo. Vuoto = Bluette pieno.
- **Altezza above-the-fold**: la hero è dimensionata (`clamp(420px,68vh,680px)`) per stare **tutta nello
  schermo su un 14"**, lasciando intravedere l'inizio dei contenuti. Niente hero a tutta pagina nei report.

## Immagini
Per immagini di contenuto usa `<image-slot id="..." shape="rect" fit="cover">`. Icone dalla libreria DS.

# Kit — Analisi one-page

Scaffold per un'analisi data-driven (rif. Progetto Eni).

## Come si compila
1. Copia l'intera cartella `kits/analisi-one-page/` nella cartella del nuovo progetto, insieme a `ds-kit/`.
2. Riempi `data.example.js` (rinominalo `data.js`) coi dati reali: titolo, pretitolo, KPI, grafici.
3. Aggiungi le sezioni di testo/analisi alternando `.s-light` / `.s-grey` (mai due uguali consecutive).
4. Footer: già impostato su `footer-analisi.html`.
5. Esegui i check in `references/checks.md`, poi apri `template.html` nel browser.

## Note
- I grafici usano Chart.js + `chart-preset.js` (colori e font on-brand).
- Per le immagini mancanti usa gli slot di `image-slot.js`.
- Carattere: il dato prima di tutto, testo di supporto essenziale.

---

> `image-slot.js` usa un file di stato opzionale `.image-slots.state.json` (sidecar); se assente, gli slot funzionano comunque senza persistenza.

# Kit — Dashboard

Scaffold per una dashboard HTML interattiva on-brand (net-new).

## Come si compila
1. Copia la cartella `kits/dashboard/` nel progetto, insieme a `ds-kit/`.
2. In `data.example.js` (rinomina in `data.js`) metti il tuo **dataset di righe**, la definizione del
   **filtro** (campo + opzioni), i **KPI** (count/avg/sum), i **grafici** (campo) e le colonne tabella.
3. `brand: "oe"` oppure `"civiqa"` (Civiqa richiede l'overlay del DS).
4. Apri `index.html`: i filtri ricalcolano KPI, grafici e tabella in tempo reale; le intestazioni
   tabella ordinano i dati.

## Carattere (spec §5.1)
- **Scansione rapida, zero fronzoli**: numeri e grafici leggibili a colpo d'occhio.
- È l'UNICO tipo che può usare **font < 16px** (qui 14-15px) per densità.
- KPI e pannelli **senza bordo** (superficie + ombra). Filtro attivo in Bluette (mai nero).

## Dati e grafici
- I grafici sono **Chart.js** (colori dalla palette OE). Richiede internet per Chart.js da CDN.
- KPI calcolati dalle righe filtrate (`count`/`avg`/`sum`). Formattazione numeri IT via `OE.formatNumber`.

## Footer
Footer **slim** (barra copyright + policy), adatto al contesto app — non la tagline marketing.

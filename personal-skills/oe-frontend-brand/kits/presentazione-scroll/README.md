# Kit — Presentazione a scroll

Scaffold per una presentazione narrativa a scorrimento (rif. di contenuto: Accade investor).

## Come si compila
1. Copia la cartella `kits/presentazione-scroll/` nel progetto, insieme a `ds-kit/`.
2. Rinomina `content.example.js` in `content.js` e riempi le sezioni.
   Tipi di sezione: `hero`, `statement`, `cards`, `primary` (sfondo Bluette pieno), `cta`, `comparison` (2 colonne a confronto, ogni colonna: tag, titolo, testo, meta[]), `table` (tabella/matrice: colonne[], righe[][]), `roadmap` (lane: lane1 + moduli[] con nome/data/messaggio/tassello).
3. Imposta `brand: "oe"` oppure `"civiqa"` (Civiqa richiede l'overlay del DS, in arrivo).
4. Footer: già standard e INLINE nel template (non usare mai fetch).
5. Esegui i check in `references/checks.md`, poi apri `template.html` nel browser.

## Carattere (regola dell'archetipo) — vedi spec §5.1
- **Linguaggio sintetico**: frasi brevi e ad alto impatto, non prosa lunga da sito.
- **Una idea chiave per sezione.** Se i contenuti sono lunghi → sintetizza e schematizza (bullet, numeri, statement).
- **Più respiro**: ogni sezione è una "slide" a tutta altezza (min-height:100vh).
- **Gerarchia forte**: pretitolo (chip lime) + titolo grande (Hedvig) + 1-2 frasi o pochi bullet.
- **Check dedicato**: se una sezione ha troppo testo corrente, segnala e proponi la sintesi.
- I contenuti tabellari/matrice (confronti multi-dimensione, schemi a lane) vanno preservati come `table`/`roadmap`, NON frammentati in card: la sintesi è sul linguaggio, non sulla struttura dati.
- **Sembra una presentazione, ma è web**: testi sintetici ed essenziali (deve *sembrare* una presentazione) MA sfrutta l'interattività del web (hover, animazioni leggere, tabelle interattive). L'HTML serve proprio a un ambiente sintetico tipo-presentazione con navigazione più interattiva — non una replica statica delle slide.

## Immagini
Per immagini di sezione usa `<image-slot id="..." shape="rect" fit="cover" ...>` (spigolo vivo).
Le icone vengono dalla libreria DS, mai emoji.

## Note
- Nessun grafico (archetipo narrativo). Per dati/grafici usare l'archetipo Analisi o Dashboard.
- La dot-nav a destra evidenzia la sezione attiva (IntersectionObserver).

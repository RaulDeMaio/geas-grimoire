# Kit — Minisito verticale (multi-pagina)

Scaffold per un minisito on-brand multi-pagina (rif.: Difesa & Aerospazio).

## Come si compila
1. Copia la cartella `kits/minisito-verticale/` nel progetto, insieme a `ds-kit/`.
2. In `content.js` definisci `nav` (le voci di menu) e `pagine` (ogni chiave = nome file HTML).
   Tipi di sezione: `hero-home`, `hero-section`, `info-stats`, `cards`, `text`, `cta-banner`.
3. Per ogni pagina nuova: duplica `approfondimento.html`, rinominalo come la chiave (es. `servizi.html`),
   cambia la riga finale in `renderPage('servizi')`, e aggiungi la voce in `nav` + la pagina in `pagine`.
4. `brand: "oe"` oppure `"civiqa"` (Civiqa richiede l'overlay del DS).
5. Footer **standard** e INLINE (non usare fetch). Nav e footer sono iniettati da `render.js`.
6. Esegui i check in `references/checks.md`, poi apri `index.html` nel browser e naviga.

## Carattere (spec §5.1)
- **Editoriale persuasivo**, ritmo da landing; ogni sezione un messaggio chiaro.
- Sfondi alternati automaticamente (light/grey); CTA nella forma "arrow tile + label".

## Hero e immagini
- `hero-home` / `hero-section` accettano `bgImage` (overlay Bluette automatico).
- Per immagini di contenuto usa `<image-slot id="..." shape="rect" fit="cover">`. Icone dalla libreria DS.

## Multi-pagina
- La nav evidenzia la pagina corrente. I link tra pagine sono relativi (es. `approfondimento.html`).
- Tutto il sito condivide `content.js`, `render.js`, `site.css`, `ds-kit/`.

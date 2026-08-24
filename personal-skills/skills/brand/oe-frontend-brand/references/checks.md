# Check automatici — eseguire PRIMA di consegnare

Esegui mentalmente (o via lint) ogni controllo. Se uno fallisce, correggi e ripeti.

- [ ] **a) Hedvig solo per H1 e H2.** Da H3 in giù → Atkinson Hyperlegible Next.
- [ ] **b) Stile CHIP corretto** (pretitolo): Atkinson Mono, UPPERCASE, box lime (`.oe-eyebrow`).
- [ ] **c) Rapporto pretitolo → titolo:** PRETITOLO maiuscolo / Titolo sentence case (prima maiuscola).
- [ ] **d) Call To Action corretta:** forma "arrow tile + label", 4px gap, sfondo condiviso.
- [ ] **e) Mai sotto 16px** per tipi diversi da Dashboard, salvo stretta necessità.
- [ ] **f) Carattere dell'archetipo rispettato** (vedi spec §5.1). Presentazione a scroll: sezioni
      sintetiche, una idea per sezione; se troppo testo corrente → segnalare e proporre la sintesi.
- [ ] **g) Card senza bordo.** Le card non hanno bordo: usano superficie bianca + ombra DS (shadow-1), hover con elevazione (shadow-2). MAI bordo 1px sulle card.
- [ ] **h) Colori CTA (doppio controllo).** Il fill della CTA usa SOLO colori DS: lime (testo nero) come default; Bluette (testo bianco) su sfondi lime o chiari dove il lime non contrasta. MAI nero come fill della CTA.
- [ ] **i) Voci di menu/nav in sentence case** (solo prima lettera maiuscola), MAI tutto maiuscolo.
- [ ] **j) Allineamento contenuti.** Il contenuto della hero è allineato a sinistra, sulla stessa colonna di nav e sezioni (gutter coerente). Attenzione agli hero in `display:flex`: il wrapper interno deve avere `width:100%` o si centra e disallinea.
- [ ] **k) Dashboard — numeri neri.** Nelle dashboard i numeri (KPI) sono SEMPRE neri (`--oe-black`), non Bluette. (Vale per le dashboard; negli asset presentazionali i numeri possono restare Bluette.)

## Lint di aderenza (opzionale, se disponibile oxlint)
Il DS fornisce `_adherence.oxlintrc.json`. Per controllare un file generato:
`npx oxlint --config "<path-al-DS>/public/kit/_adherence.oxlintrc.json" <file.html>`

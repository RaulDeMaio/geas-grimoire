/* Modello contenuti per il Web report. Testi VERBATIM dal documento fonte: niente parafrasi.
   Tipi di sezione: "text" | "accordion" | "callout" | "figure-flourish" | "figure-chart".
   figure-chart: { chart:{ tipo, labels, serie:[{nome,dati}], suffix? } }
   Nei campi testo è ammesso HTML inline (es. <p>, <strong>, <em>). */
window.REPORT = {
  brand: "oe", // "oe" | "civiqa"
  eyebrow: "SCENARI · MAGGIO 2026",
  titolo: "Titolo del report",
  sottotitolo: "Sottotitolo del report, una o due righe.",
  heroImage: "", // opzionale: percorso immagine di background della hero (overlay Bluette automatico). Vuoto = sfondo Bluette pieno.
  sezioni: [
    { tipo:"text", id:"executive", pretitolo:"EXECUTIVE SUMMARY", titolo:"Sintesi",
      testo:"<p>Primo paragrafo verbatim del documento.</p><p>Secondo paragrafo verbatim.</p>" },
    { tipo:"accordion", id:"approfondimenti", pretitolo:"CAPITOLO 1", titolo:"Approfondimenti",
      blocchi:[
        { h:"Perché un indice", body:"<p>Testo lungo verbatim, collassato di default.</p>" },
        { h:"La dinamica osservata", body:"<p>Altro testo lungo verbatim.</p>" }
      ] },
    { tipo:"callout", id:"dato", testo:"<strong>Un dato chiave</strong> messo in evidenza in un box." },
    { tipo:"figure-flourish", id:"mappa1", flourishId:"visualisation/29074312",
      didascalia:"Figura 1 — Didascalia della mappa (embed Flourish)." },
    { tipo:"figure-chart", id:"grafico1", titolo:"Grafico 1 — Esempio Chart.js",
      sottotitolo:"NOTA METODOLOGICA",
      chart:{ tipo:"bar", labels:["Cat A","Cat B","Cat C"], serie:[{nome:"Valore",dati:[42,67,55]}], suffix:"%" },
      didascalia:"Figura 2 — Grafico interattivo generato con Chart.js." },
    { tipo:"text", id:"conclusioni", pretitolo:"NOTA", titolo:"Conclusioni",
      testo:"<p>Paragrafo conclusivo verbatim.</p>" }
  ]
};

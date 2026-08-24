/* Minisito verticale (multi-pagina). Carattere: editoriale persuasivo, ritmo da landing.
   Tipi di sezione: "hero-home" | "hero-section" | "info-stats" | "cards" | "text" | "cta-banner".
   La chiave di ogni pagina corrisponde al nome file (es. "index" -> index.html). */
window.SITE = {
  brand: "oe", // "oe" | "civiqa"
  titolo: "Minisito verticale — OpenEconomics",
  nav: [
    { label:"Home", page:"index.html" },
    { label:"Approfondimento", page:"approfondimento.html" }
  ],
  pagine: {
    "index": { titolo:"Home", sezioni:[
      { tipo:"hero-home", eyebrow:"VERTICALE", titolo:"Un titolo che apre con impatto", sottotitolo:"Sottotitolo della home, una o due righe essenziali.",
        cta:[ {label:"Scopri di più", href:"approfondimento.html"}, {label:"Contatti", href:"#"} ] },
      { tipo:"info-stats", eyebrow:"I NUMERI", titolo:"Dati in evidenza",
        stats:[ {num:"50", label:"Comuni analizzati"}, {num:"71%", label:"Occupazione massima"}, {num:"3", label:"Macroaree"} ] },
      { tipo:"cards", eyebrow:"TEMI", titolo:"Cosa offriamo", intro:"Tre aree di valore.",
        cards:[ {h3:"Primo tema", testo:"Frase breve e concreta."}, {h3:"Secondo tema", testo:"Frase breve e concreta."}, {h3:"Terzo tema", testo:"Frase breve e concreta."} ] },
      { tipo:"cta-banner", titolo:"Parliamo del tuo territorio", cta:{label:"Contattaci", href:"#"}, variant:"lime" }
    ]},
    "approfondimento": { titolo:"Approfondimento", sezioni:[
      { tipo:"hero-section", eyebrow:"APPROFONDIMENTO", titolo:"Titolo della pagina interna", sottotitolo:"Sottotitolo di contesto." },
      { tipo:"text", eyebrow:"CONTESTO", titolo:"Un sottotitolo analitico",
        testo:"<p>Paragrafo di contenuto. Su un minisito verticale il testo è editoriale e persuasivo, ma resta chiaro e scandito.</p>" },
      { tipo:"cards", eyebrow:"APPROCCIO", titolo:"Come lavoriamo",
        cards:[ {h3:"Fase 1", testo:"Descrizione breve."}, {h3:"Fase 2", testo:"Descrizione breve."} ] },
      { tipo:"cta-banner", titolo:"Torna alla home", cta:{label:"Home", href:"index.html"}, variant:"dark" }
    ]}
  }
};

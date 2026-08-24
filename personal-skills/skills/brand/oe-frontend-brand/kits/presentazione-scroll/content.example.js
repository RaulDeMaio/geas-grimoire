/* Modello contenuti per la Presentazione a scroll.
   Carattere: sintetico, UNA idea per sezione. Se i contenuti sono lunghi: sintetizza e schematizza.
   Tipi di sezione: "hero" | "statement" | "cards" | "primary" | "cta". */
window.PRESENTAZIONE = {
  brand: "oe", // "oe" | "civiqa"
  titolo: "Titolo della presentazione",
  sezioni: [
    { tipo: "hero",      pretitolo: "OPENECONOMICS", titolo: "Una frase che apre con impatto", intro: "Un sottotitolo breve, una sola riga." },
    { tipo: "statement", pretitolo: "PROBLEMA",       titolo: "Il nodo da sciogliere", intro: "Una o due frasi essenziali. Niente prosa lunga." },
    { tipo: "cards",     pretitolo: "CONCEPT",        titolo: "La nostra risposta",
      cards: [
        { h3: "Primo pilastro", testo: "Frase breve." },
        { h3: "Secondo pilastro", testo: "Frase breve." },
        { h3: "Terzo pilastro", testo: "Frase breve." }
      ] },
    { tipo: "primary",   pretitolo: "PERCHÉ ORA",     titolo: "Il momento è adesso",
      bullet: ["Punto chiave uno", "Punto chiave due", "Punto chiave tre"] },
    { tipo: "cta",       pretitolo: "PROSSIMO PASSO",  titolo: "Parliamone", intro: "Una call to action chiara.", cta: "Contattaci" }
  ]
};

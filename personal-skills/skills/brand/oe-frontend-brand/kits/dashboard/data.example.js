/* Dashboard — dataset filtrabile. I KPI e i grafici si calcolano dalle righe filtrate.
   Sostituisci righe/filtro/meta con i tuoi dati reali. */
window.DASH = {
  brand: "oe", // "oe" | "civiqa"
  titolo: "Dashboard territoriale",
  sottotitolo: "50 comuni intermedi · indicatori per macroarea",
  filtro: { label: "Gruppo", campo: "gruppo", opzioni: ["Tutte","Nord","Centro","Sud"], default: "Tutte" },
  righe: [
    { area:"Nord Est",  gruppo:"Nord",   occupazione:71, imprese:118, comuni:9 },
    { area:"Nord Ovest",gruppo:"Nord",   occupazione:69, imprese:112, comuni:11 },
    { area:"Centro",    gruppo:"Centro", occupazione:65, imprese:104, comuni:12 },
    { area:"Sud",       gruppo:"Sud",    occupazione:58, imprese:92,  comuni:11 },
    { area:"Isole",     gruppo:"Sud",    occupazione:56, imprese:88,  comuni:7 }
  ],
  // KPI calcolati: tipo "count" | "avg" | "sum" sul campo indicato
  kpi: [
    { label:"Aree", tipo:"count" },
    { label:"Occupazione media", tipo:"avg", campo:"occupazione", suffix:"%" },
    { label:"Comuni totali", tipo:"sum", campo:"comuni" },
    { label:"Indice imprese medio", tipo:"avg", campo:"imprese" }
  ],
  grafici: [
    { id:"g-occ", titolo:"Occupazione per area (%)", campo:"occupazione", suffix:"%" },
    { id:"g-imp", titolo:"Indice nuove imprese (base 100)", campo:"imprese" }
  ],
  tabella: { colonne:[ {k:"area",l:"Area"}, {k:"gruppo",l:"Gruppo"}, {k:"occupazione",l:"Occupazione %"}, {k:"imprese",l:"Indice imprese"}, {k:"comuni",l:"Comuni"} ] }
};

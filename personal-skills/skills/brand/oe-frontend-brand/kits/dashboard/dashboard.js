/* Dashboard: render di filtri, KPI, grafici e tabella; il filtro ricalcola tutto. */
(function(){
  if(!window.DASH) return;
  document.documentElement.setAttribute('data-brand', DASH.brand||'oe');
  const charts = {}; let sort = { k:null, dir:1 };

  function filteredRows(val){
    if(!val || val===DASH.filtro.default) return DASH.righe.slice();
    return DASH.righe.filter(r => r[DASH.filtro.campo]===val);
  }
  function calcKpi(rows, k){
    if(k.tipo==='count') return rows.length;
    const vals = rows.map(r=>r[k.campo]).filter(v=>typeof v==='number');
    if(!vals.length) return 0;
    if(k.tipo==='sum') return vals.reduce((a,b)=>a+b,0);
    if(k.tipo==='avg') return Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
    return 0;
  }
  function renderKpis(rows){
    document.getElementById('kpis').innerHTML = DASH.kpi.map(k=>{
      const v = calcKpi(rows,k);
      return `<div class="kpi"><div class="num">${OE.formatNumber(v)}${k.suffix||''}</div><div class="lab">${k.label}</div></div>`;
    }).join('');
  }
  function renderCharts(rows){
    DASH.grafici.forEach(g=>{
      const c = document.getElementById(g.id); if(!c||typeof Chart==='undefined') return;
      if(charts[g.id]) charts[g.id].destroy();
      charts[g.id] = new Chart(c, {
        type:'bar',
        data:{ labels: rows.map(r=>r.area), datasets:[{ label:g.titolo, data: rows.map(r=>r[g.campo]), backgroundColor: oeSeriesColor(0), borderColor: oeSeriesColor(0) }] },
        options:{ responsive:true, maintainAspectRatio:false,
          plugins:{ legend:{display:false}, tooltip:{callbacks:{label:(ctx)=>` ${ctx.parsed.y}${g.suffix||''}`}} },
          scales:{ y:{ ticks:{ callback:(v)=>v+(g.suffix||'') } } } }
      });
    });
  }
  function renderTable(rows){
    const cols = DASH.tabella.colonne;
    let data = rows.slice();
    if(sort.k){ data.sort((a,b)=>{ const x=a[sort.k],y=b[sort.k]; return (x>y?1:x<y?-1:0)*sort.dir; }); }
    document.getElementById('tbl').innerHTML =
      `<thead><tr>${cols.map(c=>`<th data-k="${c.k}">${c.l}${sort.k===c.k?(sort.dir>0?' ▲':' ▼'):''}</th>`).join('')}</tr></thead>`+
      `<tbody>${data.map(r=>`<tr>${cols.map(c=>`<td>${r[c.k]}</td>`).join('')}</tr>`).join('')}</tbody>`;
  }
  function renderAll(val){ const rows=filteredRows(val); renderKpis(rows); renderCharts(rows); renderTable(rows); }

  // topbar + filtri
  document.getElementById('dash-title').textContent = DASH.titolo||'Dashboard';
  document.getElementById('dash-sub').textContent = DASH.sottotitolo||'';
  let activeFilter = DASH.filtro.default;
  document.getElementById('filters').innerHTML =
    `<span class="flabel">${DASH.filtro.label}</span>`+
    DASH.filtro.opzioni.map(o=>`<button data-val="${o}"${o===activeFilter?' class="active"':''}>${o}</button>`).join('');
  document.getElementById('filters').addEventListener('click', e=>{
    const b=e.target.closest('button'); if(!b) return;
    activeFilter=b.dataset.val;
    document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active', x===b));
    renderAll(activeFilter);
  });
  // sort tabella
  document.getElementById('tbl').addEventListener('click', e=>{
    const th=e.target.closest('th'); if(!th) return;
    const k=th.dataset.k; sort = (sort.k===k)?{k,dir:-sort.dir}:{k,dir:1};
    renderTable(filteredRows(activeFilter));
  });
  // panel titoli
  DASH.grafici.forEach(g=>{ const el=document.getElementById('title-'+g.id); if(el) el.textContent=g.titolo; });

  if(typeof applyOEChartDefaults==='function') applyOEChartDefaults();
  renderAll(activeFilter);

  // footer slim
  document.querySelectorAll('[data-oe-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();

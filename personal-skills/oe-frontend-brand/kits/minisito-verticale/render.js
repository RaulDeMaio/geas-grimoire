/* renderPage(key): inietta nav (pagina corrente evidenziata), sezioni e footer della pagina. */
function renderPage(key){
  const page = (window.SITE && SITE.pagine && SITE.pagine[key]); if(!page) return;
  document.documentElement.setAttribute('data-brand', (SITE.brand||'oe'));
  if (page.titolo) document.title = page.titolo + ' — OpenEconomics';
  const current = key + '.html';
  // NAV
  document.getElementById('site-nav').innerHTML =
    `<div class="nav__inner"><a class="nav__logo" href="index.html"><img src="../../ds-kit/components/logo-black.svg" alt="OpenEconomics"></a>`+
    `<nav class="nav__links">${(SITE.nav||[]).map(n=>`<a href="${n.page}"${n.page===current?' class="active"':''}>${n.label}</a>`).join('')}</nav></div>`;
  // CTA helper
  const btn = (c, ghost) => `<a class="btn${ghost?' btn--ghost':''}" href="${c.href||'#'}"><span class="tile">→</span><span class="label">${c.label||''}</span></a>`;
  // SEZIONI
  const sec = (s, i) => {
    const eb = s.eyebrow?`<span class="eyebrow">${s.eyebrow}</span>`:'';
    const h2 = s.titolo?`<h2>${s.titolo}</h2>`:'';
    const intro = s.intro?`<p class="intro">${s.intro}</p>`:'';
    if (s.tipo==='hero-home') return `<header class="hero-home" data-bg="${s.bgImage||''}"><div class="wrap">${eb}<h1>${s.titolo||''}</h1>${s.sottotitolo?`<p class="intro">${s.sottotitolo}</p>`:''}<div class="hero-cta">${(s.cta||[]).map((c,ci)=>btn(c, ci>0)).join('')}</div></div></header>`;
    if (s.tipo==='hero-section') return `<header class="hero-sec" data-bg="${s.bgImage||''}"><div class="wrap">${eb}<h1>${s.titolo||''}</h1>${s.sottotitolo?`<p class="intro">${s.sottotitolo}</p>`:''}</div></header>`;
    const bg = (i%2===0)?'s-light':'s-grey';
    if (s.tipo==='info-stats') return `<section class="s ${bg}"><div class="wrap">${eb}${h2}<div class="stats">${(s.stats||[]).map(st=>`<div class="stat"><div class="num">${st.num}</div><div class="lab">${st.label}</div></div>`).join('')}</div></div></section>`;
    if (s.tipo==='cards') return `<section class="s ${bg}"><div class="wrap">${eb}${h2}${intro}<div class="cards">${(s.cards||[]).map(c=>{const inner=`<h3>${c.h3}</h3><p>${c.testo||''}</p>`; return c.href?`<a class="card" href="${c.href}">${inner}</a>`:`<div class="card">${inner}</div>`;}).join('')}</div></div></section>`;
    if (s.tipo==='text') return `<section class="s ${bg}"><div class="wrap">${eb}${h2}<div class="text-2col">${s.testo||''}</div></div></section>`;
    if (s.tipo==='cta-banner') return `<section class="banner banner--${s.variant||'lime'}"><div class="wrap banner__inner"><h2>${s.titolo||''}</h2>${s.cta?btn(s.cta):''}</div></section>`;
    return `<section class="s ${bg}"><div class="wrap">${eb}${h2}${intro}</div></section>`;
  };
  document.getElementById('page').innerHTML = (page.sezioni||[]).map(sec).join('');
  // background image degli hero (se presente)
  document.querySelectorAll('[data-bg]').forEach(el=>{ const v=el.getAttribute('data-bg'); if(v){ el.style.backgroundImage = `linear-gradient(rgba(39,0,101,.8) 0%, rgba(39,0,101,.45) 100%), url('${v}')`; } });
  // FOOTER standard INLINE (no fetch)
  document.getElementById('site-footer').innerHTML =
    `<footer class="site-footer"><div class="wrap">`+
    `<div style="display:flex;flex-direction:column;gap:var(--oe-space-4);border-bottom:1px solid rgba(255,255,255,.18);padding-bottom:var(--oe-space-6)"><img src="../../ds-kit/components/logo-white.svg" alt="OpenEconomics" style="height:38px"><p style="font-family:var(--oe-font-serif);font-size:20px;max-width:720px;margin:0;color:#fff">Enabling adaptation. Empowering impact. With platforms, strategy, and trust.</p></div>`+
    `<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--oe-space-3);padding-top:var(--oe-space-5);font-size:14px;color:rgba(255,255,255,.85)"><span>www.openeconomics.eu · Copyright © OpenEconomics Srl <span data-oe-year></span></span><span style="display:flex;gap:var(--oe-space-6)"><a href="#" style="text-decoration:none">Privacy policy</a><a href="#" style="text-decoration:none">Cookie policy</a></span></div>`+
    `</div></footer>`;
  document.querySelectorAll('[data-oe-year]').forEach(el=>el.textContent=new Date().getFullYear());
}

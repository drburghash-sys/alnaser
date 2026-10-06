const AS_OF="6 أكتوبر 2026";
const SOURCES={
  splTeam:"https://www.spl.com.sa/ar/teams/al-nassr/index?compSeason=858",
  splFixtures:"https://www.spl.com.sa/ar/fixtures-results?team=3495",
  splStats:"https://www.spl.com.sa/en/stats/index",
  saffSuper:"https://www.saff.com.sa/championship.php?id=55&season=all",
  afcHistory:"https://www.the-afc.com/en/club/fifa_club_world_cup/news/al_nassrs_unique_run_to_the_global_stage.html",
  saudipedia:"https://saudipedia.com/نادي-النصر"
};

let players=[],legends=[],trophies=[],fixtures=[],history=[];

function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]})}
function stat(v){return v==null?"—":v}
function fallbackMark(p){return p.no&&p.no!=="—"?esc(p.no):"★"}

async function loadData(){
  const paths=["current-players","legends","trophies","fixtures","history"];
  const rows=await Promise.all(paths.map(async function(name){
    const r=await fetch("./data/"+name+".json",{cache:"no-store"});
    if(!r.ok) throw new Error("تعذر تحميل "+name);
    return r.json();
  }));
  [players,legends,trophies,fixtures,history]=rows;
  renderAll();
}

function playerCard(p){
  const photo=p.img?'<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><div class="fallbackNo" style="display:none">'+fallbackMark(p)+'</div>':'<div class="fallbackNo">'+fallbackMark(p)+'</div>';
  const sub=p.tier?(esc(p.tier)+' · '+esc(p.era||p.position)):(esc(p.position)+' · '+esc(p.nation));
  return '<button class="playerCard" data-player="'+esc(p.id)+'"><div class="photo"><span class="shirtNo">'+fallbackMark(p)+'</span>'+photo+'</div><div class="caption"><strong>'+esc(p.name)+'</strong><small>'+sub+'</small></div></button>';
}
function renderFeatured(){document.getElementById("featured").innerHTML=players.slice(0,5).map(playerCard).join("")}
function renderSquad(filter){
  let list=filter==="legend"?legends.slice():players.filter(function(p){return filter==="all"||p.pos===filter});
  if(filter==="legend"){
    const order={"أسطورة":1,"رمز تاريخي":2,"جيل العالمية":3,"نجم تاريخي":4,"نجم حقبة المحترفين":5,"نجم عالمي سابق":6,"نجم حديث":7};
    list.sort(function(a,b){return (order[a.tier]||99)-(order[b.tier]||99)||a.name.localeCompare(b.name,"ar")});
    document.getElementById("playersMeta").textContent=legends.length+" اسمًا تاريخيًا";
  }else{
    document.getElementById("playersMeta").textContent=players.length+" لاعبًا في القاعدة الحالية";
  }
  document.getElementById("playersGrid").innerHTML=list.length?list.map(playerCard).join(""):'<div class="empty">لا توجد عناصر.</div>';
}
function renderTrophies(){
  document.getElementById("trophyList").innerHTML=trophies.map(function(t){return '<article class="trophyItem"><div class="cupCount"><b>'+t.count+'</b></div><div><strong>'+esc(t.title)+'</strong><p>'+esc(t.seasons)+'<br>'+esc(t.note)+'</p><a href="'+esc(t.source)+'" target="_blank" rel="noopener">المصدر ↗</a></div></article>'}).join("");
}
function renderFixtures(){
  document.getElementById("fixtures").innerHTML=fixtures.map(function(f){return '<div class="fixture"><div class="when"><b>'+esc(f.date)+'</b><small>'+esc(f.round)+'</small></div><div class="teams"><strong>'+esc(f.home)+' × '+esc(f.away)+'</strong><small>'+esc(f.where)+'</small></div><div class="tag">'+esc(f.state)+'</div></div>'}).join("");
}
function renderLeaders(){
  const list=players.filter(function(p){return p.matches!=null}).sort(function(a,b){return ((b.goals||0)+(b.assists||0))-((a.goals||0)+(a.assists||0))});
  document.getElementById("statLeaders").innerHTML=list.map(function(p){return '<button class="leader" data-player="'+esc(p.id)+'"><div class="miniNo">'+fallbackMark(p)+'</div><div><strong>'+esc(p.name)+'</strong><small>'+esc(p.position)+'</small></div><div class="metric"><b>'+stat(p.matches)+'</b><small>مباراة</small></div><div class="metric"><b>'+stat(p.goals)+'</b><small>هدف</small></div><div class="metric"><b>'+stat(p.assists)+'</b><small>صناعة</small></div></button>'}).join("");
}
function renderHistory(){document.getElementById("historyList").innerHTML=history.map(function(h){return '<article class="event"><b>'+esc(h.year)+'</b><strong>'+esc(h.title)+'</strong><small>'+esc(h.text)+'</small></article>'}).join("")}
function renderSources(){
  const links=[["صفحة النصر في رابطة الدوري",SOURCES.splTeam],["المباريات والنتائج",SOURCES.splFixtures],["مركز إحصائيات الدوري",SOURCES.splStats],["سجل السوبر السعودي",SOURCES.saffSuper],["تاريخ النصر في الاتحاد الآسيوي",SOURCES.afcHistory],["سعوديبيديا: نادي النصر",SOURCES.saudipedia]];
  document.getElementById("sourceLinks").innerHTML=links.map(function(x){return '<a href="'+x[1]+'" target="_blank" rel="noopener">'+esc(x[0])+' ↗</a>'}).join("");
}
function renderAll(){
  renderFeatured();renderSquad("all");renderTrophies();renderFixtures();renderLeaders();renderHistory();renderSources();
}
function go(id){
  document.querySelectorAll(".screen").forEach(function(s){s.classList.toggle("active",s.id===id)});
  document.querySelectorAll(".bottom button").forEach(function(b){b.classList.toggle("active",b.dataset.go===id)});
  window.scrollTo({top:0,behavior:"smooth"});
}
function findPlayer(id){return players.concat(legends).find(function(p){return p.id===id})}
function openPlayer(id){
  const p=findPlayer(id); if(!p)return;
  const photo=p.img?'<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'">':'<div class="fallbackNo">'+fallbackMark(p)+'</div>';
  const isLegend=!!p.tier;
  const stats=isLegend
    ?'<div class="detailStats"><div><b>'+esc(p.tier)+'</b><small>التصنيف</small></div><div><b>'+esc(p.era||"—")+'</b><small>الحقبة</small></div><div><b>'+esc(p.position)+'</b><small>المركز</small></div></div>'
    :'<div class="detailStats"><div><b>'+stat(p.matches)+'</b><small>مباراة</small></div><div><b>'+stat(p.goals)+'</b><small>هدف</small></div><div><b>'+stat(p.assists)+'</b><small>صناعة</small></div></div>';
  document.getElementById("playerDetail").innerHTML='<div class="detailTop"><div class="detailPhoto">'+photo+'</div><div class="detailText"><span class="pill dark">'+(isLegend?esc(p.tier):"#"+esc(p.no))+'</span><h2>'+esc(p.name)+'</h2><p>'+esc(p.position)+' · '+esc(p.nation)+'</p></div></div>'+stats+'<p class="detailNote">'+esc(p.note)+(isLegend?'<br><br>هذا القسم يفرّق بين «أسطورة»، «رمز تاريخي»، «جيل العالمية» و«نجم حقبة» حتى لا نضع كل اللاعبين في تصنيف واحد.':'<br><br>الأرقام المعروضة تخص دوري روشن 2026/27 عندما تتوفر بيانات موثقة. علامة — تعني أننا لم نثبت الرقم بعد، وليست صفرًا.')+'</p><a class="linkBtn" href="'+esc(p.source)+'" target="_blank" rel="noopener">فتح المصدر ↗</a>';
  document.getElementById("playerModal").classList.add("open");
  document.getElementById("playerModal").setAttribute("aria-hidden","false");
}
function closeModal(id){const m=document.getElementById(id);m.classList.remove("open");m.setAttribute("aria-hidden","true")}
function search(term){
  const q=term.trim().toLowerCase(); if(!q){go("home");return}
  const rows=[];
  players.concat(legends).forEach(function(p){const txt=[p.name,p.no,p.position,p.nation,p.note,p.tier,p.era].join(" ").toLowerCase();if(txt.includes(q))rows.push({type:p.tier||"لاعب حالي",title:p.name,desc:(p.tier?((p.era||"")+" · "):("#"+p.no+" · "))+p.position,id:p.id})});
  trophies.forEach(function(t){const txt=[t.title,t.seasons,t.note].join(" ").toLowerCase();if(txt.includes(q))rows.push({type:"بطولة",title:t.title,desc:t.seasons})});
  history.forEach(function(h){const txt=[h.year,h.title,h.text].join(" ").toLowerCase();if(txt.includes(q))rows.push({type:"تاريخ",title:h.year+" · "+h.title,desc:h.text})});
  fixtures.forEach(function(f){const txt=[f.date,f.round,f.home,f.away,f.where].join(" ").toLowerCase();if(txt.includes(q))rows.push({type:"مباراة",title:f.home+" × "+f.away,desc:f.date+" · "+f.round})});
  document.getElementById("searchCount").textContent=rows.length+" نتيجة";
  document.getElementById("searchResults").innerHTML=rows.length?rows.map(function(r){return '<button class="searchRow" '+(r.id?'data-player="'+esc(r.id)+'"':'')+'><b>'+esc(r.title)+'</b><small>'+esc(r.type)+' · '+esc(r.desc)+'</small></button>'}).join(""):'<div class="empty">لم أجد نتيجة. جرّب اسم لاعب أو بطولة أو سنة.</div>';
  go("search");
}

document.addEventListener("click",function(e){
  const nav=e.target.closest("[data-go]"); if(nav){go(nav.dataset.go);return}
  const pl=e.target.closest("[data-player]"); if(pl){openPlayer(pl.dataset.player);return}
  if(e.target.closest("[data-close-modal]")){closeModal("playerModal");return}
  if(e.target.closest("[data-close-info]")){closeModal("infoModal");return}
});
document.getElementById("infoBtn").addEventListener("click",function(){document.getElementById("infoModal").classList.add("open");document.getElementById("infoModal").setAttribute("aria-hidden","false")});
document.getElementById("q").addEventListener("input",function(){search(this.value)});
document.getElementById("squadFilter").addEventListener("click",function(e){const b=e.target.closest("[data-filter]");if(!b)return;this.querySelectorAll("button").forEach(function(x){x.classList.toggle("active",x===b)});renderSquad(b.dataset.filter)});

loadData().catch(function(err){
  console.error(err);
  document.getElementById("playersGrid").innerHTML='<div class="empty">تعذر تحميل قاعدة البيانات. أعد تحميل الصفحة.</div>';
});
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js")})}

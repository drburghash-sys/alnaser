const AS_OF="6 أكتوبر 2026";
const SOURCES={
  splTeam:"https://www.spl.com.sa/ar/teams/al-nassr/index?compSeason=858",
  splFixtures:"https://www.spl.com.sa/ar/fixtures-results?team=3495",
  splStats:"https://www.spl.com.sa/en/stats/index",
  saffSuper:"https://www.saff.com.sa/championship.php?id=55&season=all",
  afcHistory:"https://www.the-afc.com/en/club/fifa_club_world_cup/news/al_nassrs_unique_run_to_the_global_stage.html"
};

const images={
ronaldo:"https://media-sdp.spl.com.sa/playerImages/47d9987fd5044e0dba6c6c1df7d6cfa8/3677a75aaa514e43b2840e7fa367c91d/94263b19841944c38cb20892b176c862/home/2a3c905c404b4c7bb51c9d0f367415dc_middle.webp",
angelo:"https://media-sdp.spl.com.sa/playerImages/47d9987fd5044e0dba6c6c1df7d6cfa8/3677a75aaa514e43b2840e7fa367c91d/94263b19841944c38cb20892b176c862/home/e78c173e573346b29a4e560a27259557_middle.webp",
felix:"https://media-sdp.spl.com.sa/playerImages/47d9987fd5044e0dba6c6c1df7d6cfa8/3677a75aaa514e43b2840e7fa367c91d/94263b19841944c38cb20892b176c862/home/0ec8b22b893949ffac7926ea5f9ed7d6_middle.webp",
coman:"https://media-sdp.spl.com.sa/playerImages/47d9987fd5044e0dba6c6c1df7d6cfa8/3677a75aaa514e43b2840e7fa367c91d/94263b19841944c38cb20892b176c862/home/6eef1d647c264da6996887062e0e4ccf_middle.webp",
costa:"https://media-sdp.spl.com.sa/playerImages/47d9987fd5044e0dba6c6c1df7d6cfa8/3677a75aaa514e43b2840e7fa367c91d/94263b19841944c38cb20892b176c862/home/0a013f5fa23841a7a6f78f216f861ea4_middle.webp"
};

const players=[
{id:"ronaldo",name:"كريستيانو رونالدو",no:"7",pos:"FW",position:"مهاجم",nation:"البرتغال",img:images.ronaldo,matches:6,goals:3,assists:0,note:"قائد الفريق. أصبح في أغسطس 2026 الهداف التاريخي للنصر في حقبة دوري المحترفين السعودي بحسب رابطة الدوري.",source:"https://www.spl.com.sa/en/players/cristiano-ronaldo/index"},
{id:"felix",name:"جواو فيليكس",no:"79",pos:"FW",position:"مهاجم",nation:"البرتغال",img:images.felix,matches:6,goals:2,assists:2,note:"أفضل لاعب في دوري روشن 2025/26 بعد موسم أول سجل فيه 20 هدفًا وصنع 13.",source:"https://www.spl.com.sa/en/players/joao-felix"},
{id:"angelo",name:"أنجيلو غابرييل",no:"20",pos:"FW",position:"جناح",nation:"البرازيل",img:images.angelo,matches:7,goals:3,assists:2,note:"بدأ موسم 2026/27 بصورة قوية وسجل في الجولة الافتتاحية أمام الفتح.",source:"https://www.spl.com.sa/en/players/angelo-gabriel"},
{id:"mane",name:"ساديو ماني",no:"10",pos:"FW",position:"مهاجم",nation:"السنغال",img:"",matches:7,goals:2,assists:2,note:"عنصر هجومي رئيسي وبطل الدوري مع النصر في 2025/26.",source:"https://www.spl.com.sa/en/players/sadio-mane"},
{id:"coman",name:"كينغسلي كومان",no:"21",pos:"FW",position:"جناح",nation:"فرنسا",img:images.coman,matches:null,goals:null,assists:null,note:"انضم من بايرن ميونخ في 2025 وواصل مع الفريق في موسم 2026/27.",source:"https://www.spl.com.sa/en/players/kingsley-coman"},
{id:"hamdan",name:"عبدالله الحمدان",no:"9",pos:"FW",position:"مهاجم",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"ضمن قائمة الفريق الحالية في رابطة الدوري.",source:SOURCES.splTeam},
{id:"ghareeb",name:"عبدالرحمن غريب",no:"29",pos:"FW",position:"جناح",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"جدد عقده مع النصر حتى 2028 وفق رابطة الدوري.",source:"https://www.spl.com.sa/ar/news/%D8%A7%D9%84%D8%B9%D9%82%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%AC%D8%AF%D8%AF%D8%A9-%D9%81%D9%8A-%D8%AF%D9%88%D8%B1%D9%8A-%D8%B1%D9%88%D8%B4%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A"},
{id:"costa",name:"سامو كوستا",no:"11",pos:"MF",position:"وسط",nation:"البرتغال",img:images.costa,matches:null,goals:null,assists:null,note:"أول صفقات صيف 2026؛ انضم من ريال مايوركا وسجل في ظهوره الدوري الأول.",source:"https://www.spl.com.sa/en/news/this-is-my-new-family-i-will-give-my-life-for-this-samu-costa-on-that-al-nassr-debut"},
{id:"khaibari",name:"عبدالله الخيبري",no:"17",pos:"MF",position:"وسط",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"ضمن قائمة الفريق الحالية.",source:SOURCES.splTeam},
{id:"yahya",name:"أيمن يحيى",no:"23",pos:"MF",position:"وسط",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"ضمن عناصر الفريق الحالية وشارك في تشكيلات النصر خلال الموسم.",source:SOURCES.splTeam},
{id:"simakan",name:"محمد سيماكان",no:"3",pos:"DF",position:"مدافع",nation:"فرنسا",img:"",matches:null,goals:null,assists:null,note:"قلب دفاع ضمن القوام الحالي للنصر.",source:SOURCES.splTeam},
{id:"inigo",name:"إينيغو مارتينيز",no:"26",pos:"DF",position:"مدافع",nation:"إسبانيا",img:"",matches:null,goals:null,assists:null,note:"انضم إلى النصر من برشلونة في صيف 2025.",source:"https://www.spl.com.sa/en/news/2025-26-rsl-transfer-watch"},
{id:"amri",name:"عبدالإله العمري",no:"5",pos:"DF",position:"مدافع",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"عاد إلى النصر بعد نهاية إعارته في موسم 2025/26.",source:SOURCES.splTeam},
{id:"ghannam",name:"سلطان الغنام",no:"2",pos:"DF",position:"ظهير",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"من عناصر الفريق الحالية في مركز الظهير.",source:SOURCES.splTeam},
{id:"bento",name:"بينتو ماتيوس",no:"24",pos:"GK",position:"حارس مرمى",nation:"البرازيل",img:"",matches:null,goals:null,assists:null,note:"حارس مرمى ضمن قائمة النصر الحالية.",source:SOURCES.splTeam},
{id:"najjar",name:"راغد النجار",no:"36",pos:"GK",position:"حارس مرمى",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"حارس مرمى ضمن قائمة الفريق.",source:SOURCES.splTeam}
];

const legends=[
{id:"majed",name:"ماجد عبدالله",no:"9",pos:"legend",position:"مهاجم",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"أحد أهم رموز النصر والكرة السعودية عبر التاريخ.",source:SOURCES.afcHistory},
{id:"hurifi",name:"فهد الهريفي",no:"8",pos:"legend",position:"وسط",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"من نجوم الجيل الذهبي الذي قاد النصر إلى المجد الآسيوي.",source:SOURCES.afcHistory},
{id:"muhaysin",name:"محيسن الجمعان",no:"11",pos:"legend",position:"هجوم",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"اسم بارز من أجيال النصر التاريخية.",source:SOURCES.afcHistory},
{id:"sahlawi",name:"محمد السهلاوي",no:"10",pos:"legend",position:"مهاجم",nation:"السعودية",img:"",matches:null,goals:null,assists:null,note:"من أبرز هدافي النصر في حقبة دوري المحترفين.",source:SOURCES.splTeam}
];

const trophies=[
{title:"الدوري السعودي",count:9,seasons:"1980، 1981، 1989، 1994، 1995، 2014، 2015، 2019، 2026",note:"مصدر AFC يوثق 8 ألقاب حتى 2019، ثم توج النصر بلقب 2025/26.",source:"https://assets.the-afc.com/migration/2/0/2019%20programme%20QF%20%28Japan%29.pdf"},
{title:"كأس الملك",count:6,seasons:"1974، 1976، 1981، 1986، 1987، 1990",note:"السجل التاريخي الوارد في دليل الاتحاد الآسيوي.",source:"https://assets.the-afc.com/migration/2/0/2019%20programme%20QF%20%28Japan%29.pdf"},
{title:"كأس السوبر السعودي",count:2,seasons:"2019، 2020",note:"الاتحاد السعودي يوثق تتويج النصر بنسختين متتاليتين.",source:SOURCES.saffSuper},
{title:"كأس الكؤوس الآسيوية",count:1,seasons:"1997/98",note:"توج النصر بالبطولة بعد فوزه على سوون سامسونغ في النهائي.",source:SOURCES.afcHistory},
{title:"السوبر الآسيوي",count:1,seasons:"1998",note:"التتويج الذي منحه بطاقة كأس العالم للأندية 2000.",source:SOURCES.afcHistory},
{title:"كأس الملك سلمان للأندية العربية",count:1,seasons:"2023",note:"بطولة عربية بارزة في الحقبة الحديثة.",source:"https://www.spl.com.sa/en/teams/al-nassr/index"}
];

const fixtures=[
{date:"9 أكتوبر",round:"الجولة 8",home:"النصر",away:"الدرعية",where:"الأول بارك",state:"قادمة"},
{date:"15 أكتوبر",round:"الجولة 9",home:"الأهلي",away:"النصر",where:"خارج الأرض",state:"قادمة"},
{date:"20 أكتوبر",round:"الجولة 10",home:"النصر",away:"نيوم",where:"الأول بارك",state:"قادمة"},
{date:"23 أكتوبر",round:"الجولة 11",home:"الفيصلي",away:"النصر",where:"خارج الأرض",state:"قادمة"}
];

const history=[
{year:"1955",title:"التأسيس",text:"تأسس نادي النصر في الرياض؛ وهو التاريخ الذي تعتمده صفحة النادي في رابطة الدوري السعودي."},
{year:"1995",title:"وصيف آسيا",text:"بلغ نهائي بطولة الأندية الآسيوية أبطال الدوري."},
{year:"1998",title:"المجد الآسيوي",text:"حقق كأس الكؤوس الآسيوية ثم كأس السوبر الآسيوي."},
{year:"2000",title:"العالمي",text:"شارك في النسخة الأولى من كأس العالم للأندية ممثلًا لآسيا."},
{year:"2014–2015",title:"دوريان متتاليان",text:"عاد النصر إلى قمة الدوري السعودي وتوج موسمين متتاليين."},
{year:"2019",title:"اللقب الثامن",text:"توج بدوري المحترفين 2018/19."},
{year:"2023",title:"لقب عربي",text:"حقق كأس الملك سلمان للأندية العربية."},
{year:"2026",title:"بطل الدوري من جديد",text:"توج بدوري روشن 2025/26 بعد غياب سبع سنوات عن لقب الدوري."}
];

function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]})}
function stat(v){return v==null?"—":v}
function playerCard(p){
  const photo=p.img?'<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><div class="fallbackNo" style="display:none">'+esc(p.no)+'</div>':'<div class="fallbackNo">'+esc(p.no)+'</div>';
  return '<button class="playerCard" data-player="'+esc(p.id)+'"><div class="photo"><span class="shirtNo">'+esc(p.no)+'</span>'+photo+'</div><div class="caption"><strong>'+esc(p.name)+'</strong><small>'+esc(p.position)+' · '+esc(p.nation)+'</small></div></button>';
}
function renderFeatured(){document.getElementById("featured").innerHTML=players.slice(0,5).map(playerCard).join("")}
function renderSquad(filter){
  let list=filter==="legend"?legends.slice():players.filter(function(p){return filter==="all"||p.pos===filter});
  document.getElementById("playersGrid").innerHTML=list.length?list.map(playerCard).join(""):'<div class="empty">لا توجد عناصر.</div>';
}
function renderTrophies(){
  document.getElementById("trophyList").innerHTML=trophies.map(function(t){return '<article class="trophyItem"><div class="cupCount"><b>'+t.count+'</b></div><div><strong>'+esc(t.title)+'</strong><p>'+esc(t.seasons)+'<br>'+esc(t.note)+'</p><a href="'+esc(t.source)+'" target="_blank" rel="noopener">المصدر ↗</a></div></article>'}).join("");
}
function renderFixtures(){
  document.getElementById("fixtures").innerHTML=fixtures.map(function(f){return '<div class="fixture"><div class="when"><b>'+esc(f.date)+'</b><small>'+esc(f.round)+'</small></div><div class="teams"><strong>'+esc(f.home)+' × '+esc(f.away)+'</strong><small>'+esc(f.where)+'</small></div><div class="tag">'+esc(f.state)+'</div></div>'}).join("");
}
function renderLeaders(){
  const list=players.filter(function(p){return p.matches!=null}).sort(function(a,b){return (b.goals+b.assists)-(a.goals+a.assists)});
  document.getElementById("statLeaders").innerHTML=list.map(function(p){return '<button class="leader" data-player="'+esc(p.id)+'"><div class="miniNo">'+esc(p.no)+'</div><div><strong>'+esc(p.name)+'</strong><small>'+esc(p.position)+'</small></div><div class="metric"><b>'+stat(p.matches)+'</b><small>مباراة</small></div><div class="metric"><b>'+stat(p.goals)+'</b><small>هدف</small></div><div class="metric"><b>'+stat(p.assists)+'</b><small>صناعة</small></div></button>'}).join("");
}
function renderHistory(){document.getElementById("historyList").innerHTML=history.map(function(h){return '<article class="event"><b>'+esc(h.year)+'</b><strong>'+esc(h.title)+'</strong><small>'+esc(h.text)+'</small></article>'}).join("")}
function go(id){
  document.querySelectorAll(".screen").forEach(function(s){s.classList.toggle("active",s.id===id)});
  document.querySelectorAll(".bottom button").forEach(function(b){b.classList.toggle("active",b.dataset.go===id)});
  window.scrollTo({top:0,behavior:"smooth"});
}
function findPlayer(id){return players.concat(legends).find(function(p){return p.id===id})}
function openPlayer(id){
  const p=findPlayer(id); if(!p)return;
  const photo=p.img?'<img src="'+esc(p.img)+'" alt="'+esc(p.name)+'">':'<div class="fallbackNo">'+esc(p.no)+'</div>';
  document.getElementById("playerDetail").innerHTML='<div class="detailTop"><div class="detailPhoto">'+photo+'</div><div class="detailText"><span class="pill dark">#'+esc(p.no)+'</span><h2>'+esc(p.name)+'</h2><p>'+esc(p.position)+' · '+esc(p.nation)+'</p></div></div><div class="detailStats"><div><b>'+stat(p.matches)+'</b><small>مباراة</small></div><div><b>'+stat(p.goals)+'</b><small>هدف</small></div><div><b>'+stat(p.assists)+'</b><small>صناعة</small></div></div><p class="detailNote">'+esc(p.note)+'<br><br>الأرقام المعروضة تخص دوري روشن 2026/27 عندما تتوفر بيانات موثقة. علامة — تعني أننا لم نثبت الرقم بعد، وليست صفرًا.</p><a class="linkBtn" href="'+esc(p.source)+'" target="_blank" rel="noopener">فتح المصدر الرسمي ↗</a>';
  document.getElementById("playerModal").classList.add("open");
  document.getElementById("playerModal").setAttribute("aria-hidden","false");
}
function closeModal(id){const m=document.getElementById(id);m.classList.remove("open");m.setAttribute("aria-hidden","true")}
function renderSources(){
  const links=[["صفحة النصر في رابطة الدوري",SOURCES.splTeam],["المباريات والنتائج",SOURCES.splFixtures],["مركز إحصائيات الدوري",SOURCES.splStats],["سجل السوبر السعودي",SOURCES.saffSuper],["تاريخ النصر في الاتحاد الآسيوي",SOURCES.afcHistory]];
  document.getElementById("sourceLinks").innerHTML=links.map(function(x){return '<a href="'+x[1]+'" target="_blank" rel="noopener">'+esc(x[0])+' ↗</a>'}).join("");
}
function search(term){
  const q=term.trim().toLowerCase(); if(!q){go("home");return}
  const rows=[];
  players.concat(legends).forEach(function(p){const txt=[p.name,p.no,p.position,p.nation,p.note].join(" ").toLowerCase();if(txt.includes(q))rows.push({type:"لاعب",title:p.name,desc:"#"+p.no+" · "+p.position,id:p.id})});
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

renderFeatured();renderSquad("all");renderTrophies();renderFixtures();renderLeaders();renderHistory();renderSources();
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js")})}

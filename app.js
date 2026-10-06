const players=[
{name:"كريستيانو رونالدو",no:"7",role:"مهاجم",era:"العصر الحديث",note:"أحد أبرز نجوم النصر في الحقبة الحديثة.",tags:"رونالدو كريستيانو البرتغال 7 مهاجم"},
{name:"ماجد عبدالله",no:"9",role:"مهاجم",era:"أسطورة",note:"رمز تاريخي للنصر والكرة السعودية.",tags:"ماجد عبدالله 9 مهاجم اسطورة هداف"},
{name:"محمد السهلاوي",no:"10",role:"مهاجم",era:"نجم سابق",note:"من أبرز هدافي النصر في حقبة دوري المحترفين.",tags:"محمد السهلاوي 10 مهاجم هداف"},
{name:"فهد الهريفي",no:"8",role:"وسط",era:"أسطورة",note:"من أبرز نجوم خط الوسط في تاريخ النادي.",tags:"فهد الهريفي 8 وسط اسطورة"},
{name:"محيسن الجمعان",no:"11",role:"هجوم",era:"أسطورة",note:"اسم بارز في أجيال النصر التاريخية.",tags:"محيسن الجمعان 11 هجوم"}
];
const trophies=[
{title:"الدوري السعودي",years:"حقق النصر الدوري في عدة حقب، منها 1980 و1981 و1989 و1994 و1995 و2014 و2015 و2019.",note:"سيضاف لاحقًا سجل موسمي موثق بالكامل.",tags:"الدوري السعودي روشن 1980 1981 1989 1994 1995 2014 2015 2019"},
{title:"كأس الملك",years:"للنصر سجل تاريخي في كأس الملك عبر عدة أجيال.",note:"سنفصل كل نسخة ونتيجة النهائي في قاعدة البيانات.",tags:"كأس الملك بطولة"},
{title:"كأس ولي العهد",years:"حقق النصر البطولة في أكثر من حقبة.",note:"ستظهر السنوات والنهائيات بعد التوثيق النهائي.",tags:"كأس ولي العهد"},
{title:"كأس السوبر السعودي",years:"حقق النصر كأس السوبر في العصر الحديث.",note:"ستضاف تفاصيل المباريات والهدافين.",tags:"السوبر السعودي"},
{title:"كأس الكؤوس الآسيوية",years:"1998",note:"محطة آسيوية تاريخية للنادي.",tags:"آسيا 1998 كأس الكؤوس الاسيوية"},
{title:"السوبر الآسيوي",years:"1998",note:"تتويج آسيوي قاد إلى المشاركة العالمية.",tags:"السوبر الاسيوي آسيا 1998"},
{title:"كأس الملك سلمان للأندية العربية",years:"2023",note:"توج النصر بالبطولة العربية في 2023.",tags:"العربية كأس الملك سلمان 2023"}
];
const history=[
{year:"1955",title:"التأسيس",text:"بداية نادي النصر في مدينة الرياض."},
{year:"1998",title:"عام آسيوي",text:"التتويج بكأس الكؤوس الآسيوية والسوبر الآسيوي."},
{year:"2000",title:"العالمية",text:"شارك النصر في النسخة الأولى من كأس العالم للأندية."},
{year:"2014–2015",title:"عودة قوية للدوري",text:"توج النصر بالدوري في موسمين متتاليين."},
{year:"2019",title:"دوري جديد",text:"حقق النصر لقب الدوري في موسم 2018/19."},
{year:"2023",title:"البطولة العربية",text:"توج بكأس الملك سلمان للأندية العربية."}
];

function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]})}
function render(){
 const f=document.getElementById("featured");
 f.innerHTML=players.map(function(p){return '<article class="tile person"><div class="portrait">'+esc(p.no)+'</div><strong>'+esc(p.name)+'</strong><small>'+esc(p.role)+' · '+esc(p.era)+'</small></article>'}).join("");
 document.getElementById("playersList").innerHTML=players.map(function(p){return '<div class="row"><div><strong>#'+esc(p.no)+' '+esc(p.name)+'</strong><small>'+esc(p.role)+' · '+esc(p.era)+'<br>'+esc(p.note)+'</small></div><em>ملف اللاعب</em></div>'}).join("");
 document.getElementById("trophyList").innerHTML=trophies.map(function(t){return '<div class="row"><div><strong>'+esc(t.title)+'</strong><small>'+esc(t.years)+'<br>'+esc(t.note)+'</small></div><em>بطولة</em></div>'}).join("");
 document.getElementById("historyList").innerHTML=history.map(function(h){return '<article class="event"><b>'+esc(h.year)+'</b><strong>'+esc(h.title)+'</strong><small>'+esc(h.text)+'</small></article>'}).join("");
}
function go(id){
 document.querySelectorAll(".screen").forEach(function(x){x.classList.toggle("active",x.id===id)});
 document.querySelectorAll(".bottom button").forEach(function(x){x.classList.toggle("active",x.dataset.go===id)});
 window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",function(e){var b=e.target.closest("[data-go]");if(b)go(b.dataset.go)});
document.getElementById("q").addEventListener("input",function(){
 var s=this.value.trim().toLowerCase();
 if(!s){go("home");return}
 var corpus=[];
 players.forEach(function(x){corpus.push({type:"لاعب",title:x.name,desc:x.role+" · "+x.era+" — "+x.note,txt:[x.name,x.tags,x.note].join(" ")})});
 trophies.forEach(function(x){corpus.push({type:"بطولة",title:x.title,desc:x.years+" — "+x.note,txt:[x.title,x.years,x.tags,x.note].join(" ")})});
 history.forEach(function(x){corpus.push({type:"تاريخ",title:x.year+" · "+x.title,desc:x.text,txt:[x.year,x.title,x.text].join(" ")})});
 var out=corpus.filter(function(x){return x.txt.toLowerCase().includes(s)});
 document.getElementById("searchCount").textContent=out.length+" نتيجة";
 document.getElementById("searchResults").innerHTML=out.length?out.map(function(x){return '<div class="row"><div><strong>'+esc(x.title)+'</strong><small>'+esc(x.type)+' · '+esc(x.desc)+'</small></div></div>'}).join(""):'<div class="empty">لا توجد نتيجة. جرّب اسم لاعب أو بطولة أو سنة.</div>';
 go("search");
});
render();
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js")})}
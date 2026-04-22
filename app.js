// =================== DATA ===================
const EXERCISES = [
  // CHEST
  { name:"Bench Press",          muscle:"Chest",     icon:"🏋️", desc:"Flat barbell press for overall chest mass",             yt:"https://www.youtube.com/results?search_query=bench+press+form+tutorial" },
  { name:"Incline Dumbbell Press",muscle:"Chest",    icon:"💪", desc:"Upper chest focus with dumbbells on incline bench",    yt:"https://www.youtube.com/results?search_query=incline+dumbbell+press+tutorial" },
  { name:"Push Ups",             muscle:"Chest",     icon:"🔥", desc:"Bodyweight classic — chest, triceps, shoulders",       yt:"https://www.youtube.com/results?search_query=push+ups+proper+form" },
  { name:"Cable Flyes",          muscle:"Chest",     icon:"🔄", desc:"Cable crossover for chest peak contraction",           yt:"https://www.youtube.com/results?search_query=cable+flyes+tutorial" },
  // BACK
  { name:"Deadlift",             muscle:"Back",      icon:"⚡", desc:"King of all lifts — full posterior chain",             yt:"https://www.youtube.com/results?search_query=deadlift+form+tutorial" },
  { name:"Pull Ups",             muscle:"Back",      icon:"🧲", desc:"Bodyweight lat builder — wide grip for V-taper",       yt:"https://www.youtube.com/results?search_query=pull+ups+proper+form" },
  { name:"Barbell Row",          muscle:"Back",      icon:"🏋️", desc:"Bent-over row for thick mid-back",                    yt:"https://www.youtube.com/results?search_query=barbell+row+form" },
  { name:"Lat Pulldown",         muscle:"Back",      icon:"⬇️", desc:"Cable machine lat isolation movement",                yt:"https://www.youtube.com/results?search_query=lat+pulldown+tutorial" },
  { name:"Seated Cable Row",     muscle:"Back",      icon:"🔗", desc:"Mid-back and rhomboid builder on cable machine",       yt:"https://www.youtube.com/results?search_query=seated+cable+row+tutorial" },
  // LEGS
  { name:"Squat",                muscle:"Legs",      icon:"🦵", desc:"Barbell back squat — the king of leg exercises",      yt:"https://www.youtube.com/results?search_query=squat+form+tutorial" },
  { name:"Romanian Deadlift",    muscle:"Legs",      icon:"🍑", desc:"Hip hinge for glutes and hamstrings",                 yt:"https://www.youtube.com/results?search_query=romanian+deadlift+tutorial" },
  { name:"Leg Press",            muscle:"Legs",      icon:"🚀", desc:"Machine quad and glute compound movement",            yt:"https://www.youtube.com/results?search_query=leg+press+tutorial" },
  { name:"Walking Lunges",       muscle:"Legs",      icon:"🚶", desc:"Unilateral leg builder for balance and quads",        yt:"https://www.youtube.com/results?search_query=walking+lunges+form" },
  { name:"Calf Raises",          muscle:"Legs",      icon:"👟", desc:"Standing or seated calf isolation",                   yt:"https://www.youtube.com/results?search_query=calf+raises+tutorial" },
  // SHOULDERS
  { name:"Overhead Press",       muscle:"Shoulders", icon:"☝️", desc:"Barbell or dumbbell press for all three deltoid heads",yt:"https://www.youtube.com/results?search_query=overhead+press+form" },
  { name:"Lateral Raises",       muscle:"Shoulders", icon:"🦅", desc:"Dumbbell side raises for wide-shoulder look",         yt:"https://www.youtube.com/results?search_query=lateral+raises+tutorial" },
  { name:"Front Raises",         muscle:"Shoulders", icon:"⬆️", desc:"Anterior deltoid isolation movement",                yt:"https://www.youtube.com/results?search_query=front+raises+tutorial" },
  { name:"Face Pulls",           muscle:"Shoulders", icon:"😤", desc:"Cable rear delt and rotator cuff health exercise",    yt:"https://www.youtube.com/results?search_query=face+pulls+tutorial" },
  // ARMS
  { name:"Barbell Curl",         muscle:"Arms",      icon:"💥", desc:"Classic bicep mass builder with barbell",             yt:"https://www.youtube.com/results?search_query=barbell+curl+form" },
  { name:"Hammer Curl",          muscle:"Arms",      icon:"🔨", desc:"Neutral grip curl for brachialis and bicep",          yt:"https://www.youtube.com/results?search_query=hammer+curl+tutorial" },
  { name:"Tricep Dips",          muscle:"Arms",      icon:"🏊", desc:"Bodyweight or weighted dips for tricep mass",         yt:"https://www.youtube.com/results?search_query=tricep+dips+form" },
  { name:"Skull Crushers",       muscle:"Arms",      icon:"💀", desc:"EZ-bar or dumbbell tricep extension lying down",      yt:"https://www.youtube.com/results?search_query=skull+crushers+tutorial" },
  { name:"Cable Tricep Pushdown",muscle:"Arms",      icon:"📉", desc:"Rope or bar pushdown for tricep isolation",           yt:"https://www.youtube.com/results?search_query=tricep+pushdown+tutorial" },
  // CORE
  { name:"Plank",                muscle:"Core",      icon:"🧱", desc:"Full core stability — hold for time",                 yt:"https://www.youtube.com/results?search_query=plank+form+tutorial" },
  { name:"Hanging Leg Raises",   muscle:"Core",      icon:"🦶", desc:"Bar hang for lower abs and hip flexors",              yt:"https://www.youtube.com/results?search_query=hanging+leg+raises+tutorial" },
  { name:"Cable Crunch",         muscle:"Core",      icon:"⚙️", desc:"Weighted crunch for upper abs via cable",             yt:"https://www.youtube.com/results?search_query=cable+crunch+tutorial" },
  { name:"Ab Wheel Rollout",     muscle:"Core",      icon:"🎡", desc:"Full core strength and anti-extension challenge",     yt:"https://www.youtube.com/results?search_query=ab+wheel+rollout+tutorial" },
  // CARDIO
  { name:"Treadmill Run",        muscle:"Cardio",    icon:"🏃", desc:"Steady state or interval cardio",                    yt:"https://www.youtube.com/results?search_query=treadmill+running+tips" },
  { name:"Jump Rope",            muscle:"Cardio",    icon:"🪢", desc:"High intensity full-body cardio",                    yt:"https://www.youtube.com/results?search_query=jump+rope+workout" },
  { name:"Burpees",              muscle:"Cardio",    icon:"💨", desc:"Full body explosive movement and conditioning",       yt:"https://www.youtube.com/results?search_query=burpees+tutorial" },
];

const MUSCLE_COLORS = {
  Chest:"#c09090", Back:"#90a8c8", Legs:"#c8c090",
  Shoulders:"#b090c0", Arms:"#90c0a8", Core:"#c0a888", Cardio:"#90b0c8"
};

function getData()  { return JSON.parse(localStorage.getItem("workoutLog")   || "[]"); }
function saveData(d){ localStorage.setItem("workoutLog", JSON.stringify(d)); }
function getPlans() { return JSON.parse(localStorage.getItem("workoutPlans") || "[]"); }
function savePlans(p){ localStorage.setItem("workoutPlans", JSON.stringify(p)); }
function getToday() { return new Date().toISOString().split("T")[0]; }

// =================== SEED DEFAULT PLAN ===================
function seedDefaultPlan() {
  let plans = getPlans();
  const defaultName = "Full Body Starter";
  if (plans.find(p => p.name === defaultName)) return; // already seeded

  const defaultExercises = [
    "Bench Press",
    "Squat",
    "Deadlift",
    "Overhead Press",
    "Barbell Row",
    "Barbell Curl",
    "Tricep Dips",
    "Plank"
  ];

  const plan = {
    id: Date.now(),
    name: defaultName,
    exercises: defaultExercises
  };

  plans.push(plan);
  savePlans(plans);
}

// =================== NAV ===================
function switchPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const map = {
    dashPage:"nav-dash", logPage:"nav-log",
    libraryPage:"nav-library", plansPage:"nav-plans", progressPage:"nav-progress"
  };
  document.getElementById(map[id]).classList.add("active");
  if(id==="dashPage")     renderDashboard();
  if(id==="logPage")      renderHistory();
  if(id==="progressPage") renderProgress();
  if(id==="libraryPage")  renderLibrary();
  if(id==="plansPage")    renderPlans();
}

// =================== LOG ===================
function logExercise() {
  let name   = document.getElementById("exName").value.trim();
  let muscle = document.getElementById("exMuscle").value;
  let sets   = parseInt(document.getElementById("exSets").value);
  let reps   = parseInt(document.getElementById("exReps").value);
  let weight = parseFloat(document.getElementById("exWeight").value) || 0;
  if (!name || !sets || !reps) { alert("Fill in Exercise Name, Sets, and Reps!"); return; }
  let entry = { id:Date.now(), date:getToday(), name, muscle, sets, reps, weight };
  let data = getData(); data.push(entry); saveData(data);
  document.getElementById("exName").value   = "";
  document.getElementById("exSets").value   = "";
  document.getElementById("exReps").value   = "";
  document.getElementById("exWeight").value = "";
  renderHistory();
  showToast("Logged: " + name);
}

function showToast(msg) {
  let t = document.createElement("div");
  t.textContent = msg;
  t.style.cssText = "position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:var(--blue);color:#d8d8d8;padding:10px 22px;border-radius:10px;font-weight:600;z-index:999;font-size:14px;animation:fadeUp 0.3s;";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function renderHistory() {
  let data = getData();
  let list = document.getElementById("historyList");
  if (!data.length) { list.innerHTML='<p class="empty-msg">No exercises logged yet.</p>'; return; }
  list.innerHTML = [...data].reverse().map(e => `
    <div class="ex-item">
      <div>
        <div class="ex-name">${e.name}</div>
        <div class="ex-details">${e.date} · ${e.muscle} · ${e.sets}×${e.reps}</div>
      </div>
      <div class="ex-right">
        <div class="ex-weight-badge">${e.weight} kg</div>
        <button class="del-btn" onclick="deleteEntry(${e.id})">🗑</button>
      </div>
    </div>`).join("");
}

function deleteEntry(id) {
  if (!confirm("Delete this entry?")) return;
  saveData(getData().filter(e => e.id !== id));
  renderHistory(); renderDashboard();
}

// =================== DASHBOARD ===================
function renderDashboard() {
  let data = getData(), today = getToday();
  let todayEx = data.filter(e => e.date === today);
  document.getElementById("todayDate").innerText =
    new Date().toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"short" });
  let totalSets   = todayEx.reduce((s,e) => s + e.sets, 0);
  let totalWeight = todayEx.reduce((s,e) => s + (e.weight * e.sets * e.reps), 0);
  document.getElementById("totalExercises").innerText = todayEx.length;
  document.getElementById("totalSets").innerText      = totalSets;
  document.getElementById("totalWeight").innerText    = totalWeight.toLocaleString() + " kg";
  document.getElementById("streak").innerText         = calcStreak(data) + " 🔥";

  let todayList = document.getElementById("todayList");
  todayList.innerHTML = !todayEx.length
    ? '<p class="empty-msg">No exercises logged yet. Go to <b>Log</b> tab!</p>'
    : todayEx.map(e => `
      <div class="ex-item">
        <div><div class="ex-name">${e.name}</div>
        <div class="ex-details">${e.muscle} · ${e.sets} sets × ${e.reps} reps</div></div>
        <div class="ex-weight-badge">${e.weight} kg</div>
      </div>`).join("");

  let muscles = {};
  todayEx.forEach(e => { muscles[e.muscle] = (muscles[e.muscle]||0)+1; });
  let breakdown = document.getElementById("muscleBreakdown");
  breakdown.innerHTML = !Object.keys(muscles).length
    ? '<p class="empty-msg">—</p>'
    : Object.entries(muscles).map(([m,c]) =>
        `<span class="muscle-pill ${m.toLowerCase()}">${m} (${c})</span>`).join("");
}

function calcStreak(data) {
  let dates = [...new Set(data.map(e => e.date))].sort().reverse();
  if (!dates.length) return 0;
  let streak = 0, check = new Date();
  for (let i = 0; i < dates.length; i++) {
    let d = check.toISOString().split("T")[0];
    if (dates[i] === d) { streak++; check.setDate(check.getDate()-1); }
    else break;
  }
  return streak;
}

// =================== EXERCISE LIBRARY ===================
function renderLibrary() {
  let q  = (document.getElementById("libSearch").value || "").toLowerCase();
  let mf = document.getElementById("libFilter").value;
  let filtered = EXERCISES.filter(e =>
    (!mf || e.muscle === mf) &&
    (!q || e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q))
  );

  let grid = document.getElementById("libGrid");
  if (!filtered.length) { grid.innerHTML='<p class="empty-msg">No exercises found.</p>'; return; }
  grid.innerHTML = filtered.map(e => `
    <div class="lib-item">
      <div class="lib-item-left">
        <div class="lib-item-icon">${e.icon}</div>
        <div>
          <div class="lib-item-name">${e.name}</div>
          <div class="lib-item-desc">${e.desc}</div>
        </div>
      </div>
      <div class="lib-item-right">
        <span class="muscle-tag ${e.muscle.toLowerCase()}">${e.muscle}</span>
        <a href="${e.yt}" target="_blank" class="yt-btn">▶ YouTube</a>
        <button class="add-to-log-btn" onclick="quickAddToLog('${e.name}','${e.muscle}')">+ Log</button>
      </div>
    </div>`).join("");

  let dl = document.getElementById("exSuggestions");
  dl.innerHTML = EXERCISES.map(e => `<option value="${e.name}">`).join("");
}

function quickAddToLog(name, muscle) {
  document.getElementById("exName").value   = name;
  document.getElementById("exMuscle").value = muscle;
  switchPage("logPage");
  document.getElementById("exSets").focus();
  showToast("Pre-filled: " + name);
}

// =================== PLANS ===================
let activePlanId = null;

function renderPlans() {
  let plans = getPlans();
  let grid  = document.getElementById("plansGrid");
  document.getElementById("planDetail").style.display = "none";
  grid.style.display = "";

  if (!plans.length) {
    grid.innerHTML = '<p class="empty-msg">No plans yet. Create one above!</p>';
    return;
  }

  grid.innerHTML = plans.map(p => {
    let exTags = p.exercises.map(n => `<span class="plan-ex-tag">${n}</span>`).join("");
    return `
      <div class="plan-card" onclick="viewPlan(${p.id})">
        <div class="plan-card-header">
          <div>
            <div class="plan-name">${p.name}</div>
            <div class="plan-count">${p.exercises.length} exercises</div>
          </div>
          <div class="plan-actions" onclick="event.stopPropagation()">
            <button class="plan-del-btn" onclick="deletePlan(${p.id})">🗑</button>
          </div>
        </div>
        <div class="plan-card-body">${exTags || '<span style="color:var(--muted);font-size:12px;">No exercises added</span>'}</div>
      </div>`;
  }).join("");
}

function viewPlan(id) {
  let plans = getPlans();
  let plan  = plans.find(p => p.id === id);
  if (!plan) return;
  activePlanId = id;
  document.getElementById("plansGrid").style.display = "none";
  let detail = document.getElementById("planDetail");
  detail.style.display = "block";
  document.getElementById("planDetailTitle").textContent = plan.name;
  let list = document.getElementById("planDetailList");
  if (!plan.exercises.length) { list.innerHTML='<p class="empty-msg">No exercises in this plan.</p>'; return; }
  list.innerHTML = plan.exercises.map(eName => {
    let ex = EXERCISES.find(e => e.name === eName) || { icon:"💪", desc:"", muscle:"", yt:"" };
    return `
      <div class="ex-item">
        <div class="lib-item-left">
          <div class="lib-item-icon">${ex.icon||"💪"}</div>
          <div>
            <div class="ex-name">${eName}</div>
            <div class="ex-details">${ex.desc||""}</div>
          </div>
        </div>
        <div class="ex-right">
          <span class="muscle-tag ${(ex.muscle||"").toLowerCase()}">${ex.muscle||""}</span>
          ${ex.yt ? `<a href="${ex.yt}" target="_blank" class="yt-btn">▶ YouTube</a>` : ""}
        </div>
      </div>`;
  }).join("");
}

function startPlanWorkout() {
  let plans = getPlans();
  let plan  = plans.find(p => p.id === activePlanId);
  if (!plan || !plan.exercises.length) return;
  let first = EXERCISES.find(e => e.name === plan.exercises[0]);
  document.getElementById("exName").value   = plan.exercises[0];
  document.getElementById("exMuscle").value = first ? first.muscle : "Chest";
  switchPage("logPage");
  showToast("Started: " + plan.name);
}

function deletePlan(id) {
  if (!confirm("Delete this plan?")) return;
  savePlans(getPlans().filter(p => p.id !== id));
  renderPlans();
}

function openCreatePlan() {
  let checklist = document.getElementById("planExChecklist");
  checklist.innerHTML = EXERCISES.map(e => `
    <div class="plan-ex-check-item">
      <input type="checkbox" id="pex-${e.name.replace(/\s/g,'_')}" value="${e.name}">
      <label for="pex-${e.name.replace(/\s/g,'_')}">
        ${e.icon} ${e.name} <span class="muscle-tag ${e.muscle.toLowerCase()}" style="margin-left:6px;">${e.muscle}</span>
      </label>
    </div>`).join("");
  document.getElementById("planNameInput").value = "";
  document.getElementById("planModal").style.display = "flex";
}

function savePlan() {
  let name = document.getElementById("planNameInput").value.trim();
  if (!name) { alert("Enter a plan name!"); return; }
  let checked = [...document.querySelectorAll("#planExChecklist input:checked")].map(i => i.value);
  let plan = { id: Date.now(), name, exercises: checked };
  let plans = getPlans(); plans.push(plan); savePlans(plans);
  document.getElementById("planModal").style.display = "none";
  switchPage("plansPage");
  showToast("Plan saved: " + name);
}

// =================== PROGRESS ===================
function renderProgress() {
  let data = getData();
  let names = [...new Set(data.map(e => e.name))].sort();
  let select = document.getElementById("progressFilter");
  let chosen = select.value;
  select.innerHTML = '<option value="">-- Select Exercise --</option>';
  names.forEach(n => {
    let o = document.createElement("option");
    o.value=n; o.innerText=n; if(n===chosen) o.selected=true;
    select.appendChild(o);
  });

  let chart = document.getElementById("weightChart");
  let filtered = data.filter(e => e.name === select.value).slice(-10);
  if (!select.value || filtered.length < 2) {
    chart.innerHTML = '<p class="empty-msg">Select an exercise with at least 2 logs to see progression.</p>';
  } else {
    let maxW = Math.max(...filtered.map(e => e.weight)) || 1;
    chart.innerHTML = `<div class="chart-bars">${filtered.map(e => {
      let h = Math.max(10, (e.weight/maxW)*120);
      return `<div class="bar-wrap">
        <div class="bar-val">${e.weight}kg</div>
        <div class="bar" style="height:${h}px"></div>
        <div class="bar-label">${e.date.slice(5)}</div>
      </div>`;
    }).join("")}</div>`;
  }

  let pbs = {};
  data.forEach(e => { if (!pbs[e.name] || e.weight > pbs[e.name]) pbs[e.name]=e.weight; });
  let pbList = document.getElementById("pbList");
  pbList.innerHTML = !Object.keys(pbs).length
    ? '<p class="empty-msg">No data yet.</p>'
    : Object.entries(pbs).map(([n,w]) => `
      <div class="pb-card">
        <div class="pb-ex">${n}</div>
        <div class="pb-val">${w}</div>
        <div class="pb-unit">kg max</div>
      </div>`).join("");

  let volumes = {};
  data.forEach(e => { volumes[e.muscle]=(volumes[e.muscle]||0)+(e.weight*e.sets*e.reps); });
  let maxVol = Math.max(...Object.values(volumes),1);
  let volEl = document.getElementById("volumeChart");
  volEl.innerHTML = !Object.keys(volumes).length
    ? '<p class="empty-msg">No data yet.</p>'
    : Object.entries(volumes).sort((a,b)=>b[1]-a[1]).map(([m,v]) => `
      <div class="vol-row">
        <div class="vol-label">${m}</div>
        <div class="vol-bar-bg">
          <div class="vol-bar-fill" style="width:${(v/maxVol*100).toFixed(1)}%;background:${MUSCLE_COLORS[m]||'var(--blue)'}"></div>
        </div>
        <div class="vol-val">${v.toLocaleString()} kg</div>
      </div>`).join("");
}

// INIT
seedDefaultPlan();
renderDashboard();
renderLibrary();



const sections = {
  entrada: {
    title: "ENTRADA DE DADOS",
    description: "Comandos gerais, inversões e tempos de interação.",
    fields: [
        
      ["aircraft","Comandos de Aeronave no Controle","toggle"],
      ["invertAircraft","Inverter Comandos do Caça no Controle","toggle"],
      ["autoRun","Correr Automático no Controle","toggle"],
      ["instantBuild","Construir Imediatamente (Profissional de Construção)","toggle"],
     ["instantBoostBuild","Reforço Instantâneo ao Construir","toggle"],
["footController","Controle de Movimento pelos Pés","toggle"],
["footDeadzone","Zona Morta do Controle pelos Pés","number",0,100,1,"%"],
      ["editHold","Editar Tempo de Segurar","number",0,1,.001,"s"],
      ["editPress","Tempo Pressionando para Editar","number",0,1,.001,"s"],
      ["slideHold","Tempo Segurando para Deslizar","number",0,1,.001,"s"],
      ["resetAxis","Redefinir Eixos da Câmera","select",["Horizontal","Vertical"]]
    ]
  },


  troca: {
    title: "TROCA RÁPIDA",
    description: "Preferências de vibração e troca rápida.",
    fields: [
      ["vibration","Recurso de Vibração","toggle"],
      ["quickSwap","Troca Rápida","select",["Personalizado Apenas","Sempre"]],
      ["swapDelay","Atraso no HUD de Troca Rápida","number",0,10,.01,"s"],
      ["swapBehavior","Alternar Comportamento","select",["Espaço 1","Espaço 2","Espaço 3"]],
      ["instantSwap","Troca Instantânea","toggle"],
      ["buttonGroup","Grupo de Botões","select",["Ambos","Primário","Secundário"]]
    ]
  },
  sensibilidade: {
    title: "SENSIBILIDADE",
    description: "Sensibilidade da câmera, mira, construção e edição.",
    fields: [
      ["camera","Sensibilidade da Câmera","number",0,10,1,""],
      ["aim","Sensibilidade da Mira (ao Mirar)","number",0,10,1,""],
      ["build","Multiplicador de Sensibilidade no Modo de Construção","number",0,5,.1,"x"],
      ["edit","Multiplicador de Sensibilidade no Modo de Edição","number",0,5,.1,"x"],
      ["firstPerson","Modo em Primeira Pessoa","number",0,5,.01,"x"],
      ["advanced","Usar Opções Avançadas","toggle"]
    ]
  },
  avancado: {
    title: "SENSIBILIDADE AVANÇADA",
    description: "Velocidades, reforços, curva de entrada e assistência de mira.",
    fields: [
      ["horizontal","Velocidade Horizontal da Câmera","number",0,100,1,"%"],
      ["vertical","Velocidade Vertical da Câmera","number",0,100,1,"%"],
      ["boostH","Reforço de Movimento Horizontal","number",0,100,1,"%"],
      ["boostV","Reforço de Movimento Vertical","number",0,100,1,"%"],
      ["boostTime","Tempo de Escalonamento de Reforço","number",0,2,.01,"s"],
      ["aimH","Velocidade Horizontal da Câmera ao Mirar","number",0,100,1,"%"],
      ["aimV","Velocidade Vertical da Câmera ao Mirar","number",0,100,1,"%"],
      ["aimBoostH","Reforço de Movimento Horizontal ao Mirar","number",0,100,1,"%"],
      ["aimBoostV","Reforço de Movimento Vertical ao Mirar","number",0,100,1,"%"],
      ["aimBoostTime","Tempo de Escalonamento de Reforço da Mira","number",0,2,.01,"s"],
            ["movement","Multiplicador de Velocidade da Câmera","number",0,5,.01,"x"],
      ["damping","Tempo de Amortecimento da Câmera","number",0,2,.01,"s"],
      ["curve","Curva de Entrada de Dados da Câmera","select",["Linear","Exponencial"]],
      ["aimAssist","Potência da Precisão da Assistência de Mira","number",0,100,1,"%"],
      ["tracking","Ajuste do Rastreamento da Assistência de Mira","number",0,100,1,"%"],
      ["copyBasic","Copiar Configurações Básicas","action"],
      ["copyLegacy","Copiar Configurações de Legado","action"]
    ]
  },
  zona: {
    title: "ZONA MORTA DO CONTROLE",
    description: "Zonas mortas dos analógicos e pontos de acionamento.",
    fields: [
      ["leftDeadzone","Zona Morta do controle esquerdo","number",0,100,1,"%"],
      ["rightDeadzone","Zona Morta do controle direito","number",0,100,1,"%"],
      ["leftTrigger","Ação de Soltar L2","number",0,100,1,"%"],
      ["rightTrigger","Ação de Soltar R2","number",0,100,1,"%"]
    ]
  },
  ajuste: {
    title: "ÁREA DE AJUSTE DO CONTROLE",
    description: "Ajustes de mira, construção e sensibilidade.",
    fields: [
      ["aimArea","Área de Ajuste da Mira","select",["Sem","Pequena","Média","Grande"]],
      ["buildArea","Área de Ajuste de Construção","select",["Sem","Pequena","Média","Grande"]],
      ["area","Área de Ajuste","number",0,100,1,"%"],
      ["adjustSensitivity","Ajustar Sensibilidade","number",0,10,1,""]
    ]
  }
};

const proPresets = {
  jxness: {
    name: "JXNESS",
    style: "Linear",
    estimated: true,
    values: {
      camera: 4, aim: 4, build: 2.0, edit: 2.0, firstPerson: 1.00,
      advanced: true,
      horizontal: 43, vertical: 43, boostH: 0, boostV: 0, boostTime: 0,
      instantBoostBuild: false,
      aimH: 4, aimV: 4, aimBoostH: 3, aimBoostV: 3, aimBoostTime: 0,
      movement: 1.00, damping: 0, curve: "Linear",
      aimAssist: 100, tracking: 100,
      leftDeadzone: 7, rightDeadzone: 7,
      footController: false, footDeadzone: 1
    }
  },

  curve: {
    name: "CURVE",
    style: "Exponencial",
    estimated: true,
    values: {
      autoRun: true, instantBuild: false, editHold: 0.100,
      slideHold: 0.010, resetAxis: "Vertical",
      vibration: false,
      quickSwap: "Personalizado Apenas", swapDelay: 0,
      swapBehavior: "Espaço 2", instantSwap: false, buttonGroup: "Ambos",
      camera: 7, aim: 4, build: 1.9, edit: 2.0, firstPerson: 1.00,
      advanced: true,
      horizontal: 40, vertical: 40, boostH: 0, boostV: 0, boostTime: 0,
      instantBoostBuild: false,
      aimH: 9, aimV: 12, aimBoostH: 0, aimBoostV: 0, aimBoostTime: 0,
      movement: 1.00, damping: 0, curve: "Exponencial",
      aimAssist: 100, tracking: 100,
      leftDeadzone: 8, rightDeadzone: 8,
      leftTrigger: 20, rightTrigger: 20
    }
  },

  teeny: {
    name: "TEENY",
    style: "Exponencial",
    estimated: false,
    values: {
      invertAircraft: false, autoRun: true, instantBuild: true,
      editHold: 0.100, editPress: 0.101, slideHold: 0.095,
      resetAxis: "Horizontal", vibration: false,
      quickSwap: "Personalizado Apenas", swapDelay: 0,
      swapBehavior: "Espaço 2", instantSwap: false, buttonGroup: "Ambos",
      camera: 4, aim: 4, build: 2.6, edit: 2.5, firstPerson: 1.03,
      advanced: true,
      horizontal: 35, vertical: 35, boostH: 0, boostV: 0, boostTime: 0,
      instantBoostBuild: true,
      aimH: 28, aimV: 16, aimBoostH: 0, aimBoostV: 0, aimBoostTime: 0,
      movement: 0.85, damping: 0, curve: "Exponencial",
      aimAssist: 100, tracking: 100,
      leftDeadzone: 9, rightDeadzone: 7,
      leftTrigger: 5, rightTrigger: 5,
      aimArea: "Sem", buildArea: "Sem", area: 30, adjustSensitivity: 3,
      footController: false
    }
  },

  reet: {
    name: "REET",
    style: "Exponencial",
    estimated: false,
    values: {
      aircraft: false, invertAircraft: true, autoRun: true,
      instantBuild: true, editHold: 0.100, editPress: 0.101,
      slideHold: 0.095, resetAxis: "Horizontal", vibration: false,
      quickSwap: "Personalizado Apenas", swapDelay: 0,
      swapBehavior: "Espaço 2", instantSwap: false, buttonGroup: "Ambos",
      camera: 4, aim: 4, build: 1.7, edit: 1.7, firstPerson: 1.03,
      advanced: true,
      horizontal: 50, vertical: 60, boostH: 0, boostV: 0, boostTime: 0,
      instantBoostBuild: true,
      aimH: 14, aimV: 14, aimBoostH: 0, aimBoostV: 0, aimBoostTime: 0,
      movement: 0.85, damping: 0, curve: "Exponencial",
      aimAssist: 100, tracking: 100,
      leftDeadzone: 5, rightDeadzone: 5,
      leftTrigger: 5, rightTrigger: 5,
      aimArea: "Sem", buildArea: "Sem", area: 30, adjustSensitivity: 3,
      footController: false
    }
  }
};

  
   

const $ = s => document.querySelector(s);
const allFields = () => Object.values(sections).flatMap(s => s.fields);
const freshValues = () => Object.fromEntries(allFields().map(f => [f[0], f[2] === "toggle" ? false : f[2] === "select" ? "" : 0]));
const loadJSON = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

let values = { ...freshValues(), ...loadJSON("sensi.draft", {}) };
let presets = loadJSON("sensi.presets", []);
let currentId = null;
let currentSection = "entrada";
let selectedId = null;


function saveLocal() {
  localStorage.setItem("sensi.draft", JSON.stringify(values));
  localStorage.setItem("sensi.presets", JSON.stringify(presets));
  updateStats();

  if (typeof queueCloudSave === "function") {
    queueCloudSave();
  }
}


function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.add("hidden"), 2300);
}
function safe(text) {
  return String(text).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function formatRangeValue(value, unit, step) {
  const number = Number(value);
  const formatted = Number(step) >= 1
    ? String(Math.round(number))
    : String(Number(number.toFixed(3))).replace(".", ",");

  return formatted + (unit || "");
}

function renderField(field) {
  const [id, label, type, min, max, step, unit = ""] = field;
  const value = values[id];
  let input = "";

  if (type === "toggle") {
    input = `<div class="control"><button class="toggle ${value ? "on" : ""}" data-toggle="${id}" aria-pressed="${value}"></button></div>`;
  } else if (type === "select") {
    input = `<div class="control"><select class="value" data-value="${id}"><option value="">—</option>${min.map(opt => `<option value="${safe(opt)}" ${value === opt ? "selected" : ""}>${safe(opt)}</option>`).join("")}</select></div>`;
  } else if (type === "action") {
    input = `<div class="control"><button class="button" data-action="${id}">COPIAR</button></div>`;
  } else {
    const numericValue = Number(value) || 0;
    const progress = max > min
      ? ((numericValue - min) / (max - min)) * 100
      : 0;

    input = `
      <div class="range-control" style="--progress:${progress}%">
        <input
          type="range"
          data-range="${id}"
          min="${min}"
          max="${max}"
          step="${step}"
          value="${numericValue}"
          aria-label="${safe(label)}"
        >
        <span class="range-number">${safe(formatRangeValue(numericValue, unit, step))}</span>
      </div>`;
  }

  return `<div class="setting-row ${selectedId === id ? "selected" : ""}" data-row="${id}" tabindex="0">
    <div class="setting-label">${safe(label)}</div>
    <div>${input}</div>
  </div>`;
}

function render() {
  const section = sections[currentSection];
  $("#section-title").textContent = section.title;
  $("#info-title").textContent = section.title.toLowerCase();
  $("#info-description").textContent = section.description;
  $("#option-count").textContent = `${section.fields.length} OPÇÕES`;
  $("#settings-list").innerHTML = section.fields.map(renderField).join("");
  document.querySelectorAll("[data-section]").forEach(b => b.classList.toggle("active", b.dataset.section === currentSection));

  $("#settings-list").querySelectorAll("[data-row]").forEach(row => {
    row.addEventListener("click", e => {
      if (e.target.closest("button,input,select")) return;
      selectedId = row.dataset.row;
      render();
    });
  });
  $("#settings-list").querySelectorAll("[data-toggle]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.toggle;
    values[id] = !values[id];
    saveLocal(); render();
  }));
  $("#settings-list").querySelectorAll("[data-value]").forEach(input => input.addEventListener("change", () => {
    const field = allFields().find(f => f[0] === input.dataset.value);
    let value = input.value;
    if (field[2] === "number") value = Math.max(field[3], Math.min(field[4], Number(value) || 0));
    values[field[0]] = value;
    saveLocal(); render();
  }));
 
$("#settings-list").querySelectorAll("[data-range]").forEach(input => {
  input.addEventListener("input", () => {
    const id = input.dataset.range;
    const field = allFields().find(f => f[0] === id);

    values[id] = Number(input.value);

    const bar = input.closest(".range-control");
    const progress = field[4] > field[3]
      ? ((Number(input.value) - field[3]) / (field[4] - field[3])) * 100
      : 0;

    bar.style.setProperty("--progress", `${progress}%`);
    bar.querySelector(".range-number").textContent =
      formatRangeValue(input.value, field[6] || "", field[5]);

    saveLocal();
  });
});

  $("#settings-list").querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
    toast("A opção de cópia será implementada quando houver configurações-base.");
  }));
  updateStats();
}
function updateStats() {
  $("#changed-count").textContent = allFields().filter(f => values[f[0]] !== 0 && values[f[0]] !== false && values[f[0]] !== "").length;
  $("#current-name").textContent = $("#preset-name").value.trim() || "Sem nome";
}
function goTo(id) {
  if (!sections[id]) return;
  currentSection = id; selectedId = null; render();
}
function newPreset() {
  values = freshValues(); currentId = null; $("#preset-name").value = "";
  saveLocal(); render(); toast("Nova configuração zerada.");
}
function savePreset() {
  const name = $("#preset-name").value.trim();
  if (!name) { toast("Dê um nome à sensibilidade antes de salvar."); $("#preset-name").focus(); return; }
  const record = { id: currentId || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), name, values: {...values}, updatedAt: new Date().toISOString() };
  const index = presets.findIndex(p => p.id === currentId);
  if (index >= 0) presets[index] = record; else presets.unshift(record);
  currentId = record.id;
  saveLocal(); renderPresets(); toast("Preset salvo neste navegador.");
}
function openPreset(id) {
  const preset = presets.find(p => p.id === id);
  if (!preset) return;
  values = { ...freshValues(), ...preset.values };
  currentId = preset.id; $("#preset-name").value = preset.name;
  $("#modal").classList.add("hidden"); saveLocal(); render(); toast("Preset carregado.");
}
function duplicatePreset(id) {
  const preset = presets.find(p => p.id === id);
  if (!preset) return;
  values = { ...freshValues(), ...preset.values };
  currentId = null; $("#preset-name").value = preset.name + " (cópia)";
  $("#modal").classList.add("hidden"); saveLocal(); render(); toast("Cópia pronta. Salve para criar o preset.");
}
function deletePreset(id) {
  if (!confirm("Excluir este preset?")) return;
  presets = presets.filter(p => p.id !== id);
  if (currentId === id) currentId = null;
  saveLocal(); renderPresets(); toast("Preset excluído.");
}
function renderPresets() {
  $("#preset-list").innerHTML = presets.length ? presets.map(p => `
    <div class="preset-card"><div><h3>${safe(p.name)}</h3><small>Salvo em ${new Date(p.updatedAt).toLocaleString("pt-BR")}</small></div>
    <div class="preset-actions"><button class="button" data-open="${safe(p.id)}">ABRIR</button><button class="button" data-duplicate="${safe(p.id)}">DUPLICAR</button><button class="button delete" data-delete="${safe(p.id)}">EXCLUIR</button></div></div>`).join("") : '<div class="empty">Nenhum preset salvo. Ajuste as opções, dê um nome e clique em SALVAR.</div>';
  $("#preset-list").querySelectorAll("[data-open]").forEach(b => b.onclick = () => openPreset(b.dataset.open));
  $("#preset-list").querySelectorAll("[data-duplicate]").forEach(b => b.onclick = () => duplicatePreset(b.dataset.duplicate));
  $("#preset-list").querySelectorAll("[data-delete]").forEach(b => b.onclick = () => deletePreset(b.dataset.delete));
}
function openPresets() {
  $("#modal").classList.remove("hidden");
  renderPresets();
}
function resetSection() {
  if (!confirm("Zerar as opções desta seção?")) return;
  sections[currentSection].fields.forEach(f => values[f[0]] = f[2] === "toggle" ? false : f[2] === "select" ? "" : 0);
  saveLocal(); render(); toast("Seção zerada.");
}
function resetAll() {
  if (!confirm("Zerar todas as opções do rascunho atual? Os presets salvos não serão apagados.")) return;
  values = freshValues(); currentId = null; $("#preset-name").value = "";
  saveLocal(); render(); toast("Todas as opções zeradas.");
}

document.querySelectorAll("[data-section]").forEach(b => b.addEventListener("click", () => goTo(b.dataset.section)));
$("#new-preset").addEventListener("click", newPreset);
$("#save-preset").addEventListener("click", savePreset);
$("#show-presets").addEventListener("click", openPresets);
$("#nav-presets").addEventListener("click", openPresets);
$("#nav-reset").addEventListener("click", resetAll);
$("#reset-section").addEventListener("click", resetSection);
$("#close-modal").addEventListener("click", () => $("#modal").classList.add("hidden"));
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") $("#modal").classList.add("hidden"); });
$("#preset-name").addEventListener("input", updateStats);
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") { e.preventDefault(); savePreset(); }
  if (e.key === "Escape") $("#modal").classList.add("hidden");
});

render();

/* Abas superiores */
document.querySelectorAll("[data-top-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-top-tab]").forEach(item => {
      item.classList.remove("chosen");
    });

    tab.classList.add("chosen");

    const nome = tab.dataset.topTab;

    if (nome === "CONTROLE") {
      document.querySelector(".settings").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      return;
    }

    toast(nome + " — esta seção será adicionada futuramente.");
  });
});

/* ===== AUTENTICAÇÃO SUPABASE ===== */

/* COLOQUE AQUI OS DADOS DO SEU PROJETO */
const SUPABASE_URL = "https://iyxtyhqlreykndzyhkvc.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_sr2KJ6_jNdM6rhBWKF45PQ_MbiVRodO";
const authClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLIC_KEY
);

const authScreen = document.querySelector("#auth-screen");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authConfirm = document.querySelector("#auth-confirm-password");
const confirmField = document.querySelector("#confirm-password-field");
const authTitle = document.querySelector("#auth-title");
const authSubtitle = document.querySelector("#auth-subtitle");
const authSubmit = document.querySelector("#auth-submit");
const authSwitch = document.querySelector("#auth-switch");
const authForgot = document.querySelector("#auth-forgot");
const authMessage = document.querySelector("#auth-message");
const userLabel = document.querySelector("#user-label");

let authMode = "login";

function showAuthMessage(message, error = false) {
  authMessage.textContent = message;
  authMessage.style.color = error ? "#ff8997" : "#43d5fa";
}

function setAuthMode(mode) {
  authMode = mode;
  authForm.reset();
  showAuthMessage("");

  const signup = mode === "signup";

  authTitle.textContent = signup ? "CRIAR CONTA" : "ENTRAR";
  authSubtitle.textContent = signup
    ? "Crie sua conta para acessar seu perfil."
    : "Entre para acessar sua conta.";

  authSubmit.textContent = signup ? "CRIAR CONTA" : "ENTRAR";
  confirmField.classList.toggle("hidden", !signup);
  authForgot.classList.toggle("hidden", signup);

  authSwitch.textContent = signup
    ? "Já tem conta? Entrar"
    : "Não tem conta? Cadastre-se";
}

async function updateAuthUI(session) {
  const loggedIn = Boolean(session);

  authScreen.classList.toggle("hidden", loggedIn);
  document.querySelector("#logout-button")?.classList.toggle(
    "hidden",
    !loggedIn
  );

  userLabel.textContent = loggedIn
    ? (session.user.email || "JOGADOR")
    : "JOGADOR";
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = authEmail.value.trim();
  const password = authPassword.value;

  authSubmit.disabled = true;
  authSubmit.textContent = "AGUARDE...";
  showAuthMessage("");

  try {
    if (authMode === "signup") {
      if (password !== authConfirm.value) {
        throw new Error("As senhas não são iguais.");
      }

      const { data, error } = await authClient.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });

      if (error) throw error;

      if (data.session) {
        showAuthMessage("Conta criada! Você já está conectado.");
      } else {
        showAuthMessage(
          "Cadastro enviado! Confira seu e-mail para confirmar a conta."
        );
      }
    } else {
      const { error } = await authClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      showAuthMessage("Login realizado!");
    }
  } catch (error) {
    showAuthMessage(error.message || "Não foi possível concluir a operação.", true);
  } finally {
    authSubmit.disabled = false;
    authSubmit.textContent =
      authMode === "signup" ? "CRIAR CONTA" : "ENTRAR";
  }
});

authSwitch.addEventListener("click", () => {
  setAuthMode(authMode === "login" ? "signup" : "login");
});

authForgot.addEventListener("click", async () => {
  const email = authEmail.value.trim();

  if (!email) {
    showAuthMessage("Digite seu e-mail no campo acima primeiro.", true);
    authEmail.focus();
    return;
  }

  authForgot.disabled = true;
  showAuthMessage("Enviando solicitação...");

  try {
    const { error } = await authClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin
    });

    if (error) throw error;

    showAuthMessage(
      "Se o e-mail estiver cadastrado, você receberá as instruções de recuperação."
    );
  } catch (error) {
    showAuthMessage(error.message || "Não foi possível enviar o e-mail.", true);
  } finally {
    authForgot.disabled = false;
  }
});

let logoutButton = document.querySelector("#logout-button");

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    logoutButton.disabled = true;

    const { error } = await authClient.auth.signOut();

    logoutButton.disabled = false;

    if (error) {
      toast("Não foi possível sair da conta.");
    }
  });
}

authClient.auth.onAuthStateChange((_event, session) => {
  updateAuthUI(session);
});

(async function initializeAuth() {
  setAuthMode("login");

  const { data, error } = await authClient.auth.getSession();

  if (error) {
    showAuthMessage("Erro ao verificar a sessão. Recarregue a página.", true);
    authScreen.classList.remove("hidden");
    return;
  }

  updateAuthUI(data.session);
})();

/* ===== SENSI DOS PROS ===== */

const proLabels = {
  invertView: "Inverter visão",
  aircraft: "Comandos de aeronave",
  invertAircraft: "Inverter comandos do caça",
  autoRun: "Correr automático",
  instantBuild: "Construir imediatamente",
  editHold: "Tempo de segurar para editar",
  editPress: "Tempo pressionando para editar",
  slideHold: "Tempo segurando para deslizar",
  resetAxis: "Redefinir eixos da câmera",
  vibration: "Vibração",
  quickSwap: "Troca rápida",
  swapDelay: "Atraso no HUD",
  swapBehavior: "Comportamento da troca",
  instantSwap: "Troca instantânea",
  buttonGroup: "Grupo de botões",
  camera: "Sensibilidade da câmera",
  aim: "Sensibilidade da mira",
  build: "Multiplicador de construção",
  edit: "Multiplicador de edição",
  firstPerson: "Multiplicador em primeira pessoa",
  advanced: "Opções avançadas",
  horizontal: "Velocidade horizontal",
  vertical: "Velocidade vertical",
  boostH: "Reforço horizontal",
  boostV: "Reforço vertical",
  boostTime: "Tempo de reforço",
  instantBoostBuild: "Reforço instantâneo ao construir",
  aimH: "Velocidade horizontal ao mirar",
  aimV: "Velocidade vertical ao mirar",
  aimBoostH: "Reforço horizontal ao mirar",
  aimBoostV: "Reforço vertical ao mirar",
  aimBoostTime: "Tempo de reforço da mira",
  movement: "Multiplicador de velocidade da câmera",
  damping: "Amortecimento da câmera",
  curve: "Curva de entrada",
  aimAssist: "Precisão da assistência de mira",
  tracking: "Rastreamento da assistência de mira",
  leftDeadzone: "Zona morta esquerda",
  rightDeadzone: "Zona morta direita",
  leftTrigger: "Acionamento L2",
  rightTrigger: "Acionamento R2",
  footController: "Controle pelos pés",
  footDeadzone: "Zona morta do controle pelos pés",
  aimArea: "Área de ajuste da mira",
  buildArea: "Área de ajuste de construção",
  area: "Área de ajuste",
  adjustSensitivity: "Ajustar sensibilidade"
};

function formatProValue(key, value) {
  if (typeof value === "boolean") {
    return value ? "Ligado" : "Desligado";
  }

  if (typeof value === "number") {
    return String(value).replace(".", ",") +
      ([
        "horizontal", "vertical", "boostH", "boostV",
        "aimH", "aimV", "aimBoostH", "aimBoostV",
        "aimAssist", "tracking", "leftDeadzone",
        "rightDeadzone", "leftTrigger", "rightTrigger",
        "footDeadzone", "area"
      ].includes(key) ? "%" : "");
  }

  return String(value);
}





function showProDetails(id) {
  const pro = proPresets[id];
  if (!pro) return;

  const panel = document.querySelector("#pro-details-panel");
  const title = document.querySelector("#pro-details-title");
  const content = document.querySelector("#pro-details-content");

  if (!panel || !title || !content) return;

  title.textContent = "SENSI DE " + pro.name;

  // Mostra somente estas três categorias na visualização dos pros.
  const proSections = ["sensibilidade", "avancado", "zona"];

  const groups = proSections.map(sectionId => {
    const section = sections[sectionId];
    if (!section) return "";

    const rows = section.fields
      .filter(field =>
        field[2] !== "action" &&
        Object.prototype.hasOwnProperty.call(pro.values, field[0])
      )
      .map(field => {
        const key = field[0];
        const label = proLabels[key] || field[1];
        const value = formatProValue(key, pro.values[key]);

        return `
          <div class="pro-setting-row">
            <span>${safe(label)}</span>
            <strong>${safe(value)}</strong>
          </div>`;
      })
      .join("");

    return rows ? `
      <div class="pro-setting-group">
        <h4>${safe(section.title)}</h4>
        ${rows}
      </div>` : "";
  }).join("");

  content.innerHTML = `
    <p class="pro-style">Curva: <strong>${safe(pro.style)}</strong></p>
    ${pro.estimated ? `
      <p class="pro-estimate">
        ⚠️ Alguns valores são estimativas, pois os dados completos não foram fornecidos.
      </p>` : ""}
    <div class="pro-settings-grid">${groups}</div>
  `;

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}



/* Abas superiores — SHOS LAB 3D */
document.querySelectorAll("[data-top-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-top-tab]").forEach(item => {
      item.classList.remove("chosen");
    });

    tab.classList.add("chosen");

    const nome = tab.dataset.topTab;

    if (nome === "CONTROLE") {
      document.querySelector(".settings").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      return;
    }

    if (nome === "LAB 3D") {
      document.querySelector("#lab3d-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      return;
    }

    toast(nome + " — esta seção será adicionada futuramente.");
  });
});

document.querySelectorAll("[data-pro]").forEach(button => {
  button.addEventListener("click", () => {
    showProDetails(button.dataset.pro);
  });
});

document.querySelectorAll("[data-apply-pro]").forEach(button => {
  button.addEventListener("click", () => {
    applyProPreset(button.dataset.applyPro);
  });
});

document.querySelector("#close-pro-details")?.addEventListener("click", () => {
  document.querySelector("#pro-details-panel").hidden = true;
});

/* =========================================
   SHOS SENSI ANALYZER — MOTOR DE DIAGNÓSTICO
========================================= */

const analyzerSymptoms = {
  horizontal_over: {
    title: "Excesso de movimento horizontal",
    description: "Você relata que a mira ultrapassa o alvo para os lados.",
    possible: "Sensibilidade horizontal, reforço horizontal ou curva de entrada podem contribuir.",
    keys: ["horizontal", "boostH", "curve"],
    primary: "horizontal",
    direction: -1,
    amount: 2,
    unit: "%"
  },
  horizontal_under: {
    title: "Resposta horizontal insuficiente",
    description: "Você relata dificuldade para alcançar o alvo na horizontal.",
    possible: "A velocidade horizontal pode estar baixa para o seu movimento, mas o contexto também importa.",
    keys: ["horizontal", "boostH", "curve"],
    primary: "horizontal",
    direction: 1,
    amount: 2,
    unit: "%"
  },
  vertical_over: {
    title: "Possível excesso de resposta vertical",
    description: "Você relata que a mira passa da cabeça ao corrigir a altura.",
    possible: "A velocidade vertical ou os reforços verticais podem contribuir para o excesso de movimento.",
    keys: ["vertical", "boostV", "curve"],
    primary: "vertical",
    direction: -1,
    amount: 2,
    unit: "%"
  },
  vertical_under: {
    title: "Resposta vertical insuficiente",
    description: "Você relata que a mira fica abaixo da cabeça.",
    possible: "A velocidade vertical pode estar baixa para a correção que você precisa.",
    keys: ["vertical", "boostV", "curve"],
    primary: "vertical",
    direction: 1,
    amount: 2,
    unit: "%"
  },
  ads_tracking: {
    title: "Dificuldade de acompanhamento durante o ADS",
    description: "O problema aparece enquanto você mira com a arma.",
    possible: "As velocidades de mira horizontal e vertical são candidatas a teste. A distância e o movimento do adversário também influenciam.",
    keys: ["aimH", "aimV", "aimBoostH", "aimBoostV", "damping"],
    primary: "aimH",
    direction: 0,
    amount: 0,
    unit: "%"
  },
  drift: {
    title: "Possível problema de drift",
    description: "A mira se movimenta sem uma entrada intencional.",
    possible: "A zona morta direita pode estar abaixo do necessário para o estado do analógico. Também pode haver desgaste físico.",
    keys: ["rightDeadzone"],
    primary: "rightDeadzone",
    direction: 1,
    amount: 1,
    unit: "%"
  },
  inconsistent: {
    title: "Resposta inconsistente perto do centro",
    description: "Pequenos movimentos do analógico não produzem a resposta esperada.",
    possible: "Zona morta, curva de entrada e consistência física do analógico merecem ser verificadas.",
    keys: ["rightDeadzone", "curve"],
    primary: "rightDeadzone",
    direction: 0,
    amount: 0,
    unit: "%"
  },
  build_edit: {
    title: "Dificuldade em construção ou edição",
    description: "Você relata dificuldade para executar ações rapidamente.",
    possible: "Os multiplicadores de construção e edição, os tempos de interação e a execução dos comandos podem influenciar.",
    keys: ["build", "edit", "editHold", "editPress"],
    primary: "edit",
    direction: 0,
    amount: 0,
    unit: "x"
  }
};

const analyzerStorageKey = "shos.analyzer.history";

function analyzerLoadHistory() {
  try {
    const data = JSON.parse(localStorage.getItem(analyzerStorageKey));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}


function analyzerSaveHistory(history) {
  localStorage.setItem(
    analyzerStorageKey,
    JSON.stringify(history.slice(0, 30))
  );

  if (typeof queueCloudSave === "function") {
    queueCloudSave();
  }
}

function analyzerAllFields() {
  const result = [];

  function scan(value) {
    if (Array.isArray(value)) {
      if (
        typeof value[0] === "string" &&
        value.length >= 3
      ) {
        result.push(value);
        return;
      }

      value.forEach(scan);
      return;
    }

    if (value && typeof value === "object") {
      Object.values(value).forEach(scan);
    }
  }

  scan(sections);
  return result;
}

function analyzerRead(key) {
  return values[key];
}

function analyzerFormat(key, value) {
  if (value === undefined || value === null || value === "") {
    return "Não informado";
  }

  if (key === "curve") return String(value);

  const percentKeys = [
    "horizontal", "vertical", "boostH", "boostV",
    "aimH", "aimV", "aimBoostH", "aimBoostV",
    "rightDeadzone", "leftDeadzone"
  ];

  if (typeof value === "number") {
    return String(value).replace(".", ",") +
      (percentKeys.includes(key) ? "%" :
        ["build", "edit", "movement", "damping"].includes(key) ? "x" : "");
  }

  return String(value);
}


function analyzerGetConfidence(symptom, frequency, context) {
  // Mede a qualidade inicial da hipótese, não a chance de sucesso.
  let score = 35;

  if (frequency === "often") score += 8;
  if (frequency === "always") score += 12;

  const availableValues = symptom.keys.filter(key => {
    const value = analyzerRead(key);
    return value !== undefined && value !== null && value !== "";
  }).length;

  const coverage = availableValues / Math.max(symptom.keys.length, 1);
  score += Math.round(coverage * 15);

  if (
    ["close", "far", "tracking", "flick"].includes(context)
  ) {
    score += 5;
  }

  if (symptomIdNeedsHardwareCheck(symptom)) {
    score -= 5;
  }

  score = Math.max(20, Math.min(75, score));

  return {
    label: score >= 60
      ? "Hipótese com mais dados disponíveis"
      : score >= 45
        ? "Hipótese inicial"
        : "Evidência limitada",
    score
  };
}

function symptomIdNeedsHardwareCheck(symptom) {
  return symptom.keys.includes("rightDeadzone") &&
    symptom.primary === "rightDeadzone";
}

function analyzerBuildRecommendation(symptom, context = "both") {
  const fields = analyzerAllFields();

  // A recomendação é experimental e altera apenas uma variável.
  let key = symptom.primary;
  let direction = symptom.direction;
  let amount = symptom.amount;

  // Contexto: diferenciar a mira de câmera da mira durante ADS.
  if (symptom === analyzerSymptoms.ads_tracking) {
    if (context === "far" || context === "tracking") {
      key = "aimH";
      direction = 1;
      amount = 2;
    } else if (context === "flick") {
      key = "aimH";
      direction = -1;
      amount = 2;
    } else if (context === "close") {
      key = "aimV";
      direction = 0;
      amount = 0;
    } else {
      key = "aimH";
      direction = 0;
      amount = 0;
    }
  }

  // Drift exige cautela: aumentar a zona morta pode mascarar
  // desgaste físico, mas também reduzir a resposta inicial.
  if (symptom === analyzerSymptoms.drift) {
    key = "rightDeadzone";
    direction = 1;
    amount = 2;
  }

  // Inconsistência no centro não determina, sozinha,
  // se a zona morta deve subir ou descer.
  if (symptom === analyzerSymptoms.inconsistent) {
    return {
      available: false,
      text:
        "Faça primeiro um teste de drift com o controle parado. " +
        "Se a mira se mover sozinha, teste a zona morta direita em " +
        "pequenos passos. Se não houver drift, compare a resposta " +
        "no centro antes de decidir se deve aumentar ou reduzir a zona morta.",
      reason: "A direção do ajuste depende do comportamento do analógico."
    };
  }

  // Para construção/edição, priorizar o ajuste mais relacionado
  // ao que a pessoa descreveu.
  if (symptom === analyzerSymptoms.build_edit) {
    if (context === "flick") {
      key = "edit";
      direction = 1;
      amount = 0.1;
    } else if (context === "close") {
      key = "build";
      direction = 1;
      amount = 0.1;
    } else {
      return {
        available: false,
        text:
          "Escolha qual ação está atrasando: edição ou construção. " +
          "Sem essa distinção, não é possível selecionar um ajuste " +
          "numérico responsável.",
        reason: "Construção e edição exigem testes separados."
      };
    }
  }

  const field = fields.find(item => item[0] === key);

  if (!field || field[2] !== "number") {
    return {
      available: false,
      text: "Não há um controle numérico compatível para recomendar um teste."
    };
  }

  const current = analyzerRead(key);

  if (typeof current !== "number" || !Number.isFinite(current)) {
    return {
      available: false,
      text: "O valor atual não está disponível como número."
    };
  }

  if (direction === 0 || amount <= 0) {
    return {
      available: false,
      text:
        "Os dados ainda não indicam uma direção segura para alterar esse valor. " +
        "Mantenha a configuração atual e faça um teste controlado antes de decidir."
    };
  }

  const min = Number(field[3]);
  const max = Number(field[4]);
  const step = Number(field[5]) || 1;

  // Limita a alteração a um passo pequeno, adequado à escala do campo.
  const delta = Math.max(step, Math.min(amount, step * 2));
  const proposed = Math.max(
    min,
    Math.min(max, Number((current + direction * delta).toFixed(4)))
  );

  if (proposed === current) {
    return {
      available: false,
      text:
        "O valor já está no limite nessa direção. Não aplique " +
        "uma alteração automática; investigue outra causa."
    };
  }

  const labels = {
    horizontal: "velocidade horizontal da câmera",
    vertical: "velocidade vertical da câmera",
    aimH: "velocidade horizontal ao mirar",
    aimV: "velocidade vertical ao mirar",
    rightDeadzone: "zona morta direita",
    build: "multiplicador de construção",
    edit: "multiplicador de edição"
  };

  return {
    available: true,
    key,
    current,
    proposed,
    context,
    text:
      `Teste a ${labels[key] || key} em ` +
      `${analyzerFormat(key, proposed)}, comparando com ` +
      `${analyzerFormat(key, current)}. Mantenha as outras ` +
      "configurações iguais e reverta se o desempenho piorar.",
    reason: "Teste de uma variável por vez."
  };
}


function analyzerRenderHistory() {
  const container = document.querySelector("#analyzer-history-list");
  if (!container) return;

  const history = analyzerLoadHistory();

  if (!history.length) {
    container.innerHTML =
      '<p class="analyzer-history-empty">Suas análises aparecerão aqui.</p>';
    return;
  }

  container.innerHTML = history.map(item => `
    <div class="analyzer-history-item">
      <div>
        <strong>${safe(item.title)}</strong>
        <small>${safe(item.date)} · ${safe(item.frequencyLabel)}</small>
      </div>
      <button type="button" data-analyzer-open="${safe(item.id)}">
        VER ANÁLISE
      </button>
    </div>
  `).join("");

  container.querySelectorAll("[data-analyzer-open]").forEach(button => {
    button.addEventListener("click", () => {
      const item = analyzerLoadHistory().find(
        entry => entry.id === button.dataset.analyzerOpen
      );

      if (item) analyzerRenderResult(item, false);

      document.querySelector("#shos-analyze")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function analyzerRenderResult(item, showSavedMessage = true) {
  const container = document.querySelector("#analyzer-result");
  if (!container) return;

  const recommendation = item.recommendation;

  const currentValue = recommendation.available
    ? analyzerFormat(recommendation.key, recommendation.current)
    : null;

  const proposedValue = recommendation.available
    ? analyzerFormat(recommendation.key, recommendation.proposed)
    : null;

  const difference = recommendation.available
    ? recommendation.proposed - recommendation.current
    : null;

  const differenceText = recommendation.available
    ? `${difference > 0 ? "+" : ""}${String(difference).replace(".", ",")}`
    : "";

  container.innerHTML = `
    <span class="analyzer-result-label">SHOS ANALYZE • DIAGNÓSTICO</span>

    <h3>${safe(item.title)}</h3>
    <p>${safe(item.description)}</p>

    ${recommendation.available ? `
      <div class="analyzer-diagnosis-block">
        <h4>COMPARAÇÃO NUMÉRICA</h4>

        <div class="analyzer-metric">
          <span>Configuração analisada</span>
          <strong>${safe(recommendation.key)}</strong>
        </div>

        <div class="analyzer-numeric-comparison">
          <div class="analyzer-numeric-card">
            <span>VALOR ATUAL</span>
            <strong>${safe(currentValue)}</strong>
          </div>

          <div class="analyzer-numeric-arrow">→</div>

          <div class="analyzer-numeric-card recommended">
            <span>VALOR PARA TESTAR</span>
            <strong>${safe(proposedValue)}</strong>
          </div>
        </div>

        <p class="analyzer-difference">
          Variação calculada: ${safe(differenceText)} pontos na escala do controle.
        </p>

        <p>${safe(recommendation.text)}</p>

        <button type="button" class="analyzer-test-button"
          id="analyzer-apply-test">
          APLICAR VALOR DE TESTE
        </button>
      </div>
    ` : `
      <div class="analyzer-diagnosis-block">
        <h4>VALORES E PRÓXIMO PASSO</h4>
        <p>${safe(recommendation.text)}</p>
      </div>
    `}

    <div class="analyzer-diagnosis-block">
      <h4>POSSÍVEL CAUSA</h4>
      <p>${safe(item.possible)}</p>
    </div>

    <div class="analyzer-diagnosis-block">
      <h4>CONFIGURAÇÕES ATUAIS ANALISADAS</h4>
      ${item.settings.map(setting => `
        <div class="analyzer-metric">
          <span>${safe(setting.label)}</span>
          <strong>${safe(setting.value)}</strong>
        </div>
      `).join("")}
    </div>

    <div class="analyzer-diagnosis-block">
   <div class="analyzer-diagnosis-block">
  <h4>FORÇA DA HIPÓTESE</h4>
  <p>
    ${safe(item.confidence.label)} —
    ${item.confidence.score}% de cobertura indicativa.
  </p>
  <p>
    Este índice considera a frequência relatada, o contexto e
    a disponibilidade dos valores analisados. Não representa
    a chance de o ajuste funcionar.
  </p>
</div>
    <div class="analyzer-diagnosis-block">
      <h4>COMO VALIDAR</h4>
      <p>Teste em condições semelhantes e altere uma variável por vez. Compare os resultados e restaure o valor anterior se o controle piorar.</p>
    </div>

    ${showSavedMessage
      ? "<p>Análise salva no histórico deste navegador.</p>"
      : ""}
  `;

  const applyButton = container.querySelector("#analyzer-apply-test");

  if (applyButton && recommendation.available) {
    applyButton.addEventListener("click", () => {
      const confirmed = confirm(
        `Aplicar o valor de teste?\n\n` +
        `Atual: ${currentValue}\n` +
        `Novo: ${proposedValue}\n\n` +
        `Somente essa configuração será alterada no rascunho.`
      );

      if (!confirmed) return;

      values[recommendation.key] = recommendation.proposed;
      currentId = null;

      const nameInput = document.querySelector("#preset-name");
      if (nameInput) nameInput.value = "SHOS Analyze - teste";

      saveLocal();
      render();
      updateStats();

      toast("Valor de teste aplicado ao rascunho.");
      document.querySelector(".settings")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}


/* ===== SHOS ANALYZE — CONEXÃO DO BOTÃO E HISTÓRICO ===== */

function runShosAnalyzerNow() {
  const symptomSelect = document.querySelector("#analyzer-symptom");
  const frequencySelect = document.querySelector("#analyzer-frequency");
  const contextSelect = document.querySelector("#analyzer-context");
  const result = document.querySelector("#analyzer-result");

  if (!symptomSelect || !frequencySelect || !contextSelect || !result) {
    console.error("SHOS Analyze: elementos do HTML não encontrados.");
    toast("Erro: confira os elementos do SHOS Analyze no HTML.");
    return;
  }

  const symptomId = symptomSelect.value;
  const frequency = frequencySelect.value;
  const context = contextSelect.value;
  const symptom = analyzerSymptoms[symptomId];

  if (!symptom) {
    toast("Selecione um sintoma válido.");
    return;
  }

  // Lê os valores que estão realmente no rascunho atual.
  const settings = symptom.keys.map(key => {
    const field = analyzerAllFields().find(item => item[0] === key);

    return {
      key,
      label: field ? field[1] : key,
      value: analyzerFormat(key, analyzerRead(key))
    };
  });

  // Calcula a recomendação numérica para o sintoma.
const confidence = analyzerGetConfidence(
  symptom,
  frequency,
  context
);
const recommendation = analyzerBuildRecommendation(symptom, context);
  const frequencyLabels = {
    sometimes: "Às vezes",
    often: "Frequentemente",
    always: "Quase sempre"
  };

  const contextLabels = {
    both: "Em várias situações",
    close: "Combates de perto",
    far: "Combates de longe",
    tracking: "Ao acompanhar um adversário",
    flick: "Ao fazer movimentos rápidos"
  };

  const item = {
    id: (crypto.randomUUID?.() || String(Date.now())),
    date: new Date().toLocaleString("pt-BR"),
    symptomId,
    title: symptom.title,
    description: symptom.description,
    possible: symptom.possible,
    frequency,
    frequencyLabel: frequencyLabels[frequency] || frequency,
    context,
    contextLabel: contextLabels[context] || context,
    settings,
    recommendation,
    confidence
  };

  // Exibe o diagnóstico imediatamente.
  analyzerRenderResult(item, false);

  // Salva no histórico local.
  const history = analyzerLoadHistory();
  history.unshift(item);
  analyzerSaveHistory(history);
  analyzerRenderHistory();

  result.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

// Conecta o botão ANALISAR.
const shosAnalyzeButton = document.querySelector("#run-analyzer");

if (shosAnalyzeButton) {
  shosAnalyzeButton.addEventListener("click", runShosAnalyzer);
}

// Inicializa o histórico e a limpeza.
const clearAnalyzerHistoryButton =
  document.querySelector("#clear-analyzer-history");

if (clearAnalyzerHistoryButton) {
  clearAnalyzerHistoryButton.addEventListener("click", () => {
    const history = analyzerLoadHistory();

    if (!history.length) {
      toast("O histórico já está vazio.");
      return;
    }

    if (!confirm("Deseja apagar todo o histórico de análises?")) {
      return;
    }

    localStorage.removeItem(analyzerStorageKey);
    analyzerRenderHistory();

    const result = document.querySelector("#analyzer-result");

    if (result) {
      result.innerHTML = `
        <div class="analyzer-empty-icon">⌖</div>
        <span class="analyzer-result-label">AGUARDANDO ANÁLISE</span>
        <h3>Vamos encontrar o possível problema.</h3>
        <p>Selecione um sintoma e clique em analisar.</p>
      `;
    }

    toast("Histórico apagado.");
  });
}

// Carrega as análises salvas ao abrir o site.
analyzerRenderHistory();

/* ===== SHOS ANALYZE — ANIMAÇÃO DE PENSAMENTO ===== */

function runShosAnalyzer() {
  const result = document.querySelector("#analyzer-result");
  const button = document.querySelector("#run-analyzer");

  if (!result || !button) {
    console.error("SHOS Analyze: elementos não encontrados.");
    return;
  }

  // Evita iniciar duas análises ao mesmo tempo.
  if (button.dataset.analyzing === "true") return;

  const symptom = document.querySelector("#analyzer-symptom");

  if (!symptom || !symptom.value) {
    toast("Selecione um sintoma antes de analisar.");
    return;
  }

  button.dataset.analyzing = "true";
  button.disabled = true;

  const originalText = button.textContent;

  result.innerHTML = `
    <div class="analyzer-loading">
      <div class="analyzer-spinner"></div>
      <span class="analyzer-loading-status">SHOS SYSTEM</span>
      <h3>Analisando sua sensibilidade...</h3>
      <p id="analyzer-loading-message">
        Verificando suas configurações atuais.
      </p>
    </div>
  `;

  const messages = [
    "Verificando suas configurações atuais.",
    "Identificando possíveis causas do problema.",
    "Calculando ajustes para você testar."
  ];

  let step = 0;

  const messageTimer = setInterval(() => {
    step = (step + 1) % messages.length;

    const message = document.querySelector(
      "#analyzer-loading-message"
    );

    if (message) message.textContent = messages[step];
  }, 700);

  setTimeout(() => {
    clearInterval(messageTimer);

    try {
      runShosAnalyzerNow();
    } catch (error) {
      console.error("Erro no SHOS Analyze:", error);

      result.innerHTML = `
        <div class="analyzer-loading">
          <h3>Não foi possível concluir a análise</h3>
          <p>Abra o console para verificar o erro.</p>
        </div>
      `;

      toast("Erro ao analisar. Confira o console.");
    } finally {
      button.dataset.analyzing = "false";
      button.disabled = false;
      button.textContent = originalText;
    }
  }, 2400);
}

/* ===== SHOS CLOUD SYNC — DADOS POR CONTA ===== */

let shosCloudUserId = null;
let shosCloudReady = false;
let shosCloudLoading = false;
let shosCloudTimer = null;
let shosCloudVersion = 0;
let shosCloudLoadPromise = null;

async function shosWriteCloudData(userId) {
  const payload = {
    user_id: userId,
    settings: values,
    presets: presets,
    analyzer_history: analyzerLoadHistory(),
    updated_at: new Date().toISOString()
  };

  const { error } = await authClient
    .from("shos_user_data")
    .upsert(payload, { onConflict: "user_id" });

  if (error) throw error;
}

async function shosLoadCloudData(session) {
  const user = session?.user;

  if (!user) {
    shosCloudVersion++;
    shosCloudUserId = null;
    shosCloudReady = false;
    shosCloudLoading = false;
    shosCloudLoadPromise = null;
    clearTimeout(shosCloudTimer);
    return;
  }

  const userId = user.id;

  if (shosCloudUserId === userId && shosCloudReady) {
    return;
  }

  if (shosCloudUserId === userId && shosCloudLoading &&
      shosCloudLoadPromise) {
    return shosCloudLoadPromise;
  }

  const version = ++shosCloudVersion;

  shosCloudUserId = userId;
  shosCloudReady = false;
  shosCloudLoading = true;

  shosCloudLoadPromise = (async () => {
    try {
      const { data, error } = await authClient
        .from("shos_user_data")
        .select("settings, presets, analyzer_history")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;
      if (version !== shosCloudVersion) return;

      if (data) {
        // Se já existem dados na nuvem, eles são a fonte principal.
        values = {
          ...freshValues(),
          ...(data.settings || {})
        };

        presets = Array.isArray(data.presets)
          ? data.presets
          : [];

        localStorage.setItem(
          "sensi.draft",
          JSON.stringify(values)
        );

        localStorage.setItem(
          "sensi.presets",
          JSON.stringify(presets)
        );

        localStorage.setItem(
          analyzerStorageKey,
          JSON.stringify(
            Array.isArray(data.analyzer_history)
              ? data.analyzer_history.slice(0, 30)
              : []
          )
        );
      } else {
        // Primeiro acesso: preserva os dados locais e os importa.
        values = {
          ...freshValues(),
          ...loadJSON("sensi.draft", {})
        };

        presets = loadJSON("sensi.presets", []);

        await shosWriteCloudData(userId);

        if (version !== shosCloudVersion) return;
      }

      if (version !== shosCloudVersion) return;

      shosCloudReady = true;

      render();
      renderPresets();
      analyzerRenderHistory();
      updateStats();

      toast("Dados sincronizados com sua conta.");
    } catch (error) {
      console.error("SHOS Cloud Sync:", error);

      if (version === shosCloudVersion) {
        shosCloudReady = false;
        toast("Falha na sincronização. Confira a conexão.");
      }
    } finally {
      if (version === shosCloudVersion) {
        shosCloudLoading = false;
        shosCloudLoadPromise = null;
      }
    }
  })();

  return shosCloudLoadPromise;
}

function queueCloudSave() {
  if (!shosCloudReady || !shosCloudUserId || shosCloudLoading) {
    return;
  }

  clearTimeout(shosCloudTimer);

  const userId = shosCloudUserId;
  const version = shosCloudVersion;

  shosCloudTimer = setTimeout(async () => {
    if (
      !shosCloudReady ||
      shosCloudUserId !== userId ||
      shosCloudVersion !== version
    ) {
      return;
    }

    try {
      await shosWriteCloudData(userId);
    } catch (error) {
      console.error("SHOS: erro ao salvar na nuvem:", error);
      toast("Erro ao salvar na nuvem. Tente novamente.");
    }
  }, 600);
}

// Sincroniza login, logout e troca de conta.
authClient.auth.onAuthStateChange((_event, session) => {
  if (!session) {
    shosCloudVersion++;
    shosCloudUserId = null;
    shosCloudReady = false;
    shosCloudLoading = false;
    shosCloudLoadPromise = null;
    clearTimeout(shosCloudTimer);
    return;
  }

  if (
    shosCloudUserId === session.user.id &&
    (shosCloudReady || shosCloudLoading)
  ) {
    return;
  }

  setTimeout(() => {
    shosLoadCloudData(session);
  }, 0);
});

// Recupera a sessão ao abrir ou atualizar o site.
authClient.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("SHOS: erro ao recuperar sessão:", error);
    return;
  }

  if (data.session) {
    shosLoadCloudData(data.session);
  }
});

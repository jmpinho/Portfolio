const botoesHabilidades = document.querySelectorAll(".card-habilidades");

botoesHabilidades.forEach((botao) => {
  botao.addEventListener("click", function () {
    botao.classList.toggle("ativo");
  });
});

/* ---------- Idioma (PT / EN) ---------- */
/* O texto em português fica no próprio HTML (bom para SEO e como fallback).
   Aqui só guardamos as traduções em inglês, indexadas pelo data-i18n. */
const traducoesEn = {
  "meta.title": "João Mateus | Front-end Developer",
  "meta.description":
    "Portfolio of João Mateus, Computer Science graduate and front-end developer. React projects, UI/UX and web development.",
  "meta.ogTitle": "João Mateus | Front-end Developer",
  "meta.ogDescription": "React projects, UI/UX and web development.",

  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.skills": "Skills",
  "nav.contact": "Contact",

  "home.based": "BASED IN BRAZIL",
  "home.skill1": "/ FRONT END DEVELOPER",
  "home.skill2": "/ WEB DESIGN (UI/UX)",
  "home.skill3": "/ APPLICATION DEVELOPMENT",
  "home.intro":
    "I'M A UI/UX DESIGNER AND FRONT-END DEVELOPER WHO BUILDS WEB EXPERIENCES FOR COMPANIES OF ALL SIZES",

  "projects.title": "PROJECTS",
  "projects.intro":
    "HERE ARE SOME OF THE PROJECTS I BUILT ALONG MY JOURNEY IN WEB DEVELOPMENT AND DESIGN",
  "projects.synapse.alt": "Synapse project image",
  "projects.synapse.tags": "Educational | Website | React",
  "projects.cha.alt": "Chá Lua de Jade project image",
  "projects.soon.alt": "More coming soon",
  "projects.soon.title": "More projects in progress",

  "exp.title": "/EXPERIENCE & CERTIFICATIONS",
  "exp.t4j.desc":
    "Certified course issued by Tech4Me covering web fundamentals for front-end developers",
  "exp.t4j.date": "AUG 2025 - MAR 2026",
  "exp.cam.desc":
    "Certificate of completion of the Cambridge English exam (B2)",
  "exp.cam.date": "JAN 2022 - DEC 2023",
  "exp.t4t.desc": "Game development with JavaScript, Python and Arduino",
  "exp.eh.desc": "English course from beginner to advanced level",
  "exp.eh.date": "JAN 2016 - DEC 2023",

  "skills.title": "/SKILLS",
  "skills.s1":
    "I turn ideas into responsive digital experiences with React, JavaScript, HTML5 and CSS, ensuring smooth, seamless navigation on any device.",
  "skills.s2":
    "I design intuitive, elegant interfaces that combine usability, aesthetics and visual architecture built for a fluid, memorable experience.",
  "skills.s3":
    "I create striking visual identities and custom graphic elements, blending digital illustration and branding to build each project's unique personality.",

  "contact.available": "Available for Contact",
  "contact.title": "GOT A PROJECT IN MIND?",
  "contact.text":
    "Together, we can create something clean and impactful! Let's collaborate to bring to life ideas that connect with and move everyone",
  "contact.email": "email: joaopinho.dev.br@gmail.com",
};

const IDIOMAS = ["pt", "en"];
const CHAVE_STORAGE = "idioma";
const botaoIdioma = document.getElementById("botao-idioma");

const normaliza = (texto) => texto.replace(/\s+/g, " ").trim();

document.querySelectorAll("[data-i18n]").forEach((el) => {
  el.dataset.pt = normaliza(el.textContent);
});
document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
  el.dataset.ptAlt = el.getAttribute("alt");
});

const metas = {
  "meta-description": { chave: "meta.description" },
  "og-title": { chave: "meta.ogTitle" },
  "og-description": { chave: "meta.ogDescription" },
};
Object.entries(metas).forEach(([id, info]) => {
  const meta = document.getElementById(id);
  if (meta) info.pt = meta.getAttribute("content");
});

function aplicarIdioma(idioma) {
  const ehEn = idioma === "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = ehEn ? traducoesEn[el.dataset.i18n] : el.dataset.pt;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute(
      "alt",
      ehEn ? traducoesEn[el.dataset.i18nAlt] : el.dataset.ptAlt
    );
  });
  Object.entries(metas).forEach(([id, info]) => {
    const meta = document.getElementById(id);
    if (meta)
      meta.setAttribute("content", ehEn ? traducoesEn[info.chave] : info.pt);
  });

  document.documentElement.lang = ehEn ? "en" : "pt-br";
  document
    .getElementById("og-locale")
    ?.setAttribute("content", ehEn ? "en_US" : "pt_BR");
  document.title = ehEn ? traducoesEn["meta.title"] : "João Mateus";

  botaoIdioma.textContent = ehEn ? "PT" : "EN";
  botaoIdioma.setAttribute(
    "aria-label",
    ehEn ? "Mudar para português" : "Switch to English"
  );

  try {
    localStorage.setItem(CHAVE_STORAGE, idioma);
  } catch (e) {}
}

function idiomaInicial() {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (IDIOMAS.includes(param)) return param;

  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE);
    if (IDIOMAS.includes(salvo)) return salvo;
  } catch (e) {}

  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

botaoIdioma.addEventListener("click", () => {
  aplicarIdioma(document.documentElement.lang === "en" ? "pt" : "en");
});

aplicarIdioma(idiomaInicial());

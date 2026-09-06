"use strict";
const config = window.MAS_DOS_CONFIG;
const $ = (s) => document.querySelector(s);
const escapeHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const plans = [
  [
    "cultura",
    "01",
    "CONTINUAR →",
    "Anime, manga & más",
    "Convenciones, ferias y cultura pop. Hay mucho que comentar entre stands.",
    "Anime y manga",
    "#e3dcef",
  ],
  [
    "salir",
    "02",
    "OTRA MÁS.",
    "Música & celebraciones",
    "Conciertos, festivales, cumpleaños o una fiesta. Sumamos dos al ambiente.",
    "Música",
    "#eadfcf",
  ],
  [
    "aire",
    "03",
    "FUERA ↓",
    "Deporte & aire libre",
    "Partidos, rutas y visitas en Madrid, también con planes respetuosos con los animales.",
    "Deportes",
    "#dbe5d1",
  ],
  [
    "cultura",
    "04",
    "PLAYER +2",
    "Partidas & pantallas",
    "Videojuegos, una sesión de cine o comentar esa serie. En cooperativo, mejor.",
    "Videojuegos",
    "#dbe5ec",
  ],
  [
    "salir",
    "05",
    "¿Y SI…?",
    "Un rato que se alarga",
    "Bolos, escape rooms, una feria o simplemente salir a tomar algo.",
    "Eventos",
    "#e7decf",
  ],
  [
    "aire",
    "06",
    "SIN GUION",
    "Tu idea va aquí",
    "Un sitio nuevo, una comida pendiente o ese plan improvisado que acaba saliendo.",
    "Otro / Tengo una idea rara",
    "#e3e6d5",
  ],
];
function renderPlans(filter = "todos") {
  $("#plan-grid").innerHTML = plans
    .filter((p) => filter === "todos" || p[0] === filter)
    .map(
      (p) =>
        `<div class="col-md-4"><article class="plan-card"><div class="plan-card-head"><span>PLAN ${p[1]}</span><span>↗</span></div><div class="plan-visual" style="background:${p[6]}" aria-hidden="true">${p[2]}</div><h3>${p[3]}</h3><p>${p[4]}</p><a href="#proponer" data-plan="${escapeHTML(p[5])}">Este me encaja ↗</a></article></div>`,
    )
    .join("");
}
// Initial plans are in the HTML for immediate access without JavaScript.
document.querySelectorAll("[data-filter]").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((x) => {
      x.classList.toggle("active", x === b);
      x.setAttribute("aria-pressed", String(x === b));
    });
    renderPlans(b.dataset.filter);
  }),
);
$("#plan-grid").addEventListener("click", (e) => {
  const a = e.target.closest("[data-plan]");
  if (a) $("#type").value = a.dataset.plan;
});
const ideas = [
  [
    "Un escape room.\nTres cerebros más uno.",
    "Tú traes el grupo. Nosotros, otra teoría que probablemente no era.",
  ],
  [
    "Un concierto.\nEse estribillo a coro.",
    "Tú eliges la música. Nosotros nos sumamos al plan.",
  ],
  [
    "Una convención.\nModo exploración.",
    "Stands, manga y una conversación que seguramente se alargue.",
  ],
  [
    "Unos bolos.\nLa revancha se habla.",
    "Lo de apuntar bien no está garantizado. Las ganas de jugar, sí.",
  ],
];
let idea = 0;
$("#shuffle").addEventListener("click", () => {
  idea = (idea + 1) % ideas.length;
  $("#idea-title").textContent = ideas[idea][0];
  $("#idea-title").style.whiteSpace = "pre-line";
  $("#idea-description").textContent = ideas[idea][1];
});
const faqs = [
  [
    "¿Puedo contrataros solo a uno?",
    "El concepto de +2 es ir como dúo. El presupuesto y el plan incluyen a los dos.",
  ],
  [
    "¿Tengo que pagar vuestras entradas?",
    "Las entradas, consumiciones y otros gastos necesarios se concretan y desglosan antes de confirmar. No compres nada para nosotros hasta que lo hayamos acordado.",
  ],
  [
    "¿Podéis venir a una fiesta o un cumpleaños?",
    "Puedes proponérnoslo. Valoramos el lugar, los horarios y el tipo de encuentro. Nos sumamos como compañía social, no como animadores, y nadie tiene obligación de beber alcohol.",
  ],
  [
    "¿Solo ofrecéis acompañamiento en Madrid?",
    "Sí. El servicio se ofrece exclusivamente en Madrid. No aceptamos planes ni viajes fuera de Madrid. Indica el lugar exacto para confirmar disponibilidad y desplazamiento antes de reservar.",
  ],
  [
    "¿Qué pasa si mi plan dura más?",
    "Antes de alargarlo tenemos que confirmar que podemos quedarnos y acordar el coste adicional. La duración prevista figura en la propuesta.",
  ],
  [
    "¿Cómo se realiza el pago? ¿Y si cancelo?",
    "Los métodos de pago, posibles anticipos y condiciones de cancelación aún están pendientes de definir. Deben comunicarse por escrito antes de aceptar una reserva. Esta versión no cobra ni confirma reservas.",
  ],
  [
    "¿Os apuntáis a anime, videojuegos o deporte?",
    "Sí, son parte de nuestros intereses. Una convención, jugar unas partidas, ir a un partido o probar una actividad: cuéntanos qué tienes en mente.",
  ],
  [
    "¿Aceptáis planes relacionados con animales?",
    "Puedes proponer paseos o visitas a espacios que permitan la actividad y respeten a los animales. No ofrecemos cuidado profesional de mascotas y revisaremos que el plan sea adecuado.",
  ],
  [
    "¿Hay planes que no aceptéis?",
    "Sí. Podemos rechazar propuestas por disponibilidad, afinidad o seguridad. No aceptamos actividades ilegales, servicios sexuales ni citas románticas. El respeto es imprescindible.",
  ],
  [
    "¿Puedo proponeros algo que no sale aquí?",
    "Claro. Las categorías son ideas, no un catálogo cerrado. Elige «Otro / Tengo una idea rara» y cuéntanos.",
  ],
];
// FAQ content is served in the HTML.
const fields = [
  ["name", "Tu nombre", "text", "Cómo te llamas", 'required maxlength="80"'],
  ["age", "Edad", "number", "Tu edad", 'required min="1" max="120"'],
  [
    "contact",
    "Email o teléfono",
    "text",
    "Dónde podemos responderte",
    'required maxlength="150"',
  ],
  ["date", "Fecha del plan", "date", "", "required"],
  ["time", "Hora aproximada", "time", "", ""],
  [
    "place",
    "Lugar del plan en Madrid",
    "text",
    "Barrio, dirección o espacio en Madrid",
    'required maxlength="180"',
  ],
  [
    "people",
    "Personas (sin contar el +2)",
    "number",
    "1",
    'required min="1" max="10000"',
  ],
  [
    "duration",
    "Duración aproximada (horas)",
    "number",
    "2",
    'required min="0.5" max="168" step="0.5"',
  ],
];
$("#fields").innerHTML = fields
  .map(
    ([id, label, type, placeholder, attrs]) =>
      `<div class="col-md-6 field"><label for="${id}">${label}${id === "time" ? " · opcional" : ""}</label><input class="form-control" id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" ${attrs} ${id === "name" ? 'autocomplete="name"' : id === "contact" ? 'autocomplete="email"' : ""}><p class="field-error" id="${id}-error" hidden></p></div>`,
  )
  .join("");
const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
$("#date").min = localDate;
const mode = config.contact.mode;
if (mode === "whatsapp" && /^\d{8,15}$/.test(config.contact.whatsapp)) {
  $("#submit-button").firstChild.textContent = "Continuar en WhatsApp ";
  $("#privacy-note").innerHTML =
    'Al continuar abrirás WhatsApp con tu propuesta. Revisa el texto antes de enviarlo. <a href="legal/privacidad.html">Privacidad</a>.';
} else if (
  mode === "formspree" &&
  /^https:\/\/formspree.io\/f\/[a-zA-Z0-9]+$/.test(
    config.contact.formspreeEndpoint,
  )
) {
  $("#submit-button").firstChild.textContent = "Enviar mi propuesta ";
  $("#privacy-note").innerHTML =
    '<label><input type="checkbox" id="consent" required> He leído la <a href="legal/privacidad.html">política de privacidad</a> y acepto el tratamiento para gestionar mi propuesta.</label>';
}
function validate() {
  let first = null;
  document
    .querySelectorAll(
      "#plan-form input,#plan-form select,#plan-form textarea:not([readonly])",
    )
    .forEach((el) => {
      el.setCustomValidity("");
      if (el.id === "madrid-confirm" && !el.checked)
        el.setCustomValidity(
          "Confirma que todo el plan se desarrolla en Madrid.",
        );
      if (
        el.id === "contact" &&
        el.value.trim() &&
        !(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()) ||
          (/^\+?[\d\s().-]{8,22}$/.test(el.value.trim()) &&
            el.value.replace(/\D/g, "").length >= 8)
        )
      )
        el.setCustomValidity("Escribe un email o un teléfono válido.");
      if (el.required && el.type !== "checkbox" && !el.value.trim())
        el.setCustomValidity("Completa este campo.");
      if (el.id === "description" && el.value.trim().length < 15)
        el.setCustomValidity("Cuéntanos un poco más: al menos 15 caracteres.");
      const invalid = !el.checkValidity();
      el.classList.toggle("invalid", invalid);
      el.setAttribute("aria-invalid", String(invalid));
      let error = document.getElementById(el.id + "-error");
      if (!error) {
        error = document.createElement("p");
        error.id = el.id + "-error";
        error.className = "field-error";
        el.insertAdjacentElement("afterend", error);
      }
      el.setAttribute("aria-describedby", error.id);
      error.hidden = !invalid;
      error.textContent = invalid
        ? el.validationMessage || "Revisa este campo."
        : "";
      if (invalid && !first) first = el;
    });
  if (first) {
    first.focus();
    return false;
  }
  return true;
}
$("#plan-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validate()) {
    $("#form-status").textContent =
      "Revisa los campos marcados para preparar tu propuesta.";
    return;
  }
  const data = new FormData(e.currentTarget);
  const proposal = fields
    .map(([id, label]) => `${label}: ${data.get(id) || "Por concretar"}`)
    .concat([
      `Ámbito: exclusivamente Madrid`,
      `Tipo de plan: ${data.get("type")}`,
      `La idea: ${data.get("description")}`,
    ])
    .join("\n");
  $("#form-status").textContent = "";
  if (mode === "whatsapp" && /^\d{8,15}$/.test(config.contact.whatsapp)) {
    window.location.href = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(proposal)}`;
    $("#form-status").textContent =
      "Continúa en WhatsApp para enviar el mensaje. La propuesta aún no es una reserva.";
    return;
  }
  if (
    mode === "formspree" &&
    /^https:\/\/formspree.io\/f\/[a-zA-Z0-9]+$/.test(
      config.contact.formspreeEndpoint,
    )
  ) {
    const b = $("#submit-button");
    b.disabled = true;
    $("#form-status").textContent = "Enviando propuesta…";
    try {
      const res = await fetch(config.contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("send");
      $("#form-status").textContent =
        "Propuesta enviada. Queda pendiente confirmar disponibilidad y presupuesto.";
      e.target.reset();
    } catch {
      $("#form-status").textContent =
        "No se ha podido enviar. Tus datos siguen aquí: puedes reintentarlo.";
    } finally {
      b.disabled = false;
    }
    return;
  }
  $("#proposal-text").value = proposal;
  $("#proposal-result").hidden = false;
  $("#form-status").textContent =
    "Propuesta preparada. El canal de contacto todavía no está conectado; no se ha enviado nada.";
  $("#proposal-text").focus();
});
$("#copy-proposal").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($("#proposal-text").value);
    $("#form-status").textContent =
      "Propuesta copiada. No se ha enviado ningún mensaje.";
  } catch {
    $("#proposal-text").focus();
    $("#proposal-text").select();
    $("#form-status").textContent =
      "Selecciona y copia el texto con el menú de tu dispositivo.";
  }
});
$(".menu-toggle").addEventListener("click", () => {
  const expanded = $(".menu-toggle").getAttribute("aria-expanded") === "true";
  $(".menu-toggle").setAttribute("aria-expanded", String(!expanded));
  $("#nav-links").classList.toggle("open", !expanded);
});
$("#nav-links").addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    $("#nav-links").classList.remove("open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    $("#nav-links").classList.remove("open");
  }
});
$("#year").textContent = new Date().getFullYear();

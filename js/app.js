const WHATSAPP = "573164570484";

const I18N = {
  es: {
    welcomeEyebrow: "Exportación de tilapia y mojarra",
    enterHint: "Toca el logo para entrar",
    welcomeLede:
      "Catálogo interactivo de CI Piscícola Botero SA. Elige producto, empaque y destino. El pedido llega al vendedor por WhatsApp.",
    productsTitle: "¿Qué producto desea?",
    productsLede: "Selecciona una tarjeta. Cada una abre su propio flujo de pedido.",
    back: "← Volver",
    presentation: "¿Cómo lo desea?",
    packaging: "Tipo de empaque",
    quantity: "Cantidad",
    unit: "Unidad",
    city: "Ciudad",
    country: "País",
    clientName: "Nombre del cliente (opcional)",
    clientCompany: "Empresa (opcional)",
    reviewOrder: "Ver resumen del pedido",
    summaryTitle: "Resumen para el vendedor",
    summaryLede: "Revisa los datos. Al enviar se abre WhatsApp con este mensaje.",
    sendWhatsapp: "Enviar pedido por WhatsApp",
    disclaimer: "Esto no confirma una venta ni un pago. Solo envía la solicitud al vendedor.",
    footerNote: "Pedido de cotización · no es una compra",
    fields: {
      product: "Producto",
      presentation: "Presentación",
      packaging: "Empaque",
      quantity: "Cantidad",
      destination: "Destino",
      client: "Cliente",
    },
    units: { kg: "kg", cajas: "cajas", unidades: "unidades" },
    products: {
      mojarra: {
        name: "Mojarra entera",
        blurb: "Entera, lista para exportación.",
        lede: "Elige si la quieres fresca o congelada, el empaque y a dónde debe llegar.",
      },
      filete: {
        name: "Filete de tilapia",
        blurb: "Filete fresco o congelado.",
        lede: "Indica presentación, empaque y ciudad o país de destino.",
      },
      piel: {
        name: "Piel de tilapia",
        blurb: "Piel para usos industriales y de exportación.",
        lede: "Selecciona el tratamiento, el empaque y el destino.",
      },
    },
    presentations: {
      fresco: "Fresco",
      congelado: "Congelado",
      salada: "Salada",
      seca: "Seca",
    },
    packs: {
      caja5: "Caja 5 kg",
      caja10: "Caja 10 kg",
      caja20: "Caja 20 kg",
      vacio: "Bolsa al vacío",
      master: "Master carton",
      saco: "Saco",
    },
    wa: (o) =>
      `Hola, soy ${o.who}. Quiero cotizar con CI Piscícola Botero SA:\n` +
      `• Producto: ${o.product}\n` +
      `• Presentación: ${o.presentation}\n` +
      `• Empaque: ${o.packaging}\n` +
      `• Cantidad: ${o.qty} ${o.unit}\n` +
      `• Destino: ${o.city}, ${o.country}\n` +
      `Este mensaje es una solicitud de pedido, no una compra confirmada.`,
  },
  en: {
    welcomeEyebrow: "Tilapia and mojarra exports",
    enterHint: "Tap the logo to enter",
    welcomeLede:
      "Interactive catalog of CI Piscícola Botero SA. Choose product, packing and destination. The request reaches the seller on WhatsApp.",
    productsTitle: "Which product do you want?",
    productsLede: "Select a card. Each one opens its own order flow.",
    back: "← Back",
    presentation: "How would you like it?",
    packaging: "Packaging",
    quantity: "Quantity",
    unit: "Unit",
    city: "City",
    country: "Country",
    clientName: "Client name (optional)",
    clientCompany: "Company (optional)",
    reviewOrder: "Review the request",
    summaryTitle: "Summary for the seller",
    summaryLede: "Check the details. Send opens WhatsApp with this message.",
    sendWhatsapp: "Send request on WhatsApp",
    disclaimer: "This does not confirm a sale or a payment. It only sends the request to the seller.",
    footerNote: "Quote request · not a purchase",
    fields: {
      product: "Product",
      presentation: "Presentation",
      packaging: "Packaging",
      quantity: "Quantity",
      destination: "Destination",
      client: "Client",
    },
    units: { kg: "kg", cajas: "boxes", unidades: "units" },
    products: {
      mojarra: {
        name: "Whole mojarra",
        blurb: "Whole fish, export ready.",
        lede: "Choose fresh or frozen, packing, and where it should arrive.",
      },
      filete: {
        name: "Tilapia fillet",
        blurb: "Fresh or frozen fillet.",
        lede: "Set presentation, packing, and destination city or country.",
      },
      piel: {
        name: "Tilapia skin",
        blurb: "Skin for industrial and export uses.",
        lede: "Choose treatment, packing, and destination.",
      },
    },
    presentations: {
      fresco: "Fresh",
      congelado: "Frozen",
      salada: "Salted",
      seca: "Dried",
    },
    packs: {
      caja5: "5 kg box",
      caja10: "10 kg box",
      caja20: "20 kg box",
      vacio: "Vacuum bag",
      master: "Master carton",
      saco: "Sack",
    },
    wa: (o) =>
      `Hello, this is ${o.who}. I would like a quote from CI Piscícola Botero SA:\n` +
      `• Product: ${o.product}\n` +
      `• Presentation: ${o.presentation}\n` +
      `• Packaging: ${o.packaging}\n` +
      `• Quantity: ${o.qty} ${o.unit}\n` +
      `• Destination: ${o.city}, ${o.country}\n` +
      `This message is a request, not a confirmed purchase.`,
  },
};

const CATALOG = {
  mojarra: {
    presentations: ["fresco", "congelado"],
    packs: ["caja10", "caja20", "vacio", "master"],
    art: fishArt("#00a7e1"),
  },
  filete: {
    presentations: ["fresco", "congelado"],
    packs: ["caja5", "caja10", "vacio", "master"],
    art: filletArt("#e3066a"),
  },
  piel: {
    presentations: ["fresco", "salada", "seca", "congelado"],
    packs: ["caja10", "saco", "vacio", "master"],
    art: skinArt("#10233a"),
  },
};

const DESTINATIONS = [
  { city: "Bogotá", country: "Colombia" },
  { city: "Medellín", country: "Colombia" },
  { city: "Cartagena", country: "Colombia" },
  { city: "Miami", country: "USA" },
  { city: "New York", country: "USA" },
  { city: "Madrid", country: "España" },
];

const state = {
  lang: "es",
  product: null,
  presentation: null,
  packaging: null,
  order: null,
};

const $ = (sel) => document.querySelector(sel);

function t() {
  return I18N[state.lang];
}

function fishArt(color) {
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <path d="M28 72c18-34 78-48 118-28 18 9 28 22 40 20-8 14-4 28 2 40-16 2-30-6-48-4-42 6-90-6-112-28Z" fill="${color}" opacity=".9"/>
    <circle cx="58" cy="64" r="6" fill="#fff"/>
    <circle cx="56" cy="64" r="3" fill="#10233a"/>
    <path d="M150 58c12-18 28-22 42-18-10 16-10 32 0 48-16 2-30-6-42-14Z" fill="${color}"/>
  </svg>`;
}

function filletArt(color) {
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <path d="M30 88c22-40 86-58 150-34-8 18-6 36 4 52-54 8-108 4-154-18Z" fill="${color}"/>
    <path d="M48 82c28-8 70-12 112 2" stroke="#fff" stroke-width="3" opacity=".5"/>
  </svg>`;
}

function skinArt(color) {
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <path d="M36 40c48-8 96 10 148 4-10 28-6 54 8 76-58 6-108-8-156-18 8-22 6-44 0-62Z" fill="${color}" opacity=".85"/>
    <circle cx="70" cy="62" r="4" fill="#00a7e1"/>
    <circle cx="102" cy="70" r="4" fill="#e3066a"/>
    <circle cx="134" cy="60" r="4" fill="#00a7e1"/>
  </svg>`;
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t()[key];
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
  });
  renderProducts();
  if (state.product) fillConfig();
  if (state.order) renderTicket();
}

function showStage(name) {
  document.querySelectorAll(".stage").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.stage === name);
  });
  $("#homeBtn").hidden = name === "welcome";
}

function renderProducts() {
  const copy = t().products;
  $("#productCards").innerHTML = Object.keys(CATALOG)
    .map(
      (id) => `<button class="card" type="button" data-product="${id}">
        ${CATALOG[id].art}
        <h3>${copy[id].name}</h3>
        <p>${copy[id].blurb}</p>
      </button>`
    )
    .join("");
}

function fillConfig() {
  const id = state.product;
  const dict = t();
  $("#configTitle").textContent = dict.products[id].name;
  $("#configLede").textContent = dict.products[id].lede;
  $("#configArt").innerHTML = CATALOG[id].art;

  $("#presentationChips").innerHTML = CATALOG[id].presentations
    .map(
      (key) =>
        `<button type="button" class="chip ${state.presentation === key ? "is-on" : ""}" data-presentation="${key}">${dict.presentations[key]}</button>`
    )
    .join("");

  $("#packagingChips").innerHTML = CATALOG[id].packs
    .map(
      (key) =>
        `<button type="button" class="chip ${state.packaging === key ? "is-on" : ""}" data-packaging="${key}">${dict.packs[key]}</button>`
    )
    .join("");

  const unitValue = $("#unit").value;
  $("#unit").innerHTML = Object.entries(dict.units)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  if (unitValue && dict.units[unitValue]) $("#unit").value = unitValue;

  $("#destSuggest").innerHTML = DESTINATIONS.map(
    (d) => `<button type="button" data-city="${d.city}" data-country="${d.country}">${d.city}, ${d.country}</button>`
  ).join("");
}

function renderTicket() {
  const dict = t();
  const o = state.order;
  $("#ticket").innerHTML = `<dl>
    <dt>${dict.fields.product}</dt><dd>${o.product}</dd>
    <dt>${dict.fields.presentation}</dt><dd>${o.presentation}</dd>
    <dt>${dict.fields.packaging}</dt><dd>${o.packaging}</dd>
    <dt>${dict.fields.quantity}</dt><dd>${o.qty} ${o.unit}</dd>
    <dt>${dict.fields.destination}</dt><dd>${o.city}, ${o.country}</dd>
    <dt>${dict.fields.client}</dt><dd>${o.who}</dd>
  </dl>`;
  const msg = dict.wa(o);
  $("#waBtn").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function collectOrder() {
  const dict = t();
  const whoParts = [$("#clientName").value.trim(), $("#clientCompany").value.trim()].filter(Boolean);
  return {
    product: dict.products[state.product].name,
    presentation: dict.presentations[state.presentation],
    packaging: dict.packs[state.packaging],
    qty: $("#qty").value,
    unit: dict.units[$("#unit").value],
    city: $("#city").value.trim(),
    country: $("#country").value.trim(),
    who: whoParts.join(" · ") || (state.lang === "es" ? "un cliente del catálogo" : "a catalog client"),
  };
}

$("#enterBtn").addEventListener("click", () => {
  $("#enterBtn").classList.add("is-splash");
  setTimeout(() => {
    $("#enterBtn").classList.remove("is-splash");
    showStage("products");
  }, 420);
});

$("#homeBtn").addEventListener("click", () => {
  state.product = null;
  showStage("welcome");
});

$("#backToProducts").addEventListener("click", () => showStage("products"));
$("#backToConfig").addEventListener("click", () => showStage("config"));

$("#productCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-product]");
  if (!card) return;
  state.product = card.dataset.product;
  state.presentation = CATALOG[state.product].presentations[0];
  state.packaging = CATALOG[state.product].packs[0];
  fillConfig();
  showStage("config");
});

$("#presentationChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-presentation]");
  if (!chip) return;
  state.presentation = chip.dataset.presentation;
  fillConfig();
});

$("#packagingChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-packaging]");
  if (!chip) return;
  state.packaging = chip.dataset.packaging;
  fillConfig();
});

$("#destSuggest").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-city]");
  if (!btn) return;
  $("#city").value = btn.dataset.city;
  $("#country").value = btn.dataset.country;
});

document.querySelector(".lang").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-lang]");
  if (!btn) return;
  state.lang = btn.dataset.lang;
  applyI18n();
});

$("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.presentation || !state.packaging) return;
  state.order = collectOrder();
  renderTicket();
  showStage("summary");
});

applyI18n();
renderProducts();

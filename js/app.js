const WHATSAPP = "573164570484";

const I18N = {
  es: {
    welcomeEyebrow: "Portafolio de productos para el mercado internacional",
    enterHint: "Toca el logo para entrar",
    videoTitle: "Conoce la piscícola",
    socialLabel: "Redes sociales",
    welcomeLede:
      "Catálogo interactivo de CI Piscícola Botero SA. Elige producto, empaque y destino. El pedido llega al vendedor por WhatsApp.",
    productsTitle: "¿Qué producto desea?",
    productsLede: "Elige primero el tipo y cómo lo quieres. Después indicas empaque y destino.",
    back: "← Volver",
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
    guest: "un cliente del catálogo",
    fields: {
      product: "Producto",
      packaging: "Empaque",
      quantity: "Cantidad",
      destination: "Destino",
      client: "Cliente",
    },
    units: { kg: "kg", cajas: "cajas", unidades: "unidades" },
    groups: {
      entera: {
        name: "Tilapia entera",
        lede: "Indica empaque, cantidad y destino.",
        options: {
          fresco: "Tilapia entera fresca",
          congelado: "Tilapia entera congelada",
        },
      },
      filete: {
        name: "Filete de tilapia",
        lede: "Indica empaque, cantidad y destino.",
        options: {
          fresco: "Filete fresco",
          congelado: "Filete congelado",
        },
      },
      subproductos: {
        name: "Subproductos",
        lede: "Indica empaque, cantidad y destino.",
        options: {
          pieles: "Pieles de tilapia",
          cabezas: "Cabezas de tilapia",
        },
      },
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
      `• Empaque: ${o.packaging}\n` +
      `• Cantidad: ${o.qty} ${o.unit}\n` +
      `• Destino: ${o.city}, ${o.country}\n` +
      `Este mensaje es una solicitud de pedido, no una compra confirmada.`,
  },
  en: {
    welcomeEyebrow: "Product portfolio for the international market",
    enterHint: "Tap the logo to enter",
    videoTitle: "Meet the fish farm",
    socialLabel: "Social media",
    welcomeLede:
      "Interactive catalog of CI Piscícola Botero SA. Choose product, packing and destination. The request reaches the seller on WhatsApp.",
    productsTitle: "Which product do you want?",
    productsLede: "First choose the type and how you want it. Then set packing and destination.",
    back: "← Back",
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
    guest: "a catalog client",
    fields: {
      product: "Product",
      packaging: "Packaging",
      quantity: "Quantity",
      destination: "Destination",
      client: "Client",
    },
    units: { kg: "kg", cajas: "boxes", unidades: "units" },
    groups: {
      entera: {
        name: "Whole tilapia",
        lede: "Set packing, quantity and destination.",
        options: {
          fresco: "Fresh whole tilapia",
          congelado: "Frozen whole tilapia",
        },
      },
      filete: {
        name: "Tilapia fillet",
        lede: "Set packing, quantity and destination.",
        options: {
          fresco: "Fresh fillet",
          congelado: "Frozen fillet",
        },
      },
      subproductos: {
        name: "By-products",
        lede: "Set packing, quantity and destination.",
        options: {
          pieles: "Tilapia skins",
          cabezas: "Tilapia heads",
        },
      },
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
      `• Packaging: ${o.packaging}\n` +
      `• Quantity: ${o.qty} ${o.unit}\n` +
      `• Destination: ${o.city}, ${o.country}\n` +
      `This message is a request, not a confirmed purchase.`,
  },
  pt: {
    welcomeEyebrow: "Portfólio de produtos para o mercado internacional",
    enterHint: "Toque no logo para entrar",
    videoTitle: "Conheça a piscicultura",
    socialLabel: "Redes sociais",
    welcomeLede:
      "Catálogo interativo da CI Piscícola Botero SA. Escolha produto, embalagem e destino. O pedido chega ao vendedor pelo WhatsApp.",
    productsTitle: "Qual produto deseja?",
    productsLede: "Primeiro escolha o tipo e como o quer. Depois indique embalagem e destino.",
    back: "← Voltar",
    packaging: "Tipo de embalagem",
    quantity: "Quantidade",
    unit: "Unidade",
    city: "Cidade",
    country: "País",
    clientName: "Nome do cliente (opcional)",
    clientCompany: "Empresa (opcional)",
    reviewOrder: "Ver resumo do pedido",
    summaryTitle: "Resumo para o vendedor",
    summaryLede: "Revise os dados. Ao enviar, o WhatsApp abre com esta mensagem.",
    sendWhatsapp: "Enviar pedido pelo WhatsApp",
    disclaimer: "Isto não confirma uma venda nem um pagamento. Só envia o pedido ao vendedor.",
    footerNote: "Pedido de cotação · não é uma compra",
    guest: "um cliente do catálogo",
    fields: {
      product: "Produto",
      packaging: "Embalagem",
      quantity: "Quantidade",
      destination: "Destino",
      client: "Cliente",
    },
    units: { kg: "kg", cajas: "caixas", unidades: "unidades" },
    groups: {
      entera: {
        name: "Tilápia inteira",
        lede: "Indique embalagem, quantidade e destino.",
        options: {
          fresco: "Tilápia inteira fresca",
          congelado: "Tilápia inteira congelada",
        },
      },
      filete: {
        name: "Filé de tilápia",
        lede: "Indique embalagem, quantidade e destino.",
        options: {
          fresco: "Filé fresco",
          congelado: "Filé congelado",
        },
      },
      subproductos: {
        name: "Subprodutos",
        lede: "Indique embalagem, quantidade e destino.",
        options: {
          pieles: "Peles de tilápia",
          cabezas: "Cabeças de tilápia",
        },
      },
    },
    packs: {
      caja5: "Caixa 5 kg",
      caja10: "Caixa 10 kg",
      caja20: "Caixa 20 kg",
      vacio: "Bolsa a vácuo",
      master: "Master carton",
      saco: "Saco",
    },
    wa: (o) =>
      `Olá, sou ${o.who}. Quero cotar com a CI Piscícola Botero SA:\n` +
      `• Produto: ${o.product}\n` +
      `• Embalagem: ${o.packaging}\n` +
      `• Quantidade: ${o.qty} ${o.unit}\n` +
      `• Destino: ${o.city}, ${o.country}\n` +
      `Esta mensagem é uma solicitação de pedido, não uma compra confirmada.`,
  },
  zh: {
    welcomeEyebrow: "国际市场产品组合",
    enterHint: "点击标志进入",
    videoTitle: "了解我们的渔场",
    socialLabel: "社交媒体",
    welcomeLede: "CI Piscícola Botero SA 互动产品目录。选择产品、包装和目的地。询盘将通过 WhatsApp 发送给销售人员。",
    productsTitle: "您需要哪类产品？",
    productsLede: "请先选择产品类型及其形态，然后再填写包装和目的地。",
    back: "← 返回",
    packaging: "包装方式",
    quantity: "数量",
    unit: "单位",
    city: "城市",
    country: "国家",
    clientName: "客户姓名（选填）",
    clientCompany: "公司（选填）",
    reviewOrder: "查看询盘摘要",
    summaryTitle: "发给销售的摘要",
    summaryLede: "请核对信息。发送后将在 WhatsApp 打开此消息。",
    sendWhatsapp: "通过 WhatsApp 发送询盘",
    disclaimer: "这不会确认成交或付款，只是把询盘发给销售人员。",
    footerNote: "询价请求 · 并非购买",
    guest: "目录客户",
    fields: {
      product: "产品",
      packaging: "包装",
      quantity: "数量",
      destination: "目的地",
      client: "客户",
    },
    units: { kg: "公斤", cajas: "箱", unidades: "件" },
    groups: {
      entera: {
        name: "整条罗非鱼",
        lede: "请填写包装、数量和目的地。",
        options: {
          fresco: "整条鲜罗非鱼",
          congelado: "整条冻罗非鱼",
        },
      },
      filete: {
        name: "罗非鱼鱼片",
        lede: "请填写包装、数量和目的地。",
        options: {
          fresco: "鲜鱼片",
          congelado: "冻鱼片",
        },
      },
      subproductos: {
        name: "副产品",
        lede: "请填写包装、数量和目的地。",
        options: {
          pieles: "罗非鱼皮",
          cabezas: "罗非鱼头",
        },
      },
    },
    packs: {
      caja5: "5公斤箱",
      caja10: "10公斤箱",
      caja20: "20公斤箱",
      vacio: "真空袋",
      master: "外箱",
      saco: "袋装",
    },
    wa: (o) =>
      `您好，我是 ${o.who}。希望向 CI Piscícola Botero SA 询价：\n` +
      `• 产品：${o.product}\n` +
      `• 包装：${o.packaging}\n` +
      `• 数量：${o.qty} ${o.unit}\n` +
      `• 目的地：${o.city}, ${o.country}\n` +
      `此消息仅为询盘，不是已确认的采购。`,
  },
};

const GROUPS = {
  entera: {
    packs: ["caja10", "caja20", "vacio", "master"],
    options: ["fresco", "congelado"],
    art: (option) => fishArt(option === "congelado" ? "#0077a8" : "#00a7e1"),
  },
  filete: {
    packs: ["caja5", "caja10", "vacio", "master"],
    options: ["fresco", "congelado"],
    art: (option) => filletArt(option === "congelado" ? "#b10552" : "#e3066a"),
  },
  subproductos: {
    packs: ["caja10", "saco", "vacio", "master"],
    options: ["pieles", "cabezas"],
    art: (option) => (option === "cabezas" ? headArt("#10233a") : skinArt("#10233a")),
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

const LANG_HTML = { es: "es", en: "en", pt: "pt", zh: "zh-CN" };

const state = {
  lang: "es",
  group: null,
  option: null,
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

function headArt(color) {
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <path d="M40 78c10-34 48-50 88-38 18 6 28 22 34 38-8 24-28 38-62 40-32 2-54-12-60-40Z" fill="${color}"/>
    <circle cx="78" cy="70" r="7" fill="#fff"/>
    <circle cx="76" cy="70" r="3.5" fill="#00a7e1"/>
    <path d="M58 92c10 8 28 10 42 6" stroke="#e3066a" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

function applyI18n() {
  document.documentElement.lang = LANG_HTML[state.lang];
  document.documentElement.classList.toggle("is-zh", state.lang === "zh");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t()[el.dataset.i18n];
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t()[el.dataset.i18nAria]);
  });
  renderProducts();
  if (state.group && state.option) fillConfig();
  if (state.order) renderTicket();
}

function showStage(name) {
  document.querySelectorAll(".stage").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.stage === name);
  });
  $("#homeBtn").hidden = name === "welcome";
}

function renderProducts() {
  const dict = t().groups;
  $("#productCards").innerHTML = Object.keys(GROUPS)
    .map((id) => {
      const group = GROUPS[id];
      const copy = dict[id];
      const options = group.options
        .map(
          (option) => `<button class="choice" type="button" data-group="${id}" data-option="${option}">
            ${group.art(option)}
            <span>${copy.options[option]}</span>
          </button>`
        )
        .join("");
      return `<article class="family">
        <h3>${copy.name}</h3>
        <div class="choices">${options}</div>
      </article>`;
    })
    .join("");
}

function fillConfig() {
  const id = state.group;
  const dict = t();
  const groupCopy = dict.groups[id];
  $("#configTitle").textContent = groupCopy.options[state.option];
  $("#configLede").textContent = groupCopy.lede;
  $("#configArt").innerHTML = GROUPS[id].art(state.option);

  $("#packagingChips").innerHTML = GROUPS[id].packs
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
    <dt>${dict.fields.packaging}</dt><dd>${o.packaging}</dd>
    <dt>${dict.fields.quantity}</dt><dd>${o.qty} ${o.unit}</dd>
    <dt>${dict.fields.destination}</dt><dd>${o.city}, ${o.country}</dd>
    <dt>${dict.fields.client}</dt><dd>${o.who}</dd>
  </dl>`;
  $("#waBtn").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(dict.wa(o))}`;
}

function collectOrder() {
  const dict = t();
  const whoParts = [$("#clientName").value.trim(), $("#clientCompany").value.trim()].filter(Boolean);
  return {
    product: dict.groups[state.group].options[state.option],
    packaging: dict.packs[state.packaging],
    qty: $("#qty").value,
    unit: dict.units[$("#unit").value],
    city: $("#city").value.trim(),
    country: $("#country").value.trim(),
    who: whoParts.join(" · ") || dict.guest,
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
  state.group = null;
  state.option = null;
  showStage("welcome");
});

$("#backToProducts").addEventListener("click", () => showStage("products"));
$("#backToConfig").addEventListener("click", () => showStage("config"));

$("#productCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-group]");
  if (!card) return;
  state.group = card.dataset.group;
  state.option = card.dataset.option;
  state.packaging = GROUPS[state.group].packs[0];
  fillConfig();
  showStage("config");
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
  if (!state.group || !state.option || !state.packaging) return;
  state.order = collectOrder();
  renderTicket();
  showStage("summary");
});

applyI18n();
renderProducts();

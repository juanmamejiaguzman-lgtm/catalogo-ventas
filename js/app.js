const WHATSAPP = "573164570484";
const KG_TO_LB = 2.2046226218;
const SIZE_RANGES = {
  t80: [80, 350],
  t350: [350, 550],
  t550: [550, 750],
};

const I18N = {
  es: {
    welcomeEyebrow: "Portafolio de productos para el mercado internacional",
    enterHint: "Toca el logo para entrar",
    videoTitle: "Conoce la piscícola",
    socialLabel: "Redes sociales",
    massLabel: "Unidad de peso",
    welcomeLede:
      "Catálogo interactivo de CI Piscícola Botero SA. Elige producto, empaque y destino. El pedido llega al vendedor por WhatsApp.",
    productsTitle: "¿Qué producto desea?",
    productsLede: "Elige primero el tipo y cómo lo quieres. Después indicas empaque y destino.",
    colorTitle: "¿Tilapia entera roja o negra?",
    colorLede: "Cuando elijas el color, armamos el pedido.",
    process: "Presentación",
    size: "Talla",
    back: "← Volver",
    packaging: "Tipo de empaque",
    packPrimary: "Empaque primario",
    packSecondary: "Empaque secundario",
    quantity: "Cantidad",
    unit: "Unidad",
    city: "Ciudad",
    country: "País",
    clientName: "Nombre",
    clientCompany: "Empresa",
    clientEmail: "Correo electrónico",
    reviewOrder: "Ver resumen del pedido",
    summaryTitle: "Resumen para el vendedor",
    summaryLede: "Revisa los datos. Al enviar se abre WhatsApp con este mensaje.",
    sendWhatsapp: "Enviar pedido por WhatsApp",
    disclaimer: "Esto no confirma una venta ni un pago. Solo envía la solicitud al vendedor.",
    footerNote: "Pedido de cotización · no es una compra",
    fields: {
      product: "Producto",
      color: "Color",
      process: "Presentación",
      size: "Talla",
      scientific: "Nombre científico",
      packPrimary: "Empaque primario",
      packSecondary: "Empaque secundario",
      packaging: "Empaque",
      quantity: "Cantidad",
      destination: "Destino",
      client: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
    },
    units: { kg: "kg", lb: "lb", cajas: "cajas", unidades: "unidades" },
    groups: {
      entera: {
        name: "Tilapia entera",
        sci: "Oreochromis niloticus · Oreochromis spp.",
        lede: "Indica presentación, talla, empaque, cantidad y datos de contacto.",
        options: {
          fresco: "Tilapia entera fresca",
          congelado: "Tilapia entera congelada",
        },
      },
      filete: {
        name: "Filete de tilapia",
        sci: "Oreochromis niloticus",
        lede: "Indica talla, empaque, cantidad y datos de contacto.",
        options: {
          fresco: "Filete fresco",
          congelado: "Filete congelado",
        },
      },
      subproductos: {
        name: "Subproductos",
        sci: "Oreochromis niloticus",
        lede: "Indica cantidad, destino y datos de contacto. El empaque ya está definido para cada subproducto.",
        options: {
          pieles: "Pieles de tilapia",
          cabezas: "Cabezas de tilapia",
        },
      },
    },
    packPrimary: {
      bolsa: "Bolsa",
      vacio: "Empacado al vacío",
      granel: "A granel",
    },
    packSecondary: {
      termoIcopor: "Termos de icopor",
    },
    packFixed: {
      palletStretch: "Pallet envuelto en stretch",
      termo10: "Termos de {w}",
    },
    colors: {
      roja: "Tilapia entera roja",
      negra: "Tilapia entera negra",
    },
    colorSci: {
      roja: "Oreochromis spp.",
      negra: "Oreochromis niloticus",
    },
    processes: {
      sesa: "SESA — Sin escamas y sin agallas",
      ceca: "CECA — Con escamas y con agallas",
      seca: "SECA — Sin escamas y con agallas",
    },
    wa: (o) =>
      `👋 Hola, soy ${o.name}.\n` +
      `🏢 Empresa: ${o.company}\n` +
      `📧 Correo: ${o.email}\n\n` +
      `Quiero cotizar con CI Piscícola Botero SA 🐟\n\n` +
      `🐠 Producto: ${o.product}\n` +
      (o.color ? `🎨 Color: ${o.color}\n` : "") +
      (o.process ? `✂️ Presentación: ${o.process}\n` : "") +
      (o.size ? `📏 Talla: ${o.size}\n` : "") +
      `🔬 Nombre científico: ${o.scientific}\n` +
      (o.packSecondary ? `📦 Empaque primario: ${o.packPrimary}\n🧊 Empaque secundario: ${o.packSecondary}\n` : `📦 Empaque: ${o.packPrimary}\n`) +
      `⚖️ Cantidad: ${o.qty}\n` +
      `📍 Destino: ${o.city}, ${o.country}\n\n` +
      `✨ Este mensaje es una solicitud de pedido, no una compra confirmada.`,
  },
  en: {
    welcomeEyebrow: "Product portfolio for the international market",
    enterHint: "Tap the logo to enter",
    videoTitle: "Meet the fish farm",
    socialLabel: "Social media",
    massLabel: "Weight unit",
    welcomeLede:
      "Interactive catalog of CI Piscícola Botero SA. Choose product, packing and destination. The request reaches the seller on WhatsApp.",
    productsTitle: "Which product do you want?",
    productsLede: "First choose the type and how you want it. Then set packing and destination.",
    colorTitle: "Red or black whole tilapia?",
    colorLede: "After you choose the color, we build the order.",
    process: "Presentation",
    size: "Size",
    back: "← Back",
    packaging: "Packaging",
    packPrimary: "Primary packaging",
    packSecondary: "Secondary packaging",
    quantity: "Quantity",
    unit: "Unit",
    city: "City",
    country: "Country",
    clientName: "Name",
    clientCompany: "Company",
    clientEmail: "Email",
    reviewOrder: "Review the request",
    summaryTitle: "Summary for the seller",
    summaryLede: "Check the details. Send opens WhatsApp with this message.",
    sendWhatsapp: "Send request on WhatsApp",
    disclaimer: "This does not confirm a sale or a payment. It only sends the request to the seller.",
    footerNote: "Quote request · not a purchase",
    fields: {
      product: "Product",
      color: "Color",
      process: "Presentation",
      size: "Size",
      scientific: "Scientific name",
      packPrimary: "Primary packaging",
      packSecondary: "Secondary packaging",
      packaging: "Packaging",
      quantity: "Quantity",
      destination: "Destination",
      client: "Name",
      company: "Company",
      email: "Email",
    },
    units: { kg: "kg", lb: "lb", cajas: "boxes", unidades: "units" },
    groups: {
      entera: {
        name: "Whole tilapia",
        sci: "Oreochromis niloticus · Oreochromis spp.",
        lede: "Set presentation, size, packing, quantity and contact details.",
        options: {
          fresco: "Fresh whole tilapia",
          congelado: "Frozen whole tilapia",
        },
      },
      filete: {
        name: "Tilapia fillet",
        sci: "Oreochromis niloticus",
        lede: "Set size, packing, quantity and contact details.",
        options: {
          fresco: "Fresh fillet",
          congelado: "Frozen fillet",
        },
      },
      subproductos: {
        name: "By-products",
        sci: "Oreochromis niloticus",
        lede: "Set quantity, destination and contact details. Packaging is already defined for each by-product.",
        options: {
          pieles: "Tilapia skins",
          cabezas: "Tilapia heads",
        },
      },
    },
    packPrimary: {
      bolsa: "Bag",
      vacio: "Vacuum packed",
      granel: "Bulk",
    },
    packSecondary: {
      termoIcopor: "Styrofoam coolers",
    },
    packFixed: {
      palletStretch: "Pallet wrapped in stretch film",
      termo10: "{w} coolers",
    },
    colors: {
      roja: "Red whole tilapia",
      negra: "Black whole tilapia",
    },
    colorSci: {
      roja: "Oreochromis spp.",
      negra: "Oreochromis niloticus",
    },
    processes: {
      sesa: "SESA — Scaled and gills removed",
      ceca: "CECA — With scales and gills",
      seca: "SECA — Scaled, with gills",
    },
    wa: (o) =>
      `👋 Hello, this is ${o.name}.\n` +
      `🏢 Company: ${o.company}\n` +
      `📧 Email: ${o.email}\n\n` +
      `I would like a quote from CI Piscícola Botero SA 🐟\n\n` +
      `🐠 Product: ${o.product}\n` +
      (o.color ? `🎨 Color: ${o.color}\n` : "") +
      (o.process ? `✂️ Presentation: ${o.process}\n` : "") +
      (o.size ? `📏 Size: ${o.size}\n` : "") +
      `🔬 Scientific name: ${o.scientific}\n` +
      (o.packSecondary ? `📦 Primary packaging: ${o.packPrimary}\n🧊 Secondary packaging: ${o.packSecondary}\n` : `📦 Packaging: ${o.packPrimary}\n`) +
      `⚖️ Quantity: ${o.qty}\n` +
      `📍 Destination: ${o.city}, ${o.country}\n\n` +
      `✨ This message is a request, not a confirmed purchase.`,
  },
  pt: {
    welcomeEyebrow: "Portfólio de produtos para o mercado internacional",
    enterHint: "Toque no logo para entrar",
    videoTitle: "Conheça a piscicultura",
    socialLabel: "Redes sociais",
    massLabel: "Unidade de peso",
    welcomeLede:
      "Catálogo interativo da CI Piscícola Botero SA. Escolha produto, embalagem e destino. O pedido chega ao vendedor pelo WhatsApp.",
    productsTitle: "Qual produto deseja?",
    productsLede: "Primeiro escolha o tipo e como o quer. Depois indique embalagem e destino.",
    colorTitle: "Tilápia inteira vermelha ou preta?",
    colorLede: "Depois de escolher a cor, montamos o pedido.",
    process: "Apresentação",
    size: "Tamanho",
    back: "← Voltar",
    packaging: "Tipo de embalagem",
    packPrimary: "Embalagem primária",
    packSecondary: "Embalagem secundária",
    quantity: "Quantidade",
    unit: "Unidade",
    city: "Cidade",
    country: "País",
    clientName: "Nome",
    clientCompany: "Empresa",
    clientEmail: "E-mail",
    reviewOrder: "Ver resumo do pedido",
    summaryTitle: "Resumo para o vendedor",
    summaryLede: "Revise os dados. Ao enviar, o WhatsApp abre com esta mensagem.",
    sendWhatsapp: "Enviar pedido pelo WhatsApp",
    disclaimer: "Isto não confirma uma venda nem um pagamento. Só envia o pedido ao vendedor.",
    footerNote: "Pedido de cotação · não é uma compra",
    fields: {
      product: "Produto",
      color: "Cor",
      process: "Apresentação",
      size: "Tamanho",
      scientific: "Nome científico",
      packPrimary: "Embalagem primária",
      packSecondary: "Embalagem secundária",
      packaging: "Embalagem",
      quantity: "Quantidade",
      destination: "Destino",
      client: "Nome",
      company: "Empresa",
      email: "E-mail",
    },
    units: { kg: "kg", lb: "lb", cajas: "caixas", unidades: "unidades" },
    groups: {
      entera: {
        name: "Tilápia inteira",
        sci: "Oreochromis niloticus · Oreochromis spp.",
        lede: "Indique apresentação, tamanho, embalagem, quantidade e dados de contato.",
        options: {
          fresco: "Tilápia inteira fresca",
          congelado: "Tilápia inteira congelada",
        },
      },
      filete: {
        name: "Filé de tilápia",
        sci: "Oreochromis niloticus",
        lede: "Indique tamanho, embalagem, quantidade e dados de contato.",
        options: {
          fresco: "Filé fresco",
          congelado: "Filé congelado",
        },
      },
      subproductos: {
        name: "Subprodutos",
        sci: "Oreochromis niloticus",
        lede: "Indique quantidade, destino e dados de contato. A embalagem já está definida para cada subproduto.",
        options: {
          pieles: "Peles de tilápia",
          cabezas: "Cabeças de tilápia",
        },
      },
    },
    packPrimary: {
      bolsa: "Bolsa",
      vacio: "Embalado a vácuo",
      granel: "A granel",
    },
    packSecondary: {
      termoIcopor: "Caixas térmicas de isopor",
    },
    packFixed: {
      palletStretch: "Pallet envolvido em stretch",
      termo10: "Caixas térmicas de {w}",
    },
    colors: {
      roja: "Tilápia inteira vermelha",
      negra: "Tilápia inteira preta",
    },
    colorSci: {
      roja: "Oreochromis spp.",
      negra: "Oreochromis niloticus",
    },
    processes: {
      sesa: "SESA — Sem escamas e sem guelras",
      ceca: "CECA — Com escamas e com guelras",
      seca: "SECA — Sem escamas e com guelras",
    },
    wa: (o) =>
      `👋 Olá, sou ${o.name}.\n` +
      `🏢 Empresa: ${o.company}\n` +
      `📧 E-mail: ${o.email}\n\n` +
      `Quero cotar com a CI Piscícola Botero SA 🐟\n\n` +
      `🐠 Produto: ${o.product}\n` +
      (o.color ? `🎨 Cor: ${o.color}\n` : "") +
      (o.process ? `✂️ Apresentação: ${o.process}\n` : "") +
      (o.size ? `📏 Tamanho: ${o.size}\n` : "") +
      `🔬 Nome científico: ${o.scientific}\n` +
      (o.packSecondary ? `📦 Embalagem primária: ${o.packPrimary}\n🧊 Embalagem secundária: ${o.packSecondary}\n` : `📦 Embalagem: ${o.packPrimary}\n`) +
      `⚖️ Quantidade: ${o.qty}\n` +
      `📍 Destino: ${o.city}, ${o.country}\n\n` +
      `✨ Esta mensagem é uma solicitação de pedido, não uma compra confirmada.`,
  },
  zh: {
    welcomeEyebrow: "国际市场产品组合",
    enterHint: "点击标志进入",
    videoTitle: "了解我们的渔场",
    socialLabel: "社交媒体",
    massLabel: "重量单位",
    welcomeLede: "CI Piscícola Botero SA 互动产品目录。选择产品、包装和目的地。询盘将通过 WhatsApp 发送给销售人员。",
    productsTitle: "您需要哪类产品？",
    productsLede: "请先选择产品类型及其形态，然后再填写包装和目的地。",
    colorTitle: "整条红罗非鱼还是黑罗非鱼？",
    colorLede: "选定颜色后，再填写订单。",
    process: "加工方式",
    size: "规格",
    back: "← 返回",
    packaging: "包装方式",
    packPrimary: "内包装",
    packSecondary: "外包装",
    quantity: "数量",
    unit: "单位",
    city: "城市",
    country: "国家",
    clientName: "姓名",
    clientCompany: "公司",
    clientEmail: "电子邮箱",
    reviewOrder: "查看询盘摘要",
    summaryTitle: "发给销售的摘要",
    summaryLede: "请核对信息。发送后将在 WhatsApp 打开此消息。",
    sendWhatsapp: "通过 WhatsApp 发送询盘",
    disclaimer: "这不会确认成交或付款，只是把询盘发给销售人员。",
    footerNote: "询价请求 · 并非购买",
    fields: {
      product: "产品",
      color: "颜色",
      process: "加工方式",
      size: "规格",
      scientific: "学名",
      packPrimary: "内包装",
      packSecondary: "外包装",
      packaging: "包装",
      quantity: "数量",
      destination: "目的地",
      client: "姓名",
      company: "公司",
      email: "电子邮箱",
    },
    units: { kg: "公斤", lb: "磅", cajas: "箱", unidades: "件" },
    groups: {
      entera: {
        name: "整条罗非鱼",
        sci: "Oreochromis niloticus · Oreochromis spp.",
        lede: "请填写加工方式、规格、包装、数量和联系方式。",
        options: {
          fresco: "整条鲜罗非鱼",
          congelado: "整条冻罗非鱼",
        },
      },
      filete: {
        name: "罗非鱼鱼片",
        sci: "Oreochromis niloticus",
        lede: "请填写规格、包装、数量和联系方式。",
        options: {
          fresco: "鲜鱼片",
          congelado: "冻鱼片",
        },
      },
      subproductos: {
        name: "副产品",
        sci: "Oreochromis niloticus",
        lede: "请填写数量、目的地和联系方式。每种副产品的包装已固定。",
        options: {
          pieles: "罗非鱼皮",
          cabezas: "罗非鱼头",
        },
      },
    },
    packPrimary: {
      bolsa: "袋装",
      vacio: "真空包装",
      granel: "散装",
    },
    packSecondary: {
      termoIcopor: "泡沫保温箱",
    },
    packFixed: {
      palletStretch: "缠绕膜托盘",
      termo10: "{w}保温箱",
    },
    colors: {
      roja: "整条红罗非鱼",
      negra: "整条黑罗非鱼",
    },
    colorSci: {
      roja: "Oreochromis spp.",
      negra: "Oreochromis niloticus",
    },
    processes: {
      sesa: "SESA — 去鳞去鳃",
      ceca: "CECA — 带鳞带鳃",
      seca: "SECA — 去鳞留鳃",
    },
    wa: (o) =>
      `👋 您好，我是 ${o.name}。\n` +
      `🏢 公司：${o.company}\n` +
      `📧 邮箱：${o.email}\n\n` +
      `希望向 CI Piscícola Botero SA 询价 🐟\n\n` +
      `🐠 产品：${o.product}\n` +
      (o.color ? `🎨 颜色：${o.color}\n` : "") +
      (o.process ? `✂️ 加工方式：${o.process}\n` : "") +
      (o.size ? `📏 规格：${o.size}\n` : "") +
      `🔬 学名：${o.scientific}\n` +
      (o.packSecondary ? `📦 内包装：${o.packPrimary}\n🧊 外包装：${o.packSecondary}\n` : `📦 包装：${o.packPrimary}\n`) +
      `⚖️ 数量：${o.qty}\n` +
      `📍 目的地：${o.city}, ${o.country}\n\n` +
      `✨ 此消息仅为询盘，不是已确认的采购。`,
  },
};

const GROUPS = {
  entera: {
    options: ["fresco", "congelado"],
    colors: ["roja", "negra"],
    processes: ["sesa", "ceca", "seca"],
    sizes: ["t80", "t350", "t550"],
    packPrimary: ["bolsa", "vacio", "granel"],
    packSecondary: ["termoIcopor"],
    art: (option) => fishArt(option === "congelado" ? "#0077a8" : "#00a7e1"),
    colorArt: (color) => fishArt(color === "roja" ? "#e3066a" : "#1b2430"),
  },
  filete: {
    options: ["fresco", "congelado"],
    sizes: ["t80", "t350", "t550"],
    packPrimary: ["bolsa", "vacio", "granel"],
    packSecondary: ["termoIcopor"],
    art: (option) => filletArt(option === "congelado" ? "#b10552" : "#e3066a"),
  },
  subproductos: {
    options: ["pieles", "cabezas"],
    packFixed: { pieles: "palletStretch", cabezas: "termo10" },
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
  mass: "kg",
  group: null,
  option: null,
  color: null,
  process: null,
  size: null,
  packPrimary: null,
  packSecondary: null,
  order: null,
};

const $ = (sel) => document.querySelector(sel);

function t() {
  return I18N[state.lang];
}

function roundMass(n) {
  const value = Number(n);
  if (Number.isNaN(value)) return "";
  if (Math.abs(value - Math.round(value)) < 0.05) return String(Math.round(value));
  return value.toFixed(2).replace(/\.?0+$/, "");
}

function formatKg(kg) {
  if (state.mass === "lb") return `${roundMass(kg * KG_TO_LB)} lb`;
  return `${roundMass(kg)} kg`;
}

function sizeLabel(key) {
  const [from, to] = SIZE_RANGES[key];
  if (state.mass === "lb") {
    return `${roundMass(from / 453.59237)} - ${roundMass(to / 453.59237)} lb`;
  }
  return `${from} - ${to} gr`;
}

function packFixedLabel(key) {
  const template = t().packFixed[key];
  return template.replace("{w}", formatKg(10));
}

function qtyDisplay(qty, unitKey) {
  const dict = t();
  if (unitKey === "kg" || unitKey === "lb") {
    const kg = unitKey === "kg" ? Number(qty) : Number(qty) / KG_TO_LB;
    return formatKg(kg);
  }
  return `${qty} ${dict.units[unitKey]}`;
}

function resetPack() {
  const group = GROUPS[state.group];
  if (group.packPrimary) {
    state.packPrimary = group.packPrimary[0];
    state.packSecondary = group.packSecondary[0];
    return;
  }
  state.packPrimary = group.packFixed[state.option];
  state.packSecondary = null;
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
  document.querySelectorAll("[data-mass]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.mass === state.mass);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t()[el.dataset.i18nAria]);
  });
  renderProducts();
  if (state.group === "entera") renderColors();
  if (state.group && state.option && (state.group !== "entera" || state.color)) fillConfig();
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
        <p class="sci">${copy.sci}</p>
        <div class="choices">${options}</div>
      </article>`;
    })
    .join("");
}

function scientificName() {
  const dict = t();
  if (state.group === "entera" && state.color) return dict.colorSci[state.color];
  return dict.groups[state.group].sci;
}

function renderColors() {
  const dict = t();
  $("#colorContext").textContent = dict.groups.entera.options[state.option] || "";
  $("#colorCards").innerHTML = GROUPS.entera.colors
    .map(
      (color) => `<button class="choice" type="button" data-color="${color}">
        ${GROUPS.entera.colorArt(color)}
        <span>${dict.colors[color]}</span>
        <small class="sci">${dict.colorSci[color]}</small>
      </button>`
    )
    .join("");
}

function renderChips(el, keys, selected, attr, labelFn) {
  el.innerHTML = keys
    .map(
      (key) =>
        `<button type="button" class="chip ${selected === key ? "is-on" : ""}" data-${attr}="${key}">${labelFn(key)}</button>`
    )
    .join("");
}

function fillConfig() {
  const id = state.group;
  const dict = t();
  const group = GROUPS[id];
  const groupCopy = dict.groups[id];
  const title = [groupCopy.options[state.option], id === "entera" && state.color ? dict.colors[state.color] : ""]
    .filter(Boolean)
    .join(" · ");
  $("#configTitle").textContent = title;
  $("#configSci").textContent = scientificName();
  $("#configLede").textContent = groupCopy.lede;
  $("#configArt").innerHTML = id === "entera" && state.color ? GROUPS.entera.colorArt(state.color) : group.art(state.option);

  const processField = $("#processField");
  const needsProcess = id === "entera";
  processField.hidden = !needsProcess;
  if (needsProcess) {
    if (!state.process) state.process = GROUPS.entera.processes[0];
    renderChips($("#processChips"), GROUPS.entera.processes, state.process, "process", (key) => dict.processes[key]);
  }

  const sizeField = $("#sizeField");
  const sizes = group.sizes;
  sizeField.hidden = !sizes;
  if (sizes) {
    if (!state.size) state.size = sizes[0];
    renderChips($("#sizeChips"), sizes, state.size, "size", sizeLabel);
  }

  const dualPack = Boolean(group.packPrimary);
  $("#packPrimaryField").hidden = !dualPack;
  $("#packSecondaryField").hidden = !dualPack;
  $("#packFixedField").hidden = dualPack;
  if (dualPack) {
    if (!state.packPrimary) state.packPrimary = group.packPrimary[0];
    if (!state.packSecondary) state.packSecondary = group.packSecondary[0];
    renderChips($("#packPrimaryChips"), group.packPrimary, state.packPrimary, "pack-primary", (key) => dict.packPrimary[key]);
    renderChips($("#packSecondaryChips"), group.packSecondary, state.packSecondary, "pack-secondary", (key) => dict.packSecondary[key]);
  } else {
    state.packPrimary = group.packFixed[state.option];
    state.packSecondary = null;
    renderChips($("#packFixedChips"), [state.packPrimary], state.packPrimary, "pack-fixed", packFixedLabel);
  }

  const unitEl = $("#unit");
  const prevUnit = unitEl.value;
  const unitKeys = [state.mass, "cajas", "unidades"];
  unitEl.innerHTML = unitKeys.map((value) => `<option value="${value}">${dict.units[value]}</option>`).join("");
  if (prevUnit === "kg" || prevUnit === "lb") unitEl.value = state.mass;
  else if (unitKeys.includes(prevUnit)) unitEl.value = prevUnit;

  $("#destSuggest").innerHTML = DESTINATIONS.map(
    (d) => `<button type="button" data-city="${d.city}" data-country="${d.country}">${d.city}, ${d.country}</button>`
  ).join("");
}

function formattedOrder() {
  const dict = t();
  const o = state.order;
  const group = GROUPS[o.group];
  const packPrimary = group.packPrimary ? dict.packPrimary[o.packPrimary] : packFixedLabel(o.packPrimary);
  const packSecondary = group.packPrimary ? dict.packSecondary[o.packSecondary] : "";
  return {
    name: o.name,
    company: o.company,
    email: o.email,
    product: dict.groups[o.group].options[o.option],
    color: o.group === "entera" ? dict.colors[o.color] : "",
    process: o.group === "entera" ? dict.processes[o.process] : "",
    size: group.sizes ? sizeLabel(o.size) : "",
    scientific: o.group === "entera" ? dict.colorSci[o.color] : dict.groups[o.group].sci,
    packPrimary,
    packSecondary,
    qty: qtyDisplay(o.qty, o.unitKey),
    city: o.city,
    country: o.country,
  };
}

function renderTicket() {
  const dict = t();
  const o = formattedOrder();
  $("#ticket").innerHTML = `<dl>
    <dt>${dict.fields.product}</dt><dd>${o.product}</dd>
    ${o.color ? `<dt>${dict.fields.color}</dt><dd>${o.color}</dd>` : ""}
    ${o.process ? `<dt>${dict.fields.process}</dt><dd>${o.process}</dd>` : ""}
    ${o.size ? `<dt>${dict.fields.size}</dt><dd>${o.size}</dd>` : ""}
    <dt>${dict.fields.scientific}</dt><dd class="sci">${o.scientific}</dd>
    ${
      o.packSecondary
        ? `<dt>${dict.fields.packPrimary}</dt><dd>${o.packPrimary}</dd><dt>${dict.fields.packSecondary}</dt><dd>${o.packSecondary}</dd>`
        : `<dt>${dict.fields.packaging}</dt><dd>${o.packPrimary}</dd>`
    }
    <dt>${dict.fields.quantity}</dt><dd>${o.qty}</dd>
    <dt>${dict.fields.destination}</dt><dd>${o.city}, ${o.country}</dd>
    <dt>${dict.fields.client}</dt><dd>${o.name}</dd>
    <dt>${dict.fields.company}</dt><dd>${o.company}</dd>
    <dt>${dict.fields.email}</dt><dd>${o.email}</dd>
  </dl>`;
  $("#waBtn").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(dict.wa(o))}`;
}

function collectOrder() {
  return {
    group: state.group,
    option: state.option,
    color: state.color,
    process: state.process,
    size: state.size,
    packPrimary: state.packPrimary,
    packSecondary: state.packSecondary,
    qty: $("#qty").value,
    unitKey: $("#unit").value,
    city: $("#city").value.trim(),
    country: $("#country").value.trim(),
    name: $("#clientName").value.trim(),
    company: $("#clientCompany").value.trim(),
    email: $("#clientEmail").value.trim(),
  };
}

function setMass(next) {
  if (state.mass === next) return;
  const unitEl = $("#unit");
  const qtyEl = $("#qty");
  if (unitEl && qtyEl && (unitEl.value === "kg" || unitEl.value === "lb")) {
    const n = Number(qtyEl.value);
    if (!Number.isNaN(n)) {
      qtyEl.value = next === "lb" ? roundMass(n * KG_TO_LB) : roundMass(n / KG_TO_LB);
      unitEl.value = next;
    }
  }
  state.mass = next;
  applyI18n();
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
  state.color = null;
  state.process = null;
  state.size = null;
  state.packPrimary = null;
  state.packSecondary = null;
  showStage("welcome");
});

$("#backToProducts").addEventListener("click", () => {
  if (state.group === "entera") showStage("color");
  else showStage("products");
});
$("#backToProductsFromColor").addEventListener("click", () => showStage("products"));
$("#backToConfig").addEventListener("click", () => showStage("config"));

$("#productCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-group]");
  if (!card) return;
  state.group = card.dataset.group;
  state.option = card.dataset.option;
  state.color = null;
  state.process = null;
  state.size = null;
  resetPack();
  if (state.group === "entera") {
    renderColors();
    showStage("color");
    return;
  }
  fillConfig();
  showStage("config");
});

$("#colorCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-color]");
  if (!card) return;
  state.color = card.dataset.color;
  state.process = GROUPS.entera.processes[0];
  state.size = GROUPS.entera.sizes[0];
  resetPack();
  fillConfig();
  showStage("config");
});

$("#processChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-process]");
  if (!chip) return;
  state.process = chip.dataset.process;
  fillConfig();
});

$("#sizeChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-size]");
  if (!chip) return;
  state.size = chip.dataset.size;
  fillConfig();
});

$("#packPrimaryChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-pack-primary]");
  if (!chip) return;
  state.packPrimary = chip.dataset.packPrimary;
  fillConfig();
});

$("#packSecondaryChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-pack-secondary]");
  if (!chip) return;
  state.packSecondary = chip.dataset.packSecondary;
  fillConfig();
});

$("#destSuggest").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-city]");
  if (!btn) return;
  $("#city").value = btn.dataset.city;
  $("#country").value = btn.dataset.country;
});

document.querySelector(".controls .lang:not(#massSwitch)").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-lang]");
  if (!btn) return;
  state.lang = btn.dataset.lang;
  applyI18n();
});

$("#massSwitch").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-mass]");
  if (!btn) return;
  setMass(btn.dataset.mass);
});

$("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const group = GROUPS[state.group];
  if (!state.group || !state.option) return;
  if (state.group === "entera" && (!state.color || !state.process)) return;
  if (group.sizes && !state.size) return;
  if (group.packPrimary && (!state.packPrimary || !state.packSecondary)) return;
  if (!group.packPrimary && !state.packPrimary) return;
  state.order = collectOrder();
  renderTicket();
  showStage("summary");
});

applyI18n();
renderProducts();

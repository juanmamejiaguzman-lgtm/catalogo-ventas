const WHATSAPP = "573164570484";
const WA_SIGN =
  "\n\n" +
  "\u{1F41F}  CI Pisc\u00edcola Botero SA  \u{1F30A}\u{1F420}";
const KG_TO_LB = 2.2046226218;
const SIZE_RANGES = {
  t80: [80, 350],
  t350: [350, 550],
  t550: [550, 750],
};

const FILLET_SIZE_OZ = {
  oz35: [3, 5],
  oz46: [4, 6],
  oz79: [7, 9],
  oz9up: [9, null],
};
const OZ_TO_G = 28.349523125;
const INCOTERMS = ["EXW", "FOB", "CIF", "CFR", "FCA", "DDP"];
const FREEZE_TYPES = ["conventional", "iqf"];

const TERMO_SIZES = {
  t5: "2.27 kg / 5 lb",
  t10: "4.54 kg / 10 lb",
  t22: "9.98 kg / 22 lb",
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
    shipFrozen: "Despacho en contenedor refrigerado de 40 pies.",
    colorTitle: "¿Tilapia entera roja o plateada?",
    colorLede: "Cuando elijas el color, armamos el pedido.",
    filletTitle: "¿Filete rojo o plateado, con piel o sin piel?",
    filletLede: "Cuando elijas el tipo, armamos el pedido.",
    process: "Presentación",
    size: "Talla",
    freeze: "Tipo de congelación",
    incoterm: "Incoterm",
    back: "← Volver",
    packaging: "Tipo de empaque",
    packPrimaryTitle: "Empaque primario",
    packSecondaryTitle: "Empaque secundario",
    productPreview: "Producto",
    packPreview: "Empaque",
    termoSize: "Talla de la caja",
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
      skin: "Piel",
      process: "Presentación",
      size: "Talla",
      freeze: "Tipo de congelación",
      incoterm: "Incoterm",
      scientific: "Nombre científico",
      packPrimary: "Empaque primario",
      packSecondary: "Empaque secundario",
      termoSize: "Talla de la caja",
      packaging: "Empaque",
      quantity: "Cantidad",
      destination: "Destino",
      shipping: "Despacho",
      client: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
    },
    units: { kg: "kg", lb: "lb", termos: "termos" },
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
        lede: "Indica cantidad, destino y datos de contacto. El empaque ya está definido para este subproducto.",
        options: {
          pieles: "Piel de tilapia",
        },
      },
    },
    packPrimary: {
      bolsa: "Bolsa",
      vacio: "Empacado al vacío",
      granel: "A granel",
    },
    packSecondary: {
      termoIcopor: "Caja de poliestireno expandido",
    },
    packFixed: {
      palletStretch: "Pallet envuelto en stretch",
    },
    colors: {
      roja: "Tilapia entera roja",
      negra: "Tilapia entera plateada",
    },
    filletColors: {
      roja: "Tilapia roja",
      negra: "Tilapia plateada",
    },
    skins: {
      con: "Con piel",
      sin: "Sin piel",
    },
    filletVariants: {
      "roja-con": "Filete de tilapia roja con piel",
      "roja-sin": "Filete de tilapia roja sin piel",
      "negra-con": "Filete de tilapia plateada con piel",
      "negra-sin": "Filete de tilapia plateada sin piel",
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
    freezes: {
      conventional: "Congelación convencional",
      iqf: "IQF",
    },
    wa: (o) =>
      `Hola, soy ${o.name}.\n` +
      `Empresa: ${o.company}\n` +
      `Correo: ${o.email}\n\n` +
      `Quiero cotizar con CI Piscícola Botero SA:\n\n` +
      `Producto: ${o.product}\n` +
      (o.color ? `Color: ${o.color}\n` : "") +
      (o.skin ? `Piel: ${o.skin}\n` : "") +
      (o.process ? `Presentación: ${o.process}\n` : "") +
      (o.size ? `Talla: ${o.size}\n` : "") +
      (o.freeze ? `Tipo de congelación: ${o.freeze}\n` : "") +
      `Nombre científico: ${o.scientific}\n` +
      (o.packSecondary ? `Empaque primario: ${o.packPrimary}\nEmpaque secundario: ${o.packSecondary}\n` : `Empaque: ${o.packPrimary}\n`) +
      (o.termoSize ? `Talla de la caja: ${o.termoSize}\n` : "") +
      `Cantidad: ${o.qty}\n` +
      `Destino: ${o.city}, ${o.country}\n` +
      (o.incoterm ? `Incoterm: ${o.incoterm}\n` : "") +
      (o.shipping ? `${o.shipping}\n` : "") +
      `\nEste mensaje es una solicitud de pedido, no una compra confirmada.` +
      WA_SIGN,
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
    shipFrozen: "Shipped in a refrigerated 40-foot container.",
    colorTitle: "Red or silver whole tilapia?",
    colorLede: "After you choose the color, we build the order.",
    filletTitle: "Red or silver fillet, skin-on or skinless?",
    filletLede: "After you choose the type, we build the order.",
    process: "Presentation",
    size: "Size",
    freeze: "Freezing type",
    incoterm: "Incoterm",
    back: "← Back",
    packaging: "Packaging",
    packPrimaryTitle: "Primary packaging",
    packSecondaryTitle: "Secondary packaging",
    productPreview: "Product",
    packPreview: "Packaging",
    termoSize: "Box size",
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
      skin: "Skin",
      process: "Presentation",
      size: "Size",
      freeze: "Freezing type",
      incoterm: "Incoterm",
      scientific: "Scientific name",
      packPrimary: "Primary packaging",
      packSecondary: "Secondary packaging",
      termoSize: "Box size",
      packaging: "Packaging",
      quantity: "Quantity",
      destination: "Destination",
      shipping: "Shipping",
      client: "Name",
      company: "Company",
      email: "Email",
    },
    units: { kg: "kg", lb: "lb", termos: "coolers" },
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
        lede: "Set quantity, destination and contact details. Packaging is already defined for this by-product.",
        options: {
          pieles: "Tilapia skin",
        },
      },
    },
    packPrimary: {
      bolsa: "Bag",
      vacio: "Vacuum packed",
      granel: "Bulk",
    },
    packSecondary: {
      termoIcopor: "Expanded polystyrene box",
    },
    packFixed: {
      palletStretch: "Pallet wrapped in stretch film",
    },
    colors: {
      roja: "Red whole tilapia",
      negra: "Silver whole tilapia",
    },
    filletColors: {
      roja: "Red tilapia",
      negra: "Silver tilapia",
    },
    skins: {
      con: "Skin-on",
      sin: "Skinless",
    },
    filletVariants: {
      "roja-con": "Red tilapia fillet, skin-on",
      "roja-sin": "Red tilapia fillet, skinless",
      "negra-con": "Silver tilapia fillet, skin-on",
      "negra-sin": "Silver tilapia fillet, skinless",
    },
    colorSci: {
      roja: "Oreochromis spp.",
      negra: "Oreochromis niloticus",
    },
    processes: {
      sesa: "GGS — Scaled and gills removed",
      ceca: "CECA — With scales and gills",
      seca: "SECA — Scaled, with gills",
    },
    freezes: {
      conventional: "Conventional freezing",
      iqf: "IQF",
    },
    wa: (o) =>
      `Hello, this is ${o.name}.\n` +
      `Company: ${o.company}\n` +
      `Email: ${o.email}\n\n` +
      `I would like a quote from CI Piscícola Botero SA:\n\n` +
      `Product: ${o.product}\n` +
      (o.color ? `Color: ${o.color}\n` : "") +
      (o.skin ? `Skin: ${o.skin}\n` : "") +
      (o.process ? `Presentation: ${o.process}\n` : "") +
      (o.size ? `Size: ${o.size}\n` : "") +
      (o.freeze ? `Freezing type: ${o.freeze}\n` : "") +
      `Scientific name: ${o.scientific}\n` +
      (o.packSecondary ? `Primary packaging: ${o.packPrimary}\nSecondary packaging: ${o.packSecondary}\n` : `Packaging: ${o.packPrimary}\n`) +
      (o.termoSize ? `Box size: ${o.termoSize}\n` : "") +
      `Quantity: ${o.qty}\n` +
      `Destination: ${o.city}, ${o.country}\n` +
      (o.incoterm ? `Incoterm: ${o.incoterm}\n` : "") +
      (o.shipping ? `${o.shipping}\n` : "") +
      `\nThis message is a request, not a confirmed purchase.` +
      WA_SIGN,
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
    shipFrozen: "Despacho em contêiner refrigerado de 40 pés.",
    colorTitle: "Tilápia inteira vermelha ou prateada?",
    colorLede: "Depois de escolher a cor, montamos o pedido.",
    filletTitle: "Filé vermelho ou prateado, com pele ou sem pele?",
    filletLede: "Depois de escolher o tipo, montamos o pedido.",
    process: "Apresentação",
    size: "Tamanho",
    freeze: "Tipo de congelamento",
    incoterm: "Incoterm",
    back: "← Voltar",
    packaging: "Tipo de embalagem",
    packPrimaryTitle: "Embalagem primária",
    packSecondaryTitle: "Embalagem secundária",
    productPreview: "Produto",
    packPreview: "Embalagem",
    termoSize: "Tamanho da caixa térmica",
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
      skin: "Pele",
      process: "Apresentação",
      size: "Tamanho",
      freeze: "Tipo de congelamento",
      incoterm: "Incoterm",
      scientific: "Nome científico",
      packPrimary: "Embalagem primária",
      packSecondary: "Embalagem secundária",
      termoSize: "Tamanho da caixa térmica",
      packaging: "Embalagem",
      quantity: "Quantidade",
      destination: "Destino",
      shipping: "Despacho",
      client: "Nome",
      company: "Empresa",
      email: "E-mail",
    },
    units: { kg: "kg", lb: "lb", termos: "caixas térmicas" },
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
        lede: "Indique quantidade, destino e dados de contato. A embalagem já está definida para este subproduto.",
        options: {
          pieles: "Pele de tilápia",
        },
      },
    },
    packPrimary: {
      bolsa: "Bolsa",
      vacio: "Embalado a vácuo",
      granel: "A granel",
    },
    packSecondary: {
      termoIcopor: "Caixa de poliestireno expandido",
    },
    packFixed: {
      palletStretch: "Pallet envolvido em stretch",
    },
    colors: {
      roja: "Tilápia inteira vermelha",
      negra: "Tilápia inteira prateada",
    },
    filletColors: {
      roja: "Tilápia vermelha",
      negra: "Tilápia prateada",
    },
    skins: {
      con: "Com pele",
      sin: "Sem pele",
    },
    filletVariants: {
      "roja-con": "Filé de tilápia vermelha com pele",
      "roja-sin": "Filé de tilápia vermelha sem pele",
      "negra-con": "Filé de tilápia prateada com pele",
      "negra-sin": "Filé de tilápia prateada sem pele",
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
    freezes: {
      conventional: "Congelamento convencional",
      iqf: "IQF",
    },
    wa: (o) =>
      `Olá, sou ${o.name}.\n` +
      `Empresa: ${o.company}\n` +
      `E-mail: ${o.email}\n\n` +
      `Quero cotar com a CI Piscícola Botero SA:\n\n` +
      `Produto: ${o.product}\n` +
      (o.color ? `Cor: ${o.color}\n` : "") +
      (o.skin ? `Pele: ${o.skin}\n` : "") +
      (o.process ? `Apresentação: ${o.process}\n` : "") +
      (o.size ? `Tamanho: ${o.size}\n` : "") +
      (o.freeze ? `Tipo de congelamento: ${o.freeze}\n` : "") +
      `Nome científico: ${o.scientific}\n` +
      (o.packSecondary ? `Embalagem primária: ${o.packPrimary}\nEmbalagem secundária: ${o.packSecondary}\n` : `Embalagem: ${o.packPrimary}\n`) +
      (o.termoSize ? `Tamanho da caixa térmica: ${o.termoSize}\n` : "") +
      `Quantidade: ${o.qty}\n` +
      `Destino: ${o.city}, ${o.country}\n` +
      (o.incoterm ? `Incoterm: ${o.incoterm}\n` : "") +
      (o.shipping ? `${o.shipping}\n` : "") +
      `\nEsta mensagem é uma solicitação de pedido, não uma compra confirmada.` +
      WA_SIGN,
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
    shipFrozen: "以 40 英尺冷藏集装箱发运。",
    colorTitle: "整条红罗非鱼还是银罗非鱼？",
    colorLede: "选定颜色后，再填写订单。",
    filletTitle: "红罗非鱼片还是银罗非鱼片，带皮还是去皮？",
    filletLede: "选定类型后，再填写订单。",
    process: "加工方式",
    size: "规格",
    freeze: "冻结方式",
    incoterm: "贸易术语",
    back: "← 返回",
    packaging: "包装方式",
    packPrimaryTitle: "内包装",
    packSecondaryTitle: "外包装",
    productPreview: "产品",
    packPreview: "包装",
    termoSize: "保温箱规格",
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
      skin: "鱼皮",
      process: "加工方式",
      size: "规格",
      freeze: "冻结方式",
      incoterm: "贸易术语",
      scientific: "学名",
      packPrimary: "内包装",
      packSecondary: "外包装",
      termoSize: "保温箱规格",
      packaging: "包装",
      quantity: "数量",
      destination: "目的地",
      shipping: "发运",
      client: "姓名",
      company: "公司",
      email: "电子邮箱",
    },
    units: { kg: "公斤", lb: "磅", termos: "保温箱" },
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
        lede: "请填写数量、目的地和联系方式。该副产品的包装已固定。",
        options: {
          pieles: "罗非鱼皮",
        },
      },
    },
    packPrimary: {
      bolsa: "袋装",
      vacio: "真空包装",
      granel: "散装",
    },
    packSecondary: {
      termoIcopor: "发泡聚苯乙烯箱",
    },
    packFixed: {
      palletStretch: "缠绕膜托盘",
    },
    colors: {
      roja: "整条红罗非鱼",
      negra: "整条银罗非鱼",
    },
    filletColors: {
      roja: "红罗非鱼",
      negra: "银罗非鱼",
    },
    skins: {
      con: "带皮",
      sin: "去皮",
    },
    filletVariants: {
      "roja-con": "带皮红罗非鱼片",
      "roja-sin": "去皮红罗非鱼片",
      "negra-con": "带皮银罗非鱼片",
      "negra-sin": "去皮银罗非鱼片",
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
    freezes: {
      conventional: "常规冷冻",
      iqf: "IQF",
    },
    wa: (o) =>
      `您好，我是 ${o.name}。\n` +
      `公司：${o.company}\n` +
      `邮箱：${o.email}\n\n` +
      `希望向 CI Piscícola Botero SA 询价：\n\n` +
      `产品：${o.product}\n` +
      (o.color ? `颜色：${o.color}\n` : "") +
      (o.skin ? `鱼皮：${o.skin}\n` : "") +
      (o.process ? `加工方式：${o.process}\n` : "") +
      (o.size ? `规格：${o.size}\n` : "") +
      (o.freeze ? `冻结方式：${o.freeze}\n` : "") +
      `学名：${o.scientific}\n` +
      (o.packSecondary ? `内包装：${o.packPrimary}\n外包装：${o.packSecondary}\n` : `包装：${o.packPrimary}\n`) +
      (o.termoSize ? `保温箱规格：${o.termoSize}\n` : "") +
      `数量：${o.qty}\n` +
      `目的地：${o.city}, ${o.country}\n` +
      (o.incoterm ? `贸易术语：${o.incoterm}\n` : "") +
      (o.shipping ? `${o.shipping}\n` : "") +
      `\n此消息仅为询盘，不是已确认的采购。` +
      WA_SIGN,
  },
};

const GROUPS = {
  entera: {
    options: ["fresco", "congelado"],
    colors: ["roja", "negra"],
    processes: ["sesa", "ceca", "seca"],
    packPrimary: ["bolsa", "vacio", "granel"],
    packSecondary: ["termoIcopor"],
    termoSizes: ["t10", "t22"],
  },
  filete: {
    options: ["fresco", "congelado"],
    colors: ["roja", "negra"],
    skins: ["con", "sin"],
    packPrimary: ["bolsa", "vacio", "granel"],
    packSecondary: ["termoIcopor"],
    termoSizes: ["t5", "t10", "t22"],
  },
  subproductos: {
    options: ["pieles"],
    packFixed: { pieles: "palletStretch" },
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
  termoSize: null,
  freeze: null,
  skin: null,
  incoterm: "EXW",
  filletUnit: "oz",
  hover: {},
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

function sizesFor(groupId) {
  if (groupId === "filete") return Object.keys(FILLET_SIZE_OZ);
  if (groupId === "entera") return Object.keys(SIZE_RANGES);
  return null;
}

function sizeLabel(key) {
  const fillet = FILLET_SIZE_OZ[key];
  if (fillet) {
    const [from, to] = fillet;
    if (state.filletUnit === "g") {
      const gFrom = Math.round(from * OZ_TO_G);
      if (!to) return `${gFrom} g UP`;
      return `${gFrom} - ${Math.round(to * OZ_TO_G)} g`;
    }
    if (!to) return "9 UP";
    return `${from} - ${to} oz`;
  }
  const range = SIZE_RANGES[key];
  if (!range) return "";
  const [from, to] = range;
  if (state.mass === "lb") {
    return `${roundMass(from / 453.59237)} - ${roundMass(to / 453.59237)} lb`;
  }
  return `${from} - ${to} g`;
}

function shippingCopy(_groupId, option) {
  if (option === "congelado") return t().shipFrozen;
  return "";
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
    state.termoSize = group.termoSizes ? group.termoSizes[0] : null;
    return;
  }
  state.packPrimary = group.packFixed[state.option];
  state.packSecondary = null;
  state.termoSize = null;
}

function viewOf(overrides = {}) {
  return {
    group: state.group,
    option: state.option,
    color: state.color,
    process: state.process,
    size: state.size,
    freeze: state.freeze,
    skin: state.skin,
    packPrimary: state.packPrimary,
    packSecondary: state.packSecondary,
    termoSize: state.termoSize,
    ...state.hover,
    ...overrides,
  };
}

function colorFile(color) {
  if (color === "negra") return "plateada";
  return color || "";
}

function sizeScale(key) {
  return (
    {
      t80: 0.72,
      t350: 0.88,
      t550: 1,
      oz35: 0.7,
      oz46: 0.82,
      oz79: 0.94,
      oz9up: 1.08,
    }[key] || 1
  );
}

function needsFilletChoice() {
  return state.group === "filete" && state.option === "fresco";
}

function productPhotoKeys(view) {
  const keys = [];
  if (view.group === "entera") {
    const color = colorFile(view.color);
    if (view.slot !== "color" && view.option === "congelado") keys.push("entera-congelado");
    if (color && view.option && view.process) keys.push(`entera-${color}-${view.option}-${view.process}`);
    if (color && view.option) keys.push(`entera-${color}-${view.option}`);
    if (color) keys.push(`entera-${color}`);
    if (view.option) keys.push(`entera-${view.option}`);
    keys.push("entera");
  } else if (view.group === "filete") {
    const color = colorFile(view.color);
    if (view.skin === "con" && color) keys.push(`filete-${color}-piel`);
    if (view.skin === "sin") keys.push("filete-sin-piel");
    if (view.option) keys.push(`filete-${view.option}`);
    keys.push("filete");
  } else if (view.group === "subproductos") {
    if (view.option) keys.push(view.option);
    keys.push("subproductos");
  }
  return keys;
}

function packPhotoKeys(view) {
  const keys = [];
  if (view.packPrimary && view.packSecondary && view.termoSize) {
    keys.push(`${view.packPrimary}-${view.packSecondary}-${view.termoSize}`);
  }
  if (view.packPrimary && view.packSecondary) keys.push(`${view.packPrimary}-${view.packSecondary}`);
  if (view.packPrimary) keys.push(view.packPrimary);
  if (view.packSecondary) keys.push(view.packSecondary);
  if (view.termoSize) keys.push(view.termoSize);
  return keys;
}

const PHOTO_FILES = new Set([
  "assets/products/entera-fresco.jpg",
  "assets/products/entera-roja.jpg",
  "assets/products/entera-plateada.jpg",
  "assets/products/entera-congelado.jpg",
  "assets/products/filete-fresco.jpg",
  "assets/products/filete-congelado.jpg",
  "assets/products/filete-roja-piel.jpg",
  "assets/products/filete-plateada-piel.jpg",
  "assets/products/filete-sin-piel.jpg",
  "assets/packs/termoIcopor.jpg",
]);

function mediaBox(folder, keys, fallback) {
  const srcs = [];
  for (const key of keys) {
    [".jpg", ".jpeg", ".png", ".webp"].forEach((ext) => {
      const src = `assets/${folder}/${key}${ext}`;
      if (PHOTO_FILES.has(src)) srcs.push(src);
    });
  }
  const img = srcs.length
    ? `<img class="photo" hidden src="${srcs[0]}" data-fallbacks="${srcs.slice(1).join("|")}" alt="" />`
    : "";
  return `<div class="media">${img}<div class="fallback">${fallback}</div></div>`;
}

function frostOverlay() {
  return `<g opacity=".55" fill="#fff">
    <circle cx="70" cy="42" r="4"/>
    <circle cx="118" cy="36" r="3"/>
    <circle cx="156" cy="58" r="5"/>
    <circle cx="96" cy="88" r="3.5"/>
    <circle cx="178" cy="86" r="4"/>
  </g>`;
}

function fishArt(view) {
  const color =
    view.color === "roja" ? "#e3066a" : view.color === "negra" ? "#7b8b99" : view.option === "congelado" ? "#0077a8" : "#00a7e1";
  const scale = sizeScale(view.size);
  const scales = view.process === "sesa" || !view.process
    ? `<g fill="#fff" opacity=".28">
        <circle cx="86" cy="62" r="3"/><circle cx="104" cy="58" r="3"/><circle cx="122" cy="64" r="3"/>
        <circle cx="98" cy="76" r="2.5"/><circle cx="116" cy="74" r="2.5"/><circle cx="134" cy="70" r="2.5"/>
      </g>`
    : "";
  const belly = view.process === "seca" ? `<path d="M70 86c28 10 62 8 92-4" stroke="#10233a" stroke-width="3" opacity=".35"/>` : "";
  const frozen = view.option === "congelado" ? frostOverlay() : "";
  return `<svg viewBox="0 0 240 140" fill="none" aria-hidden="true">
    <g transform="translate(120 70) scale(${scale}) translate(-120 -70)">
      <path d="M88 32c18-20 40-22 54-8-16 8-32 10-54 8Z" fill="${color}" opacity=".85"/>
      <path d="M164 50c22-26 48-30 62-20-12 20-10 40 2 56-16 6-40-2-64-16Z" fill="${color}"/>
      <path d="M90 96c8 16 22 20 34 12-10-2-24-4-34-12Z" fill="${color}" opacity=".8"/>
      <path d="M24 74c16-36 78-52 124-28 16 8 28 22 40 20-8 14-4 26 2 38-18 4-32-4-50-2-44 6-92-6-116-28Z" fill="${color}"/>
      <path d="M50 70c36-8 78-6 112 10" stroke="#fff" stroke-width="3" opacity=".4"/>
      <path d="M66 56c8 10 8 22 0 32" stroke="#10233a" stroke-width="2.5" opacity=".25"/>
      ${scales}${belly}
      <circle cx="50" cy="64" r="7" fill="#fff"/>
      <circle cx="48" cy="64" r="3.5" fill="#10233a"/>
      <circle cx="47" cy="62" r="1.2" fill="#fff"/>
      ${frozen}
    </g>
  </svg>`;
}

function filletArt(view) {
  const color = view.option === "congelado" ? "#b10552" : "#e3066a";
  const scale = sizeScale(view.size);
  const frozen = view.option === "congelado" ? frostOverlay() : "";
  const iqf =
    view.freeze === "iqf"
      ? `<g opacity=".95">
          <path d="M28 78c14-22 48-32 84-18-6 10-4 20 2 30-30 4-60 2-86-12Z" fill="${color}"/>
          <path d="M92 70c14-20 46-28 78-14-6 10-4 18 2 28-28 4-54 2-80-14Z" fill="${color}" opacity=".85"/>
          <path d="M48 96c16-18 50-24 86-10-6 8-4 16 2 24-30 4-58 2-88-14Z" fill="${color}" opacity=".75"/>
        </g>`
      : `<path d="M30 88c22-40 86-58 150-34-8 18-6 36 4 52-54 8-108 4-154-18Z" fill="${color}"/>
         <path d="M48 82c28-8 70-12 112 2" stroke="#fff" stroke-width="3" opacity=".5"/>`;
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <g transform="translate(110 70) scale(${scale}) translate(-110 -70)">${iqf}${frozen}</g>
  </svg>`;
}

function packArt(view) {
  const primary = view.packPrimary || "bolsa";
  const cooler = view.packSecondary === "termoIcopor";
  const bag =
    primary === "vacio"
      ? `<rect x="58" y="28" width="88" height="78" rx="10" fill="#d7eef8" stroke="#0077a8" stroke-width="3"/>
         <path d="M70 46h64M70 62h64M70 78h44" stroke="#0077a8" stroke-width="3" opacity=".45"/>
         <path d="M86 28v-8h32v8" stroke="#0077a8" stroke-width="3"/>`
      : primary === "granel"
        ? `<path d="M52 46h100l-10 64H62Z" fill="#f3d27a" stroke="#c49a2a" stroke-width="3"/>
           <path d="M62 70h80" stroke="#c49a2a" stroke-width="3" opacity=".4"/>`
        : primary === "palletStretch"
          ? `<rect x="48" y="36" width="124" height="78" rx="6" fill="#d9dee4" stroke="#7b8b99" stroke-width="3"/>
             <path d="M48 58h124M48 78h124M70 36v78M98 36v78M126 36v78M150 36v78" stroke="#fff" stroke-width="2" opacity=".7"/>
             <path d="M40 42c20 8 36-6 70 4 28 8 48-4 70 8" stroke="#00a7e1" stroke-width="4" fill="none" opacity=".55"/>`
        : `<path d="M70 38c22-16 62-16 84 0v62c-24 14-62 14-84 0Z" fill="#cfeef8" stroke="#00a7e1" stroke-width="3"/>
           <path d="M78 58h68" stroke="#00a7e1" stroke-width="3" opacity=".4"/>`;
  const box = cooler
    ? `<g transform="translate(0 8)">
         <rect x="28" y="86" width="168" height="36" rx="8" fill="#f4fbff" stroke="#7b8b99" stroke-width="3"/>
         <rect x="40" y="96" width="40" height="16" rx="3" fill="#00a7e1" opacity=".25"/>
         <rect x="92" y="96" width="40" height="16" rx="3" fill="#00a7e1" opacity=".25"/>
         <rect x="144" y="96" width="36" height="16" rx="3" fill="#00a7e1" opacity=".25"/>
       </g>`
    : "";
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">${bag}${box}</svg>`;
}

function skinArt() {
  return `<svg viewBox="0 0 220 140" fill="none" aria-hidden="true">
    <path d="M36 40c48-8 96 10 148 4-10 28-6 54 8 76-58 6-108-8-156-18 8-22 6-44 0-62Z" fill="#c45c48" opacity=".9"/>
    <path d="M52 58c40-6 86 2 128 0" stroke="#fff" stroke-width="3" opacity=".35"/>
    <circle cx="70" cy="62" r="4" fill="#00a7e1"/>
    <circle cx="102" cy="70" r="4" fill="#e3066a"/>
    <circle cx="134" cy="60" r="4" fill="#00a7e1"/>
  </svg>`;
}

function productMedia(view) {
  const svg =
    view.group === "filete" ? filletArt(view) : view.group === "subproductos" ? skinArt() : fishArt(view);
  return mediaBox("products", productPhotoKeys(view), svg);
}

function packMedia(view) {
  return mediaBox("packs", packPhotoKeys(view), packArt(view));
}

function updateMediaFrames() {
  const view = viewOf();
  if ($("#configArt")) $("#configArt").innerHTML = productMedia(view);
  if ($("#packArt")) $("#packArt").innerHTML = packMedia(view);
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
  document.querySelectorAll("[data-fillet-unit]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filletUnit === state.filletUnit);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t()[el.dataset.i18nAria]);
  });
  renderProducts();
  if (state.group === "entera") renderColors();
  if (needsFilletChoice()) renderFilletVariants();
  if (state.group && state.option && (state.group !== "entera" || state.color) && (!needsFilletChoice() || (state.color && state.skin))) fillConfig();
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
            ${productMedia({ group: id, option })}
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
  if ((state.group === "entera" || state.group === "filete") && state.color) return dict.colorSci[state.color];
  return dict.groups[state.group].sci;
}

function renderFilletVariants() {
  const dict = t();
  $("#filletContext").textContent = dict.groups.filete.options[state.option] || "";
  const cards = [];
  GROUPS.filete.colors.forEach((color) => {
    GROUPS.filete.skins.forEach((skin) => {
      cards.push(`<button class="choice" type="button" data-color="${color}" data-skin="${skin}">
        ${productMedia({ group: "filete", option: state.option, color, skin })}
        <span>${dict.filletVariants[`${color}-${skin}`]}</span>
        <small class="sci">${dict.colorSci[color]}</small>
      </button>`);
    });
  });
  $("#filletCards").innerHTML = cards.join("");
}

function renderColors() {
  const dict = t();
  $("#colorContext").textContent = dict.groups.entera.options[state.option] || "";
  $("#colorCards").innerHTML = GROUPS.entera.colors
    .map(
      (color) => `<button class="choice" type="button" data-color="${color}">
        ${productMedia({ group: "entera", option: state.option, color, slot: "color" })}
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
  state.hover = {};
  const title = [
    groupCopy.options[state.option],
    id === "entera" && state.color ? dict.colors[state.color] : "",
    id === "filete" && state.color ? dict.filletColors[state.color] : "",
    id === "filete" && state.skin ? dict.skins[state.skin] : "",
  ]
    .filter(Boolean)
    .join(" · ");
  $("#configTitle").textContent = title;
  $("#configSci").textContent = scientificName();
  $("#configLede").textContent = groupCopy.lede;
  updateMediaFrames();
  const ship = shippingCopy(id, state.option);
  const shipHint = $("#shipHint");
  shipHint.hidden = !ship;
  shipHint.textContent = ship;

  const processField = $("#processField");
  const needsProcess = id === "entera";
  processField.hidden = !needsProcess;
  if (needsProcess) {
    if (!state.process) state.process = GROUPS.entera.processes[0];
    renderChips($("#processChips"), GROUPS.entera.processes, state.process, "process", (key) => dict.processes[key]);
  }

  const sizeField = $("#sizeField");
  const sizes = sizesFor(id);
  sizeField.hidden = !sizes;
  const filletSwitch = $("#filletUnitSwitch");
  filletSwitch.hidden = id !== "filete";
  document.querySelectorAll("[data-fillet-unit]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filletUnit === state.filletUnit);
  });
  if (sizes) {
    if (!state.size || !sizes.includes(state.size)) state.size = sizes[0];
    renderChips($("#sizeChips"), sizes, state.size, "size", sizeLabel);
  } else {
    $("#sizeChips").innerHTML = "";
  }

  const freezeField = $("#freezeField");
  const needsFreeze = state.option === "congelado";
  freezeField.hidden = !needsFreeze;
  if (needsFreeze) {
    if (!state.freeze) state.freeze = FREEZE_TYPES[0];
    renderChips($("#freezeChips"), FREEZE_TYPES, state.freeze, "freeze", (key) => dict.freezes[key]);
  } else {
    state.freeze = null;
    $("#freezeChips").innerHTML = "";
  }

  if (!state.incoterm) state.incoterm = INCOTERMS[0];
  renderChips($("#incotermChips"), INCOTERMS, state.incoterm, "incoterm", (key) => key);

  const dualPack = Boolean(group.packPrimary);
  $("#packPrimaryField").hidden = !dualPack;
  $("#packSecondaryField").hidden = !dualPack;
  $("#packFixedField").hidden = dualPack;
  if (dualPack) {
    if (!state.packPrimary || !group.packPrimary.includes(state.packPrimary)) state.packPrimary = group.packPrimary[0];
    if (!state.packSecondary) state.packSecondary = group.packSecondary[0];
    renderChips($("#packPrimaryChips"), group.packPrimary, state.packPrimary, "pack-primary", (key) => dict.packPrimary[key]);
    renderChips($("#packSecondaryChips"), group.packSecondary, state.packSecondary, "pack-secondary", (key) => dict.packSecondary[key]);
    $("#packFixedChips").innerHTML = "";
  } else {
    state.packPrimary = group.packFixed[state.option];
    state.packSecondary = null;
    state.termoSize = null;
    renderChips($("#packFixedChips"), [state.packPrimary], state.packPrimary, "pack-fixed", (key) => dict.packFixed[key]);
    $("#packPrimaryChips").innerHTML = "";
    $("#packSecondaryChips").innerHTML = "";
  }

  const termoSizes = dualPack && state.packSecondary === "termoIcopor" ? group.termoSizes : null;
  $("#termoSizeField").hidden = !termoSizes;
  if (termoSizes) {
    if (!state.termoSize || !termoSizes.includes(state.termoSize)) state.termoSize = termoSizes[0];
    renderChips($("#termoSizeChips"), termoSizes, state.termoSize, "termo-size", (key) => TERMO_SIZES[key]);
  } else {
    $("#termoSizeChips").innerHTML = "";
  }

  const unitEl = $("#unit");
  const prevUnit = unitEl.value;
  const unitKeys = [state.mass, "termos"];
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
  const packPrimary = group.packPrimary ? dict.packPrimary[o.packPrimary] : dict.packFixed[o.packPrimary];
  const packSecondary = group.packPrimary ? dict.packSecondary[o.packSecondary] : "";
  return {
    name: o.name,
    company: o.company,
    email: o.email,
    product: dict.groups[o.group].options[o.option],
    color: o.group === "entera" ? dict.colors[o.color] : o.group === "filete" && o.color ? dict.filletColors[o.color] : "",
    skin: o.skin ? dict.skins[o.skin] : "",
    process: o.group === "entera" ? dict.processes[o.process] : "",
    size: sizesFor(o.group) ? sizeLabel(o.size) : "",
    freeze: o.freeze ? dict.freezes[o.freeze] : "",
    scientific: o.color && (o.group === "entera" || o.group === "filete") ? dict.colorSci[o.color] : dict.groups[o.group].sci,
    packPrimary,
    packSecondary,
    termoSize: o.termoSize ? TERMO_SIZES[o.termoSize] : "",
    qty: qtyDisplay(o.qty, o.unitKey),
    city: o.city,
    country: o.country,
    incoterm: o.incoterm || "",
    shipping: shippingCopy(o.group, o.option),
  };
}

function renderTicket() {
  const dict = t();
  const o = formattedOrder();
  $("#ticket").innerHTML = `<dl>
    <dt>${dict.fields.product}</dt><dd>${o.product}</dd>
    ${o.color ? `<dt>${dict.fields.color}</dt><dd>${o.color}</dd>` : ""}
    ${o.skin ? `<dt>${dict.fields.skin}</dt><dd>${o.skin}</dd>` : ""}
    ${o.process ? `<dt>${dict.fields.process}</dt><dd>${o.process}</dd>` : ""}
    ${o.size ? `<dt>${dict.fields.size}</dt><dd>${o.size}</dd>` : ""}
    ${o.freeze ? `<dt>${dict.fields.freeze}</dt><dd>${o.freeze}</dd>` : ""}
    <dt>${dict.fields.scientific}</dt><dd class="sci">${o.scientific}</dd>
    ${
      o.packSecondary
        ? `<dt>${dict.fields.packPrimary}</dt><dd>${o.packPrimary}</dd><dt>${dict.fields.packSecondary}</dt><dd>${o.packSecondary}</dd>${o.termoSize ? `<dt>${dict.fields.termoSize}</dt><dd>${o.termoSize}</dd>` : ""}`
        : `<dt>${dict.fields.packaging}</dt><dd>${o.packPrimary}</dd>`
    }
    <dt>${dict.fields.quantity}</dt><dd>${o.qty}</dd>
    ${o.shipping ? `<dt>${dict.fields.shipping}</dt><dd>${o.shipping}</dd>` : ""}
    <dt>${dict.fields.destination}</dt><dd>${o.city}, ${o.country}</dd>
    ${o.incoterm ? `<dt>${dict.fields.incoterm}</dt><dd>${o.incoterm}</dd>` : ""}
    <dt>${dict.fields.client}</dt><dd>${o.name}</dd>
    <dt>${dict.fields.company}</dt><dd>${o.company}</dd>
    <dt>${dict.fields.email}</dt><dd>${o.email}</dd>
  </dl>`;
  $("#waBtn").href = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(dict.wa(o))}`;
}

function collectOrder() {
  return {
    group: state.group,
    option: state.option,
    color: state.color,
    skin: state.skin,
    process: state.process,
    size: state.size,
    packPrimary: state.packPrimary,
    packSecondary: state.packSecondary,
    termoSize: state.termoSize,
    freeze: state.freeze,
    incoterm: state.incoterm,
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
  state.termoSize = null;
  state.freeze = null;
  state.skin = null;
  state.incoterm = "EXW";
  showStage("welcome");
});

$("#backToProducts").addEventListener("click", () => {
  if (state.group === "entera") showStage("color");
  else if (needsFilletChoice()) showStage("fillet");
  else showStage("products");
});
$("#backToProductsFromColor").addEventListener("click", () => showStage("products"));
$("#backToProductsFromFillet").addEventListener("click", () => showStage("products"));
$("#backToConfig").addEventListener("click", () => showStage("config"));

$("#productCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-group]");
  if (!card) return;
  state.group = card.dataset.group;
  state.option = card.dataset.option;
  state.color = null;
  state.skin = null;
  state.process = null;
  state.size = null;
  state.freeze = card.dataset.option === "congelado" ? FREEZE_TYPES[0] : null;
  state.incoterm = "EXW";
  resetPack();
  if (state.group === "entera") {
    renderColors();
    showStage("color");
    return;
  }
  if (needsFilletChoice()) {
    renderFilletVariants();
    showStage("fillet");
    return;
  }
  fillConfig();
  showStage("config");
});

$("#filletCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-color][data-skin]");
  if (!card) return;
  state.color = card.dataset.color;
  state.skin = card.dataset.skin;
  state.size = sizesFor("filete")[0];
  resetPack();
  fillConfig();
  showStage("config");
});

$("#colorCards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-color]");
  if (!card) return;
  state.color = card.dataset.color;
  state.process = GROUPS.entera.processes[0];
  state.size = sizesFor("entera")[0];
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

$("#filletUnitSwitch").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-fillet-unit]");
  if (!btn) return;
  state.filletUnit = btn.dataset.filletUnit;
  fillConfig();
});

$("#freezeChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-freeze]");
  if (!chip) return;
  state.freeze = chip.dataset.freeze;
  fillConfig();
});

$("#incotermChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-incoterm]");
  if (!chip) return;
  state.incoterm = chip.dataset.incoterm;
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
  if (state.packSecondary === "termoIcopor" && GROUPS[state.group].termoSizes) {
    state.termoSize = GROUPS[state.group].termoSizes[0];
  } else {
    state.termoSize = null;
  }
  fillConfig();
});

function chipPreviewPair(chip) {
  if (chip.dataset.process) return ["process", chip.dataset.process];
  if (chip.dataset.size) return ["size", chip.dataset.size];
  if (chip.dataset.freeze) return ["freeze", chip.dataset.freeze];
  if (chip.dataset.packPrimary) return ["packPrimary", chip.dataset.packPrimary];
  if (chip.dataset.packSecondary) return ["packSecondary", chip.dataset.packSecondary];
  if (chip.dataset.termoSize) return ["termoSize", chip.dataset.termoSize];
  return null;
}

$("#stage-config").addEventListener("pointerover", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip || !$("#stage-config").contains(chip)) return;
  const pair = chipPreviewPair(chip);
  if (!pair) return;
  const [field, value] = pair;
  if (state.hover[field] === value) return;
  state.hover = { [field]: value };
  document.querySelectorAll("#stage-config .chip.is-preview").forEach((el) => el.classList.remove("is-preview"));
  chip.classList.add("is-preview");
  updateMediaFrames();
});

$("#stage-config").addEventListener("pointerout", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  const next = event.relatedTarget;
  if (next && chip.contains(next)) return;
  chip.classList.remove("is-preview");
  if (!Object.keys(state.hover).length) return;
  state.hover = {};
  updateMediaFrames();
});

document.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains("photo")) return;
    const rest = (img.dataset.fallbacks || "").split("|").filter(Boolean);
    if (rest.length) {
      img.dataset.fallbacks = rest.slice(1).join("|");
      img.src = rest[0];
      return;
    }
    img.remove();
  },
  true
);

document.addEventListener(
  "load",
  (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains("photo")) return;
    img.hidden = false;
    const fallback = img.nextElementSibling;
    if (fallback) fallback.hidden = true;
  },
  true
);

$("#termoSizeChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-termo-size]");
  if (!chip) return;
  state.termoSize = chip.dataset.termoSize;
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
  if (needsFilletChoice() && (!state.color || !state.skin)) return;
  if (sizesFor(state.group) && !state.size) return;
  if (group.packPrimary && (!state.packPrimary || !state.packSecondary)) return;
  if (!group.packPrimary && !state.packPrimary) return;
  if (group.termoSizes && state.packSecondary === "termoIcopor" && !state.termoSize) return;
  if (state.option === "congelado" && !state.freeze) return;
  if (!state.incoterm) return;
  state.order = collectOrder();
  renderTicket();
  showStage("summary");
});

applyI18n();
renderProducts();

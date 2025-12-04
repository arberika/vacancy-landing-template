// ⚡ Сварщик в Чехии

const CONFIG = {
  // === ОСНОВНАЯ ИНФОРМАЦИЯ ===
  vacancy: {
    title: "Работа сварщиком в Чехии",
    shortTitle: "Сварщики",
    description: "Официальное трудоустройство в чешской промышленной компании",
    country: "Чехия",
    company: "SvaroTech s.r.o.",
  },

  // === УСЛОВИЯ РАБОТЫ ===
  conditions: {
    salary: "1800-2200€",
    bonus: "до 400€",
    bonusType: "премии за качество работы",
    guarantee: "с полной социальной защитой",
    requirements: [
      "Опыт сварки от 2 лет",
      "Сертификат сварщика (приветствуется)",
      "Знание MIG/MAG, TIG (один из методов обязательно)",
      "Готовность к работе в сменном графике"
    ],
  },

  // === ПРЕИМУЩЕСТВА ===
  features: [
    "Официальное оформление по чешскому трудовому договору",
    "Премии за качество работы до 400€/мес",
    "Рабочая неделя 40 часов (двухсменный график 6:00-14:00 / 14:00-22:00)",
    "Помощь в получении рабочей визы и ВНЖ",
    "Работа на современном оборудовании",
    "Медицинская страховка и социальный пакет"
  ],

  // === КОНТАКТЫ ===
  contacts: {
    whatsapp: "+420123456789",
    whatsappText: "Dobrý den! Zajímá mě práce svářeče v České republice",
    telegram: "@svarotech_jobs",
    phone: "+420 (12) 345-6789",
    email: "jobs@svarotech.cz"
  },

  // === СОЦИАЛЬНЫЕ ДОКАЗАТЕЛЬСТВА ===
  socialProof: {
    driversCount: "180+",
    visaApproval: "94%",
    yearsOnMarket: "15",
    newPositions: "8"
  },

  // === О КОМПАНИИ ===
  company: {
    name: "SvaroTech s.r.o.",
    fullName: "SvaroTech Industrial s.r.o.",
    country: "Чехия",
    city: "Брно",
    foundedYear: "2008",
    license: "Лицензия на трудоустройство иностранных граждан от Ministerstvo práce a sociálních věcí",
    fleet: "3 производственных площадки в Чехии (Брно, Пльзень, Острава)",
    service: "Полное сопровождение при переезде, языковые курсы чешского",
    routes: "Производство промышленного оборудования, металлоконструкций, автомобильных компонентов"
  },

  // === FACEBOOK ===
  facebook: {
    pixelId: "XXXXXXXXXX",
    datasetId: "XXXXXXXXXX"
  },

  // === ТАРГЕТИНГ ===
  targeting: {
    countries: ["Украина", "Беларусь", "Молдова", "Казахстан", "Узбекистан"],
    languages: ["Русский", "Украинский", "Чешский"],
    ageRange: "22-50"
  },

  // === ИЗОБРАЖЕНИЯ ===
  images: {
    hero: "./images/welder-czech.jpg",
    heroAlt: "Professional welder at work in Czech Republic",
    testimonials: {
      badge: "SvaroTech Team",
      logo: "./images/logo-svarotech.png"
    }
  },

  // === SEO ===
  seo: {
    title: "Работа сварщиком в Чехии | SvaroTech | 1800-2200€ + премии",
    description: "Официальная работа сварщиком в Чехии. Зарплата 1800-2200€ + премии до 400€. Помощь с визой и ВНЖ. Опыт от 2 лет, знание MIG/MAG или TIG.",
    keywords: ["работа сварщиком", "Чехия", "сварщик", "svářeč", "вакансия", "MIG", "TIG"]
  },

  // === АНАЛИТИКА ===
  analytics: {
    googleAnalytics: {
      enabled: true,
      measurementId: "G-XXXXXXXXXX"
    },
    yandexMetrika: {
      enabled: true,
      counterId: "XXXXXXXX"
    },
    facebookPixel: {
      enabled: true,
      pixelId: "XXXXXXXXXX"
    }
  },

  // === ЦВЕТА ===
  colors: {
    primary: "slate",
    secondary: "gray",
    accent: "zinc",
    danger: "red"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

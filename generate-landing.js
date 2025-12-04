#!/usr/bin/env node

// 🔧 ГЕНЕРАТОР ЛЕНДИНГА
// Читает config.js и создает кастомизированный index.html

const fs = require('fs');
const path = require('path');

// Загружаем конфигурацию
const CONFIG = require('./config.js');

console.log('🚀 Генерация лендинга...');
console.log(`📋 Вакансия: ${CONFIG.vacancy.title}`);
console.log(`🏢 Компания: ${CONFIG.company.name}`);

// Читаем шаблон
const templatePath = path.join(__dirname, 'template.html');
let html = fs.readFileSync(templatePath, 'utf-8');

// === ЗАМЕНА ПЕРЕМЕННЫХ ===

// SEO
html = html.replace(/{{seo\.title}}/g, CONFIG.seo.title);
html = html.replace(/{{seo\.description}}/g, CONFIG.seo.description);
html = html.replace(/{{seo\.keywords}}/g, CONFIG.seo.keywords.join(', '));

// Vacancy
html = html.replace(/{{vacancy\.title}}/g, CONFIG.vacancy.title);
html = html.replace(/{{vacancy\.shortTitle}}/g, CONFIG.vacancy.shortTitle);
html = html.replace(/{{vacancy\.description}}/g, CONFIG.vacancy.description);
html = html.replace(/{{vacancy\.country}}/g, CONFIG.vacancy.country);
html = html.replace(/{{vacancy\.company}}/g, CONFIG.vacancy.company);

// Conditions
html = html.replace(/{{conditions\.salary}}/g, CONFIG.conditions.salary);
html = html.replace(/{{conditions\.bonus}}/g, CONFIG.conditions.bonus);
html = html.replace(/{{conditions\.bonusType}}/g, CONFIG.conditions.bonusType);
html = html.replace(/{{conditions\.guarantee}}/g, CONFIG.conditions.guarantee);

// Requirements list
const requirementsList = CONFIG.conditions.requirements
  .map(req => `<li class="flex items-start gap-2"><span class="text-emerald-400 flex-shrink-0">✓</span><span>${req}</span></li>`)
  .join('\n                ');
html = html.replace(/{{conditions\.requirements}}/g, requirementsList);

// Features list
const featuresList = CONFIG.features
  .map(feature => `<li class="flex items-start gap-3"><span class="text-cyan-400 text-xl flex-shrink-0">✓</span><span class="text-slate-200">${feature}</span></li>`)
  .join('\n              ');
html = html.replace(/{{features}}/g, featuresList);

// Contacts
html = html.replace(/{{contacts\.whatsapp}}/g, CONFIG.contacts.whatsapp);
html = html.replace(/{{contacts\.whatsappText}}/g, encodeURIComponent(CONFIG.contacts.whatsappText));
html = html.replace(/{{contacts\.telegram}}/g, CONFIG.contacts.telegram);
html = html.replace(/{{contacts\.phone}}/g, CONFIG.contacts.phone);
html = html.replace(/{{contacts\.email}}/g, CONFIG.contacts.email);

// Social Proof
html = html.replace(/{{socialProof\.driversCount}}/g, CONFIG.socialProof.driversCount);
html = html.replace(/{{socialProof\.visaApproval}}/g, CONFIG.socialProof.visaApproval);
html = html.replace(/{{socialProof\.yearsOnMarket}}/g, CONFIG.socialProof.yearsOnMarket);
html = html.replace(/{{socialProof\.newPositions}}/g, CONFIG.socialProof.newPositions);

// Company
html = html.replace(/{{company\.name}}/g, CONFIG.company.name);
html = html.replace(/{{company\.fullName}}/g, CONFIG.company.fullName);
html = html.replace(/{{company\.country}}/g, CONFIG.company.country);
html = html.replace(/{{company\.city}}/g, CONFIG.company.city);
html = html.replace(/{{company\.foundedYear}}/g, CONFIG.company.foundedYear);
html = html.replace(/{{company\.license}}/g, CONFIG.company.license);
html = html.replace(/{{company\.fleet}}/g, CONFIG.company.fleet);
html = html.replace(/{{company\.service}}/g, CONFIG.company.service);
html = html.replace(/{{company\.routes}}/g, CONFIG.company.routes);

// Facebook Pixel
html = html.replace(/{{facebook\.pixelId}}/g, CONFIG.facebook.pixelId);
html = html.replace(/{{facebook\.datasetId}}/g, CONFIG.facebook.datasetId);

// Images
html = html.replace(/{{images\.hero}}/g, CONFIG.images.hero);
html = html.replace(/{{images\.heroAlt}}/g, CONFIG.images.heroAlt);

// Colors (Tailwind classes)
html = html.replace(/cyan/g, CONFIG.colors.primary);
html = html.replace(/blue/g, CONFIG.colors.secondary);
html = html.replace(/emerald/g, CONFIG.colors.accent);

// Targeting (for meta tags)
const targetingCountries = CONFIG.targeting.countries.join(', ');
const targetingLanguages = CONFIG.targeting.languages.join(', ');
html = html.replace(/{{targeting\.countries}}/g, targetingCountries);
html = html.replace(/{{targeting\.languages}}/g, targetingLanguages);
html = html.replace(/{{targeting\.ageRange}}/g, CONFIG.targeting.ageRange);

// Сохраняем результат
const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, html, 'utf-8');

console.log('');
console.log('✅ Лендинг успешно создан!');
console.log(`📄 Файл: ${outputPath}`);
console.log('');
console.log('📋 Следующие шаги:');
console.log('1. Проверьте index.html в браузере');
console.log('2. Настройте изображения в папке /images/');
console.log('3. Деплой на Vercel: vercel --prod');
console.log('');
console.log('🎨 Настройка:');
console.log('- Измените config.js под вашу вакансию');
console.log('- Запустите: node generate-landing.js');
console.log('');

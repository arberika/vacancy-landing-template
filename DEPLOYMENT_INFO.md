# 🚀 Deployment Information

## ✅ Что создано

### 1. GitHub Repository
**URL:** https://github.com/arberika/vacancy-landing-template

Репозиторий содержит:
- ✅ `config.js` - конфигурация вакансии
- ✅ `generate-landing.js` - генератор лендинга
- ✅ `template.html` - HTML шаблон
- ✅ `api/analytics.js` - серверная аналитика (Facebook CAPI + Telegram)
- ✅ `README.md` - основная документация
- ✅ `USAGE_GUIDE.md` - подробное руководство по использованию
- ✅ Все ресурсы (images, videos, assets)

### 2. Vercel Deployment
**Production URL:** https://vacancy-landing-template-qk73zo5xc-woweri.vercel.app

**Vercel Dashboard:** https://vercel.com/woweri/vacancy-landing-template

Настроен автоматический деплой при push в main ветку.

### 3. Текущая конфигурация

Сейчас шаблон настроен на вакансию "Водитель C+E":
- Компания: ERIAR
- Зарплата: 2500-2700€
- WhatsApp: +1 732-963-5593
- Facebook Pixel: 3789700971281396

## 📋 Следующие шаги

### Для использования шаблона создания новых вакансий:

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/arberika/vacancy-landing-template.git new-vacancy-name
   cd new-vacancy-name
   ```

2. **Измените config.js** под новую вакансию

3. **Сгенерируйте лендинг:**
   ```bash
   node generate-landing.js
   ```

4. **Создайте новый GitHub репозиторий:**
   ```bash
   git remote remove origin
   gh repo create new-vacancy-name --public --source=. --remote=origin --push
   ```

5. **Деплой на Vercel:**
   ```bash
   vercel --prod --yes
   ```

6. **Настройте Environment Variables** в Vercel Dashboard

Подробные инструкции: [USAGE_GUIDE.md](./USAGE_GUIDE.md)

## 🔧 Environment Variables (нужно настроить в Vercel)

Для работы аналитики и уведомлений добавьте в Vercel:

```bash
# Facebook Conversions API
FB_PIXEL_ID=3789700971281396
FB_DATASET_ID=678938088055473
FB_ACCESS_TOKEN=получите_через_get-fb-token.sh

# Telegram уведомления (опционально)
TELEGRAM_BOT_TOKEN=ваш_бот_токен
TELEGRAM_CHAT_ID=ваш_чат_id
```

### Как получить FB_ACCESS_TOKEN:

```bash
bash get-fb-token.sh
```

Следуйте инструкциям в скрипте. Токен действителен 60 дней.

## 📊 Мониторинг и аналитика

### Vercel Logs
```bash
cd /Users/erika/Downloads/vacancy-landing-template
vercel logs production --since 1h
```

### Facebook Events Manager
https://business.facebook.com/events_manager2/list/pixel/3789700971281396/overview

### GitHub Actions (если настроите)
https://github.com/arberika/vacancy-landing-template/actions

## 🎨 Примеры использования

### Создать лендинг для складских работников:

```bash
# 1. Клонировать
git clone https://github.com/arberika/vacancy-landing-template.git warehouse-landing
cd warehouse-landing

# 2. Изменить config.js
vim config.js  # или любой редактор

# 3. Заменить изображения
cp ~/new-warehouse-photo.jpg images/hero-warehouse.jpg

# 4. Сгенерировать
node generate-landing.js

# 5. Проверить
open index.html

# 6. Деплой
git remote remove origin
gh repo create warehouse-landing --public --source=. --remote=origin --push
vercel --prod --yes
```

### Создать лендинг для IT специалистов:

```bash
git clone https://github.com/arberika/vacancy-landing-template.git fullstack-dev-landing
cd fullstack-dev-landing

# Измените config.js:
# - vacancy.title = "Senior Fullstack Developer (React + Node.js)"
# - conditions.salary = "4000-6000€"
# - colors.primary = "purple"
# - и т.д.

node generate-landing.js
gh repo create fullstack-dev-landing --public --source=. --remote=origin --push
vercel --prod --yes
```

## 💡 Tips

1. **Отдельный Facebook Pixel для каждой вакансии** - создавайте новый Pixel в Events Manager для точной аналитики

2. **Уникальные изображения** - используйте реальные фото с места работы или качественный stock

3. **A/B тестирование** - создайте 2 варианта лендинга с разными заголовками/цветами

4. **Мобильная оптимизация** - проверяйте на телефоне (большинство трафика мобильное)

5. **Регулярно обновляйте** - меняйте urgency timer и количество свободных мест

## 🆘 Support

- **GitHub Issues:** https://github.com/arberika/vacancy-landing-template/issues
- **Usage Guide:** [USAGE_GUIDE.md](./USAGE_GUIDE.md)
- **Telegram:** @eriar_jobs

## 📁 Файлы проекта

```
vacancy-landing-template/
├── config.js              # ← ГЛАВНЫЙ ФАЙЛ: настройки вакансии
├── generate-landing.js    # Генератор (node generate-landing.js)
├── template.html          # HTML шаблон с плейсхолдерами
├── index.html             # Сгенерированный лендинг
├── get-fb-token.sh        # Скрипт получения Facebook токена
├── README.md              # Основная документация
├── USAGE_GUIDE.md         # Подробное руководство
├── DEPLOYMENT_INFO.md     # Этот файл
├── .gitignore
├── package.json
├── vercel.json            # Конфигурация Vercel
├── api/
│   ├── analytics.js       # Серверная аналитика (CAPI + Telegram)
│   └── stats.js           # Статистика
├── images/
│   └── hero-truck.jpg     # Главное изображение
├── videos/
│   ├── video4.mp4
│   ├── video5.mp4
│   ├── video6.mp4
│   └── video7.mp4
└── assets/
    ├── tailwind.js
    ├── element_sdk.js
    └── data_sdk.js
```

## 🎯 Технологии

- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **Backend:** Vercel Serverless Functions (Node.js)
- **Аналитика:** Facebook Pixel + Conversions API
- **Уведомления:** Telegram Bot API
- **Хостинг:** Vercel (auto-deploy on push)
- **VCS:** GitHub

---

**Дата создания:** 2025-12-04
**Версия:** 1.0.0
**Автор:** Created with Claude Code

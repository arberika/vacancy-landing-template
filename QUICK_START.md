# 🚀 Быстрый старт: Создание лендинга для новой вакансии

## 📋 Пошаговая инструкция (5 минут)

### Шаг 1: Выберите готовый пример

У вас есть готовые примеры в папке `/examples/`:

```
examples/
├── germany-warehouse-worker.js   # 📦 Разнорабочий на складе в Германии
├── poland-construction-worker.js # 🏗️ Строитель в Польше
└── czech-welder.js               # ⚡ Сварщик в Чехии
```

**Или создайте свой** на основе `config.js`

---

### Шаг 2: Клонируйте шаблон

```bash
# Перейдите в папку где хотите создать новый проект
cd ~/Projects  # или любая другая папка

# Клонируйте шаблон с новым именем
git clone https://github.com/arberika/vacancy-landing-template.git germany-warehouse-landing

# Перейдите в новую папку
cd germany-warehouse-landing
```

---

### Шаг 3: Скопируйте нужный пример

```bash
# Для разнорабочего в Германии:
cp examples/germany-warehouse-worker.js config.js

# Для строителя в Польше:
cp examples/poland-construction-worker.js config.js

# Для сварщика в Чехии:
cp examples/czech-welder.js config.js
```

---

### Шаг 4: Настройте config.js

Откройте `config.js` и измените:

#### 4.1. Контакты (ОБЯЗАТЕЛЬНО!)
```javascript
contacts: {
  whatsapp: "+49XXXXXXXXX",  // ВАШ номер WhatsApp
  whatsappText: "...",         // Текст первого сообщения
  telegram: "@your_username",  // ВАШ Telegram
  phone: "+49 (XXX) XXX-XXX",
  email: "jobs@yourcompany.com"
},
```

#### 4.2. Аналитика (ОБЯЗАТЕЛЬНО!)
```javascript
analytics: {
  facebookPixel: {
    enabled: true,
    pixelId: "YOUR_NEW_PIXEL_ID"  // Создайте НОВЫЙ пиксель!
  },
  googleAnalytics: {
    enabled: true,
    measurementId: "G-XXXXXXXXXX"  // Создайте новый GA4
  },
  yandexMetrika: {
    enabled: true,
    counterId: "XXXXXXXX"  // Создайте новый счётчик
  }
}
```

⚠️ **ВАЖНО:** Создавайте НОВЫЕ счётчики аналитики для каждой вакансии! Не используйте одни и те же.

#### 4.3. Остальное (по желанию)
- Зарплата
- Требования
- Преимущества
- Цвета

---

### Шаг 5: Замените изображение

```bash
# Удалите старое
rm images/hero-truck.jpg

# Скопируйте новое (фото склада/стройки/сварки)
cp ~/Downloads/warehouse-photo.jpg images/hero-warehouse.jpg
```

Обновите путь в `config.js`:
```javascript
images: {
  hero: "./images/hero-warehouse.jpg",
  heroAlt: "Modern warehouse in Germany"
}
```

---

### Шаг 6: Сгенерируйте лендинг

```bash
node generate-landing.js
```

Вы увидите:
```
🚀 Генерация лендинга...
📋 Вакансия: Работа разнорабочим на складе в Германии
🏢 Компания: LogisticPro GmbH

✅ Лендинг успешно создан!
📄 Файл: /path/to/germany-warehouse-landing/index.html
```

---

### Шаг 7: Проверьте локально

```bash
open index.html
```

Убедитесь что:
- ✅ Все тексты правильные
- ✅ Изображение отображается
- ✅ WhatsApp/Telegram ссылки работают
- ✅ Номер телефона правильный

---

### Шаг 8: Создайте новый GitHub репозиторий

```bash
# Удалите старый remote
git remote remove origin

# Инициализируйте новый Git
git add .
git commit -m "Initial commit: Germany warehouse worker landing"

# Создайте репозиторий на GitHub
gh repo create germany-warehouse-landing --public --source=. --remote=origin --push
```

---

### Шаг 9: Деплой на Vercel

```bash
vercel --prod --yes
```

Вы получите URL:
```
Production: https://germany-warehouse-landing.vercel.app
```

---

### Шаг 10: Настройте Environment Variables в Vercel

1. Откройте Vercel Dashboard:
   ```
   https://vercel.com/woweri/germany-warehouse-landing/settings/environment-variables
   ```

2. Добавьте переменные:
   ```
   FB_PIXEL_ID=YOUR_NEW_PIXEL_ID
   FB_DATASET_ID=YOUR_NEW_DATASET_ID
   FB_ACCESS_TOKEN=your_token
   TELEGRAM_BOT_TOKEN=your_bot_token (опционально)
   TELEGRAM_CHAT_ID=your_chat_id (опционально)
   ```

3. Redeploy:
   ```bash
   vercel --prod --yes
   ```

---

## ✅ Готово!

Ваш новый лендинг доступен по адресу: `https://germany-warehouse-landing.vercel.app`

---

## 📊 Создание счётчиков аналитики

### Facebook Pixel:
1. https://business.facebook.com/events_manager2
2. Создайте новый Dataset
3. Скопируйте Pixel ID и Dataset ID
4. Добавьте в `config.js` и Vercel Environment Variables

### Google Analytics:
1. https://analytics.google.com/
2. Создайте новый ресурс (Property)
3. Создайте Web Stream
4. Скопируйте Measurement ID (G-XXXXXXXXXX)
5. Добавьте в `config.js`

### Яндекс.Метрика:
1. https://metrika.yandex.ru/
2. Создайте новый счётчик
3. Скопируйте Counter ID (8-значное число)
4. Добавьте в `config.js`

---

## 🎨 Примеры для разных вакансий

### 1. Разнорабочий на складе в Германии
```bash
cp examples/germany-warehouse-worker.js config.js
```
- Зарплата: 2200-2500€
- Цвета: синий (blue)
- Нацелено на: Узбекистан, Таджикистан, Киргизия

### 2. Строитель в Польше
```bash
cp examples/poland-construction-worker.js config.js
```
- Зарплата: 1800-2300€
- Цвета: оранжевый (orange)
- Нацелено на: Украина, Беларусь, Молдова

### 3. Сварщик в Чехии
```bash
cp examples/czech-welder.js config.js
```
- Зарплата: 1800-2200€
- Цвета: серый (slate)
- Нацелено на: Украина, Беларусь, Казахстан

---

## 🔄 Создание нескольких лендингов

Если нужно создать несколько лендингов для разных вакансий:

```bash
# Лендинг 1: Разнорабочие Германия
git clone https://github.com/arberika/vacancy-landing-template.git germany-warehouse
cd germany-warehouse
cp examples/germany-warehouse-worker.js config.js
# ... настройте, сгенерируйте, задеплойте

# Лендинг 2: Строители Польша
git clone https://github.com/arberika/vacancy-landing-template.git poland-construction
cd poland-construction
cp examples/poland-construction-worker.js config.js
# ... настройте, сгенерируйте, задеплойте

# Лендинг 3: Сварщики Чехия
git clone https://github.com/arberika/vacancy-landing-template.git czech-welder
cd czech-welder
cp examples/czech-welder.js config.js
# ... настройте, сгенерируйте, задеплойте
```

---

## 💡 Tips

### 1. Используйте разные домены для разных стран:
- Германия: `germany-warehouse.vercel.app`
- Польша: `poland-construction.vercel.app`
- Чехия: `czech-welder.vercel.app`

### 2. Разные Facebook Pixels:
- Создавайте НОВЫЙ пиксель для каждой вакансии
- Это даст точную аналитику по каждому направлению

### 3. UTM параметры для рекламы:
```
https://germany-warehouse.vercel.app/?lang=uz&utm_source=facebook&utm_campaign=warehouse_de
```

### 4. Разные изображения:
- Используйте реальные фото с мест работы
- Или качественный stock с Unsplash/Pexels
- Минимум 1920x1080px

---

## 🆘 Troubleshooting

### "Не могу создать репозиторий на GitHub"
```bash
# Убедитесь что gh CLI установлен
brew install gh

# Авторизуйтесь
gh auth login
```

### "Vercel не деплоит"
```bash
# Убедитесь что залогинены
vercel login

# Попробуйте заново
vercel --prod --yes
```

### "Генератор не работает"
```bash
# Убедитесь что Node.js установлен
node --version

# Должно быть v14+ или выше
```

---

**Готово! 🎉**

Теперь вы можете создавать лендинги для любых вакансий за 5 минут!

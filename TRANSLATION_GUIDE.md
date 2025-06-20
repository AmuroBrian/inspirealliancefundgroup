# Translation Implementation Guide

## 🎯 Overview

This guide shows you how to translate the remaining components in your project systematically.

## ✅ Already Translated Components

- ✅ Header (Language button working)
- ✅ Main Page (Hero section)
- ✅ About Component
- ✅ Mission Component

## 🔄 Components Still Need Translation

### 1. News Component

**File:** `src/app/components/News.jsx`
**Steps:**

1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in component
3. Replace hardcoded text with `t('news.key')`
4. Add translations to `src/i18n/locales/en.json` and `src/i18n/locales/ja.json`

### 2. Contact Component

**File:** `src/app/components/Contact.jsx`
**Steps:**

1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in component
3. Replace hardcoded text with `t('contact.key')`
4. Add translations to JSON files

### 3. Other Components

- ServicesAndSolution
- InvestmentInsights
- Subsidiaries
- SuccessStories
- Organization
- Footer

## 📝 Translation Process for Each Component

### Step 1: Import i18n Hook

```jsx
import { useTranslation } from "react-i18next";
```

### Step 2: Add Hook to Component

```jsx
const YourComponent = () => {
  const { t } = useTranslation();
  // ... rest of component
};
```

### Step 3: Replace Text

```jsx
// Before
<h1>Welcome to Our Service</h1>

// After
<h1>{t('services.welcome')}</h1>
```

### Step 4: Add Translation Keys

Add to both `src/i18n/locales/en.json` and `src/i18n/locales/ja.json`:

**English (en.json):**

```json
{
  "services": {
    "welcome": "Welcome to Our Service"
  }
}
```

**Japanese (ja.json):**

```json
{
  "services": {
    "welcome": "私たちのサービスへようこそ"
  }
}
```

## 🚀 How to Test

1. Start your development server:

```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`
3. Click the language button in the header
4. Verify text changes between English and Japanese

## 📋 Translation Checklist

For each component:

- [ ] Import useTranslation hook
- [ ] Add hook to component function
- [ ] Identify all hardcoded text
- [ ] Replace with t('key') syntax
- [ ] Add English translations to en.json
- [ ] Add Japanese translations to ja.json
- [ ] Test language switching

## 🎨 Special Cases

### For Multi-line Text

Use `\n` in JSON for line breaks and `whitespace-pre-line` class:

```jsx
<p className="whitespace-pre-line">{t("about.description")}</p>
```

### For Dynamic Content

Use interpolation:

```jsx
{
  t("welcome.message", { name: userName });
}
```

JSON:

```json
{
  "welcome": {
    "message": "Welcome, {{name}}!"
  }
}
```

## 🔧 Debugging Tips

1. **Translation not showing:** Check if the key exists in both JSON files
2. **Language not switching:** Verify the i18n config is imported in layout.js
3. **Japanese text not displaying:** Ensure proper font support in CSS

## 📞 Need Help?

The basic structure is set up. For each component:

1. Follow the 4-step process above
2. Test the translation
3. Move to the next component

This systematic approach ensures all components are properly internationalized!

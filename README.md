# Landing Page Demo

صفحة هبوط (hero + شريط شعارات متحرك) كتمرين على الـ CSS animations وـ IntersectionObserver، مبنية بـ HTML وCSS وJavaScript وBootstrap grid.

> **المحتوى تجريبي.** أسماء الشركات والشعارات وهمية، ومكتوب ذلك داخل الصفحة نفسها. الموقع مش لعميل حقيقي.

**العرض المباشر:** https://qr-landing-page-nine.vercel.app/

## ما الذي يعمل فعلاً

- شريط شعارات لا نهائي بـ CSS فقط: القائمة مكررة مرة واحدة وبتتحرك `translateX(-50%)` فالحلقة بتبان متصلة، وبيقف عند المرور بالماوس.
- ظهور تدريجي للأقسام بـ IntersectionObserver.
- حركة خفيفة للـ hero عند التمرير (passive listener + requestAnimationFrame).
- كل الحركات بتتوقف مع `prefers-reduced-motion`، والصفحة تفضل ظاهرة كاملة لو الـ JS ما اشتغلش.
- النسخة المكررة من الشعارات مخفية عن قارئات الشاشة.

## تشغيل محلي

```bash
python -m http.server 8000
```

## الهيكل

```
index.html
css/style.css   (+ bootstrap grid و font awesome)
js/script.js
favicon.svg
```

تصميم وتطوير [محمد خليل](https://github.com/medokalel).

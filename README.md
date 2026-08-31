# Portfolio Project — بورتوفليو سينمائي احترافي

## 💡 الفكرة الأساسية

بورتوفليو شخصي احترافي جداً، الفكرة الجوهرية فيه هي **مشهد سينمائي دخولي (Cinematic Intro)** يظهر فور فتح الموقع، ويتم التحكم به بشكل كامل عبر **سكرول الماوس (Scroll-Driven Animation)** — بحيث كل حركة بالماوس بتقدّم أو بترجّع بالمشهد بدقة وسلاسة، تماماً بنفس أسلوب صفحات منتجات Apple (زي AirPods, Vision Pro).

بعد انتهاء المشهد السينمائي (نهاية السكرول الخاص فيه)، تنتقل الصفحة تلقائياً لعرض باقي المعلومات الشخصية:
- نبذة عني (About)
- المهارات (Skills)
- المشاريع (Projects)
- التواصل (Contact)

---

## 🎬 آلية عمل المشهد السينمائي (تقنياً)

المتصفح لا يستطيع ربط تشغيل فيديو عادي (`<video>`) بحركة السكرول بدقة وسلاسة عبر كل المتصفحات والأجهزة. الحل الاحترافي المستخدم من كبرى الشركات هو:

1. تصوير/توليد **فيديو سينمائي قصير** (٤-٨ ثواني كافية).
2. تحويل الفيديو إلى **سلسلة صور متتابعة (Frame Sequence)** — تقريباً ١٠٠-٢٠٠ صورة (استخراج frame كل جزء من الثانية عبر ffmpeg).
3. رسم الصور على عنصر `<canvas>` بواسطة JavaScript، بحيث رقم الصورة المعروضة يتغيّر حسب موضع السكرول (Scroll Scrubbing).

بهذه الطريقة يتم "التحكم" بالفيديو بالماوس بشكل مثالي وسلس على كل الأجهزة.

---

## 🛠️ المتطلبات التقنية (Tech Stack)

### الأصول (Assets)
- فيديو سينمائي شخصي عالي الجودة (يُفضّل 4K)
- صور المشاريع والسيرة الذاتية ومعلومات التواصل
- خط (Font) مميز — Google Fonts (مثل Cormorant, Neue Montreal) أو خط عربي فخم

### الأدوات والمكتبات
- **HTML / CSS / JavaScript** (أو React / Next.js لتقنية أقوى)
- **GSAP + ScrollTrigger** — المكتبة الأساسية لحركات السكرول الاحترافية
- **Canvas API** — لعرض سلسلة الصور (Frame Sequence)
- اختياري: **Three.js** لعناصر ثلاثية الأبعاد إضافية

### خطوات العمل
1. تصوير أو توليد الفيديو السينمائي
2. استخراج الفريمات (ffmpeg أو أدوات أونلاين)
3. ضغط الصور بصيغة WebP لتقليل حجم الموقع (خطوة حرجة لتفادي ثقل التحميل)
4. بناء صفحة الهبوط مع تقنية الـ Canvas Scrubbing المرتبطة بالسكرول
5. إضافة سكشنات المعلومات الشخصية بعد نهاية المشهد، بحركات دخول ناعمة (fade / slide عبر GSAP)
6. جعل التصميم متجاوب (Responsive) بحيث يعمل المشهد بسلاسة على الموبايل أيضاً

---

## 🤖 توليد المشهد السينمائي عبر Gemini (Veo)

### مكان الأداة
Veo موجود داخل تطبيق **Gemini** العادي (ضمن اشتراك Gemini Plus / Google AI Pro) وليس أداة منفصلة:
1. افتح تطبيق Gemini
2. من مربع البرومبت، اضغط على أيقونة الأدوات (Tools) أو "+"
3. اختر **Videos**
4. ارفع الصورة الشخصية + أضف البرومبت الوصفي (Image-to-Video)

**الحدود التقريبية:** ~3 توليدات فيديو يومياً، مدة الفيديو ٨ ثواني، جودة 720p (للحصول على 4K/1080p تحتاج AI Ultra أو أداة Flow).

### الصور المستخدمة
- **صورة الخلفية البيضاء (رسمية):** لحفظ الملامح الدقيقة فقط، غير مناسبة وحدها للمشهد السينمائي.
- **صورة الخلفية المظلمة (كود + إضاءة زرقاء):** هي الأنسب فعلياً كصورة إدخال (Image-to-Video) للمشهد السينمائي، لأنها تحتوي إضاءة درامية جانبية زرقاء، خلفية كود مبرمج، وزاوية تصوير قوية من الخلف/الجانب.

### البرومبت المعتمد للمشهد (مبني على صورة الخلفية المظلمة)

```
Cinematic slow motion shot, professional film quality, dark moody atmosphere.

The subject is standing with his back partially to the camera, facing a screen with glowing blue code reflections on his face and neck.

Camera movement: Slow, smooth orbit/arc movement around the subject from behind-side angle to a three-quarter front angle, as if revealing his face gradually. Alternatively: subject slowly turns his head and shoulders toward the camera with a calm, confident, focused expression.

Lighting: Keep the exact same lighting style — deep black background, cool blue rim light from the screen, high contrast, dramatic shadows, cinematic color grading (teal tones).

Motion: Very subtle, slow, and smooth — no shaking, no fast movement. Subject breathing naturally, slight head movement.

Details: Preserve facial identity and features exactly as shown, photorealistic, hyper-detailed skin and hair texture, 4K quality, shallow depth of field, film grain.

Mood: Powerful, mysterious, focused, professional — like the opening shot of a tech documentary or a premium developer portfolio intro.

No text overlays, no logos, no extra people, natural motion physics.

Aspect ratio: 16:9.
```

**ملاحظة:** يُفضّل البدء بحركة بسيطة (التفاتة نحو الكاميرا) بدل حركة orbit كاملة حول الشخص، لأن الحركات المعقدة أصعب على النماذج الحالية وقد تُنتج تشوهات.

### خطة احتياطية
يوجد مشهد سينمائي جاهز ومُعد مسبقاً على الجهاز الشخصي، يُستخدم كبديل في حال لم تكن نتيجة Veo مقنعة بصرياً.

### مشكلة تم حلها: الحفاظ على ملامح الوجه
أول نتيجة من Veo لم تحافظ على ملامح الوجه الحقيقية. الحلول المعتمدة:
1. **رفع صورتين معاً كمرجع** عند التوليد: صورة الخلفية البيضاء (لضبط ملامح الوجه بدقة) + صورة الخلفية المظلمة (لضبط الإضاءة والمشهد والخلفية)، مع توضيح دور كل صورة داخل البرومبت.
2. **بديل أدق:** دمج الوجه على صورة المشهد أولاً عبر ميزة تحرير الصور بـ Gemini (Nano Banana) قبل تحويلها لفيديو.

✅ **الحالة الحالية:** الفيديو النهائي جاهز.

---

## 📌 الخطوات القادمة
- [x] توليد/اختيار المشهد السينمائي النهائي عبر Veo
- [x] استخراج الفريمات من الفيديو النهائي (240 فريم → تقليل لـ120 + ضغط WebP)
- [x] ضغط الصور بصيغة WebP (من 8.9MB إلى 1.5MB)
- [x] بناء هيكل الموقع التقني (HTML/CSS/JS خام + Canvas Scrubbing بدون مكتبات خارجية)
- [x] إضافة سكشنات المعلومات الشخصية الحقيقية (About/Skills/Projects/Experience/Contact) — مستخرجة من بورتوفليو سابق
- [x] جعل التصميم متجاوب مع الموبايل
- [x] دعم تبديل اللغة (عربي/إنجليزي)
- [ ] رفع الموقع لاستضافة (Vercel/Netlify/GitHub Pages)
- [ ] اختبار الأداء والسلاسة على أجهزة/متصفحات مختلفة

### بنية الملفات النهائية
```
portfolio/
├── index.html          ← الموقع الكامل (هيكل + تنسيق + سكربت بملف واحد)
└── frames/              ← 120 فريم WebP للمشهد السينمائي
    ├── frame_0001.webp
    ├── frame_0002.webp
    └── ...
```

### نظام التصميم المعتمد
- **الألوان:** خلفية داكنة قريبة من الأسود (#050708) + لون سيان بارد (#5fe3d0) مستوحى من إضاءة شاشة الكود بالفيديو + لون كهرماني دافئ (#ff8a4c) كتباين ثانوي — ثنائية "المنطق البارد / الإبداع الدافئ"
- **الخطوط:** Space Grotesk (العناوين) + IBM Plex Mono (تسميات على شكل تعليقات كود `// 01`) + Inter (النص) + Cairo (عند التبديل للعربي)
- **العنصر المميز (Signature):** خط عمودي متوهج على جانب الصفحة (Scroll Spine) يتتبع تقدم القراءة بتدرج من السيان للكهرماني

**خطة العمل الحالية:** تنفيذ استخراج/تجهيز الفريمات وبناء هيكل الموقع الكامل معاً بالترتيب.

---

## 👤 المعلومات الشخصية (مستخرجة من البورتوفليو القديم)

- **الاسم:** محمد المومني — Mohammed Almomani
- **المسمى:** Full-Stack Developer & FiveM Engineer
- **نبذة:** مطور ويب متكامل ومهندس FiveM، شغوف ببناء تطبيقات نظيفة وعالية الأداء، من واجهات أمامية دقيقة إلى واجهات خلفية قوية. خبرة في بناء منصات SaaS وأنظمة FiveM roleplay عالية الأداء، مع تعاون مع فرق في العالم العربي وخارجه.
- **إحصائيات:** 40+ مشروع منجز، 3 سنوات خبرة، 100% رضا العملاء
- **المهارات:**
  - Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Sass, HTML5, CSS3, JavaScript
  - Backend: Node.js, Express.js, Prisma, PostgreSQL, MongoDB, REST APIs, JWT Auth, Redis
  - أدوات أخرى: Git, GitHub, Docker, Linux, FiveM/Lua, Vercel, Figma, VS Code
- **المشاريع:**
  1. **IEEE ANU Store** — منصة متكاملة لـ IEEE ANU (متجر إلكتروني، ورشات تدريبية، عضويات) — ieeeanu.app
  2. **Justice City Framework** — إطار عمل FiveM شامل (إحصائيات لاعبين، بث مباشر، نظام وظائف) — justicecfw.com
  3. **TRY JO E-commerce Store** — متجر إلكتروني عربي متكامل (تصفح، بحث، فلترة، سلة شراء)
  4. **ATP Security Dashboard** — لوحة مراقبة أمنية (أداء النظام، حركة المرور، تحليلات لحظية)
  5. **User Management Dashboard** — نظام إدارة مستخدمين شامل (أدوار، صلاحيات، إحصائيات)
- **الخبرة:**
  - Software & Engineering (2023–الآن): خلفية علوم حاسوب مع مهارات برمجية متقدمة وتعلم ذاتي مستمر
  - Freelance Full-Stack Developer (2022–الآن): 40+ مشروع لعملاء في منطقة MENA
- **التواصل:**
  - Email: mohmmedalmomani3@gmail.com
  - Discord: @mohammed.dev
  - WhatsApp / Instagram / GitHub: github.com/mohamme-cmd
- **ملاحظة:** الموقع القديم كان يدعم تبديل لغة (عربي/إنجليزي) — سيتم الحفاظ على هذه الميزة بالموقع الجديد.

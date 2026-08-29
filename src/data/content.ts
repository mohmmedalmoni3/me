export type Lang = 'en' | 'ar';

export interface Service {
  title: string;
  desc: string;
}

export interface Project {
  tags: string[];
  title: string;
  desc: string;
  stack: string[];
  link?: string;
  featured?: boolean;
  image: string;
}

export interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  desc: string;
  tech: string[];
}

export interface Dict {
  nav: { about: string; services: string; work: string; contact: string; hire: string };
  hero: { eyebrow: string; role: string; scroll: string };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    statProjects: string;
    statExperience: string;
    statSatisfaction: string;
  };
  services: { label: string; title: string; sub: string; items: Service[] };
  skills: {
    label: string;
    title: string;
    sub: string;
    tabs: { frontend: string; backend: string; other: string };
  };
  projects: { label: string; title: string; sub: string; viewLive: string; items: Project[] };
  experience: { label: string; title: string; items: ExperienceItem[] };
  contact: {
    label: string;
    title: string;
    sub: string;
    ready: string;
    desc: string;
    email: string;
    discord: string;
    whatsapp: string;
    instagram: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSent: string;
  };
  footer: { copy: string };
}

export const skillsData = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sass', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Auth', 'Redis'],
  other: ['Git', 'GitHub', 'Docker', 'Linux', 'FiveM / Lua', 'Vercel', 'Figma', 'VS Code'],
};

export const contactLinks = {
  email: 'mohmmedalmomani3@gmail.com',
  discord: '@mohammed.dev',
  discordUrl: 'https://discord.com/users/king_momani',
  whatsapp: '+962 78 729 7364',
  whatsappUrl: 'https://wa.me/962787297364',
  instagram: '@mo.almomani',
  instagramUrl: 'https://www.instagram.com/7amodah_momani',
  github: 'https://github.com/mohamme-cmd',
};

const projectsEn: Project[] = [
  {
    tags: ['Featured', 'Web Platform'],
    title: 'IEEE ANU Store',
    desc: 'A comprehensive platform for IEEE ANU featuring an e-commerce store for educational materials, training workshops, and membership services.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://ieeeanu.app',
    featured: true,
    image: '/projects/ieee-anu-store.jpg',
  },
  {
    tags: ['FiveM'],
    title: 'Justice City Framework',
    desc: 'A comprehensive FiveM server framework featuring player statistics, content creator showcases, live streaming integration, and a robust job system.',
    stack: ['Lua', 'JavaScript'],
    link: 'https://justicecfw.com/',
    image: '/projects/justice-city.jpg',
  },
  {
    tags: ['E-commerce'],
    title: 'TRY JO E-commerce Store',
    desc: 'A comprehensive Arabic e-commerce platform featuring product browsing, search, category filtering and a shopping cart system.',
    stack: ['HTML', 'Arabic RTL'],
    image: '/projects/try-jo.jpg',
  },
  {
    tags: ['Security'],
    title: 'ATP Security Dashboard',
    desc: 'A security monitoring dashboard featuring live system performance tracking, traffic monitoring, and real-time analytics.',
    stack: ['JavaScript', 'Real-time'],
    image: '/projects/atp-security.jpg',
  },
  {
    tags: ['Dashboard'],
    title: 'User Management Dashboard',
    desc: 'A comprehensive user management system with roles, permissions, statistics and advanced filtering.',
    stack: ['Arabic RTL'],
    image: '/projects/user-management.jpg',
  },
];

const projectsAr: Project[] = [
  {
    tags: ['مميز', 'منصة ويب'],
    title: ' IEEE ANU',
    desc: 'منصة متكاملة لـ IEEE ANU تضم متجراً إلكترونياً للمواد التعليمية، وورش تدريبية، وخدمات العضوية.',
    stack: ['React', 'Next Js', 'JavaScript'],
    link: 'https://ieeeanu.app',
    featured: true,
    image: '/projects/ieee-anu-store.jpg',
  },
  {
    tags: ['FiveM'],
    title: 'إطار عمل Justice City',
    desc: 'إطار عمل متكامل لخوادم FiveM يضم إحصائيات اللاعبين، عرض صناع المحتوى، تكامل البث المباشر، ونظام وظائف قوي.',
    stack: ['Lua', 'JavaScript'],
    link: 'https://justicecfw.com/',
    image: '/projects/justice-city.jpg',
  },
  {
    tags: ['متجر إلكتروني'],
    title: 'متجر TRY JO الإلكتروني',
    desc: 'منصة تجارة إلكترونية عربية متكاملة تضم تصفح المنتجات، البحث، التصنيف، ونظام سلة تسوق.',
    stack: ['HTML', 'واجهة عربية RTL'],
    image: '/projects/try-jo.jpg',
  },
  {
    tags: ['أمن'],
    title: 'لوحة تحكم ATP الأمنية',
    desc: 'لوحة مراقبة أمنية تضم تتبع أداء النظام لحظياً، مراقبة الحركة، وتحليلات فورية.',
    stack: ['JavaScript', 'لحظي','python'],
    image: '/projects/atp-security.jpg',
  },
  {
    tags: ['لوحة تحكم'],
    title: 'لوحة إدارة المستخدمين',
    desc: 'نظام متكامل لإدارة المستخدمين مع الأدوار، الصلاحيات، الإحصائيات، والفلترة المتقدمة.',
    stack: ['واجهة عربية RTL'],
    image: '/projects/user-management.jpg',
  },
];

const experienceEn: ExperienceItem[] = [
  {
    title: 'Software & Engineering',
    period: '2023 — Present',
    desc: 'Computer Science background combined with advanced programming skills and continuous self-learning.',
    tech: ['Next.js', 'Node.js', 'Prisma', 'Lua'],
  },
  {
    title: ' Full-Stack Developer',
    company: 'Independent',
    period: '2022 — Present',
    desc: 'Delivered 40+ projects for clients across MENA — SaaS dashboards, e-commerce builds, custom APIs, and FiveM server infrastructure.',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
  },
];

const experienceAr: ExperienceItem[] = [
  {
    title: 'البرمجة والهندسة',
    period: '2023 — الآن',
    desc: 'خلفية في علوم الحاسوب مع مهارات برمجية متقدمة وتعلم ذاتي مستمر.',
    tech: ['Next.js', 'Node.js', 'Prisma', 'Lua'],
  },
  {
    title: 'مطور ويب متكامل مستقل',
    company: 'عمل حر',
    period: '2022 — الآن',
    desc: 'أنجزت أكثر من 40 مشروعاً لعملاء في منطقة الشرق الأوسط وشمال أفريقيا — لوحات تحكم SaaS، متاجر إلكترونية، واجهات برمجية مخصصة، وبنية خوادم FiveM.',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
  },
];

export const content: Record<Lang, Dict> = {
  en: {
    nav: { about: 'About', services: 'Services', work: 'Work', contact: 'Contact', hire: 'Hire Me' },
    hero: { eyebrow: '// initializing profile', role: 'Full-Stack Developer & FiveM Engineer', scroll: 'scroll' },
    about: {
      label: 'About Me',
      title: 'I Build Things<br/>That Actually Work',
      p1: "I'm a Full-Stack Web Developer & FiveM Engineer passionate about building clean, performant applications — from pixel-perfect frontends to bulletproof backend APIs.",
      p2: "Whether it's architecting a scalable SaaS platform or crafting a high-performance FiveM roleplay system, I obsess over developer experience, code quality, and the tiny details most people skip.",
      p3: "I've shipped products used by thousands of players and collaborated with teams across the Arab world and beyond. Currently open to freelance work and long-term partnerships.",
      statProjects: 'Projects Done',
      statExperience: 'Experience',
      statSatisfaction: 'Satisfaction',
    },
    services: {
      label: 'What I Do',
      title: 'Services',
      sub: 'Focused engineering work, not a generic checklist.',
      items: [
        { title: 'Full-Stack Web Development', desc: 'End-to-end React & Next.js apps with clean Node.js backends, RESTful APIs, and rock-solid auth.' },
        { title: 'Backend Architecture', desc: 'Scalable API systems, database design with PostgreSQL & MongoDB, Redis caching, and JWT flows.' },
        { title: 'FiveM Script Development', desc: 'Advanced Lua systems, OxLib integrations, optimised server performance and custom job/economy frameworks.' },
        { title: 'Performance Optimisation', desc: 'Profiling, bundle splitting, query tuning, and server-side rendering to squeeze every millisecond.' },
      ],
    },
    skills: {
      label: 'Tech Stack',
      title: 'Tools of the Trade',
      sub: 'The technologies I reach for every day — picked for reliability, not hype.',
      tabs: { frontend: 'Frontend', backend: 'Backend', other: 'Tools & Other' },
    },
    projects: {
      label: 'Work',
      title: 'Selected Projects',
      sub: "A handful of things I've built — some for clients, some for fun, all shipped.",
      viewLive: 'Live Site',
      items: projectsEn,
    },
    experience: { label: 'Experience', title: "Where I've Built", items: experienceEn },
    contact: {
      label: 'Contact',
      title: "Let's Work Together.",
      sub: 'Got a project, collaboration, or question? My inbox is open.',
      ready: 'Ready when you are.',
      desc: 'I typically reply within a few hours. For quick questions, Discord is fastest. For project briefs, email works best.',
      email: 'Email',
      discord: 'Discord',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formMessage: 'Message',
      formSend: 'Send Message',
      formSent: "✓ Message received — I'll reply within 24 hours.",
    },
    footer: { copy: '© 2026 Mohammed Almomani — All rights reserved.' },
  },
  ar: {
    nav: { about: 'عني', services: 'الخدمات', work: 'الأعمال', contact: 'تواصل', hire: 'تواصل معي' },
    hero: { eyebrow: '// جاري تحميل الملف الشخصي', role: 'مطور ويب متكامل ومهندس FiveM', scroll: 'مرر للأسفل' },
    about: {
      label: 'عني',
      title: 'أبني أشياء<br/>تعمل فعلاً',
      p1: 'أنا مطور ويب متكامل ومهندس FiveM شغوف ببناء تطبيقات نظيفة وعالية الأداء — من واجهات أمامية مثالية إلى واجهات برمجية خلفية قوية.',
      p2: 'سواء كان تصميم منصة SaaS قابلة للتوسع أو بناء نظام لعب أدوار FiveM عالي الأداء، أهتم بتجربة المطور، جودة الكود، والتفاصيل الدقيقة التي يتجاهلها معظم الناس.',
      p3: 'قمت بشحن منتجات يستخدمها آلاف اللاعبين وتعاونت مع فرق في جميع أنحاء العالم العربي وخارجه. حالياً مفتوح للعمل الحر والشراكات طويلة الأمد.',
      statProjects: 'مشروع منجز',
      statExperience: 'سنوات خبرة',
      statSatisfaction: 'نسبة الرضا',
    },
    services: {
      label: 'ماذا أقدم',
      title: 'الخدمات',
      sub: 'عمل هندسي مركّز، وليس قائمة عامة.',
      items: [
        { title: 'تطوير الويب المتكامل', desc: 'تطبيقات React و Next.js من البداية للنهاية مع واجهات خلفية Node.js نظيفة، وواجهات RESTful، ومصادقة قوية.' },
        { title: 'هندسة الواجهات الخلفية', desc: 'أنظمة قابلة للتوسع، تصميم قواعد بيانات مع PostgreSQL و MongoDB، تخزين مؤقت Redis، وتدفقات JWT.' },
        { title: 'تطوير سكريبتات FiveM', desc: 'أنظمة Lua متقدمة، تكاملات OxLib، تحسين أداء الخادم وأطر عمل مخصصة للوظائف والاقتصاد.' },
        { title: 'تحسين الأداء', desc: 'تحليل الأداء، تقسيم الحزم، ضبط الاستعلامات، والعرض من جانب الخادم لكسب كل جزء من الثانية.' },
      ],
    },
    skills: {
      label: 'التقنيات',
      title: 'أدوات العمل',
      sub: 'التقنيات التي أستخدمها يومياً — مختارة للموثوقية لا للانتشار.',
      tabs: { frontend: 'الواجهة الأمامية', backend: 'الواجهة الخلفية', other: 'أدوات أخرى' },
    },
    projects: {
      label: 'أعمالي',
      title: 'مشاريع مختارة',
      sub: 'بعض الأشياء التي بنيتها — بعضها للعملاء، بعضها للمتعة، وكلها منشورة فعلياً.',
      viewLive: 'زيارة الموقع',
      items: projectsAr,
    },
    experience: { label: 'الخبرة', title: 'أين عملت', items: experienceAr },
    contact: {
      label: 'تواصل',
      title: 'لنعمل معاً.',
      sub: 'لديك مشروع أو تعاون أو سؤال؟ صندوق الوارد الخاص بي مفتوح.',
      ready: 'جاهز عندما تكون أنت.',
      desc: 'أرد عادة خلال بضع ساعات. للأسئلة السريعة Discord هو الأسرع. لملخصات المشاريع، البريد الإلكتروني أفضل.',
      email: 'البريد الإلكتروني',
      discord: 'ديسكورد',
      whatsapp: 'واتساب',
      instagram: 'إنستغرام',
      formName: 'اسمك',
      formEmail: 'البريد الإلكتروني',
      formMessage: 'الرسالة',
      formSend: 'إرسال الرسالة',
      formSent: '✓ تم استلام رسالتك — سأرد خلال 24 ساعة.',
    },
    footer: { copy: '© 2026 محمد المومني — جميع الحقوق محفوظة.' },
  },
};

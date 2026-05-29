export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type Metric = {
  value: number;
  suffix?: string;
  label: string;
};

export type AboutContent = {
  title: string;
  lead: string;
  body: string;
  metrics: Metric[];
};

export type Service = {
  id: string;
  iconKey:
    | 'code'
    | 'smartphone'
    | 'brain'
    | 'cloud'
    | 'database'
    | 'shield'
    | 'workflow'
    | 'sparkles';
  title: string;
  description: string;
};

export type Case = {
  id: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type TechItem = {
  name: string;
};

export type FooterContent = {
  tagline: string;
  navTitle: string;
  contactsTitle: string;
  socialsTitle: string;
  contacts: { label: string; href: string }[];
  socials: { label: string; href: string }[];
  copyright: string;
  privacyLink: { label: string; href: string };
};

export type LandingContent = {
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  services: { title: string; lead: string; items: Service[] };
  cases: { title: string; lead: string; items: Case[] };
  process: { title: string; lead: string; steps: ProcessStep[] };
  techStack: { title: string; lead: string; items: TechItem[] };
  contact: {
    title: string;
    lead: string;
    privacyNotice: string;
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successBody: string;
    resetLabel: string;
    errorToast: string;
  };
  footer: FooterContent;
};

export const landing: LandingContent = {
  nav: [
    { id: 'about', label: '', href: '#about' },
    { id: 'services', label: 'Услуги', href: '#services' },
    { id: 'cases', label: 'Случаи', href: '#cases' },
    { id: 'process', label: 'Процесс', href: '#process' },
    { id: 'contact', label: 'Контакты', href: '#contact' },
  ],

  hero: {
    badge: 'digital solutions',
    title: 'Цифровые решения ваших проблем',
    subtitle:
      'Создание высокотехнологичных систем и продуктов для вашего бизнеса: от веб-платформ до AI-интеграций, которые масштабируются вместе с вами.',
    primaryCta: { label: 'Обсудить проект', href: '#contact' },
    secondaryCta: { label: 'Узнать об услугах', href: '#services' },
  },

  about: {
    title: 'Трансформ',
    lead: 'Превращение сложных бизнес-задач в проекты с понятным интерфейсом и надёжной архитектурой.',
    body: 'Решения приносящие результат: от MVP за несколько недель до зрелых платформ с высокой нагрузкой. Работа на стыке продуктовой стратегии, инженерии и дизайна.',
    metrics: [
      { value: 4, suffix: '+', label: 'лет на рынке' },
      { value: 57, suffix: '+', label: 'реализованных проектов' },
      { value: 18, suffix: '+', label: 'клиентов в портфеле' },
      { value: 45, suffix: '+', label: 'технологий в стеке' },
    ],
  },

  services: {
    title: 'Полный цикл',
    lead: 'Полный цикл цифровой разработки — от идеи и прототипа до запуска и поддержки в продакшене.',
    items: [
      {
        id: 'ai',
        iconKey: 'brain',
        title: 'AI-интеграции',
        description:
            'LLM, RAG, агенты и автоматизации, встроенные в продукт. Помогаем превратить данные в конкурентное преимущество.',
      },
      {
        id: 'web',
        iconKey: 'code',
        title: 'Веб-разработка',
        description:
          'Корпоративные сайты, SPA, SaaS-платформы и внутренние системы. Современный фронтенд, надёжный бэкенд, чистый дизайн.',
      },
      {
        id: 'mobile',
        iconKey: 'smartphone',
        title: 'Мобильные приложения',
        description:
          'Нативные и кроссплатформенные приложения для iOS и Android. Производительность, off-line режимы, push-уведомления.',
      },
      {
        id: 'devops',
        iconKey: 'cloud',
        title: 'DevOps & Cloud',
        description:
          'CI/CD, Kubernetes, IaC, мониторинг и SRE-практики. Инфраструктурные решения для масштабирования',
      },
    ],
  },

  cases: {
    title: 'Некоторые проекты',
    lead: 'Проекты, которые выдержали проверку реальными нагрузками, работают 24/7 и решают задачи.',
    items: [
      {
        id: 'news-feeder',
        client: 'Новостной фидер',
        title: 'Новостной фидер',
        description:
          'Обработка потоков новостей с нескольких источников с помощью ИИ, расчет метрик, формирование торговых сигналов, перевод на более чем 20+ языков и организация максимально удобного поиска.',
        tags: ['Grok', 'Qwen', 'Go', 'PostgreSQL', 'Elasticsearch'],
        image: '/startup.png',
        imageAlt: 'Иллюстрация кейса новостного фидера',
      },
      {
        id: 'ai-assistant',
        client: 'B2B SaaS',
        title: 'AI-ассистент для поддержки клиентов',
        description:
            'RAG поверх базы знаний клиента + интеграция в чат. Автоматическая обработка 60% первичных обращений.',
        tags: ['Next.js', 'LangChain', 'AI', 'pgvector'],
        image: '/assistant.png',
        imageAlt: 'Иллюстрация кейса AI-ассистента',
      },
      {
        id: 'enterprise-suite',
        client: 'Корпоративная платформа',
        title: 'Разворачивание внутренних систем и бизнес-приложений',
        description:
            'Создание и внедрение корпоративной экосистемы: админ-панели, внутренние приложения, управление сотрудниками, аналитика, автоматизация процессов и централизованная инфраструктура.',
        tags: ['Go', 'React', 'PostgreSQL', 'Docker'],
        image: '/car-park.png',
        imageAlt: 'Иллюстрация корпоративной системы с админкой и внутренними сервисами',
      }
    ],
  },

  process: {
    title: 'Как работаем',
    lead: 'Прозрачный процесс без сюрпризов — вы видите прогресс на каждом шаге.',
    steps: [
      {
        id: 'brief',
        number: '01',
        title: 'Brief',
        description: 'Погружаемся в задачу, проводим интервью, фиксируем цели, ограничения и метрики успеха.',
      },
      {
        id: 'design',
        number: '02',
        title: 'Design',
        description: 'Прорабатываем UX, дизайн-систему и архитектуру. Согласуем прототипы до старта разработки.',
      },
      {
        id: 'build',
        number: '03',
        title: 'Build',
        description: 'Итеративная разработка короткими спринтами. Демо в конце каждой итерации, регулярный пользовательский фидбэк.',
      },
      {
        id: 'launch',
        number: '04',
        title: 'Launch',
        description: 'Запуск в продакшен с нагрузочными тестами, мониторингом и планом отката.',
      },
      {
        id: 'support',
        number: '05',
        title: 'Support',
        description: 'Поддержка, развитие и аналитика после релиза. Реагируем быстрее SLA и развиваем продукт по данным.',
      },
    ],
  },

  techStack: {
    title: 'Технологии',
    lead: 'Подбираем стек под задачу, а не наоборот.',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Go' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
      { name: 'Kafka' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'Terraform' },
      { name: 'OpenAI' },
      { name: 'C++' },
      { name: 'Elasticsearch' },
      { name: 'Redis' },
      { name: 'NATS' },
    ],
  },

  contact: {
    title: 'Расскажите о проекте',
    lead: 'Оставьте заявку — свяжемся в течение рабочего дня, обсудим задачу и предложим план.',
    privacyNotice: 'Отправляя форму, вы соглашаетесь с обработкой персональных данных.',
    submitLabel: 'Отправить заявку',
    submittingLabel: 'Отправляем…',
    successTitle: 'Спасибо! Заявка отправлена.',
    successBody: 'Мы получили ваше сообщение и свяжемся с вами в течение рабочего дня.',
    resetLabel: 'Отправить ещё',
    errorToast: 'Что-то пошло не так, попробуйте позже.',
  },

  footer: {
    tagline: 'Dijex — цифровые решения для среднего и крупного бизнеса.',
    navTitle: 'Навигация',
    contactsTitle: 'Контакты',
    socialsTitle: 'Соцсети',
    contacts: [
      { label: 'hello@dijex.tech', href: 'mailto:hello@dijex.tech' },
      { label: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
    ],
    socials: [
      { label: 'Telegram', href: 'https://t.me/dijex' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/dijex' },
      { label: 'GitHub', href: 'https://github.com/dijex' },
    ],
    copyright: '© 2026 Dijex. Все права защищены.',
    privacyLink: { label: 'Политика конфиденциальности', href: '/privacy' },
  },
};

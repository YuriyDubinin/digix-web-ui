# Digix Web UI

Корпоративный лендинг Digix — статический SPA на React + TypeScript + Vite + Tailwind, который потребляет один эндпоинт бэкенда для приёма заявок.

Полный бриф проекта — в [CLAUDE.md](./CLAUDE.md).

## Stack

| Категория  | Выбор                                                                     |
| ---------- | ------------------------------------------------------------------------- |
| Язык       | TypeScript 5.x (strict, `noUncheckedIndexedAccess`)                       |
| Framework  | React 18 (function components + hooks)                                    |
| Сборщик    | Vite 5                                                                    |
| Стили      | Tailwind CSS 3 + CSS variables для дизайн-токенов                         |
| Анимации   | Framer Motion 11 (`prefers-reduced-motion` уважается)                     |
| Формы      | React Hook Form + Zod (`@hookform/resolvers/zod`)                         |
| HTTP       | нативный `fetch`                                                          |
| Иконки     | `lucide-react`                                                            |
| Шрифты     | self-hosted через `@fontsource` (Inter + Sora, `font-display: swap`)      |
| Роутинг    | React Router v6 (future flags `v7_startTransition`, `v7_relativeSplatPath`) |
| Линт       | ESLint + Prettier (`max-warnings 0`)                                      |
| Тесты      | Vitest + React Testing Library                                            |

## Структура

```
src/
├── components/
│   ├── ui/           # Button, Input, Textarea, Field, Toast, Badge
│   ├── layout/       # Header, Footer, Container, AnchorLink, RootLayout
│   ├── motion/       # FadeIn, ScrollReveal, variants
│   └── sections/     # Hero, About, Services, Cases, Process, TechStack, ContactForm
├── hooks/            # useScrollSpy, useCountUp, useReducedMotion
├── lib/              # api.ts, cn.ts
├── schemas/          # feedback.ts (Zod-схема — single source of truth)
├── content/          # landing.ts (весь текстовый контент)
├── pages/            # HomePage, PrivacyPage
├── styles/           # globals.css (Tailwind + CSS vars + keyframes)
└── test/             # setup.ts (jest-dom + IntersectionObserver/matchMedia стабы)
```

## Run

```bash
npm install
cp .env.example .env.local   # при необходимости — указать боевой URL API
npm run dev                  # http://localhost:5173
```

Скрипты:

```bash
npm run dev          # Vite dev server
npm run lint         # ESLint, fail при warnings
npm run format       # Prettier --write
npm run test         # Vitest (CI mode), 21 теста
npm run test:watch   # Vitest watch
npm run build        # tsc + vite build → ./dist
npm run preview      # локальный превью production-сборки
```

## Env

Все переменные публичные (фронт), задаются на build-time:

| Переменная          | Назначение                          | Пример                   |
| ------------------- | ----------------------------------- | ------------------------ |
| `VITE_API_BASE_URL` | базовый URL REST API бэкенда Digix  | `http://localhost:18080` |

В dev-режиме читается из `.env.local` (см. `.env.example`).
Файлы `.env*.local` под `.gitignore` — никаких секретов в репозитории.

## Build

`npm run build` запускает TypeScript-проверку и собирает прод-бандл в `dist/`.
Бандл — статика; для рантайма подойдёт любой HTTP-сервер (в проде — nginx, см. Docker).

## Docker

Двухстадийный билд: `node:20-alpine` собирает, `nginx:alpine` раздаёт.


```bash
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:18080 \
  -t digix-web .

docker run -d --name digix-web -p 3000:80 digix-web
# → http://localhost:3000
```

URL бэкенда обязательно передавать через `--build-arg VITE_API_BASE_URL=...` —
Vite вшивает значение в бандл на этапе сборки.

Nginx раздаёт `dist/`, кеширует хешированные ассеты на 30 дней, поддерживает SPA-фолбэк
(`try_files ... /index.html`), включён gzip и базовые security-заголовки. См.
[`Dockerfile`](./Dockerfile) и [`nginx.conf`](./nginx.conf).

## Качество

- **Тесты:** 21 (Zod-схема + интеграционные на форму заявки).
- **Линт:** `max-warnings 0` в CI.
- **A11y:** семантический HTML (`header`/`main`/`section`/`footer`), `:focus-visible` стили, `aria-label` на иконочных кнопках, skip-link, `prefers-reduced-motion` уважается.
- **Адаптив:** mobile-first, протестировано на 360/768/1280, touch targets ≥ 44px.
- **CLS:** все `<img>` с явными `width`/`height`.
- **Bundle:** ~137 KB JS gzip + ~7 KB CSS gzip.

## Ссылки

- Бэкенд: <https://github.com/YuriyDubinin/digix-api>
- Эндпоинт заявок: `POST /api/feedbacks/requests` (схема — см. [`src/schemas/feedback.ts`](./src/schemas/feedback.ts))
- Health: `GET /api/ping` — для проверки доступности API в dev

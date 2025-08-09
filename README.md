# Portfolio Minimalista com Animações

Portfólio em Astro + Tailwind v4, com foco em microinterações acessíveis e animações de entrada (reveal) performáticas.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualização do build

## Estrutura

- `src/layouts/Layout.astro`: base HTML e `IntersectionObserver` para `.reveal`.
- `src/styles/global.css`: utilitários de animação (`reveal`, `hover-lift`, `float-slow`).
- `src/components/*`: seções (Hero, TopBar, Projects, Footer).

## Conteúdo

Edite textos em `src/components/HeroSection.astro` e cards em `src/components/ProjectsSection.astro`.

## Acessibilidade e performance

- Respeita `prefers-reduced-motion`.
- Observa cada elemento `.reveal` uma única vez.
- Ícones via Phosphor CDN.

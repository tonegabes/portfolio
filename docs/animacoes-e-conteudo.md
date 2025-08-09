## Animações e Conteúdo

Este portfólio usa utilitários de animação prontos em `src/styles/global.css`:

- `.reveal`: animação de entrada suave. Ativa quando o elemento entra em viewport via `IntersectionObserver` no `src/layouts/Layout.astro`. Basta adicionar a classe ao elemento.
- `.hover-lift`: elevação sutil no hover.
- `.float-slow`: flutuação lenta em loop (use com parcimônia, ex.: imagens de destaque).

Respeitamos `prefers-reduced-motion`: animações são desativadas automaticamente para usuários que preferem menos movimento.

### Editando Conteúdo

- Hero: `src/components/HeroSection.astro`
- Projetos: `src/components/ProjectsSection.astro`
- Topo: `src/components/TopBar.astro`

### Ícones

Usamos Phosphor Icons via CDN já incluso em `src/components/Head.astro`. Para usar um ícone:

```html
<i class="ph-light ph-rocket-launch"></i>
```

Consulte a coleção para mais nomes de ícones.



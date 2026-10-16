# VFC Construction — Astro (SSG)

Site institucional da VFC Construction refatorado para **Astro** (Static Site Generator), com estrutura modular, componentizada e de fácil manutenção.

## Estrutura do Projeto

```
vfc-construction-source/
├── astro.config.mjs          # Configuração do Astro (output: 'static')
├── package.json              # Scripts: dev, build, preview
├── tsconfig.json             # TypeScript config
├── README.md                 # Este arquivo
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base com <head>, <html>, <body> e componentes compartilhados
│   ├── components/
│   │   ├── Header.astro      # Navbar com logo, links e menu hambúrguer
│   │   ├── Footer.astro      # Rodapé com marca, links e contato
│   │   ├── Notice.astro      # Barra superior "Serving London since 2004"
│   │   ├── WhatsAppButton.astro # Botão flutuante do WhatsApp
│   │   ├── CookieBanner.astro # Banner de consentimento de cookies
│   │   ├── PrivacyDialog.astro # Dialog de privacidade
│   │   ├── LightboxDialog.astro # Lightbox de imagens da galeria
│   │   ├── Toast.astro       # Notificação toast
│   │   ├── LondonClock.astro # Relógio com horário de Londres
│   │   ├── PageIntro.astro   # Seção de introdução de página (eyebrow + h1 + lead)
│   │   └── ServiceCard.astro # Card de serviço reutilizável
│   ├── pages/
│   │   ├── index.astro       # Página inicial
│   │   ├── about.astro       # Sobre a empresa
│   │   ├── services.astro    # Serviços
│   │   ├── gallery.astro     # Galeria com filtro e lightbox
│   │   ├── contact.astro     # Contato com formulário validado
│   │   └── faq.astro         # Perguntas frequentes e checklist
│   ├── styles/
│   │   └── global.css        # Todo o CSS migrado do styles.css original
│   ├── scripts/
│   │   └── scripts.js        # Todo o JS interativo (menus, dialogs, filtros, formulário)
│   └── assets/
│       └── images/           # Imagens e fontes (referenciadas via public/)
└── public/
    └── assets/images/        # Imagens, ícones e SVG da VFC
```

## Primeiros Passos

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:4321` (porta padrão do Astro).

### 3. Build para produção

```bash
npm run build
```

O output estático será gerado na pasta `dist/`.

### 4. Pré-visualizar o build

```bash
npm run preview
```

## Deploy Gratuito

### Vercel (recomendado)

1. Faça push do código para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) e faça login.
3. Clique em "Add New Project" e importe o repositório.
4. Nas configurações de build:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Clique em "Deploy".
6. Após o deploy, adicione seu domínio próprio em "Domains" nas configurações do projeto.

### Cloudflare Pages

1. Faça push do código para um repositório GitHub.
2. Acesse [pages.cloudflare.com](https://pages.cloudflare.com) e faça login.
3. Clique em "Create a project" → "Connect to Git".
4. Selecione o repositório da VFC Construction.
5. Nas configurações de build:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Environment variables**: não necessário
6. Clique em "Save and Deploy".
7. Adicione seu domínio próprio em "Domains" nas configurações do projeto.

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera build estático otimizado na pasta `dist/` |
| `npm run preview` | Serve o build localmente para pré-visualização |

## Preservação de Conteúdo

Todo o conteúdo, design e funcionalidade do site original HTML estático foram preservados:

- **Design**: CSS original migrado para `src/styles/global.css` com todas as media queries, animações e estilos de impressão.
- **Interatividade**: JavaScript original em `src/scripts/scripts.js` (menu hambúrguer, dialogs nativos, lightbox, filtros da galeria, slider de comparação, busca no FAQ, validação de formulário, relógio de Londres, toast).
- **Imagens e logos**: Mantidas em `public/assets/images/`.
- **Fontes**: Google Fonts (Outfit, Plus Jakarta Sans) via `<link>`.
- **Ícones**: Lucide via CDN.
- **Tailwind**: CDN mantido para compatibilidade com classes utilitárias existentes.

## Estrutura de URLs

Após o build estático, as rotas disponíveis são:

| Página | URL |
|--------|-----|
| Home | `/` |
| Sobre | `/about` |
| Serviços | `/services` |
| Galeria | `/gallery` |
| Contato | `/contact` |
| FAQ | `/faq` |

## Notas de Desenvolvimento

- Qualquer alteração na navbar ou footer deve ser feita em um único arquivo (`src/components/Header.astro` ou `src/components/Footer.astro`).
- O CSS global está em `src/styles/global.css`.
- O JavaScript interativo está em `src/scripts/scripts.js` e é carregado com `defer` no `BaseLayout.astro`.
- O build é 100% estático (`output: 'static'` no `astro.config.mjs`), sem necessidade de servidor Node.js em produção.

<div align="center">

# Portfólio | João Mateus

**Portfólio pessoal de desenvolvedor front-end e designer UI/UX, feito com HTML, CSS e JavaScript puros.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</div>

---

## Sobre

Este é o meu site pessoal, onde reúno projetos, experiências, certificações e habilidades. A ideia foi criar uma página única, leve e responsiva, com identidade visual própria, sem depender de frameworks ou de etapa de build.

## Seções

| Seção | Conteúdo |
| --- | --- |
| **Home** | Apresentação, foto e as três áreas de atuação: desenvolvimento front-end, web design (UI/UX) e desenvolvimento de aplicações. |
| **Projetos** | Cards com links para os projetos no GitHub: [Synapse](https://github.com/jmpinho/Synapse) (app educacional em React) e [Chá Lua de Jade](https://github.com/jmpinho/cha-lua-de-jade) (e-commerce e branding em React). |
| **Experiências e Certificações** | Tech4Jobs, Cambridge B2, Tech4Teens e English House. |
| **Habilidades** | Cards interativos de Web Development, UI/UX Design e Visual & Identity. Ao clicar, o card expande e mostra a descrição. |
| **Contatos** | E-mail e links para LinkedIn, Instagram e GitHub. |

## Destaques técnicos

- **Sem dependências:** apenas HTML, CSS e um pequeno script em JavaScript.
- **Design responsivo:** layout pensado primeiro para telas pequenas, com ajustes a partir de 720 px.
- **Tema com variáveis CSS:** paleta (vermelho, marrom, branco, preto e cinza) e fontes definidas em um único lugar, o que facilita mudar a identidade visual.
- **Tipografia:** [Sansation](https://fonts.google.com/specimen/Sansation) nos títulos e [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) nos detalhes, carregadas pelo Google Fonts.
- **SEO básico:** `description`, `author`, `theme-color` e tags Open Graph configuradas.
- **Navegação por âncoras:** menu fixo que leva direto a cada seção.
- **Português e inglês:** botão PT/EN no cabeçalho. O texto em português fica no HTML e as traduções em inglês ficam em `script.js`. A escolha é salva no navegador e também funciona com `?lang=en` na URL.

## Estrutura do projeto

```
portfolio/
├── imagens/          # Foto, logo, favicon, ícones SVG e imagens dos projetos
├── index.html        # Estrutura e conteúdo da página
├── styles.css        # Estilos, variáveis de tema e responsividade
├── script.js         # Cards de habilidades e troca de idioma (PT/EN)
└── README.md
```

## Como executar

Não há instalação nem build. Basta clonar e abrir o projeto no navegador:

```bash
git clone https://github.com/jmpinho/portfolio.git
cd portfolio
```

Depois, abra o `index.html` diretamente no navegador ou use uma extensão como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para recarregar a página automaticamente durante as edições.

> Os links do menu e da logo apontam para `/`. Por isso, o ideal é servir o site pela raiz de um domínio (por exemplo, GitHub Pages em `usuario.github.io`) ou por um servidor local, e não abrir o arquivo direto do disco.

## Personalização

- **Cores e fontes:** edite as variáveis no início do `styles.css` (`--vermelho`, `--marrom`, `--branco`, `--preto`, `--cinza`, `--fonte-principal` e `--fonte-secundaria`).
- **Projetos:** adicione um item `<li>` na lista `projetos-lista` do `index.html`, com a imagem do card em `imagens/`.
- **Experiências:** duplique um bloco `<article class="experiencia-card">` e altere título, descrição e período.

## Contato

- E-mail: [joaopinho.dev.br@gmail.com](mailto:joaopinho.dev.br@gmail.com)
- LinkedIn: [linkedin.com/in/joaomateuspinho](https://www.linkedin.com/in/joaomateuspinho)
- GitHub: [github.com/jmpinho](https://github.com/jmpinho)
- Instagram: [@jmpinhos](https://www.instagram.com/jmpinhos/)

---

Feito por **João Mateus Pinho da Silva**, bacharel em Ciência da Computação.

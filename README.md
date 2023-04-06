![alt](public/app-marvel.png)

# Aplicativo Marvel

Este aplicativo foi desenvolvido através de desafio de um processo seletivo, a proposta foi criar uma tela para listar os quadrinhos da Marvel utilizando a API da Marvel, ao clicar em um card abrirá um modal com detalhes do quadrinho selecionado, no modal foi inserido um mapa utilizando o API do Google Maps, onde foi criado um campo para selecionar o endereço para onde o quadrinho deve ser enviado. Na requisição da API filtrem para buscar somente os quadrinhos lançados na última semana por questões de performance.

## Tecnologias utilizadas
----------
![Reacts](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


Além das tecnologias mencionadas a aplicação utiliza o [AXIOS](https://axios-http.com/) para requisições de dados da [API da Marvel](https://developer.marvel.com/), [DATE-FNS](https://date-fns.org/) para a formatação das datas, da biblioteca de qualidade de código da Rocketseat, que por sinal é muito boa ([@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)), [HeadlessUI](https://headlessui.com/) foi utilizado para o modal, sendo uma biblioteca desenvolvida pela equipe da TailwindCSS, sendo a [@ubilabs/google-maps-react-hooks](https://github.com/ubilabs/google-maps-react-hooks) a biblioteca utilizada para a manipulação do Google Maps API (recomendo bastante, não é tão difícil utilizar) e não menos importante a estrutura da aplicação foi criada apartir do [Vite](https://vitejs.dev/), uma das ferramentas mais utilizadas atualmente para estrutura de projetos com ReactJS, sendo uma ótima opção ao create-app-react que foi descontinuado pela Meta.

<!-- ## Link da aplicação
[vercel]() -->

## Comando para instalar dependências e iniciar a aplicação

```javascript
npm i or npm intall
npm run dev

	or

yarn or yarn install
yarn dev
```
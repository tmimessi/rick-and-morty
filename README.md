# Rick&Morty
Projeto feito em ReactJS utilizando a API do Rick&Morty, que consiste em uma tela inicial que traz a listagem de personagens, na qual o usuário
pode digitar o noome de um personagem e acessar os detalhes sobre ele. Além disso, o usuário verá um botão de favoritos na tela inicial e na tela de detalhes
para favoritar o personagem de sua escolha.

# Tecnologias e funcionalidades utilizadas:
1. ReactJS
2. React Hooks
3. Styled-components
4. Jest
5. Vite
6. Styled-components
7. Responsividade
8. Infinite Scroll

# Instalação e inicialização:
Para inicializar o projeto, rodar `npm install` no terminal e, em seguida, `npm run dev` para inicializar o servidor.
Para rodar os testes, utilizar `npm run test`.

# Breve descrição dos componentes e páginas
1. Componente Character - Descrição: exibe as informações de um personagem, incluindo seu nome e imagem, e oferece a capacidade de favoritá-lo. Ele renderiza o 
componente FavoriteButton que é passado como um subcomponente.

2. Componente Character Details - Descrição: exibe os detalhes de um personagem, incluindo nome, imagem, status, espécie, gênero, origem, 
localização e episódios em que apareceu. Ele também oferece a capacidade de favoritar o personagem. Ele renderiza o componente FavoriteButton que é passado c
omo um subcomponente.

3. Componente CharacterList - Descrição: exibe uma lista de personagens e oferece a funcionalidade de carregar mais personagens 
dinamicamente conforme o usuário chega ao final da lista. Ele também permite que o usuário clique em um personagem para ver mais detalhes. Cada personagem 
é exibido usando o componente Character.

4. Componente FavoriteButton - Descrição: renderiza um botão de favoritos para cada personagem em um componente Character. O botão é 
exibido como um ícone de estrela preenchida ou vazia, dependendo se o personagem está favoritado ou não. Ele usa o hook useFavorite do contexto 
FavoriteContext para acessar informações sobre os personagens favoritos e permitir que o usuário adicione ou remova personagens da lista de favoritos.

5. Página Home - Descrição: responsável por renderizar a página inicial da aplicação, onde é possível buscar e visualizar uma lista 
de personagens da série "Rick and Morty".

6. Página Details - Descrição: esta página é responsável por exibir os detalhes de um personagem específico da série "Rick and Morty".

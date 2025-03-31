# :books: Reading Journal
## Nome: `William Renan Novak`

## :house: Introdução

Este é um projeto de gerenciamento de livros utilizando React, React Router, Axios e Material-UI.
- O projeto faz o consumo de uma API para manutenção dos livros no sistema.
- As funcionalidades do sistema são adicionar, editar, excluir e listar os livros existentes.

### :star: Configurar API para consumo do projeto:

1. Clone o repositório localizado em: https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/

2. Acesse o repositório clonado e execute localmente a API que será consumida pelo sistema
    ```bash
    cd ./DesenvolvimentoFrontend/readingJournal-api/
    ```
3. Execute npm install para instalar as dependências da API
    ```bash
    npm install
    ```
4. Execute localmente a API que será consumida pelo sistema
    ```bash
    npm start
    ```

### :rocket: Como executar o projeto:

1. Retorne para o repositório do projeto e execute npm install para instalar as dependências do projeto:
    ```bash
    npm install
    ```

2. Iniciar a execução do projeto.
    ```bash
    npm start
    ```

## :file_folder: Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:
- **Navbar:** Este componente utiliza Link do React Router para mostrar as páginas disponíveis em uma barra de navegação
- **Home:** Página inicial do sistema.
<img src="./src/assets/images/readme/homepage.png" alt="Página Inicial" width="600" height="300">
- **About:** Página descritiva sobre o intuito do sistema.
<img src="./src/assets/images/readme/aboutpage.png" alt="Página Sobre" width="600" height="300">

- **BookList:**
  - `props`
    - books: array com a lista de livros existentes no sistema, consultados via método GET da API;
    - removeBook: função a ser chamada para realizar a exclusão de um livro do sistema, que executa uma chamada DELETE para remover o livro na API;
  - Descrição: Este componente recebe os livros existentes via props e os exibe em uma listagem para o usuário.
  <img src="./src/assets/images/readme/booklist.png" alt="Lista de Livros" width="600" height="320">

- **BookForm:**
  - `props`
    - addBook: função que adiciona uma nova instância de um livro ao sistema e realiza uma chamada POST para adicioná-lo na API;
    - updateBook: função que atualiza os dados de determinado livro existente no sistema, atualizando as informações via PUT na API;
    - books: array com a lista de livros existentes no sistema;
  - Descrição: Este componente retorna um formulário para o gerenciamento do cadastro e atualização de livros no Reading Journal.
  <img src="./src/assets/images/readme/bookform.png" alt="Lista de Livros" width="600" height="320">

## :computer: Tecnologias Utilizadas
- **React** (biblioteca principal)
- **React Router** (gerenciamento de rotas)
- **useState e useEffect** (gerenciamento de estado e efeitos colaterais)
- **Axios** (biblioteca para requisições HTTP)
- **Material-UI** (estilização e componentização)
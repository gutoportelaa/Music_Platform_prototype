import React from 'react';

const App2 = () => {
  return <div>App2</div>;
};

export default App2;



// rafce   

// Arrow Function
//  const App2 = () => <>App2</>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variável, Função, Método...
// camelCaseFormaDeNomeação

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nome exportado

// Self-closing tag
// <Header />
// <Header></Header>

// element.style {
//     background-color: bisque;
//     padding: 20px 30px;
//     margin: 20px;
//     border: solid 5px darkslategray;
//     /* box-sizing: content-box; */
//     width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocos, Elementos, Modificadores
// bloco__elemento--modificador
// Ex: link é um elemento de um componente de um bloco, mas não é o componente:
// header
// header__link
// header__link--active

// Tag vazia em React é chamada de Fragmento, usado pq o React retorna apenas um Elemento.
// Então fragmentamos o retorno em vários elementos, mas sem criar um elemento pai.
// <> </> ou <React.Fragment> </React.Fragment>
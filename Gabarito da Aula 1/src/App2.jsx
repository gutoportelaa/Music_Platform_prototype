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

// Componentes recebem "props" e retornam(ou n) algo, props = propriedades/parâmetros das funções

// StrictMode do Main faz uma dupla checagem n robustez do código

// JSX é uma sintaxe de XML para JavaScript, é uma extensão do JavaScript

// const Array = [23, 54, 45, 21]
// for (let index = 0; index < Array.length; index++) {
//     const element = Array[index];
//     console.log(element)
// }                                          ~~ forma tradicinal de percorrer uma Array

// Array.forEach(element => {
//     console.log(element)
// });                                         ~~ forma mais moderna de percorrer uma Array

// Array.map(element => {
//     console.log(element)
// });                                         ~~ forma de percorrer uma Array e retornar algo

// {Array(items).fill().map((currentValue, index) => <SingleItem key = {`${title}-${index}`}/>)}

//             {artistArray.filter((currentValue, index) => index < items).map((currentValue, index) => <SingleItem key = {`${title}-${index}`}/>)}
//  ~~ o .filter limita os elementos a serem mapeados, o .map percorre a Array e retorna algo
//  como se fosse um break e um continue


// formas de exportar um objeto:

// export const App = () => <>App</>;

//import { App } from './App';
// export { App };

// import App from './App';
// export default App;

// printar um objeto:
// console.log({title, items}) ~~ printa o objeto
// console.log(title, items) ~~ printa os valores das variáveis
// console.log(`${title}-${index}`) ~~ template string , como o print(f) do Python


{/* <div className="item-list__container">
{artistArray
.filter((currentValue, index) => index < items)
.map((currentObj, index) => (
  <SingleItem 
  id={currentObj.id} 
  imagem={currentObj.image} 
  nome={currentObj.name} 
  banner={currentObj.banner}  
  key={`${title}-${index}`}
  />
))} */}

// Spread Operator   ~~ clona um objeto (e altera um valor específico)
// const obj = {
//     nome: 'Fulano',
//     idade: 23,
//     cidade: 'São Paulo'
// }
// const obj2 = {
//     ...obj,
//     cidade: 'Rio de Janeiro'
// }
// console.log(obj2) ~~ printa {nome: 'Fulano', idade: 23, cidade: 'Rio de Janeiro'}

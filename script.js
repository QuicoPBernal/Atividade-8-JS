// Atividade 03
// Crie um elemento através do JavaScript, adicione um texto a ele e insira ele
// no documento.
let meuElemento = document.getElementById('meuElemento')
let elementoFilho = meuElemento.querySelector('p')

// Atividade 04
// Altere o atributo src de uma tag img para trocar a imagem que ele está
// apresentando através do JavaScript.
let elementoImg = document.getElementById('imagem')
elementoImg.setAttribute('src','https://services.meteored.com/img/article/ocorrencia-de-arco-iris-esta-aumentando-um-pessimo-sinal-para-o-clima-1671114527814_1024.jpeg')

// Atividade 05
// Pegue todos os elementos li de dentro de uma ul que tiverem a classe item
// de dentro de uma ul.
let elementoLi = document.getElementsByTagName('ul')
let elementoUl = document.getElementsByClassName('item')

// Atividade 06
// Crie uma função no JavaScript que irá trocar o texto de um elemento
// que está em uma lista ul.
let targetItem = document.querySelector('ul');
function trocarTexto(newText) {
  let listItems = targetItems.querySelectorAll('li');
  for (let i = 0; i < targetItem.length; i++) {
    listItems[i].textContent = newText;
  }
}

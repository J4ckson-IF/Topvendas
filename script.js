// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");
const actions = document.querySelector(".actions");
const logo = document.querySelector(".logo");

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () {
    // 3. Alterna (liga/desliga) a classe "ativo" no menu
    menu.classList.toggle("ativo");
    actions.classList.toggle("ativo");
    logo.classList.toggle("ativo")
});
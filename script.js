// Seleciona todos os botões de curtir
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    let curtiu = false;
    
    // Adiciona o evento de clique em cada botão
    botaoCurtir.addEventListener("click", curtir);

    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        } else {
            contador.textContent--;
            curtiu = false;
        }
    }
});

// Seleção e lógica para alternar o tema da página
const btnTema = document.querySelector(".btn-tema");

btnTema.addEventListener("click", mudarTema);

function mudarTema() {
    document.body.classList.toggle("tema-escuro");
}
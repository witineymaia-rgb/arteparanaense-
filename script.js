const botoesCurtir = document. querySelectorAll(. curtir);
botoesCurtir.forEach(function(botaoCurtir){
    let currti = false;
    botoesCurtir. addEvenlistener("click , curtir");
    function  curtir(){
        const contador = botaoCurtir . querySelector("span");
        if(curtiu === false){
            contador . textContent++;
            curtiu = true;{
                else{
                    contador .textContent--;
                    curtiu = false;

            }
    }
    });

    const btnTema = document.querySelector(".btn-tema");
    btnTema.addEvenlistener("click", mudarTema);
    function mudarTema(){
        document.body.classList.toggle("tema-escuro");
    }
    
        
        
    

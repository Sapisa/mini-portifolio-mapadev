/*
 OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuário e esconter o conteúdo da aba anterior
 
*/

// passo 1 - dar um jeto de identificar clique no elemento aba
const abas = (document.querySelectorAll(".aba"));

//-passo 2 - dar um jeito de identificar clique no elemento aba
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba) {
    //passo 3 quando o usuário clicar, desmarcar a aba  selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    //passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostrar o conteudo da aba selecionada
    const idDodElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDodElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");
}
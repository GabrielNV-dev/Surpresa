// script.js
// Define a data de início do namoro (9 de abril de 2026, à meia-noite)
const dataInicio = new Date('2026-04-09T00:00:00');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    if (diferenca > 0) {
        // Cálculo preciso lidando com o calendário real
        let anos = agora.getFullYear() - dataInicio.getFullYear();
        let meses = agora.getMonth() - dataInicio.getMonth();
        let dias = agora.getDate() - dataInicio.getDate();
        let horas = agora.getHours();
        let minutos = agora.getMinutes();
        let segundos = agora.getSeconds();

        // Se os dias derem negativo, pegamos dias "emprestados" do mês anterior
        if (dias < 0) {
            meses--;
            // Calcula quantos dias tinha o mês anterior
            const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        // Se os meses derem negativo, pegamos meses "emprestados" do ano anterior
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        // Atualiza os elementos no HTML
        document.getElementById('anos').innerText = anos;
        document.getElementById('meses').innerText = meses;
        document.getElementById('dias').innerText = dias;
        document.getElementById('horas').innerText = horas;
        document.getElementById('minutos').innerText = minutos;
        document.getElementById('segundos').innerText = segundos;
    } else {
        // Se a data for no futuro, zera o contador
        document.getElementById('anos').innerText = '0';
        document.getElementById('meses').innerText = '0';
        document.getElementById('dias').innerText = '0';
        document.getElementById('horas').innerText = '0';
        document.getElementById('minutos').innerText = '0';
        document.getElementById('segundos').innerText = '0';
    }
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

const abrirCarta = document.getElementById("abrirCarta");
const fecharCarta = document.getElementById("fecharCarta");
const cartaAberta = document.getElementById("cartaAberta");

abrirCarta.addEventListener("click", () => {
    cartaAberta.classList.add("aberta");

    abrirCarta.style.display = "none";

    setTimeout(() => {
        cartaAberta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});

fecharCarta.addEventListener("click", () => {
    cartaAberta.classList.remove("aberta");

    setTimeout(() => {
        abrirCarta.style.display = "inline-block";
    }, 300);
});

/* =========================================================
   ABERTURA DO SITE
   ========================================================= */

const envelope = document.getElementById("envelope");
const telaInicial = document.getElementById("tela-inicial");
const cliqueTexto = document.querySelector(".clique-texto");

envelope.addEventListener("click", () => {

    // Impede clicar várias vezes
    if (envelope.classList.contains("abrindo")) {
        return;
    }

    // Começa a animação do envelope
    envelope.classList.add("abrindo");

    // Troca o texto
    cliqueTexto.textContent = "Com todo meu amor... 💜";

    /*
       Espera o envelope terminar de abrir
       antes de retirar a tela inicial.
    */
    setTimeout(() => {

        telaInicial.classList.add("saindo");

        // Libera o scroll da página
        document.body.style.overflow = "auto";

    }, 1200);

});
// Executa a função imediatamente ao carregar
atualizarContador();
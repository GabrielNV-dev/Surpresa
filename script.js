
const dataInicio = new Date('2026-04-09T00:00:00');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    if (diferenca > 0) {
        let anos = agora.getFullYear() - dataInicio.getFullYear();
        let meses = agora.getMonth() - dataInicio.getMonth();
        let dias = agora.getDate() - dataInicio.getDate();
        let horas = agora.getHours();
        let minutos = agora.getMinutes();
        let segundos = agora.getSeconds();

        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        document.getElementById('anos').innerText = anos;
        document.getElementById('meses').innerText = meses;
        document.getElementById('dias').innerText = dias;
        document.getElementById('horas').innerText = horas;
        document.getElementById('minutos').innerText = minutos;
        document.getElementById('segundos').innerText = segundos;
    } else {
        document.getElementById('anos').innerText = '0';
        document.getElementById('meses').innerText = '0';
        document.getElementById('dias').innerText = '0';
        document.getElementById('horas').innerText = '0';
        document.getElementById('minutos').innerText = '0';
        document.getElementById('segundos').innerText = '0';
    }
}

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


const envelope = document.getElementById("envelope");
const telaInicial = document.getElementById("tela-inicial");
const cliqueTexto = document.querySelector(".clique-texto");

envelope.addEventListener("click", () => {

    if (envelope.classList.contains("abrindo")) {
        return;
    }

    envelope.classList.add("abrindo");

    cliqueTexto.textContent = "Com todo meu amor... 💜";

    setTimeout(() => {

        telaInicial.classList.add("saindo");
        document.body.style.overflow = "auto";

    }, 1200);

});
atualizarContador();

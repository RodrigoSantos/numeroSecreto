function  verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }
    if (numeroForMaiorOuMenorQueoValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return//Ai não executa mais nada
    }
    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>` //criamos um botão na tela e estilizamos no css
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueoValorPermitido(numero){
    return numero > maiorValor || numero < menorValor // ja captutou na seção essas informações menorValor
}

    document.body.addEventListener('click', e=>{ //criamos o evento do botão
        if (e.target.id=='jogar-novamente'){
            window.location.reload()
        }
    })
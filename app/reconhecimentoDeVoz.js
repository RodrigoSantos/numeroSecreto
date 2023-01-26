const elementoChute = document.getElementById('chute') //busca o elemento chute no HTML
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition //Chama o evento de reconhecimento de fala

const recognition = new SpeechRecognition()//instacia o elemento
recognition.lang = 'pt-Br'//determina o idioma
recognition.start() // Inicia o microfone

recognition.addEventListener('result',onSpeak) //escuta a fala


function onSpeak(e){
    chute = e.results[0][0].transcript //Pega o resultado falado
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)   
}
function exibeChuteNaTela(chute){//Adiciona esse HTML ná pa´gina
    elementoChute.innerHTML = `<div> Você disse</>
                               <span class="box">${chute}</apan>`
}
recognition.addEventListener('end',() => recognition.start()) //Vai manter o microfone ligado

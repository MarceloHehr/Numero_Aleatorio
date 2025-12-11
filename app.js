let numerosSorteados = [];
let numeroLimite = 10;
let numero_Aleatorio = númeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto)
{

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }

}
exibirMensagemInicial();


function verificarChute()
{
    
   
    let chute = document.querySelector('input').value;
    console.log(numero_Aleatorio);
    if(chute==numero_Aleatorio)
    {
        exibirTextoNaTela('h1','Acertou' )
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }
    else{
        if(chute> numero_Aleatorio)
        {
            exibirTextoNaTela('p', 'O número secreto é menor do que o chute')
        }
        else
        {
            exibirTextoNaTela('p', 'O número secreto é maior do que o chute')
        }
        tentativas++;
        limparCampo();
        
    }
    
    console.log(tentativas); 
        
}


function númeroAleatorio()
{
    let numeroEscolhido =parseInt(Math.random() *numeroLimite + 1);
    let quantidadeNumerosLista = numerosSorteados.length;
    if(quantidadeNumerosLista == numeroLimite)
    {
        numerosSorteados=[];
    }

    if(numerosSorteados.includes(numeroEscolhido))
    {
        return númeroAleatorio();
    }
    else
    {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value='';
}
                            

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número aleatorio');
    exibirTextoNaTela('p', 'Escolha números de 0 a 10');
}

function reiniciarJogo()
{
    numero_Aleatorio=númeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    tentativas=1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



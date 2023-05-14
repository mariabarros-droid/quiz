const $startgamebutton = document.querySelector(".start-quiz");
const $questoescontainer = document.querySelector(".questoes-container");
const $respostascontainer = document.querySelector(".respostas-container");
const $questaotext = document.querySelector(".questao")
const $nextquestaobutton = document.querySelector(".next-questao")


$startgamebutton.addEventListener("click", startgame);
$nextquestaobutton.addEventListener("click", displaynextquestao)

let currentquestaoIndex = 0
let totalcorrect = 0

function startgame() {
    $startgamebutton.classList.add("hide")
    $questoescontainer.classList.remove("hide")
    displaynextquestao()
}

function displaynextquestao() {
    
    while($respostascontainer.firstChild) {
        $respostascontainer.removeChild($respostascontainer.firstChild);
    }

    document.body.removeAttribute("class")
    $nextquestaobutton.classList.add("hide")

    if(questoes.length === currentquestaoIndex){
       return finalgame()
    }

    $questaotext.textContent = questoes[currentquestaoIndex].questao
    questoes[currentquestaoIndex].respostas.forEach(resposta => {
        const newresposta = document.createElement("button")
        newresposta.classList.add("button", "resposta")
        newresposta.textContent = resposta.text

        if(resposta.correct){
            newresposta.dataset.correct = resposta.correct
        }
        $respostascontainer.appendChild(newresposta)

        newresposta.addEventListener("click", selectresposta)
    })
}


function selectresposta(event) {
    const respostaclicada = event.target

    if(respostaclicada.dataset.correct) {
        document.body.classList.add("correct")
        totalcorrect++
    }else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".resposta").forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct");
        }else {
            button.classList.add("incorrect");
        }

        button.disabled = true
    })

    $nextquestaobutton.classList.remove("hide") 
    currentquestaoIndex++
}


function finalgame() {
    const totalquestoes = questoes.length
    const performance = Math.floor(totalcorrect * 100 / totalquestoes)

    let message = "" 

    switch (true) {
        case (performance >= 90 ):
            message = "Excelente :)"
            break
        case (performance >= 70):
            message = "Muito bom :)"
            break
        case (performance >= 50):
            message = "Bom"
            break
        default:
            message = "Pode melhorar :("
    }

    $questoescontainer.innerHTML = 
   `
   <p class="final-message">
   Você acertou ${totalcorrect} de ${totalquestoes} 
   <span>Resultado: ${message}</span>
   </p>
   <button onmouseenter="sound.play()" class="btnrefazer" onclick=window.location.reload()>
   Refazer Quiz
   </button>
   `
}


const questoes = [
    {
        questao: "1+1?",
        respostas: [
            {text:"1", correct: false },
            {text:"2", correct: true  },
            {text:"3", correct: false },
            {text:"4", correct: false }
        ]
    },
    {
        questao: "2+2?",
        respostas: [
            {text:"1", correct: false },
            {text:"2", correct: false },
            {text:"3", correct: false },
            {text:"4", correct: true  }
        ]
    },
    {
        questao: "3+7?",
        respostas: [
            {text:"1", correct: false },
            {text:"10", correct: true },
            {text:"3", correct: false },
            {text:"4", correct: false }
        ]
    },
    {
        questao: "5+3?",
        respostas: [
            {text:"1", correct: false },
            {text:"8", correct: true  },
            {text:"3", correct: false },
            {text:"4", correct: false }
        ]
    },
]
const perguntas = [
    {
    enunciado: "Você acredita que a legalização das drogas recreativas deveria ser implementada?",
    alternativas: [
    "Isso é assustador!",
    "Isso é maravilhoso!"
    ]
    },
    {
    enunciado: "Você acha que o aborto deveria ser um direito irrestrito para todas as mulheres?",
    alternativas: [
    "Sim, as mulheres devem ter esse direito.",
    "Não, deve haver restrições."
    ]
    },
    {
    enunciado: "O ensino religioso deveria ser obrigatório nas escolas públicas?",
    alternativas: [
    "Sim, deveria ser obrigatório.",
    "Não, não deveria ser obrigatório."
    ]
    },
    {
    enunciado: "A pena de morte deve ser uma opção para crimes hediondos?",
    alternativas: [
    "Sim, deve ser aplicada.",
    "Não, deve ser abolida."
    ]
    
    },
    {
    enunciado: "O casamento entre pessoas do mesmo sexo deve ser reconhecido legalmente em todo o país?",
    alternativas: [
    "Sim, deve ser reconhecido.",
    "Não, não deve ser reconhecido."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
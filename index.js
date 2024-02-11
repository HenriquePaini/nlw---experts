const perguntas = [
    {
      pergunta: 'Qual palavra-chave é usada para declarar uma variável em JavaScript?',
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2 // "const"
    },
    {
      pergunta: 'Qual desses métodos é usado para adicionar um elemento ao final de um array?',
      respostas: [
        ".push()",
        ".pop()",
        ".shift()",
      ],
      correta: 0 // ".push()"
    },
    {
      pergunta: 'Qual é a saída do código: console.log(typeof [])?',
      respostas: [
        "'array'",
        "'object'",
        "'undefined'",
      ],
      correta: 1 // "'object'"
    },
    {
      pergunta: 'Como você escreve um comentário de uma linha em JavaScript?',
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0 // "// Este é um comentário"
    },
    {
      pergunta: 'Qual é o operador de comparação estrita em JavaScript?',
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1 // "==="
    },
    {
      pergunta: 'Qual método é usado para remover o último elemento de um array em JavaScript?',
      respostas: [
        ".removeLast()",
        ".pop()",
        ".splice()",
      ],
      correta: 1 // ".pop()"
    },
    {
      pergunta: 'O que o método "parseInt()" faz em JavaScript?',
      respostas: [
        "Converte um número para uma string",
        "Converte uma string para um número inteiro",
        "Converte uma string para um número decimal",
      ],
      correta: 1 // "Converte uma string para um número inteiro"
    },
    {
      pergunta: 'Qual é o resultado da expressão: 3 + 2 + "7" em JavaScript?',
      respostas: [
        "'57'",
        "12",
        "'12'",
      ],
      correta: 0 // "'57'"
    },
    {
      pergunta: 'Qual é a forma correta de escrever uma função em JavaScript?',
      respostas: [
        "função myFunction() {}",
        "function: myFunction() {}",
        "function myFunction() {}",
      ],
      correta: 2 // "function myFunction() {}"
    },
    {
      pergunta: 'Qual é o operador lógico que representa "ou" em JavaScript?',
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1 // "||"
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
     
    for(let resposta of item.respostas){
      
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
  
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
  
        } 
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }
  
  
  
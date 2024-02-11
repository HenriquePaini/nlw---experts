# nlw-experts
#HTML

HyperText Markup Language

#tags
#atributos (<a href= "Link"> clique aqui </a>) hiperlink
#-- <div>(serve pra agrupar)
//----------//
<div class="quiz-item">
  <h3>  
    Pergunta 1.
  </h3>
  <dl>
    <dt>
      <input type="radio" name="item" value="0">
      <span>
        Resposta A
      </span>
    </dt>
    <dt>
      <input type="radio" name="item" value="1">
      <span>
        Resposta B
      </span>
    </dt>
  </dl>
</div>

#--Como os dois vão receber o name "item", quando for selecionado um, ele vai tirar a seleção do outro, pois ele procura o nome item, e como eles possuem o mesmo...
//----------//




-----------------------------------------
JS:
const mensagem = "Bom te ver aqui!"
alert(mensagem + (10 * 100) + "Abraços!")

#-- Os colchetes seriam os arrays, ou vetores
const question = [
    
]
--
#Objetos seriam as chaves
const celular = {
   cor: 'preto',
   modelo: 'samsung',
   peso: 200
}


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
//new -> palavra reservada, serve para criar coisas novas, geralmente uma estrutura de dados ou objeto específico, chamado de set(conjunto), posso adiocionar ou tirar, mas nunca repetir oq tem dentro dele.

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//Append -> como colocar um filho
//QuerySelector -> vai fazer a seleção
//Content -> conteudo do template
//CloneNode -> Função que vai clonar o nó, quando eu passar true pra ela, ela vai clonar todos os filhos do template lá dentro.

//loop ou laço
for(const item of perguntas){
  //alert(item.pergunta)
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
   
  for(let resposta of item.respostas){
    
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    
    //setAttribute -> vai necessitar de dois valores para funcionar primeiro falar qual o nome do atributo e depois um valor especifico.
    //IndexOf -> vai pesquisar o índice, passando uma informação pra ela, procura o índice desse item específico.

    //Colocar na tela-> quizitem procura queryselector o "dl" e vou adicionar um filho "appendChild" que é o dt.

    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //quero pegar dentro do input, o valor dele, atribuindo o item.respostas buscando o índice resposta do momento.

    dt.querySelector('input').onchange = (event) => {
      // onchange -> ele espera que exista uma função.
      // event -> toda vez que executar a função, vai passar pra dentro o evento, aquilo que está selecionado, o índice.
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
        // add -> função para adicionar, adiciona todo o item ao corretas.
      } 
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //vou fazer um querySelector no primeiro e vou aplicar um remove, pra removar a "Resposta A" que seria o primeiro item.
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
//Vai fazer um Loop no primeiro item perguntas, fazendo um loop dentro do item respostas, passando por todos os índices do item resposta, ou seja, 0, 1 e 2. Pula para o próximo item pergunta, entra no item resposta dele e faz o loop, retornando os índices do item pergunta 2.



-----------------------------------------
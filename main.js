const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let cookie = document.querySelector('.screen1 img')
const button = document.querySelector('.screen2 button')
const message = document.querySelector('.screen2 p')

let randomNumber = Math.floor(Math.random() * 10)

cookie.addEventListener('click', screenToggle)
button.addEventListener('click', screenToggle)
document.addEventListener('keydown', enterEvent)

const messages = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',

  'Às vezes, a melhor maneira de resolver um problema é dar um passo para trás e enxergar a situação de outra perspectiva.',

  'A vida é como um grande quebra-cabeça, e cada desafio é uma peça que nos ajuda a construir a imagem completa.',

  'Não importa o quão difícil seja o caminho, o importante é dar um passo de cada vez na direção certa.',

  'Cada novo dia é uma oportunidade para aprender algo novo e fazer pequenas melhorias em nós mesmos.',

  'Assim como um programador debuga seu código, podemos analisar nossas vidas para identificar e corrigir desafios.',

  'Na jornada da vida, nem sempre o caminho mais fácil é o mais gratificante. Os desafios nos moldam e nos fazem crescer.',

  'Assim como no mundo da programação, é essencial manter-se atualizado na "linguagem" da vida para lidar com as constantes atualizações.',

  'Cada desafio é uma oportunidade disfarçada. Às vezes, é preciso procurar além das dificuldades para encontrar a lição valiosa.',

  'À medida que avançamos, lembramo-nos de que o progresso muitas vezes ocorre fora da zona de conforto. Arrisque-se e descubra novos horizontes.',
]

function screenToggle() {
  newMessage()
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterEvent(e) {
  if (e.key == 'Enter') {
    screenToggle()
  }
}

function newMessage() {
  message.innerText = messages[randomNumber]
  randomNumber = Math.floor(Math.random() * 10)
}
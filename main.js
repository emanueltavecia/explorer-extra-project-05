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
  "If someone is so tired that they can't give you a smile, give them yours.",

  'Sometimes the best way to solve a problem is to take a step back and look at the situation from another perspective.',

  'Life is like a big puzzle, and each challenge is a piece that helps us build the complete picture.',

  'No matter how difficult the path is, the important thing is to take one step at a time in the right direction.',

  'Every new day is an opportunity to learn something new and make small improvements to ourselves.',

  'Just as a programmer debugs his code, we can analyze our lives to identify and fix challenges.',

  'On the journey of life, the easiest path is not always the most rewarding. Challenges shape us and make us grow.',

  'Just like in the world of programming, it is essential to stay up to date in the "language" of life to deal with constant updates.',

  'Every challenge is an opportunity in disguise. Sometimes you have to look beyond the difficulties to find the valuable lesson.',

  'As we move forward, we remember that progress often occurs outside of our comfort zone. Take risks and discover new horizons.',
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

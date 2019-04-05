const inputs = document.querySelectorAll('.target')
const cards = document.querySelectorAll('.full-card')

cards.forEach(card => card.addEventListener('click', (event) => {
  inputs.forEach(radio => {
    radio.checked = false
  })
  cards.forEach(card => {
    card.classList.remove('choose-this')
  })
  card.lastElementChild.firstElementChild.checked = true
  card.classList.toggle('choose-this')
}))



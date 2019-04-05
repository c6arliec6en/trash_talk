const inputs = document.querySelectorAll('.target')

inputs.forEach(input => input.addEventListener('click', (event) => {
  inputs.forEach(radio => {
    radio.checked = false
  })
  input.checked = true
}))


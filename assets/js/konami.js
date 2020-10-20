const pressed = []
const secretCode = 'josh'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  if (pressed.join('').includes(secretCode)) {
    console.log('Well done you cracked the code')
    cornify_add()
  }
})

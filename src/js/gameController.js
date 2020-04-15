const gameController = {
  init (game) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'j') {
        if (!game.hasStarted) {
          game.hasStarted = true
        }
        // Donner un petit coup de pied au derrière de l’oiseau
      }
    })
  }
}

export default gameController

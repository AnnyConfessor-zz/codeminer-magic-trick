const generateDecks = () => {
  const nameDecks = ['clubs', 'diamonds', 'hearts', 'spades']
  const valueDecks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const mockValue = [
    'ace', 2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king'
  ]

  let decks = []
  let response = [[], [], []]

  const verifyExists = (arr, value) => arr.map(item => item.filter(itemFind => itemFind === value)[0])[0]

  nameDecks.map(deck => valueDecks.map((value, valueIndex) => {
    decks.push({
      deck,
      value,
      img: `${mockValue[value - 1]}_of_${deck}${valueIndex > 9 ? '2' : ''}.png`
    })
  }))

  for (let i = 0; i < 3; i++) {
    let j = 0;

    while (j < 7) {
      const randomItem = decks[Math.floor(Math.random() * Math.floor(decks.length))]

      if (!verifyExists(response, randomItem)) {
        response[i][j] = randomItem
        j++
      }
    }
  }

  return response
}

window.onload = function () {
  const container = document.querySelector('.container')
  const decks = generateDecks()
  const template = decks.map((item, index) => {
    return (
      `
      <div class="deck">
        <div class="cards">
          <div class="title">
            <h1>${index + 1}</h1>
          </div>
          ${item.map(card => `
            <button onclick="selectImage('${card.value}-${card.deck}')">
              <img src="img/cards/${card.img}" alt="">
            </button>
          `).join('')}
        </div>
      </div>
      `
    )
  }).join('')

  container.innerHTML = template

  selectImage = img => console.log(img)
}

const FRUITS = ['Apple', 'Orange', 'Lemon', 'Banana']

function replaceApple() {
  for (let fruitId = 0; fruitId < FRUITS.length; fruitId++) {
    if (FRUITS[fruitId] === 'Apple') {
      FRUITS[fruitId] = 'Only ' + FRUITS[fruitId]
    }
  }
}

function addListInPage() {
  for (let fruitId = 0; fruitId < FRUITS.length; fruitId++) {
    let listDOM = document.getElementById('list')
    let listItem = document.createElement('li')
    let listItemContent = document.createTextNode(FRUITS[fruitId])
    listItem.className = 'list__item'
    listItem.appendChild(listItemContent)
    listDOM.appendChild(listItem)
  }
}

replaceApple()
FRUITS.sort()
addListInPage()
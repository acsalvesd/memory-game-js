const cardArray = [
    {
        name: 'Cygnus Hyoga',
        img: 'images/cygnus-hyoga.png',
    },
    {
        name: 'Phoenix Ikki',
        img: 'images/phoenix-ikki.png',
    },
    {
        name: 'Saori Kido',
        img: 'images/saori-kido.png',
    },
    {
        name: 'Andromeda Shun',
        img: 'images/andromeda-shun.png',
    },
    {
        name: 'Dragon Shiryu',
        img: 'images/dragon-shiryu.png',
    },
    {
        name: 'Saint Seiya',
        img: 'images/saint-seiya.png',
    },
    {
        name: 'Cygnus Hyoga',
        img: 'images/cygnus-hyoga.png',
    },
    {
        name: 'Phoenix Ikki',
        img: 'images/phoenix-ikki.png',
    },
    {
        name: 'Saori Kido',
        img: 'images/saori-kido.png',
    },
    {
        name: 'Andromeda Shun',
        img: 'images/andromeda-shun.png',
    },
    {
        name: 'Dragon Shiryu',
        img: 'images/dragon-shiryu.png',
    },
    {
        name: 'Saint Seiya',
        img: 'images/saint-seiya.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', index)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('chech for a match')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You click the same image')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found the match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again')
    }
    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
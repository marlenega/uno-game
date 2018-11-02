let Game = {
    deck: null,
    players: {},
    playersTurn: null,
    turnDirection: 1, 
    topCard: null,
    topCardColor: null,
    topCardValue: null,
    
    
}

function makeNewCards(){
    const cards = [
        'red_0',
        'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
        'red_1', 'red_2', 'red_3', 'red_4', 'red_5', 'red_6', 'red_7', 'red_8', 'red_9',
        'red_skip', 'red_reverse', 'red_draw_two',
        'red_skip', 'red_reverse', 'red_draw_two',
        
        'green_0',
        'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
        'green_1', 'green_2', 'green_3', 'green_4', 'green_5', 'green_6', 'green_7', 'green_8', 'green_9',
        'green_skip', 'green_reverse', 'green_draw_two',
        'green_skip', 'green_reverse', 'green_draw_two',
        
        'blue_0',
        'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
        'blue_1', 'blue_2', 'blue_3', 'blue_4', 'blue_5', 'blue_6', 'blue_7', 'blue_8', 'blue_9',
        'blue_skip', 'blue_reverse', 'blue_draw_two',
        'blue_skip', 'blue_reverse', 'blue_draw_two',
        
        'yellow_0',
        'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
        'yellow_1', 'yellow_2', 'yellow_3', 'yellow_4', 'yellow_5', 'yellow_6', 'yellow_7', 'yellow_8', 'yellow_9',
        'yellow_skip', 'yellow_reverse', 'yellow_draw_two',
        'yellow_skip', 'yellow_reverse', 'yellow_draw_two',
        
        'draw_four_wild','draw_four_wild', 'wild', 'wild',
        'draw_four_wild','draw_four_wild', 'wild', 'wild',
    ]    
    
    return cards
}

// create a function that takes an array of cards 
// and returns a new array of shuffled cards
function shuffle( cards ){
    // create an array to hold the shuffled cards
    const deck = [ ]
    // algorithm to shuffle a deck of cards
    // as long as there are cards in the cards array
    while (cards.length > 0) {
        // pick a random number between 0 and the length of the cards array
        let randomNumber = Math.floor(Math.random() * cards.length)
        // then use that number to pick a card
        let card = cards[randomNumber]
        // console.log('card is '+card)
        // push that card onto the new deck
        deck.push(card)
        // remove the card from the original deck
        cards.splice(randomNumber, 1)        
    }
    return deck
}

function dealCard(deck){
    return deck.shift()
}
 function startNewGame(){
     //create a new set of cards
     let cards = makeNewCards()
     //shuffle those cards
     let deck = shuffle(cards)
     //and attatch them to the gamr object
     Game.deck = deck
     showGameObject()
     
     //add up tp four play3er to the game object
     const playerNames = ["kim", "big ish", "albert", "jeremy"]
     const ALPHABET = ['a', 'b','c','d','e','f','g','h','i']
     for (let i = 0; i < playerNames.length; i++){
         let name = playerNames[i]
         let id = ALPHABET[i]
         let player = createNewPlayer(name, id)
         Game.players[id] = player
     }
     //playersName.length can just be 4
     let discard = dealCard(Game.deck)
     Game.topCard = discard
     let topCard = document.querySelector('#deck')
     topCard.setAttribute('src', 'images/'+discard+'.png')
     
     Game.playersTurn = 'A'
     
     showGameObject()
 }
 
 function showGameObject(){
  var codeSection = document.querySelector('#game-object')
  codeSection.innerHTML = JSON.stringify(Game, null, 2)
}

function getCardColor ( cardName ){
    const splitCard = cardName.split('_')
    const color = splitCard[0]
    return color
}

function getCardValue ( cardName ){
    const splitCard = cardName.split('_')
    let val = splitCard[1]
    if (splitCard.length === 3){
        val += '_'+splitCard[2]
      //  val = val + '_' + splitCard[2]
    }
    
    return val
}

function changePlayersTurn(){
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    
}
//function changePLayerTurn(){}
//function getColorOfCard(){}
//function getNUmberOfCard(){}
//function playCard(){}
function playerDrawCard(){}
//function skipTurn(){}
function playerDrawTwo(playerId){
    playerDrawCard(playerId)
    playerDrawCard(playerTd)
}
//function playerDrawFour(){}
//function reverseTurn(){}
//function playWildCard(){}

 function createNewPlayer(playerName, id){
     //every player has to have a name.
     //cards
     //points
     let player = {
         id: id,
         name: playerName,
         cards: [],
         points: 0,
     }
     for (let i = 0; i < 7; i++){
         let card = dealCard(Game.deck)
         player.cards.push(card)
     }
     
     return player
 }
 
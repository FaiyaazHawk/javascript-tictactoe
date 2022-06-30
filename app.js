// need a game board object, players

// player factory function

const Player = (name, symbol) => {
    return {name, symbol}
}

//game board object
const GameBoard = (() => {
    let board = [
        "","","",
        "","","",
        "","",""
    ]
//possible win combinations
    let winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]

    const playerOne = Player("one", "X")
    const playerTwo = Player("two", "O")

    let playerTurn = playerOne;


    let fields = document.querySelectorAll(".field")
    // adds event listener to each box for 1 click only
    fields.forEach(field => {
        field.addEventListener('click', function() {
            field.classList.add(playerTurn.name);
            markBoard(field);
            checkwin(playerTurn)
            changePlayer();
            
        }, {once: true})
    })

    const markBoard = (field) => {
        board[field.dataset.index] = playerTurn.symbol
    }

    const checkwin = (player) => {
        
    }


    const changePlayer = () => {
        if (playerTurn === playerOne) {
            playerTurn = playerTwo;
            
        } else {
            playerTurn = playerOne;
            
        }
    }
    
    
    return {
        
    };
})();

const displayController = () => {
    
}
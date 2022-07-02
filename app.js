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

    const playerOne = Player("Blue", "X")
    const playerTwo = Player("Red", "O")

    let playerTurn = playerOne;
    let turnCount = 0;

    let fields = document.querySelectorAll(".field")
    
    fields.forEach(field => {
        field.addEventListener('click', function() {
            field.classList.add(playerTurn.name);
            markBoard(field);
            checkwin(playerTurn)
            turnCount++;
            changePlayer();
            
        }, {once: true}) // adds event listener to each box for 1 click only
    })

    const markBoard = (field) => {
        board[field.dataset.index] = playerTurn.symbol
    }

    const checkwin = (playerTurn) => {
        
        winCombos.forEach((item) => {
            if (board[item[0]] == playerTurn.symbol && board[item[1]] == playerTurn.symbol && board[item[2]] == playerTurn.symbol) {
            displayController.endGame(playerTurn);
            }
        })
        if (turnCount == 8) {
            displayController.tieGame()
        }
    }


    const changePlayer = () => {
        if (playerTurn === playerOne) {
            playerTurn = playerTwo;
            
        } else {
            playerTurn = playerOne;
            
        }
    }
    const resetGame = () =>  {
        window.location.reload()
    }
    
    return {
        resetGame
    };
})();

const displayController = (() => {

    const restart = document.querySelector('.restart')

    restart.addEventListener('click', function() {
        GameBoard.resetGame()
    })

    const outcome = document.querySelector('.outcometext')

    const endGame = (playerTurn) => {
        outcome.innerText = `${playerTurn.name} is the WINNER!`
        outcome.style.color = `${playerTurn.name}`
    }
    const tieGame = () => {
        outcome.innerText = `It's A Tie!!`
        outcome.style.color = 'white'
    }

    return {
        endGame,
        tieGame
    }
})()
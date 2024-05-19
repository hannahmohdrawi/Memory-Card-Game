

const cards = document.querySelectorAll(".game-card");


let movesDisplay = document.getElementsByClassName("move-counter");
let restart = document.getElementById("restart");

let toggledCardsArray = [];
let moves = 0;
let winCounter = 0;

//Action of flipping cards on click
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard(){
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard= false;

    checkMatch();
}

function checkMatch(){
    if(firstCard.id === secondCard.id){
        disableCards();
        return;
    }else{
        unflipCards();
    }

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}



cards.forEach(card => card.addEventListener('click', flipCard));




cards.onclick = function moveCounter(){
    moves++;
    movesDisplay.textContent = moves;
     
};


const cardImagesArray = [
    {id:1, 
    image: document.getElementById("1"),
    newAlt: 'nemo'
    },
    {id:2, 
        image: document.getElementById("2"),
        newAlt: 'russel'
    },
    {id:3, 
        image: document.getElementById("3"),
        newAlt: 'russel'
    },
    {id:4, 
        image: document.getElementById("4"),
        newAlt: 'mcqueen'
    },
    {id:5, 
        image: document.getElementById("5"),
        newAlt: 'overthehedge'
    },
    {id:6, 
        image: document.getElementById("6"),
        newAlt: 'silly and mike'
    },
    {id:7, 
        image: document.getElementById("7"),
        newAlt: 'dory'
    },
    {id:8, 
        image: document.getElementById("8"),
        newAlt: 'sid'
    },
    {id:1, 
        image: document.getElementById("9"),
        newAlt: 'sully and mike'
    },
    {id:10, 
        image: document.getElementById("10"),
        newAlt: 'mcqueen'
    },
    {id:11, 
        image: document.getElementById("11"),
        newAlt: 'lilo and stitch'
    },
    {id:12, 
        image: document.getElementById("12"),
        newAlt: 'lilo and stitch'
    },
    {id:13, 
        image: document.getElementById("13"),
        newAlt: 'sid'
    },
    {id:14, 
        image: document.getElementById("14"),
        newAlt: 'over the hedge'
    }
];


const shuffledArray = cardImagesArray.map(shuffleCards());

function shuffleCards(){

    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cardImagesArray.length);
        card.style.order = randomPos;
    })
    
}


function restartGame(){
    shuffleCards();
    moves = 0;

}


console.log(moveCounter());


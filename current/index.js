
const elements={
    cards: document.getElementsByClassName("card"),
    allImages: document.getElementsByClassName("card-image"),
    movesDisplay: document.getElementsByClassName("move-counter"),
    restart: document.getElementById("restart")

}

let toggledCardsArray = [];
let move = 0;
let winCounter = 0;


const cardImagesArray = [
    {id:1, 
    image: document.querySelector("#1"),
    newAlt: 'dory'
    },
    {id:2, 
        image: document.querySelector("#2"),
        newAlt: 'russel'
    },
    {id:3, 
        image: document.querySelector("#3"),
        newAlt: 'russel'
    },
    {id:4, 
        image: document.querySelector("#4"),
        newAlt: 'mcqueen'
    },
    {id:5, 
        image: document.querySelector("#5"),
        newAlt: 'overthehedge'
    },
    {id:6, 
        image: document.querySelector("#6"),
        newAlt: 'silly and mike'
    },
    {id:7, 
        image: document.querySelector("#7"),
        newAlt: 'dory'
    },
    {id:8, 
        image: document.querySelector("#8"),
        newAlt: 'sid'
    },
    {id:1, 
        image: document.querySelector("#9"),
        newAlt: 'sully and mike'
    },
    {id:10, 
        image: document.querySelector("#10"),
        newAlt: 'mcqueen'
    },
    {id:11, 
        image: document.querySelector("#11"),
        newAlt: 'lilo and stitch'
    },
    {id:12, 
        image: document.querySelector("#12"),
        newAlt: 'lilo and stitch'
    }
    {id:13, 
        image: document.querySelector("#13"),
        newAlt: 'sid'
    },
    {id:14, 
        image: document.querySelector("#14"),
        newAlt: 'over the hedge'
    }
]


function restartGame(){
    let toggledCards = document.getElementsByClassName("toggle-card");
    cardImagesArrayArray.sort(() => Math.random() - 0.5);

}
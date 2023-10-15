console.log("Welcome to Tic-Tac-Toe")
let music = new Audio("player.mp3")
let audioturn = new Audio("turn.mp3")
let gameoveraudio = new Audio("end.mp3")
let turn = "X"
let gameover = false;

const changeturn = ()=> {
    return turn ==="X"? "0":"X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
        }


    })

}

// game logic

let boxes = document.getElementsByClassName("boxy");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();


            let roundDraw = Array.from(boxes).every((box) => box.querySelector('.boxtext').innerText !== '');
            
            if (!gameover) {
                if (roundDraw) {
                    gameover = true;
                    document.getElementsByClassName("info")[0].innerHTML = "The Game Is a Draw";
                } else {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }

            }

        }

         
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
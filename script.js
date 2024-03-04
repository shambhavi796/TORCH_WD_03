
// function(e){
//     let turn= box.innerText;
//     // turn=" ";
//     if (turn=" "){
//         e.key='X'
//         return e.key;
//     }
//     else if (turn='X'){
//         e.key='O'
//         return e.key;
//     }else{
//         e.key='X'
//         return e.key;
//     }
// }

let turn='X';
//an array to store all box's content
let gameHistory= new Array(9).fill(null);
console.log(gameHistory);

function checkWin(){
    if(gameHistory[0]!=null && gameHistory[0]===gameHistory[1] && gameHistory[1]===gameHistory[2] ||
        gameHistory[3]!=null && gameHistory[3]===gameHistory[4] && gameHistory[4]===gameHistory[5] ||
        gameHistory[6]!=null && gameHistory[6]===gameHistory[7] && gameHistory[7]===gameHistory[8] ||
        gameHistory[0]!=null && gameHistory[0]===gameHistory[3] && gameHistory[3]===gameHistory[6] ||
        gameHistory[1]!=null && gameHistory[1]===gameHistory[4] && gameHistory[4]===gameHistory[7] ||
        gameHistory[2]!=null && gameHistory[2]===gameHistory[5] && gameHistory[5]===gameHistory[8] ||
        gameHistory[0]!=null && gameHistory[0]===gameHistory[4] && gameHistory[4]===gameHistory[8] ||
        gameHistory[2]!=null && gameHistory[2]===gameHistory[4] && gameHistory[4]===gameHistory[6] )
    {
        document.write(`Winner is ${turn}`);
            return;
    }

    if(! (gameHistory.some((e)=> e===null)) ){
        document.write('GAME DRAW !!!');
        return;
    }
}

function boxClick(e){
    const id= Number(e.id);
    // to stop overriding of turns
    if(gameHistory[id]!== null) return;
    gameHistory[id]=turn;
    e.innerText=turn;
    checkWin();
    turn=(turn==='X'?'0':'X');
}
// let box= document.querySelectorAll('box');

// box.addEventListener('click',function(e){
//     let turn= e.innerText;
//     // turn=" ";
//     if (turn===" "){
//         e.key='X'
//         // return e.key;
//     }
//     else if (turn==='X'){
//         e.key='O'
//         return e.key;
//     }else{
//         e.key='X'
//         return e.key;
//     }
// });
    // box.onclick= getInput;

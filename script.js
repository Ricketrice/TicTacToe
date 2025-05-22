let body = document.querySelector("body");
let ticTacToebox = document.querySelectorAll(".box"); //Select all the div 
let bodyOfTicTacToe = document.querySelector(".bodyOfTicTacToe"); //Select the body of the where all the div is at 
let oddOrEven = 1;
let gameOver = false;

const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left
  [2, 4, 6]  // Diagonal from top-right
];
let moveX = []
let moveY = []

function findingWin(Winbo, input) {
    let combo;
    let count;
    let position;
    for (let i = 0; i<Winbo.length; i++) {
        combo = Winbo[i];
        count = 0; 
        for (let j = 0; j<combo.length; j++) {
            position = combo[j];
            if (input.includes(position)) {
                count++;
            } 
        }
        if (count === combo.length) {
        return true;
        }
    }
    return false;
}

function reset() {
    let draw = document.querySelector(".draw");
    let box = document.querySelectorAll(".box");
    for (let i = 0; i<box.length; i++) {
        box[i].innerHTML = "";
    }
    draw.innerHTML = "";
    draw.style.display = "none";
    moveX = [];
    moveY = [];
    oddOrEven = 1;
}

function displaySymbol() {
    function displayIT(event) {
        let allFilled = true; 
        let a = event.currentTarget;
        let ElementID = Number(a.id);
        console.log(ElementID);
        let score1 = document.getElementById("score1");
        let score2 = document.getElementById("score2");
        let score1Value = score1.innerHTML;
        let score2Value = score2.innerHTML;

        if (gameOver === false) {
            if (a.innerHTML == "" || a.innerHTML == " ") {
                if (oddOrEven%2 != 0) { //Display x for the first user
                    moveX.push(ElementID);
                    a.innerHTML = "X";
                    a.style.color = "#e94560";
                    a.style.textAlign = 'center';
                    if (findingWin(winningCombos, moveX) === true) {
                        console.log("X Win")
                        let xWin = document.querySelector(".xWin");
                        score1Value++;
                        score1.innerHTML = score1Value;
                        gameOver = true;
                        xWin.innerHTML = "X Win";
                        xWin.style.color = "white";
                        xWin.style.backgroundColor = "#f1c40f"; // softer yellow
                        xWin.style.fontSize = "32px";
                        xWin.style.padding = "15px 30px";
                        xWin.style.margin = "20px auto";
                        xWin.style.borderRadius = "12px";
                        xWin.style.textAlign = "center";
                        xWin.style.width = "fit-content";
                        xWin.style.fontFamily = "'Segoe UI', sans-serif";
                        xWin.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.2)";
                        xWin.style.position = "fixed";
                        xWin.style.top = "25%";
                        xWin.style.left = "80%";
                        xWin.style.height = "60px";
                        xWin.style.display = "flex";
                    }
                    console.log(moveX);
                    oddOrEven++;
                } else if (oddOrEven % 2 == 0) { //display o for the second user 
                    moveY.push(Number(ElementID));
                    a.innerHTML = "O";
                    a.style.color = "#0fbcf9";
                    a.style.textAlign = 'center';
                    if (findingWin(winningCombos, moveY) === true) {
                        console.log("Y Win")
                        let yWin = document.querySelector(".yWin");
                        yWin.innerHTML = "Y Win";
                        yWin.style.color = "white";
                        yWin.style.backgroundColor = "#f1c40f"; // softer yellow
                        yWin.style.fontSize = "32px";
                        yWin.style.padding = "15px 30px";
                        yWin.style.margin = "20px auto";
                        yWin.style.borderRadius = "12px";
                        yWin.style.textAlign = "center";
                        yWin.style.width = "fit-content";
                        yWin.style.fontFamily = "'Segoe UI', sans-serif";
                        yWin.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.2)";
                        yWin.style.position = "fixed";
                        yWin.style.top = "25%";
                        yWin.style.left = "80%";
                        yWin.style.height = "60px";
                        yWin.style.display = "flex";

                        score2Value++;
                        score2.innerHTML = score2Value;
                        gameOver = true;
                    }
                    console.log(moveY);
                    oddOrEven++;

                }
            } else if (a.innerHTML == "X" || a.innerHTML == "O") { //If clicked on a already filled div, do nothing 
                    return;
            } 
            
            for (let i = 0; i<ticTacToebox.length; i++)  { //Check if all the box if filled
                if (ticTacToebox[i].innerHTML == "") {
                    allFilled = false;
                }
            }

            if (allFilled === true) { //if all box if filled, display draw
                if ((findingWin(winningCombos, moveY) != true) && findingWin(winningCombos, moveX) != true) {
                    setTimeout(function() {
                        let draw = document.querySelector(".draw");
                        draw.innerHTML = "It a draw";
                        draw.style.color = "white";
                        draw.style.backgroundColor = "#f1c40f"; // softer yellow
                        draw.style.fontSize = "32px";
                        draw.style.padding = "15px 30px";
                        draw.style.margin = "20px auto";
                        draw.style.borderRadius = "12px";
                        draw.style.textAlign = "center";
                        draw.style.width = "fit-content";
                        draw.style.fontFamily = "'Segoe UI', sans-serif";
                        draw.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.2)";
                        draw.style.position = "fixed";
                        draw.style.top = "25%";
                        draw.style.left = "80%";
                        draw.style.height = "60px";
                        draw.style.display = "flex";
                    },2000);
                    return;
                }
            }
        } else {
            return;
        }
    }
    return displayIT;
}

let activateFirst = displaySymbol();

for (let i = 0; i<ticTacToebox.length; i++) { //On click event for each div 
    ticTacToebox[i].addEventListener("click",activateFirst);
}

document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("mainForm")
    form.style.display = "inline-block";
    form.style.position = "fixed";
    form.style.alignSelf = "center";
    form.style.alignItems = "center";
    form.style.top = "10%";
    form.style.left = "29.5%";
    form.style.flexDirection = "column"

})


function sendData() {
    let form = document.getElementById("mainForm");
    let name1 = document.getElementById("name1");
    let text1 = name1.value;
    let playerOneName = document.createElement("div");
    let withinDiv = document.querySelector(".nameing1");
    let scoreboard = document.querySelector(".scoreboard");
    form.style.display = "none";
    scoreboard.style.display = "inline-block";
    scoreboard.style.position = "fixed";
    scoreboard.style.top = "20%";
    scoreboard.style.margin = "20px";
    scoreboard.style.gridColumn = "1/2";
    playerOneName.innerHTML = text1;
    
    playerOneName.style.alignSelf = "center";
    playerOneName.style.fontSize = "25px";
    playerOneName.style.color = "Pink";
    withinDiv.appendChild(playerOneName);


    let withinDiv1 = document.querySelector(".nameing2");
    let playerTwoName = document.createElement("div");
    let name2 = document.getElementById("name2");
    let text2 = name2.value;
    playerTwoName.innerHTML = text2;
    playerTwoName.style.alignSelf = "center";
    playerTwoName.style.fontSize = "28px";
    playerTwoName.style.color = "Pink";
    withinDiv1.appendChild(playerTwoName);    

}


let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {

        if (turnO) {
            Box.innerText = "O";
            turnO = false;
            Box.setAttribute('style', 'color: red');
        }
        else {
            Box.innerText = "X";
            turnO = true;
            Box.setAttribute('style', 'color: Blue');
        }
        Box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let Box of boxes) {
        Box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let Box of boxes) {
        Box.disabled = false;
        Box.innerHTML = "";
    }
};


const showWinner = (Winner) => {
    msg.innerText = "Congratulations, winner is " + Winner;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                showWinner(pos1val);
            }

        }
    }
};

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

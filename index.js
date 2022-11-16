//dice1

var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var dice1 = document.querySelector('.img1');

if (randomNumber1 === 1) {
    dice1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    dice1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    dice1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    dice1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    dice1.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
    dice1.setAttribute("src", "images/dice6.png");
}

//dice2

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

var dice2 = document.querySelector('.img2');

if (randomNumber2 === 1) {
    dice2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
    dice2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
    dice2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
    dice2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
    dice2.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
    dice2.setAttribute("src", "images/dice6.png");
}

//TitleChange

var title = document.querySelector('.container h1');

if (randomNumber1 === randomNumber2) {
    title.innerHTML = 'Draw!';
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML = '🏆 Player 1 wins!';
} else {
    title.innerHTML = 'Player 2 wins! 🏆';
}
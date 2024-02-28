var img1Element = document.querySelector('.img1');
var img2Element = document.querySelector('.img2');
var win = document.querySelector('.win')
var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomNum2 = Math.floor(Math.random() * 6 + 1);

img1Element.src = `./images/dice${randomNum1}.png`
img2Element.src = `./images/dice${randomNum2}.png`

if(randomNum1 > randomNum2){
win.textContent = "Player 1 Wins"
}
else if(randomNum1===randomNum2){
    win.textContent = "Draw"
}
else{
    win.textContent = "Player 2 Wins"
}

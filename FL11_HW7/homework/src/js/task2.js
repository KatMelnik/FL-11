
let minNumber=0;
let maxNumber=8;
let intNumber;
let countTry=3;
let number;
let prizeOne=100;
let prizeTwo=50;
let prizeThree=25;
let prize=0;
let leftTry=countTry;
let tryOne=0;
let tryTwo=1;
let tryThree=2;
let win, againGame;
let text='Enter a number (from 0 to 8) of pocket on which the ball could land.';

if(!confirm('Do you want to play a game?')) {
	alert('You did not become a billionaire, but can.','');
} else {
	intNumber=Math.floor(Math.random()*(maxNumber+1));
	console.log(intNumber);
	for(let i=0;i<countTry;i++){
		number=+prompt('Choose a roulette pocket number from 0 to 8\n'+
			' \nAttempts left:'+leftTry+
			' \nTotal prize:'+prize+'$'+
			'\nPossible prize on current attempt: 100$','');
		leftTry=leftTry-1;
		if (number===intNumber){
			if (i === tryOne) {
				prize += prizeOne;
			} else if (i === tryTwo) {
				prize += prizeTwo;
			} else if (i === tryThree) {
				prize += prizeThree;
			}
			win=confirm('Congratulation, you won! Your prize is: ' + prize + '$. \nDo you want to continue?');
			break;
		}
	}
	alert('Thank you for your participation. Your prize is: '+prize+'$ ');
	againGame = confirm('Do you want to play again?');   
}

let prizeOne=100;
let prizeTwo=50;
let prizeThree=25;
let minNumber=0;
let maxNumber=8;
let intNumber;
let countTry=3;
let number;
let possiblePrize=[prizeOne,prizeTwo,prizeThree];
let prize=0;
let leftTry=countTry;
let tryOne=0;
let tryTwo=1;
let tryThree=2;
let win, againGame;
let flag=false;
let question=confirm('Do you want to play a game?');
let rangeBig=4;
let prizeBig=2;

if(!question) {
	alert('You did not become a billionaire, but can.','');
} else {
	do{
		leftTry=countTry;
		intNumber=Math.floor(Math.random()*(maxNumber+1));
		console.log(intNumber);
		for(let i=0;i<countTry;i++){
			number=+prompt('Choose a roulette pocket number from 0 to '+maxNumber+
				'\nAttempts left:'+leftTry+
				'\nTotal prize:'+prize+'$'+
				'\nPossible prize on current attempt:'+possiblePrize[i]+'$','');
			leftTry=leftTry-1;
			if (number===intNumber){
				prize += possiblePrize[i];
				alert('Congratulation, you won! Your prize is: ' + prize + '$.');
				flag=true;
				break;
			}
		}
		if (flag===false) {
			alert('Thank you for your participation. Your prize is: '+prize+'$ ');
		}
		againGame = confirm('Do you want to play again?'); 
		if (!againGame) {
			alert('You did not become a billionaire, but can.','');
		} else if (flag===true){
			for (let j=0; j<countTry; j++) {
				possiblePrize[j]=possiblePrize[j]*prizeBig; 
			} 
			maxNumber+=rangeBig; 
			flag=false;
		}
		
	} while (againGame);
}
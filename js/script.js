//сделать так чтобы менялся ход
//сделать так чтобы по нажатию на хэлп выходило описание игры и по нажатию там BACK возврат шел на поле игры без обнуления данных



 var player = 5;  //изначальное кол-во спичек у игрока
 var comp = 5;    //изначальное кол-во спичек у компа

 var n = 0;
 var together = 0;   //переменная, которая получается путем сложения взятыхспичек компа и игрока. тут обьявлена

 var get = 0; //переменная взятых спичек игроком
 var guess = 0;  // предполагаемое игроком количество вместе взятых спичек

 var i = Math.random()*comp;
 
 var z;

 var g = true;

 var compGet = 0;  // переменная взятых компом спичек (реализована далее рандомом)
 var compGuess = 0;  // переменная уадываемого количества компом вместе взятых спичек (реализована далее рандомом)

/*
0-Определение чей ход первый
1-Берет спички Комп
2-Берет спички Игрок
3-Угадывает Комп
4-Угадывает Игрок
5-Вскрытие и сравниевание выбора с реальным количеством спичек в сумме взятых
6-След ход(ходить должен другой игрок первым
*/

var status = 2;

function startGameButton(newStatus)
{
	//if (status == 0)
	//{
		var start = confirm("уверены что хотите начать новую игру?");
 			if (start == true)
 			{
 				window.location.reload();
 			}
 			else
 			{
 				alert("Продолжаем игру")
 			}
 		status = 2;
 		console.log(status, get, guess,compGet, compGuess, together)
	//}
}


function plusButton()
{
	if (status == 2 || status == 4)
		{
			
			if (status == 2)
			{
				if (get < player && get >= 0)
					{get++}
				document.getElementById("playerGetField").innerHTML=get;
				console.log(status, get, guess,compGet, compGuess, together);
			}
			if (status == 4)
			{
				if (guess < player+comp && guess >= 0)
					{guess++}
				document.getElementById("playerGuessField").innerHTML=guess;
				console.log(status, get, guess,compGet, compGuess, together);
			}
			else
			{
				console.log("куку")
			}
				
		}
}

function minusButton()
{
		if (status == 2 || status == 4)
		{
			console.log(status, get, guess,compGet, compGuess, together);
			if (status == 2)
			{
				if (get > 0)
					{get--}
				document.getElementById("playerGetField").innerHTML=get;
				console.log(status, get, guess,compGet, compGuess, together);
			}
				if (status == 4)
			{
				if (guess > 0)
					guess--;
				document.getElementById("playerGuessField").innerHTML=guess;
				console.log(status, get, guess,compGet, compGuess, together);

			}
			else
			{
				console.log("куку")
			}
		}
}


function playerGetButton()
{
		if (status == 2)
		{
			changeGetPlayer()
			status = 4;
		}
}



function playerGuessButton()
{
		if (status == 4)
		{
			changeGuessPlayer()
			status = 5;
		}
}




function goButton()
{
	if (status == 5)
	{
		go()
		status = 6;
	}
}



function nextRoundButton()
{
	 if(status == 6)
	 {
	 	nextRound()
	 	status = 2;
	 }
}




function changeGetPlayer(newGet)
{
	document.getElementById("playerGetField").innerHTML=get;
	document.getElementById("get2").src="images/takebutton2.png";
	console.log("у тебя" + " " + get);
	compGet = Math.floor(Math.random() * comp);
	compGuess = Math.floor(Math.random() * (player)) + compGet;
	together = compGet + get;
	console.log(status, get, guess,compGet, compGuess, together);
	document.getElementById("compGetField").innerHTML="взял";
	console.log("Время угадать сколько вместе");
	n = 1;
	return compGet, compGuess, together;
}

function changeGuessPlayer(newGuess)
{
	console.log(status, get, guess,compGet, compGuess, together);
 	document.getElementById("guess2").src="images/guessbutton2.png";
 	document.getElementById("compGuessField").innerHTML=compGuess;

}


function go()
{
	console.log(status, get, guess,compGet, compGuess, together);
	document.getElementById("compGetField").innerHTML=compGet;
	document.getElementById("compGuessField").innerHTML=compGuess;
	document.getElementById("together").innerHTML=together;

	compHand(compGet);
	playerHand(get);

	if(guess == together) 
	{
		console.log("Ты угадал и откладываешь спичку!")
		player-=1
		console.log(player)
		document.getElementById("playerScore").innerHTML=player;
		return player;
		
	}

	else if(compGuess == together)
	{
		console.log("Комп угадал и откладывает спичку!")
		comp-=1
		console.log(comp)
		document.getElementById("compScore").innerHTML=comp;
		return comp;
	}

	else
	{
		console.log("следующий раунд")
	}
}


function nextRound()

{
	if(guess == together) 
	{
		alert("Ты угадал и откладываешь спичку!")
	}

	else if(compGuess == together)
	{
		alert("Комп угадал и откладывает спичку!")
	}
	console.log(status, get, guess,compGet, compGuess, together);
	if(player == 0)
	{
		alert("Игрок победил!")
		//тут надо сделать так чтобы игра была закончена
	}

	else if(comp == 0)
	{
		alert("Комп победил!")
		//тут надо сделать так чтобы игра была закончена
	}
	
	else
	{
		console.log("Продолжаем")
	}

	get = 0;
	guess = 0;
	var c = 0;
	playerGet = 0;
	playerGuess = 0;
	compGet = 0;
	compGuess = 0;
	document.getElementById("compGetField").innerHTML="0";
	document.getElementById("compGuessField").innerHTML="0";
	document.getElementById("together").innerHTML="Вместе";
	document.getElementById("playerGetField").innerHTML="0";
	document.getElementById("playerGuessField").innerHTML= c;
	document.getElementById("playerScore").innerHTML=player;
	document.getElementById("compScore").innerHTML=comp;
	document.getElementById("get2").src="images/takebutton1.png";
	document.getElementById("guess2").src="images/guessbutton1.png";
	document.getElementById("compHand").src="images/handclosed2.png";
	document.getElementById("playerHand").src="images/handclosed.png";

	playerBox(player);
	compBox(comp);
	
	n = 0;
	
	//turnIs(z);

	//console.log(z)
}




 function compHand(compGet)  //функция подставляющая определенную картинку с рукой и спичками в ней в зависимости от компгета

 {
 	compGet;
 	switch(compGet)
 	{
 		case 0:
 		    document.getElementById("compHand").src="images/handopen.png";
 		    break;
 	 	case 1:
 	 		document.getElementById("compHand").src="images/handopen1.png";
 	 		break;	
 		case 2:
 	 		document.getElementById("compHand").src="images/handopen2.png";
 	 		break;	
 		case 3:
 	 		document.getElementById("compHand").src="images/handopen3.png";
 	 		break;	
 		case 4:
 	 		document.getElementById("compHand").src="images/handopen4.png";
 	 		break;	
 		case 5:
 	 		document.getElementById("compHand").src="images/handopen5.png";
 	 		break;
 	 }
}


function compBox(comp)     //функция подставляющая определенную картинку с коробком и спичками в нем в зависимости от текущего значения comp
 
 {
 	comp;
 	switch(comp)
 	{
 		case 0:
 		    document.getElementById("boxComp").src="images/box0.png";
 		    break;
 	 	case 1:
 	 		document.getElementById("boxComp").src="images/box1.png";
 	 		break;	
 		case 2:
 	 		document.getElementById("boxComp").src="images/box2.png";
 	 		break;	
 		case 3:
 	 		document.getElementById("boxComp").src="images/box3.png";
 	 		break;	
 		case 4:
 	 		document.getElementById("boxComp").src="images/box4.png";
 	 		break;	
 		case 5:
 	 		document.getElementById("boxComp").src="images/box5.png";
 	 		break;
 	 }
}



function playerBox(player)       //функция подставляющая определенную картинку с коробком и спичками в нем в зависимости от текущего значения player
{
 	player;
 	switch(player)
 	{
 		case 0:
 		    document.getElementById("boxPlayer").src="images/box0.png";
 		    break;
 	 	case 1:
 	 		document.getElementById("boxPlayer").src="images/box1.png";
 	 		break;	
 		case 2:
 	 		document.getElementById("boxPlayer").src="images/box2.png";
 	 		break;	
 		case 3:
 	 		document.getElementById("boxPlayer").src="images/box3.png";
 	 		break;	
 		case 4:
 	 		document.getElementById("boxPlayer").src="images/box4.png";
 	 		break;	
 		case 5:
 	 		document.getElementById("boxPlayer").src="images/box5.png";
 	 		break;
 	 }
}



function playerHand(get)         //функция подставляющая определенную картинку с рукой и спичками в ней в зависимости от гета игрока

{
	get;
	switch(get)
	{
		case 0:
			document.getElementById("playerHand").src="images/handopenX.png";
			break;
		case 1:
 	 		document.getElementById("playerHand").src="images/handopen1X.png";
 	 		break;	
 		case 2:
 	 		document.getElementById("playerHand").src="images/handopen2X.png";
 	 		break;	
 		case 3:
 	 		document.getElementById("playerHand").src="images/handopen3X.png";
 	 		break;	
 		case 4:
 	 		document.getElementById("playerHand").src="images/handopen4X.png";
 	 		break;	
 		case 5:
 	 		document.getElementById("playerHand").src="images/handopen5X.png";
 	 		break;
	}
}





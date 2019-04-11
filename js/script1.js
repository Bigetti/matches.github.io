//сделать так чтобы менялся ход
//сделать так чтобы по нажатию на хэлп выходило описание игры и по нажатию там BACK возврат шел на поле игры без обнуления данных

var player = 5; //изначальное кол-во спичек у игрока
var comp = 5; //изначальное кол-во спичек у компа

var n = 0;
var _together = 0; //переменная, которая получается путем сложения взятыхспичек компа и игрока. тут обьявлена

var get = 0; //переменная взятых спичек игроком
var guess = 0; // предполагаемое игроком количество вместе взятых спичек

var i = Math.random() * comp;

var z;

var g = true;

var compGet = 0; // переменная взятых компом спичек (реализована далее рандомом)
var compGuess = 0; // переменная уадываемого количества компом вместе взятых спичек (реализована далее рандомом)

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

function change(id, attribute) {
  return function(value) {
    document.getElementById(id)[attribute] = value;
  };
}

var compGetField = change("compGetField", "innerHTML"),
  compGuessField = change("compGuessField", "innerHTML"),
  together = change("together", "innerHTML"),
  playerGetField = change("playerGetField", "innerHTML"),
  playerGuessField = change("playerGuessField", "innerHTML"),
  playerScore = change("playerScore", "innerHTML"),
  compScore = change("compScore", "innerHTML"),
  get2 = change("images/get2", "src"),
  guess2 = change("images/guess2", "src"),
  compHand = change("images/compHand", "src"),
  playerHand = change("images/playerHand", "src"),
  boxComp = change("images/boxComp", "src"),
  boxPlayer = change("images/boxPlayer", "src");

function startGameButton(newStatus) {
  //if (status == 0)
  //{
  var start = confirm("уверены что хотите начать новую игру?");
  if (start == true) {
    window.location.reload();
  } else {
    alert("Продолжаем игру");
  }
  status = 2;
  console.log(status, get, guess, compGet, compGuess, _together);
  //}
}

function plusButton() {
  if (status == 2 || status == 4) {
    if (status == 2) {
      if (get < player && get >= 0) {
        get++;
      }
      playerGetField(get);
      console.log(status, get, guess, compGet, compGuess, _together);
    }
    if (status == 4) {
      if (guess < player + comp && guess >= 0) {
        guess++;
      }
      playerGuessField(guess);
      console.log(status, get, guess, compGet, compGuess, _together);
    } else {
      console.log("куку");
    }
  }
}

function minusButton() {
  if (status == 2 || status == 4) {
    console.log(status, get, guess, compGet, compGuess, _together);
    if (status == 2) {
      if (get > 0) {
        get--;
      }
      playerGetField(get);
      console.log(status, get, guess, compGet, compGuess, _together);
    }
    if (status == 4) {
      if (guess > 0) guess--;
      playerGuessField(guess);
      console.log(status, get, guess, compGet, compGuess, _together);
    } else {
      console.log("куку");
    }
  }
}

function playerGetButton() {
  if (status == 2) {
    playerGetField(get);
    get2("images/takebutton2.png");

    console.log("у тебя" + " " + get);
    compGet = Math.floor(Math.random() * comp);
    compGuess = Math.floor(Math.random() * player) + compGet;
    _together = compGet + get;
    console.log(status, get, guess, compGet, compGuess, _together);
    compGetField("взял");
    console.log("Время угадать сколько вместе");
    n = 1;

    status = 4;
  }
}

function playerGuessButton() {
  if (status == 4 && guess != compGuess) {
    console.log(status, get, guess, compGet, compGuess, _together);
    guess2("images/guessbutton2.png");
    compGuessField(compGuess);
    status = 5;
  }
}

function goButton() {
  if (status == 5) {
    console.log(status, get, guess, compGet, compGuess, _together);
    compGetField(compGet);
    compGuessField(compGuess);
    together(_together);

    compHand(compGet);
    playerHand(get);

    if (guess == _together) {
      console.log("Ты угадал и откладываешь спичку!");
      player -= 1;
      console.log(player);
      playerScore(player);
      return player;
    } else if (compGuess == _together) {
      console.log("Комп угадал и откладывает спичку!");
      comp -= 1;
      console.log(comp);
      compScore(comp);
      return comp;
    } else {
      console.log("следующий раунд");
    }
    status = 6;
  }
}

function nextRoundButton() {
  if (status == 6) {
    if (guess == _together) {
      alert("Ты угадал и откладываешь спичку!");
    } else if (compGuess == _together) {
      alert("Комп угадал и откладывает спичку!");
    }
    console.log(status, get, guess, compGet, compGuess, _together);
    if (player == 0) {
      alert("Игрок победил!");
      //тут надо сделать так чтобы игра была закончена
    } else if (comp == 0) {
      alert("Комп победил!");
      //тут надо сделать так чтобы игра была закончена
    } else {
      console.log("Продолжаем");
    }

    clear();

    playerBox(player);
    compBox(comp);

    n = 0;
    status = 2;
  }
}

function compHand(compGet) {
  //функция подставляющая определенную картинку с рукой и спичками в ней в зависимости от компгета

  compGet;
  switch (compGet) {
    case 0:
      compHand("images/handopen.png");
      break;
    case 1:
      compHand("images/handopen1.png");
      break;
    case 2:
      compHand("images/handopen2.png");
      break;
    case 3:
      compHand("images/handopen3.png");
      break;
    case 4:
      compHand("images/handopen4.png");
      break;
    case 5:
      compHand("images/handopen5.png");
      break;
  }
}

function compBox(comp) {
  //функция подставляющая определенную картинку с коробком и спичками в нем в зависимости от текущего значения comp

  comp;
  switch (comp) {
    case 0:
      boxComp("images/box0.png");
      break;
    case 1:
      boxComp("images/box1.png");
      break;
    case 2:
      boxComp("images/box2.png");
      break;
    case 3:
      boxComp("images/box3.png");
      break;
    case 4:
      boxComp("images/box4.png");
      break;
    case 5:
      boxComp("images/box5.png");
      break;
  }
}

function playerBox(player) {
  //функция подставляющая определенную картинку с коробком и спичками в нем в зависимости от текущего значения player
  player;
  switch (player) {
    case 0:
      boxPlayer("images/box0.png");
      break;
    case 1:
      boxPlayer("images/box1.png");
      break;
    case 2:
      boxPlayer("images/box2.png");
      break;
    case 3:
      boxPlayer("images/box3.png");
      break;
    case 4:
      boxPlayer("images/box4.png");
      break;
    case 5:
      boxPlayer("images/box5.png");
      break;
  }
}

function playerHand(get) {
  //функция подставляющая определенную картинку с рукой и спичками в ней в зависимости от гета игрока

  get;
  switch (get) {
    case 0:
      playerHand("images/handopenX.png");
      break;
    case 1:
      playerHand("images/handopen1X.png");
      break;
    case 2:
      playerHand("images/handopen2X.png");
      break;
    case 3:
      playerHand("images/handopen3X.png");
      break;
    case 4:
      playerHand("images/handopen4X.png");
      break;
    case 5:
      playerHand("images/handopen5X.png");
      break;
  }
}

function clear() {
  get = guess = playerGet = playerGuess = compGet = compGuess = 0;

  compGetField("0");
  compGuessField("0");
  together("Вместе");
  playerGetField("0");
  playerGuessField("0");
  playerScore(player);
  compScore(comp);
  get2("images/takebutton1.png");
  guess2("images/guessbutton1.png");
  compHand("images/handclosed2.png");
  playerHand("images/handclosed.png");
}

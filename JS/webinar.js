/* const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this);
    this.color = color;
  };
  return changeColor;
};
const hat = {
  color: 'blue',
  changeColor: makeChangeColor(),
};
hat.changeColor('orange');

// эта функция была вызвана в контексте обьекта и в ее this записалась ссылка на обект

/* 
обьект - hat
вызов - changeColor;
функция - makeChangeColor; 

*/

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('this: ', this);
    // this.color = color;
  };
  changeColor(); //  до записи контекста - undefined
  const sweater = {
    color: 'teal',
  };
  sweater.changeColor = changeColor;
  sweater.changeColor(); // контекст
  return sweater.changeColor;
};
const changeColor = makeChangeColor();
changeColor('blue'); // вызов без контекста - undefined

// снаружи не получится переменная доступна только внутри sweater.changeColor();

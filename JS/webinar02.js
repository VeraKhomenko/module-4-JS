// call, apply, bind

const showTag = function (arr1, arr2, arr3) {
  console.log(arr1, arr2, arr3); //
  console.log('this: ', this);
  console.log('this.tag: ', this.tag);
};

const mango = {
  tag: 'Mango',
};
const poly = {
  tag: 'Poly',
};
//showTag.call(mango, 1, 2, 3); //метод вызывает функцию на месте присваивая ей контекст - ее this

//showTag.call(poly, 11, 21, 31);

//showTag.apply(mango, [1, 2, 3]); // apply тоже что и call только аргументы передаются массивом

//showTag.apply(poly, [11, 21, 31);
const showMangoTag = showTag.bind(mango); //bind - привязывает контекст, берет ф-цию и создает ее копию, возвращает на =это место (контекст), привязывая this навсегда к mango

showMangoTag(1, 2, 3); // Копия - уже не нужно ничего назначать

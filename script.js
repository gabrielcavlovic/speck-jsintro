// printLines();

// function printLines() {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line";
//   console.log(secondLine);
// }

// var printLines = function () {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line";
//   console.log(secondLine);
// };

// printLines();

// const printLines = function () {
//   console.log(secondLine);

//   var firstLine = "I'm your first line!";
//   console.log(firstLine);

//   var secondLine = "I'm your second line";
//   console.log(secondLine);
// };

// printLines();

// const madeOfGlass = function () {
//   let thing = 'window';
//   thing = 'glass';

//   console.log(thing);
// };

// madeOfGlass();

// const madeOfGlass = function () {
//   const thing = 'window';
//   thing = 'glass';

//   console.log(thing);
// };

// madeOfGlass();

const array1 = ['one', 'two', 'three'];
const array2 = ['one', 'four', 'five'];

const arrayMachine = function (array1, array2) {
  let finalArray = array1.concat(array2);
  finalArray = [...new Set(finalArray)];
  //   finalArray = Array.from(finalArray);
  console.log(finalArray);

  finalArray.sort();
  console.log(finalArray);

  finalArray.reverse();
  console.log(finalArray);
};

arrayMachine(array1, array2);

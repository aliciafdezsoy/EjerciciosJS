const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

let intersection = arrNumber1.filter(
  (num) => arrNumber2.includes(num) && arrNumber3.includes(num)
);

console.log(intersection);

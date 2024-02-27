// Задание №1
function incrementIfPositive(number) {
  if (number > 0){
    return number + 1;
  }else {
    return number;
  }
}
console.log(incrementIfPositive(5));


//Задание №2
function getIndexOfSmallerNumber(num1, num2) {
  if (num1 > num2){
    return 2;
  } else{
    return 1;
  }
}
console.log(getIndexOfSmallerNumber(5, 8));

//Задание №3
function findMiddleNumber(a, b, c) {
  if ((a >= b && a <= c) || (a <= b && a >= c)){
    return a;
  }else if((b >= a && b <= c) || (b <= a && b >= c)){
    return b;
  }else{
    return c;
  }
}
console.log(findMiddleNumber(5, 9, 4))

//Задание №4
function findUniqueNumber(a, b, c, d){
  if(a === b && b === c){
    return "-4-";
  }else if(b === c && c === d){
    return "-1-";
  }else if(a === c && c === d){
    return "-2-";
  }else{
    return "-3-";
  }
}
console.log(findUniqueNumber(5, 5, 8, 5))

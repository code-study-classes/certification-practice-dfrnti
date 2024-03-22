export function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}
console.log(calculateDistance(5, 10));


export function calculateSegmentProduct(a, b, c) {
  const lengthAC = Math.abs(c - a);
  const lengthBC = Math.abs(b - c);
  return lengthAC * lengthBC;
}
console.log(calculateSegmentProduct(-1, 12, 7));


export function calculateKilobytes(A) {
  return Math.floor(A / 1024);
  }  
console.log(calculateKilobytes(2048)); 
console.log(calculateKilobytes(5000)); 


export function calculateSegments(A, B) {
  return Math.floor(A / B);
}
console.log(calculateSegments(10, 3)); 
console.log(calculateSegments(15, 4)); 


export function calculateDigitSum(A) {
const dec = Math.floor(A / 10);
const ex = (A - (dec * 10));
return (dec + ex);
}
console.log(calculateDigitSum(47));
console.log(calculateDigitSum(89));


export function swapHundredsAndTens(number) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  return tens * 100 + hundreds * 10 + ones;
  return swappedNumber;
}
console.log(swapHundredsAndTens(123));
console.log(swapHundredsAndTens(987));


export function getHundredsDigit(number) {
  if (number <= 999) {
    return 0;
  }
  return Math.floor((number % 1000) / 100);
}
console.log(getHundredsDigit(1234));
console.log(getHundredsDigit(9876));
console.log(getHundredsDigit(500));


export function getFullHours(sec) {
  return Math.floor(sec / 60 / 60);
}
console.log(getFullHours(3600));
console.log(getFullHours(7200));
console.log(getFullHours(18000));


export function getDayOfWeek(dayOfYear) {
  const startDay = 1;
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayOfWeekIndex = (startDay + dayOfYear - 1) % 7;
  return daysOfWeek[dayOfWeekIndex];
}
console.log(getDayOfWeek(1));
console.log(getDayOfWeek(10));
console.log(getDayOfWeek(365));


export function countSquares(a, b, c) {
  const ac = Math.floor(a / c);
  const bc = Math.floor(b / c);
  return (ac * bc);
}
console.log(countSquares(6, 4, 2));
console.log(countSquares(8, 5, 3));
console.log(countSquares(10, 10, 5));

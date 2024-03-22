export function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}


export function calculateSegmentProduct(a, b, c) {
  const lengthAC = Math.abs(c - a);
  const lengthBC = Math.abs(b - c);
  return lengthAC * lengthBC;
}


export function calculateKilobytes(A) {
  return Math.floor(A / 1024);
  }  


export function calculateSegments(A, B) {
  return Math.floor(A / B);
}


export function calculateDigitSum(A) {
const dec = Math.floor(A / 10);
const ex = (A - (dec * 10));
return (dec + ex);
}


export function swapHundredsAndTens(number) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  return tens * 100 + hundreds * 10 + ones;
  return swappedNumber;
}


export function getHundredsDigit(number) {
  if (number <= 999) {
    return 0;
  }
  return Math.floor((number % 1000) / 100);
}


export function getFullHours(sec) {
  return Math.floor(sec / 60 / 60);
}


export function getDayOfWeek(dayOfYear) {
  const startDay = 1;
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayOfWeekIndex = (startDay + dayOfYear - 1) % 7;
  return daysOfWeek[dayOfWeekIndex];
}


export function countSquares(a, b, c) {
  const ac = Math.floor(a / c);
  const bc = Math.floor(b / c);
  return (ac * bc);
}

function isPositive(A) {
    return A > 0;
}


function isOdd(A) {
    return A % 2 !== 0;
}


function checkInequality(A, B) {
    return A > 2 && B <= 3;
}


function checkInequality2(A, B) {
    return A >= 0 || B < -2;
}


function checkBetweenNumbers(A, B, C) {
  return (B > A && B < C) || (B < A && B > C);
}


function checkOddThreeDigitNumber(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    }
    if (number < 100 || number > 999) {
        return false; 
    }
    if (number % 2 === 0){
        return false;
    }
    return true;
}
// как это должно работать??????ааааааа!!!!!


function checkUniqueDigits(number) {
    const digits = new Set();
    const numStr = Math.abs(number).toString();

    for (let digit of numStr) {
        if (digits.has(digit)) {
            return false;
        }
        digits.add(digit);
    }
    return true;
}


function isSecondQuadrant(x, y) {
    return x < 0 && y > 0;
}


function isIsoscelesTriangle(a, b, c) {
    if (a === b && b !== c) {
        return true;
    } else if (a === c && b !== c) {
        return true;
    } else if (b === c && a !== b) {
        return true;
    } else {
        return false;
    }
}


function areSameColorFields(x1, y1, X1, Y1) {
    let sum1 = x1 + y1;
    let sum2 = X1 + Y1;
    // Поля одинакового цвета, если суммы координат одинаковые или различаются на кратное 2 число
    return sum1 % 2 === sum2 % 2;
}

export{
    isPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers, checkOddThreeDigitNumber, checkUniqueDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields
};

// Задание №1
export function incrementIfPositive(number) {
  if (number > 0){
    return number + 1;
  }else {
    return number;
  }
}

//Задание №2
export function getIndexOfSmallerNumber(num1, num2) {
  if (num1 > num2){
    return 2;
  } else{
    return 1;
  }
}

//Задание №3
export function findMiddleNumber(a, b, c) {
  if ((a >= b && a <= c) || (a <= b && a >= c)){
    return a;
  }else if((b >= a && b <= c) || (b <= a && b >= c)){
    return b;
  }else{
    return c;
  }
}

//Задание №4
export function findUniqueNumber(a, b, c, d){
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

//Задание №5
export function calculateF(x) {
    if (x < 0) {
        return 0;
    } else if (Math.floor(x) % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
}

//Задание №6
export function describeNumber(n) {
    if (n % 2 === 0) {
        if (n >= 10 && n <= 99) {
            return "Двузначное чётное";
        } else if (n >= 100 && n <= 999) {
            return "Трехзначное чётное";
        } else {
            return "четное число";
        }
    } else {
        if (n >= 10 && n <= 99) {
            return "нечетное двузначное число";
        } else if (n >= 100 && n <= 999) {
            return "нечетное трехзначное число";
        } else {
            return "нечетное число";
        }
    }
}

//Задание №7
export function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday";
        case 7:
            return "sunday";
        default:
            return "Invalid day number.";
    }
}

//Задание №8
export function convertToMeters(unitNumber, lengthInUnits) {
    let lengthInMeters;
    switch (unitNumber) {
        case 1:
            lengthInMeters = lengthInUnits / 10;
            break;
        case 2:
            lengthInMeters = lengthInUnits * 1000;
            break;
        case 3:
            lengthInMeters = lengthInUnits;
            break;
        case 4:
            lengthInMeters = lengthInUnits / 1000;
            break;
        case 5:
            lengthInMeters = lengthInUnits / 100;
            break;
        default:
            return "Invalid unit number";
    }
    
    return lengthInMeters;
}

//Задание №9
export function describeAge(age) {
    let description;
    switch (age) {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
            description = age + " лет";
            break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
            description = age + " лет";
            break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
            description = age + " лет";
            break;
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
            description = age + " лет";
            break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
            description = age + " лет";
            break;
        default:
            description = "Invalid age";
    }
    return description;
}

//Задание №10
export function describeNumber2(number) {
    let description = "";
    switch (Math.floor(number / 100)) {
        case 1:
            description = "В промежутке 100-199";
            break;
        case 2:
            description = "В промежутке 200-299";
            break;
        case 3:
            description = "В промежутке 300-399";
            break;
        case 4:
            description = "В промежутке 400-499";
            break;
        case 5:
            description = "В промежутке 500-599";
            break;
        case 6:
            description = "В промежутке 600-699";
            break;
        case 7:
            description = "В промежутке 700-799";
            break;
        case 8:
            description = "В промежутке 800-899";
            break;
        case 9:
            description = "В промежутке 900-999";
            break;
        default:
            description = "Число не попало в какой-либо промежуток";
    }
    return description;
}

export function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count += 1;
    }
  }
  return count;
}


export function combineStrings(N1, N2, S1, S2) {
  const newString = S1.slice(0, N1) + S2.slice(-N2);
  return newString;
}


export function containsSubstring(s, s0) {
  return s.includes(s0);
}


export function replaceSubstring(S, S1, S2) {
  let index = S.indexOf(S1);
  if (index === -1) {
      return S;
  }
  let newString = S.substring(0, index) + S2 + S.substring(index + S1.length);
  return newString;
}


export function countWordsWithSameLetters(string) {
  const words = string.split('');
  let count = 0;
  for (const word of words) {
    if (word[0] === word[word.length - 1]) {
      count ++;
    }
  }
  return count;
}


export function countWordsWithA(sentence) {
  let words = sentence.split(' ');
  let count = 0;
  for (let word of words) {
      if (word.toLowerCase().includes('a')) {
          count++;
      }
  }
  return count;
}


export function normalizeSpaces(Str) {
  const normalizedString = Str.replace(/\s+/g, ' ');
  return normalizedString.trim();
}


export function extractFileName(fullFileName) {
  const fileNameParts = fullFileName.split('/');
  const newName = fileNameParts[fileNameParts.length - 1];
  const name = newName.split('.');
  return name[0];
}


export function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';
  for (let l = 0; l < sentence.length; l += 1) {
    if ([l + 1] % 2 === 0) {
      evenChars += sentence[l];
    } else {
      oddChars = sentence[l] + oddChars;
    }
  }
  return evenChars + oddChars;
}


export function checkBrackets(expression) {
  const stack = [];
  const openingBracket = '(';
  const closingBracket = ')';
  for (let i = 0; i < expression.length; i++) {
      if (expression[i] === openingBracket) {
          stack.push(i);
      } else if (expression[i] === closingBracket) {
          if (stack.length === 0) {
              return i;
          }
          stack.pop();
      }
  }
  return stack.length > 0 ? stack.pop() : 0;
}

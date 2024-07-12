// 6 kyu
// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript

//  TYPESCRIPT

//_EN_ Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//_RU_ В заданной последовательности слов вам нужно найти слово, набравшее наибольшее количество очков.
// Каждая буква слова набирает очки в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т.д.
// Например, оценка abad равна 8 (1 + 2 + 1 + 4).
// Вам нужно вернуть слово, набравшее наибольшее количество баллов, в виде строки.
// Если два слова набрали одинаковую оценку, верните слово, которое появилось раньше всего в исходной строке.
// Все буквы будут строчными, и все вводимые данные будут действительными.
const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function findWordPosition(word: string): number {
  return arr.indexOf(word) + 1;
}

export const high = (str: string): number => {
  const strArr: string[] = str.split(" ");
  console.log(strArr);

  let scoreWord = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
  return 1;
};

console.log(high("abad"));

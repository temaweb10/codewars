// 6 kyu
// Stop gninnipS My sdroW!
//https://www.codewars.com/kata/5264d2b162488dc400000001
//  TypeScript
// 4.9
// VIM
// EMACS
// Instructions
// Output
// Past Solutions
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но со всеми словами, в которых пять или более букв перевернуты (точно так же, как в названии этого ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.
// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
export function spinWords(words: string): string {
  const wordArr: string[] = words.split(" ");
  wordArr.forEach((el, i): void => {
    if (el.length >= 5) {
      wordArr[i] = el.split("").reverse().join("");
    }
  });
  return wordArr.join(" ");
}

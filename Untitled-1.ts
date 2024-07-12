// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Не обращайте внимания на регистр букв.
// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

interface UnknownKeyObject {
   [key: string]: any;
 }
function isIsogram(str: string): boolean{
   const strArr:Array<string> = str.split("")
   let wordArrObj:UnknownKeyObject = [];
   let wordAllCounts = 0;
  
   
   for (let i = 0; i < strArr.length; i++) {
      console.log(wordArrObj[strArr[i]])
      console.log(strArr[i]);
      
      if(wordArrObj[strArr[i]] === undefined){
         wordArrObj.[] = 1
      }else{
         wordArrObj[strArr[i]]  +=1
      }
      console.log(strArr[i]);
      
      console.log(wordArrObj[strArr[i]]);
      
   }
   console.log(wordArrObj);
   for (const key in wordArrObj) {
      if (Object.prototype.hasOwnProperty.call(wordArrObj, key)) {
         if(typeof wordArrObj[key] === "string")
            wordAllCounts +=   Number(wordArrObj[key])
      }
   }
   return wordAllCounts === 0 ? false : true
}

console.log(isIsogram("afgf"));

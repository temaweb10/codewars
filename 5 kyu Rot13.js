/* 
ROT13 - это простой шифр замены букв, который заменяет букву буквой 13 букв после нее в алфавите. ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. Если в строку включены цифры или специальные символы, они должны быть возвращены в том виде, в каком они есть. Только буквы из латинского / английского алфавита должны быть сдвинуты, как в оригинальной "реализации" Rot13.

#ШИФРЫ #ОСНОВЫ
*/

function rot13(message){
    let sdvig = 13;
    let A = 97;
    let AUPEER = 64
    let lengthArr = []
    let resultArr = []
    
    for(let i=0;i<message.length;i++){
      
      lengthArr.push({
        bykva: message[i],
        code: message[i].charCodeAt(0),
      })
    }
    
    for(let i=0;i<lengthArr.length;i++){
      if((lengthArr[i].bykva).match(/[a-z]/i)){

          let code = lengthArr[i].code

          if(code < 97){
            let result = code + sdvig
            console.log('result',result)
            if(code > 78){
              let codeCurrent = code + sdvig;
              console.log('codeCurrent:',codeCurrent)
              let cc = result - 90
              console.log('cc',cc)
               result = AUPEER + cc
              console.log(result)
  
            }
                resultArr.push(String.fromCharCode(result))
          } else {
            let result = lengthArr[i].code + sdvig
            if(lengthArr[i].code > 109){
              let codeCurrent = lengthArr[i].code + sdvig;
              let cc = codeCurrent - 123
               result = A + cc
  
            } 
                resultArr.push(String.fromCharCode(result))
            }
    
      } else {
         resultArr.push(lengthArr[i].bykva)
      }  
    }
    return resultArr.join('')
  }


  
/* 
Завершите решение так, чтобы функция разбила camel case, используя пробел между словами.

Пример
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


function solution(string) {
    let arrFinal = []
    let arr = string.split('')
    for(let i=0;i<arr.length;i++){
        let isUpperCase = arr[i].toUpperCase()==arr[i]
        if(!isUpperCase){
            arrFinal.push(arr[i])//нижний
        } else {
            arrFinal.push(` ${arr[i]}`)
        }
    }
    return arrFinal.join('')
}

solution("camelCasingPenisYorPenisMyDream")


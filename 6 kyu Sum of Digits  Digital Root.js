/* 
Цифровой корень - это рекурсивная сумма всех цифр в числе.

Учитываяn, возьмите сумму цифр n. Если это значение содержит более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.

Примеры
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 
*/

function sumMethod(arr){
    return arr.reduce((a,b) => a + b)
}

function numToArr(n){
    return String(n).split('')
}


function digital_root(n) {
    let nToArr = numToArr(n)

    for(let i=0;i<nToArr.length;i++){
        nToArr[i] =Number(nToArr[i])
    }

    if(sumMethod(nToArr) < 10){
        return sumMethod(nToArr)
    } else {
        console.log(nToArr) 
        
        let k = 0
        let num = sumMethod(nToArr)

        while(num> 10){
           let str = numToArr(num)
           num = sumMethod(str)
        }
        console.log(num)
    }       
    
    console.log(sumMethod(nToArr)) 
}

digital_root(93223)
/* 6 kyu https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
ОПИСАНИЕ:
Напишите функцию, persistence, которая принимает положительный параметр numи возвращает его мультипликативное постоянство, то есть количество раз, которое вы должны умножить на цифры, numпока не дойдете до одной цифры.

Например (Ввод -> Вывод):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/


/* С ЛОГАМИ */

function goToArr(num){
    let arrNums = String(num).split('')
    for(let i=0;i<arrNums.length;i++){
        arrNums[i] = Number(arrNums[i])
    }
    console.log(arrNums)
    return arrNums
}

function ymnozhit(arrNums){
    let finalNum = arrNums.reduce((a,b)=>{
        return a * b
    })
    console.log(finalNum)
    return finalNum
}


function persistence(num) {
    if(num < 10){
        return 0
    }
    let arrNums = goToArr(num)
    ymnozhit(arrNums)
     let lastnum = ymnozhit(arrNums)
    console.log(lastnum)
    let j = 0
      while (lastnum > 9) {
        j++
        let pred = lastnum
        ymnozhit(goToArr(pred))
        
        lastnum = ymnozhit(goToArr(lastnum))
        console.log('while work', lastnum)
      }
      console.log(lastnum+1,j)

    return j + 1
}

persistence(999)

/* END  */

/* без логов  */

function goToArr(num){
    let arrNums = String(num).split('')
    for(let i=0;i<arrNums.length;i++){
        arrNums[i] = Number(arrNums[i])
    }
    return arrNums
}

function ymnozhit(arrNums){
    let finalNum = arrNums.reduce((a,b)=>{
        return a * b
    })
    return finalNum
}

function persistence(num) {
    if(num < 10){
        return 0
    }
    let arrNums = goToArr(num)
    ymnozhit(arrNums)
    let lastnum = ymnozhit(arrNums)
    let j = 0
      while (lastnum > 9) {
        j++
        let pred = lastnum
        ymnozhit(goToArr(pred))      
        lastnum = ymnozhit(goToArr(lastnum))
      }
    return j + 1
}

persistence(999)
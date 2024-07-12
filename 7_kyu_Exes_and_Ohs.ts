// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function xo(str: string): boolean {
  const strArr: string[] = str.split("");
  let countX: number = 0;
  let countO: number = 0;
  for (let i: number = 0; i < strArr.length; i++) {
    if (strArr[i] === "x") {
      countX += 1;
    } else if (strArr[i] === "o") {
      countO += 1;
    }
  }
  if (countO === countX) {
    return true;
  } else {
    return false;
  }
}

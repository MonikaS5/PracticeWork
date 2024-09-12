const arr = [0,1, 2, 3, 4];
console.log(checkTruthy(arr));

function checkTruthy(arr) {
  let count = 0;
  for (let value of arr) {
    if (value)
         count++;
    return count;
  }
}

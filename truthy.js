const arr = [0, 1, 2, 3, {}, [], "0", null, undefined, 5, NaN];

console.log(checkTruthy(arr));

function checkTruthy(arr) {
  let count = 0;

  for (let value of arr) {
    if (value)
       count++;
     
  }

  return count;
}

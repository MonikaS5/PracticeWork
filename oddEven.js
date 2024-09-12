showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let num = i;
    if (num % 2 === 0) console.log(`${num}  "Even"`);
    else {
      console.log(`${num}  "Odd"`);
    }
  }
}

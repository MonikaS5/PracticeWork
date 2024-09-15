const marks = [10, 20, 30, 40, 50];

function calculateAvg(marks){
    let sum = 0;
    for(let num of marks){
        sum += num;
    }
    return sum / marks.length

}
console.log(calculateAvg(marks))


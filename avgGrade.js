const marks = [10, 20, 30, 40, 50, 60];

function calculateAvg(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum / arr.length;

}

function calculateGrade(marks){
    const avg = calculateAvg(marks);
    if(avg < 50) return 'F'; 
    if(avg < 60) return 'E';  
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';
    if(avg < 90) return 'B';
    return 'A'
}

console.log(calculateGrade(marks))
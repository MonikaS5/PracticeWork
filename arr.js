const numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number * 2);
}

for(let index in numbers){
    console.log(index, numbers[index]);
}
//////
const students = ['John', 'Mark', 'Sia'];
students.forEach((studName, index)=>{
    console.log(index, studName);
})
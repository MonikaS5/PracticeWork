const numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number * 2);
}
//////
const students = ['John', 'Mark', 'Sia'];
students.forEach((studName, index)=>{
    console.log(index, studName);
})
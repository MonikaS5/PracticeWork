
function Student(fName, lName, age){

    this.fName = fName;
    this.lName = lName;
    this.age = age;
} 

const stud1 = new Student('John', 'Doe', 20);
const stud2 = new Student('John', 'Doe', 20);

function areEqual(stud1, stud2){

    return stud1.fName === stud2.fName &&
    stud1.lName === stud2.lName &&
    stud1.age === stud2.age;
}

function areSame(stud1, stud2){
   return  stud1 === stud2;
}
console.log(areEqual(stud1, stud2));

console.log(areSame(stud1, stud2));
const student = {
    fName: 'John',
    lName: 'Doe',
    age: 20,
    id: 1
    
};

function showData(student){

    for(let key in student){
        console.log(key, student[key]);
    }
}
showData(student);


/////


function showInfo(fName, lName, age){

    return{
    firstName:fName,
    lastName: lName ,
    studAge: age
    };
}

const student1 = showInfo('Will', 'Smith', 20);

console.log(student1)


//// 

function Student(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

const studentData = new Student('Mark', 'Li', 30);

console.log(studentData);
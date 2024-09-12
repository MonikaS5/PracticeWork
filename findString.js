const student = {
    fName: 'John',
    lName: 'Doe',
    age: 30,
    address: 'London',
    points: 9
}

function showString(student) {
    for (let key in student){
        if (typeof student[key] === 'string')
            console.log(key + ":" + student[key]);
    }
}

showString(student);
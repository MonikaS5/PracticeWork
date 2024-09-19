const numbers = [1, 2, 3, 4];

function checkNumber( array, searchNumber){

    for(let element of array){

       if (element === searchNumber)
        return true;
    }
    return false;
}

console.log(checkNumber(numbers, 2));

const usingIncludes = numbers.includes(4);
console.log(usingIncludes)

const range = arrRange(5, 10);

function arrRange(min, max){

    const result = [];

    for(let i= min; i <= max; i++){
        result.push(i);
    }
    return result;
}

console.log(range);

////////////////////

const range1 = arrRange1(10, 5);

function arrRange1(max, min){

    const result = [];

    for(let i= max; i >= min; i--){
        result.push(i);
    }
    return result;
}

console.log(range1);
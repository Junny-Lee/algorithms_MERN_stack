// Monday
/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// cody's solution
function orderedIntersection(sortedA, sortedB){
    // iterating through the two arrays
    let i = 0;
    let j = 0;

    // store intersection
    let intersection = [];

    // allows us to go through both arrays
    while (i < sortedA.length && j < sortedB.length){
        // check the two arrays for the same values
        if (sortedA[i] === sortedB[j]){
            //if the value is not in the intersection
            if (intersection[intersection.length-1] !== sortedA[i]){
                // add the value to intersection
                intersection.push(sortedA[i]);
            }
            i++;
            j++;
        }
        // if sortedA is smaller than sortedB
        else if(sortedA[i] < sortedB[j]){
            // look at sortedB, increase i by 1
            i++;
        }
        else {
            j++;
        }
    }
    return intersection
}

// my solution
function orderedIntersection(sortedA, sortedB){
    let returnArr = [];
    if (sortedA.length > sortedB.length){ // A is longer
        for (let i = 0; i < sortedA.length; i++){
            if ( ( sortedB.indexOf(sortedA[i]) != -1 ) && ( sortedA[i] != returnArr[returnArr.length - 1] ) ){
                returnArr.push(sortedA[i]);
            }
        }
    }
    else {
        for (let i = 0; i < sortedB.length; i++){
            if ( ( sortedA.indexOf(sortedB[i]) != -1 ) && ( sortedB[i] != returnArr[returnArr.length - 1] ) ){
                returnArr.push(sortedB[i]);
            }
        }
    }
    return returnArr
}


let sortedA1 = [0,1,2,2,2,7]; // [0,1,2,7]
let sortedB1 = [2,2,6,6,7]; // [2,6,7]
console.log(orderedIntersection(sortedA1, sortedB1));
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

// ****************************************************************************
// Tuesday

/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
*/
function diagonalDifference(sqrMatrix) {
    let sumD1 = 0;
    let sumD2 = 0;
    for (let i = 0; i < sqrMatrix[0].length; i++){
        // calculate the first diagonal's sum
        sumD1 += sqrMatrix[i][i];
        // calculate the second diagonal's sum
        sumD2 += sqrMatrix[i][sqrMatrix[0].length-1-i];
    }
    return Math.abs(sumD1-sumD2)
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
const expected1 = 2 // because (1 + 5 + 9) - (3 + 5 + 9) has abs val of 2
console.log(diagonalDifference(matrix1))

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
const expected2 = 0 // because (1 + 6 + 11 + 16) - (4 + 7 + 10 + 13) = 34 - 34 = 0 
console.log(diagonalDifference(matrix2))

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    */
    function orderedMultiSetUnion(sortedA, sortedB){
        let unionArr = [];
        let tableA = {};
        let tableB = {};
        // build frequency tables
        for (let i = 0; i < sortedA.length; i++){
            if (tableA.hasOwnProperty(sortedA[i])){
                tableA[sortedA[i]]++;
            }
            else {
                tableA[sortedA[i]] = 1;
            }
        }
        for (let i = 0; i < sortedB.length; i++){
            if (tableB.hasOwnProperty(sortedB[i])){
                tableB[sortedB[i]]++;
            }
            else {
                tableB[sortedB[i]] = 1;
            }
        }

        // de-dupe the arrays
        let sortedADeduped = [];
        let sortedBDeduped = [];
        for (let i = 0; i < sortedA.length; i++){
            if ( ( sortedA.indexOf(sortedA[i]) != -1 ) && ( sortedA[i] != sortedADeduped[sortedADeduped.length - 1] ) ){
                sortedADeduped.push(sortedA[i]);
            }
        }
        for (let i = 0; i < sortedB.length; i++){
            if ( ( sortedB.indexOf(sortedB[i]) != -1 ) && ( sortedB[i] != sortedBDeduped[sortedBDeduped.length - 1] ) ){
                sortedBDeduped.push(sortedB[i]);
            }
        }

        let i = 0;
        let j = 0;
        while (i < sortedADeduped.length && j < sortedBDeduped.length){
            if (sortedADeduped[i] == sortedBDeduped[j]){
                let addThisManyTimes = tableA[sortedADeduped[i]];
                if (tableB[sortedBDeduped[i]] > addThisManyTimes) addThisManyTimes = tableB[sortedBDeduped[i]]
                for (let k = 0; k < addThisManyTimes; k++){
                    unionArr.push(sortedADeduped[i])
                    // unionArr.push(tableA[sortedADeduped[i]])
                }
                i++;
                j++;
            }
            else if (sortedADeduped[i] < sortedBDeduped[j]){
                for (let k = 0; k < tableA[sortedADeduped[i]]; k++){
                    //unionArr.push(tableA[sortedADeduped[i]])
                    unionArr.push(sortedADeduped[i])
                }
                i++;
            }
            else{
                for (let k = 0; k < tableB[sortedBDeduped[j]]; k++){
                    // unionArr.push(tableB[sortedBDeduped[j]])
                    unionArr.push(sortedBDeduped[j])
                }
                j++;
            }
        }

        return unionArr
}

const sortedA1 = [1, 2, 2, 2, 7];
const sortedB1 = [2, 2, 6, 6, 7];
const expected1 = [1,2,2,2,6,6,7];
console.log(orderedMultiSetUnion(sortedA1, sortedB1))

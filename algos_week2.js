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

// cody's solution
function diagonalDifference(matrix) {
    let d1 = 0; // we need to store the sum of diagonal 1's values
    let d2 = 0; // and the sum of diagonal 2's values
    for(let i = 0; i < matrix.length; i++){ // because this is a square, we can use regular ole math to calculate the positions, so only 1 for loop
        d1 += matrix[i][i]; // as i increments, matrix[i][i] will be the position of each element in the diagonal going from top left to bottom right
        d2 += matrix[i][matrix.length-1-i]; // and this will be the position of each element in the diagonal going from top right to bottom left
    }
    return Math.abs(d1 - d2); // then, calculate the absolute difference, which is just the absolute value of d1 - d2 (or vice versa)
}

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

// dana's solution: doesnt work for edge cases. for example, if sortedB1 = [2, 2, 6, 6, 7, 8, 9, 10];
function orderedMultiSetUnion(sortedA, sortedB){
    var newArr = [];
    var i = 0;
    var j = 0;
    while (i < sortedA.length) {
        while (j < sortedB.length){
            if (sortedA[i] < sortedB[j]){
                newArr.push(sortedA[i]);
                i++;
            }
            else if (sortedA[i] > sortedB[j]){
                newArr.push(sortedB[j]);
                j++;
            }
            else {
                newArr.push(sortedA[i]);
                i++;
                j++;
            }
        }
    }
    return newArr;
}

// cody's solution:
function orderedMultiSetUnion(sortedA, sortedB){
    const union = []; // we need somewhere to put all of our values

    // we'll just start by looping as long as our 2 index variables are less than their respective array lengths
    for(var iA = 0, iB = 0; iA < sortedA.length && iB < sortedB.length;) { // getting fancy with the loop again!
        if (sortedA[iA] === sortedB[iB]) { // if the value at iA in sortedA is the same as the value at iB in sortedB
            union.push(sortedA[iA]); // add it to the union and incremenet both indexes
            iA++;
            iB++;
        } else if (sortedA[iA] < sortedB[iB]) { // if the value at iA in sortedA is less than the value at iB in sortedB
            union.push(sortedA[iA]); // add it to the union, and only increment iA
            iA++;
        } else { // otherwise, the value at iB in sortedB must be less than the value at iA in sortedA
            union.push(sortedB[iB]); // so add the value at iB in sortedB to the union and only increment iB
            iB++;
        }

        // in this loop, by adding a value and only incrementing the respective index, it allows for us to
        // include the higher frequency of duplicates, while the other index "waits"
    }
    
    // now, it's possible that one of several things happened:
    // 1. Both arrays are the same length and finished at the same time
    // 2. One array is longer than the other and has not finished iterating through
    // 3. We got through all values in 1 array but didn't finish iterating through the other

    // so, we run 2 while loops. if iA is already finished going through sortedA, this while loop
    // won't run, and if iB is already finished going through sortedB, the second while loop won't run.
    while(iA < sortedA.length){
        union.push(sortedA[iA]); // but, if it does enter one of the loops, it'll go through and add the 
        iA++; // remaining values
    }

    while(iB < sortedB.length){
        union.push(sortedB[iB]);
        iB++;
    }

    return union; // by now, union will contain everything we need!
}

const sortedA1 = [1, 2, 2, 2, 7];
const sortedB1 = [2, 2, 6, 6, 7];
const expected1 = [1,2,2,2,6,6,7];
console.log(orderedMultiSetUnion(sortedA1, sortedB1))

// ****************************************************s
// Wednesday
/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg

    EXAMPLE:
    let nums1 = [4,1,2,3,4];
    let nums2 = [1,2,3,5,5,2];

    symmetricDifference(nums1, nums2) should return [4,5] because 4 is only in nums1, 5 is only in nums2, 
    and every other value can be found in the other array as well.
*/

// my solution, but indexOf is nested for loop
function symmetricDifference(setA, setB){
    let returnArr = [];
    
    for (let i = 0; i < setB.length; i++){
        if (setA.indexOf(setB[i]) == -1 && returnArr.indexOf(setB[i]) == -1) {
            returnArr.push(setB[i])
        }
    }

    for (let i = 0; i < setA.length; i++){
        if (setB.indexOf(setA[i]) == -1 && returnArr.indexOf(setA[i]) == -1) {
            returnArr.push(setA[i])
        }
    }

    return returnArr
}

// cody's solution: using frequency tables
function symmetricDifference(setA, setB){
    const diff = [];

    // use a diction to track
    const seen1 = {};
    const seen2 = {};

    for (let num of setA){
        seen1[num] = num;
    }

    for (let num of setB){
        seen2[num] = num;
    }

    for (let key in seen1){
        if (seen2[key] == undefined) diff.push(seen1[key]);
    }

    for (let key in seen2){
        if (seen1[key] == undefined) diff.push(seen2[key]);
    }
    return diff
}


let setA = [1,2,3,4];
let setB = [1,2,3,5,5,2];
console.log(symmetricDifference(setA, setB))


// ****************************************************
// Thursday
/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
*/
function allNonConsecutive(sortedNums){
    let returnArr = [];
    let objectToAdd = {};
    
    for (let j = 1; j < sortedNums.length; j++){
        if (sortedNums[j] != sortedNums[j-1] + 1){
            objectToAdd = {
                i : j,
                n : sortedNums[j]
            };
            // objectToAdd.i = j;// doesnt work because these are references 
            // objectToAdd.n = sortedNums[j];
            returnArr.push(objectToAdd);
        }
    }
    return returnArr;
}

// cody's solution:
function allNonConsecutive(sortedNums){
    const nonConsec = []; // output array

    for(var i = 1; i < sortedNums.length; i++) { // since the value at index 0 is ignored, we'll start at index 1
        if(sortedNums[i] !== sortedNums[i-1] + 1) { // at each index, check to see if the value is not the previous value + 1
            nonConsec.push({ i: i, n: sortedNums[i] }); // if it's not, push the object with the index and number into the output array
        }
    }

    return nonConsec; // and finally, after checking each value, return the nonConsec array
}

let sortedNums = [1,2,3,4,6,7,8,10];
let expected = 
    [
        { i: 4, n: 6},
        { i: 7, n: 10 }
    ]
// because at index 4, the value is 6, which is not the previous value plus 1 (4 + 1 = 5, not 6), 
// and at index 7, the value is 10, which is not the previous value plus 1 (8 + 1 = 9, not 10)
console.log(allNonConsecutive(sortedNums));

/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.
*/
function findConsqSums(nums, targetSum){
    let returnArr = [];
    let arrToAdd = [];
    let sum = 0;
    let j = 0;

    for (let i = 0; i < nums.length; i++){
        while (sum != targetSum && sum < targetSum){
            sum += nums[i+j];
            j++;
        }
        if (sum == targetSum){
            for (let k = 0; k < j; k++){
                arrToAdd[k] = nums[i+k];
            }
            returnArr.push(arrToAdd);
            arrToAdd = [];
        }
        sum = 0;
        j=0;
    }
    return returnArr
}

// reid's solution:
function findConsqSums(nums, t){
    let ret = [];
    for (let x = 0; x < nums.length; x++){
        let sum = 0;
        let tempArr = [];
        let y = x;
        while (y < nums.length && sum < t){
            sum += nums[y];
            tempArr.push(nums[y]);
            if (sum === t){
                ret.push(tempArr);
                break;
            }
            y++;
        }
    }
    return ret;
}

// cody's solution:
function findConsqSums(nums, targetSum){
    const conSum = [];

    // there's no easy way about this. we need to check consecutive sums for each and every value
    for(var i = 0; i < nums.length; i++){
        let cSum = nums[i]; // to avoid continously looping through an array and calculating a sum, we'll store a sum. we'll start our sum as the current value
        let cNums = [nums[i]]; // since we want an array with the numbers that add up to the sum, we'll make an array, and store the current value
        let cI = i+1; // we need another index for the consecutive set of numbers

        while(cSum < sum && cI < nums.length){ // we want to keep checking next numbers until either our cSum isn't less than the target sum anymore, and while cI is still within the array
            cSum += nums[cI]; // add the value to our sum
            cNums.push(nums[cI]); // and add it to our array
            cI++; // and increment cI
        }

        if(cSum === sum) { // now that we're out of the while loop, let's check if it broke because the cSum is GREATER than our target, or cI just went outside the bounds of the array
            conSum.push(cNums); // if it's because cSum IS the target sum, add it the list of consecutive sum sets
        }
    }

    return conSum; // and return the set of consecutive numbers
}

let nums = [2, 5, 3, 6, 7, 23, 12] ;
let targetSum = 16;
let expected = 
[
    [2, 5, 3, 6],
    [3, 6, 7]
];
// because 2 + 5 + 3 + 6 = 16, and those numbers are all consecutive, and 3 + 6 + 7 = 16, 
// and those numbers are also all consecutive
console.log(findConsqSums(nums, targetSum))

// ****************************************************
// Friday
/* 
Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
You can assume there is always a valid solution
These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
Hard Bonus: make it O(n) time
*/

// Trey's solution
function kMostFrequent(nums, k) {
    let dict = {};
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in dict){
            dict[nums[i]] += 1;
        } else {
            dict[nums[i]] = 1;
        }
    }
    let kArray = [];
    for (i = 1 ; i <= k; i++){
        let max = 0;
        let dictKey;
        for (key in dict){
            if (dict[key] > max){
                max = dict[key];
                dictKey = key;
            }
        }
        kArray.push(dictKey);
        delete dict[dictKey];
    }
    return kArray;
}

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
console.log(kMostFrequent(nums1, k1))
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
console.log(kMostFrequent(nums2, k2))
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
console.log(kMostFrequent(nums3, k3))

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Bonus: Make it O(n) time
*/

function twoSum(nums, targetSum) {
    let returnArr = [];

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == targetSum){
                returnArr.push(i);
                returnArr.push(j);
            }
        }
    }
    return returnArr;
}

// someone else's 
function twoSum(nums, targetSum) {
    for (let i = 0; i < nums.length; i++){
        let j = i+1;
        while (j < nums.length) {
            if (nums[i] + nums[j] == targetSum) return [i,j];
            else j++;
        }
    }
}

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
console.log(twoSum(nums1, targetSum1))


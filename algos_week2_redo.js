// Monday
/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

function orderedIntersection(sortedA, sortedB){

}


let sortedA1 = [0,1,2,2,2,7]; // [0,1,2,7]
let sortedB1 = [2,2,6,6,7]; // [2,6,7]
console.log(orderedIntersection(sortedA1, sortedB1));

// ****************************************************************************
// Tuesday
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

}

// cody's solution: using frequency tables


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
    
}

/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.
*/
function findConsqSums(nums, targetSum){
    
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
    
}

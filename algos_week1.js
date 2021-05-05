/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function bubbleSort(nums){
    for (var i = 0 ; i < nums.length; i++){
        for (var j = 1; j < nums.length; j++){
            if (nums[j] < nums[j-1]){
                var swap = nums[j]
                nums[j] = nums[j-1]
                nums[j-1] = swap
            }
        }
    }
    return nums
}

// cody's solution
function bubbleSort(nums){
    let isSorted = false;

    while(isSorted === false){
        isSorted = true; // we'll flip our flag to true, because we're optimists!
        // really, we're changing it to true, because it's easier to say "well, we had to make a swap so it's not sorted"
        // than it is to say "well, we didn't change anything, so it is sorted, so let's flip it now."

        for(let i = 0; i < nums.length - 1; i++) { // loop through the array. notice i < nums.length - 1. you'll see why on the next line
            const j = i + 1; // we want to check the value at the current index with the value at the next index.
            // that's why we did i < nums.length - 1 in the for loop.

            if(nums[i] > nums[j]){ // if the current index's value is greater than the next value
                isSorted = false; // flip our flag to false
                const temp = nums[i]; // and swap
                nums[i] = nums[j]; // those
                nums[j] = temp; // elements
            }
        }
    }

    return nums; // by the time we get here, it's sorted!
}


var nums1 = [1,7,30,5,9,0,3]
var expected1 = [0,1,3,5,7,9,30]
console.log(bubbleSort(nums1))

/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/

// sorting min to max 
function selectionSort(nums){
    for (var i = 0; i < nums.length; i++){
        var minIdx = i
        for (var j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[minIdx]){
                minIdx = j
            }
        }
        var temp = nums[minIdx]
        nums[minIdx] = nums[i]
        nums[i] = temp
    }
    return nums
}

var nums1 = [1,7,30,5,9,0,3]
var expected1 = [0,1,3,5,7,9,30]
console.log(selectionSort(nums1))

// cody's solution
function selectionSort(nums){
    for(let i = 0; i < nums.length; i++) { 
        let minIdx = i; // we want to find the smallest element, but we're more concerned with its 
        // INDEX than its value. So we'll keep tack of a minIdx, and set it to i at the beginning
        // of each iteration

        for(let j = i+1;  j < nums.length; j++) { // we'll loop through the remaining values
            if(nums[j] < nums[minIdx]){ // if we find a number that's less than our current minimum
                minIdx = j; // set that number's index as minIdx
            }
        }

        if(nums[minIdx] !== nums[i]){ // if, after checking everything, we found a new minimum
            const temp = nums[i]; // swap the new minimum
            nums[i] = nums[minIdx]; // with the value at i
            nums[minIdx] = temp; 
        }
        // and then bring it back to the top and run it again!
    }

    return nums; // by now, everything is sorted!
}

// **********************************************************************
// Tuesday
/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/
function insertionSort(nums){
    for (let i = 1; i < nums.length; i++){ 
        var temp = nums[i]; 
        let j = i-1;
        while (j >= 0){
            if (nums[j] > nums[j+1]){
                nums[j+1] = nums[j]
                nums[j] = temp
            }
            j--;
        }
    }
    return nums
}

// mytruc's code: 
function insertionSort(nums){
    //Swapping
    for(let i=1; i < nums.length; i++){ //iterating through array
        let index = i; //starting at i
        while(index > 0 && nums[index] < nums[index-1]){ //swapping elements on the left
            //Destructuring
            [nums[index-1], nums[index]] = [nums[index], nums[index-1]] 
            index --; //decrement index
        }
    }
    return nums; // sorted array by here
}

// dustin's code
function insertionSort(nums){
    // SETUP
    len = nums.length
    // WORK
    for (let i = 1; i < len; i ++){
        let temp = nums[i]
        let j = i - 1
        while ((j > -1) && (temp < nums[j])){
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = temp
    }
    // RETURN
    return nums 
}

var nums2 = [5,2,3,1]
console.log(insertionSort(nums2))

var nums1 = [1,7,30,5,9,0,3]
var expected1 = [0,1,3,5,7,9,30]
console.log(insertionSort(nums1))

// **********************************************************************
// Wednesday
/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
*/
function merge(nums1, nums2){
    let returnArr = [];
    let maxLength = nums1.length;
    if (nums2.length > maxLength) maxLength = nums2.length;

    for (let i = 0; i < maxLength * 2; i++){
        if (nums1[0] == nums2[0]){
            returnArr.push(nums1[0]);
            returnArr.push(nums2[0]);
            nums1 = nums1.slice(1);
            nums2 = nums2.slice(1);
        }
        else if (nums1[0] < nums2[0]){
            returnArr.push(nums1[0]);
            nums1 = nums1.slice(1);
        }
        else {
            returnArr.push(nums2[0]);
            nums2 = nums2.slice(1);
        }
    }
    return returnArr
}

var nums1 = [1,2,6,9]
var nums2 = [3,4,7,10]
console.log(merge(nums1,nums2))

/*
        2. create mergeSort function to sort the provided array
*/

// Recursive
function mergeSort(nums){
    if(nums.length == 1) {
        return nums
    } else {
        let left = nums.slice(0,Math.floor(nums.length/2));
        let right = nums.slice(Math.floor(nums.length/2));
        //console.log(left);
        //console.log(right);
        return merge(mergeSort(left), mergeSort(right))
    }
}

var nums = [5,2,3,7]
console.log(mergeSort(nums))

// Non-Recursive
function mergeSort(nums){
}


// **********************************************************************
// Thursday



// **********************************************************************
// Friday


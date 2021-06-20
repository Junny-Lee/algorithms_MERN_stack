// **********************************************************************
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

var nums2 = [5,2,3,1]
console.log(insertionSort(nums2))

var nums1 = [1,7,30,5,9,0,3]
var expected1 = [0,1,3,5,7,9,30]
console.log(insertionSort(nums1))

// **********************************************************************
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

// dana's group's solution
function merge(left, right){
    let arr = [];
    // stop when any of the arrays are empty
    while (left.length && right.length){
        // choose the smaller of the smaller elements of left and right 
        // push it into the sorted array
        // remove the element from the array with shift()
        // shift() removes the first element from an array and returns it
        if (left[0] < right[0]){
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    // in case there are elements left in the left or right array
    // push them into the sorted array, since those elements are already sorted 
    return [...arr, ...left, ...right]
}

var nums1 = [1,2,6,9]
var nums2 = [3,4,7,10]
console.log(merge(nums1,nums2))

// cody's solution
function merge(left, right){
    const result = [];
    let iLeft = 0, iRight = 0;

    while (iLeft < left.length && iRight < right.length){
        if (left[iLeft] < right[iRight]){
            result.push(Left[iLeft]);
            iLeft++;
        }
        else if (left[iLeft] > right[iRight]){
            result.push(right[iRight]);
            iRight++;
        }
        else {
            result.push(left[iLeft], right[iRight]);
            iLeft++;
            iRight++;
        }
    }
    while (iLeft < left.length){
        result.push(left[iLeft]);
        iLeft++;
    }
    while (right < right.length){
        result.push(right[iRight]);
        iRight++;
    }
    return results
}

// dana's group that works:
function mergeSort(nums) {
    // base case 
    if (nums.length < 2){
        return nums 
    }
    // find the midpoint in the original array
    let middle = Math.floor(nums.length / 2);
    // split the original array into two arrays using splice 
    let left = nums.splice(0, middle);
    //recursive call on the two new arrays
    return merge(mergeSort(left),mergeSort(nums))
}

var nums = [5,2,3,7]
console.log(mergeSort(nums))

// *********************************************************************
/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/
function partition(nums = [], left = 0, right = nums.length - 1) {
    if(left === right){
        return left;
    }

    const pivotVal = nums[right]; // 5

    let newPIdx = left; // 0

    for(let i = left; i < right; i++) { // i = 0; i < 5; i++
        if(nums[i] <= pivotVal) { // 
            [nums[newPIdx], nums[i]] = [nums[i], nums[newPIdx]]; // [5,2,4,6,7,1];
            newPIdx++; // 1
        }
    }

    [nums[newPIdx], nums[right]] = [nums[right], nums[newPIdx]]; //[5,1] = [1,5]
    return newPIdx; // 0
}

// cody's solution 
function quickSort(nums = [], left = 0, right = nums.length-1){
    // Base case: Are our left and right indices valid
    // aka: is left actually to the left of right.
    // remember, a single element is always sorted
    if(left >= right) {
        return nums;
    }

    // partition this section of the array and return the pivot index
    const pivot = partition(nums, left, right);
    
    // now, call quickSort on the left side (from left to pivot - 1 since pivot is in the right place)
    quickSort(nums, left, pivot-1);
    // and call it on the right side (from pivot + 1 to right since pivot is in the right place)
    // and return it
    return quickSort(nums, pivot + 1, right);
}


console.log(quickSort([1,9,3,2,7,14,8]))
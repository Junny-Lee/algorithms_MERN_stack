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

/*
        2. create mergeSort function to sort the provided array
*/

// Our attempt at recursive: supposedly the same as dana's but doen't work for our test case.
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

// Non-Recursive
function mergeSort(nums){
}


// **********************************************************************
// Thursday

/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums = [], left = 0, right = nums.length-1) {
    let middleIdx = Math.floor(nums.length/2);
    console.log(middleIdx)
    let pivotNum = nums[middleIdx];
    console.log(pivotNum)
    for (let i = 0; i < nums.length; i++){
        if (nums[0] > pivotNum){
            let biggerNum = nums.shift();
            nums.push(biggerNum);
            middleIdx--;
            console.log("decreased middle idx: ", middleIdx);
            i--;
        }
        else {
            let smallerOrEqualNum = nums[0];
            nums[0] = nums[middleIdx - 1];
            nums[middleIdx - 1] = smallerOrEqualNum;
        }
    }
    return nums
}

var nums1 = [3,1,5,2,3,7,1]
console.log(partition(nums1))

// **********************************************************************
// Friday

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

function quickSort(nums = [], left = 0, right = nums.length-1){
    // base case
    if (nums.length == 1) return nums

    // forward progress
    partition(nums, left, right) // [1,2,4,6,7,5];
    left++;
    right--;

    // recursive call 
    quickSort(nums, left, right)
}

var nums1 = [5,1,4,6,7,2];
console.log(quickSort(nums1, 0, nums1.length-1))


function quickSort(nums = [], left = 0, right = nums.length-1){
    // base case

    // forward progress
    // move left bound to the right until it reaches a value greater than or equal to the pivot 
    while(nums[left] <= pivotVal){
        left++;
    }
    // Move the right bound to the left until it crosses the left bound or finds a value less than the pivot.
    while(nums[right] >= pivotVal || right == left){
        right--;
    }
    // swap the selected values
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    // recursive call 
    quickSort(nums, left, right)
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
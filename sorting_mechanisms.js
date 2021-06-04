// Bubble Sort
function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    }
    return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]

// ***********************************
// Selection Sort
function selectionSort(arr){
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
        if(arr[j]<arr[minIdx]){
            minIdx = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    }
    return arr;
}

// ***********************************
// Insertion Sort
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

// ***********************************
// Merge Sort
function mergeSort(arr){
    var len = arr.length;
    if(len <2)
        return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}
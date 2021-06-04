good resource: https://www.interviewcake.com/sorting-algorithm-cheat-sheet
another great source: https://khan4019.github.io/front-end-Interview-Questions/sort.html


#  Bubble Sort
    # How it works: 
    step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

    step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

    step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

    step-4: Look at the inner loop in the code below.

    step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

    step-6: and then we move backward inside the outer loop.

    same thing is going on....  

#  Selection Sort
Selection sort works by repeatedly "selecting" the next-smallest element from the unsorted array and moving it to the front.
- beginning array: unsorted
- Space: O(1)
- Time: 
    - worst: O(n^2)
    - best: O(n^2)
    - average: O(n^2)
    # how does it works: 
    This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

    Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

    thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

#  Insertion Sort
Insertion sort works by inserting elements from an unsorted array into a sorted subsection of the array, one item at a time.
- beginning array: unsorted
- Space: O(1)
- Time: 
    - worst: O(n^2)
    - best: O(n)
    - average: O(n^2)

#  Merge Sort
Merge sort works by splitting the input in half, recursively sorting each half, and then merging the sorted halves back together
- beginning array: unsorted
- Space: O(n)
- Time: 
    - worst: O(nlogn)
    - best: O(nlogn)
    - average: O(nlogn)

#  QuickSort
Quicksort works by recursively dividing the input into two smaller arrays around a pivot item: one half has items smaller than the pivot, the other has larger items.
- beginning array: unsorted
- uses 
- Space: O(logn)
- Time: 
    - worst: O(n^2)
    - best: O(nlogn)
    - average: O(nlogn)




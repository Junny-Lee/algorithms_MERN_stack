good resource: https://www.interviewcake.com/sorting-algorithm-cheat-sheet
another great source: https://khan4019.github.io/front-end-Interview-Questions/sort.html


#  Bubble Sort
- Space: O(1)
- Time: 
    - worst: O(n^2) quadratic when array is reverse sorted
    - best: O(n) linear when array is sorted
    - average: O(n^2)
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
    # How it works: 
    Imagine you are playing cards. Somebody is giving you cards one by one. When you are receiving card, you are planning to put them in a way so that the smaller one is on the left. This means you want to insert them in a sorted way

    step-1: If the first card you are getting is 5. Just hold the card in your hand. you dont have to do anything.

    step-2: If the second card is 2, you want to put it before 5 so that the two cards you have are sorted. When you are putting the card with number 2 at the left, you are changing the position of the card 5 from first position to second position. And then first position becomes available and you put 2 there.

    step-3: If the third card is 4. you will start from second position. In the second position, you have card 5 which is bigger than 4. Hence you will move 5 to the third position. The next card to the left is 2 which is smaller than 4. Hence, you wont move 2. And you will insert card 4 in the second position.

    step-4: Then you got 10. It is bigger than the previous card which is 5. Hence, you just add it at the last position.

    step-5: The next card is 7. You just move the position of the card 10 to the right and insert card 7.

    step-6: If the last card is 3. You will have to move 10 to the right as it is bigger than 3. and then you check with the next card to the left it is 7 which is bigger than 3. you move it to the right. similarly, you move 5, 4 to the right. And put the number 3 before 2 as 2 is smaller than 3.

    congrats. you are done.

#  Merge Sort
Merge sort works by splitting the input in half, recursively sorting each half, and then merging the sorted halves back together
- beginning array: unsorted
- Space: O(n)
- Time: 
    - worst: O(nlogn)
    - best: O(nlogn)
    - average: O(nlogn)
    # How it works:
    Code Merge Sort: Merge sort has two parts. Main part does divide or breaks down and second part is merging/combining parts. At the time of combining, parts are combined together.

    Divide: the first function named as mergeSort is actually a divide function. where an array is divided into two.

    merge: this is just merging two sorted array. Just be careful this two array could be in different size

#  QuickSort
Quicksort works by recursively dividing the input into two smaller arrays around a pivot item: one half has items smaller than the pivot, the other has larger items.
- beginning array: unsorted
- uses 
- Space: O(logn)
- Time: 
    - worst: O(n^2)
    - best: O(nlogn)
    - average: O(nlogn)
    # How it works:
    how does it works:

    Step-1: You have to pick a pivot. This could be randomly selected or the middle one. Here we select the last element of the array.

    Step-2: Put all the items smaller than the pivot value to the left and larger than the pivot value to the right.

    Step-3:Repeat the step-2 for both left and right side of the pivot (pick a pivot, put all item smaller than the pivot to the left and larger on the right)

    Explain the code
    Call Quick sort: Pass the array and pass left and right to the quickSort function. For the first call, left would be the index of the first element which is 0 and right would be the index of the last element which would be length -1.

    Select Pivot: We select pivot as the last index of the array.

    Call Partition function: After calculating the pivot, we send the pivot to the partition function. In the partition function we pass array, pivot index, left and right.

    partitionIndex: In the partition function, we keep move all the items smaller than the pivot value to the left and larger than pivot value to the right. We have to keep track of the position of the partition. so that we can split the array into two parts in the next step. This tracking of the index where we partition the array is done by using partitionIndex variable. the initial value is left.

    Swap function: This is just a helper function to swap values of the array.

    move elements: we start a for loop from the left, and if the values is smaller than the pivot values we swap it with the position of the partitionIndex and increase the value of the partitionIndex. If the value is bigger, we don't do anything. We keep going until the element before the last element (remember last element is the pivot)

    place pivot After moving all the smallest element to the left, we swap the last element (pivot value) with the partitionIndex. By doing this, the pivot sits where it suppose to sit when the full array is sorted. As all elements left to it smaller and all element right to it is bigger. End of the function partition, return the partitionIndex

    Repeat the process: Now come back to quickSort function. when you get the partitionIndex, apply quickSort for the left side of the array and right side of the array. keep doing it until left is smaller than right.




## QuickSort Algorithm

Keywords: most-efficient, unstable, In place 

##### About
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959, with his work published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.

Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this behavior is rare.

#### Some common questions
##### Is quicksort stable?
Quicksort is a comparison sort and, in efficient implementations, is not a stable sort. One way to solve this problem is by not taking Last Element of array as Key. Quick sort is randomized algorithm.

##### Which sort is efficient and fast?
Even though quick-sort has a worst case run time of Θ ( n 2 ) , quicksort is considered the best sorting because it is VERY efficient on the average: its expected running time is Θ ( n log ⁡ n ) where the constants are VERY SMALL compared to other sorting algorithms.

##### Which data structure used in quick sort?
The quick sort partitions an array and then calls itself recursively twice to sort the resulting two subarray. This algorithm is quite efficient for large sized data sets as its average and worst case complexity are of O(nlogn) where n are no. of items.

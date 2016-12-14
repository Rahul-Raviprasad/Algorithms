# Sorting

## The Sorting problem

Input : Array of n numbers, unsorted
Output same numbers, sorted in increasing order

[5,4,1,8,7,2,6,3] => [1,2,3,4,5,6,7,8]

Visualization:
http://www.sorting-algorithms.com/
https://www.toptal.com/developers/sorting-algorithms/

#### How to choose which sorting to use?

There is no one sorting method that is best for every situation.

Many good algorithms are known which offer various trade-offs in efficiency, simplicity, memory use, and other factors. However these algorithms have not taken into account the modern computer architecture, which an important role in the performance these days.

There are ways to improve the sorting algorithms, that do not affect their asymptotic complexity, but nevertheless improve the performance by enhancing the data locality.-[influence of cache on performance of sorting] lamarca et al

////

Use Insertion sort when the probability of the data being already sorted is very high.

Heap is slower than quick and merge sort.

In general, time complexity lets us know how the performance of the algorithm changes as the size of the data set increases. Things to consider:

How much data are you expecting to sort? This will help you know whether you need to look for an algorithm with a very low time complexity.
How sorted will your data be already? Will it be partly sorted? Randomly sorted? This can affect the time complexity of the sorting algorithm. Most algorithms will have worst and best cases - you want to make sure you're not using an algorithm on a worst-case data set.
Time complexity is not the same as running time. Remember that time complexity only describes how the performance of an algorithm varies as the size of the data set increases. An algorithm that always does one pass over all the input would be O(n) - it's performance is linearly correlated with the size of the input. But, an algorithm that always does two passes over the data set is also O(n) - the correlation is still linear, even if the constant (and actual running time) is different.
Similarly, space complexity describes how much space an algorithm needs to run. For example, a simple sort such as insertion sort needs an additional fixed amount of space to store the value of the element currently being inserted. This is an auxiliary space complexity of O(1) - it doesn't change with the size of the input. However, merge sort creates extra arrays in memory while it runs, with an auxiliary space complexity of O(n). This means the amount of extra space it requires is linearly correlated with the size of the input.

Of course, algorithm design is often a trade-off between time and space - algorithms with a low space complexity may require more time, and algoithms with a low time complexity may require more space.

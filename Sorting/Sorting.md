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

https://github.com/rust-lang/rust/pull/38192

Use Insertion sort when the probability of the data being already sorted is very high.

Heap is slower than quick and merge sort.

Timsort used by python internally-  http://www.drmaciver.com/2010/01/understanding-timsort-1adaptive-mergesort/

 To put it succintly, Timsort is merge sort for the asymptotics plus insertion sort for short inputs plus some heuristics to cope efficiently with data that has the occasional already-sorted burst (which happens often in practice). Dai: in addition to the algorithm, list.sort benefits from being a built-in function optimized by professionals. A fairer comparison would have all functions written in the same language at the same level of effort.


Edit: Programming languages such as Java, Python and Perl also use merge sort, or more precisely a derivative, such as Timsort or merge sort for large sets and insertion sort for small sets. (Java also uses dual-pivot quicksort which is faster than plain quicksort.)

An excellent article on why quick sort is better. http://cs.stackexchange.com/questions/3/why-is-quicksort-better-than-other-sorting-algorithms-in-practice

In general, time complexity lets us know how the performance of the algorithm changes as the size of the data set increases. Things to consider:

How much data are you expecting to sort? This will help you know whether you need to look for an algorithm with a very low time complexity.
How sorted will your data be already? Will it be partly sorted? Randomly sorted? This can affect the time complexity of the sorting algorithm. Most algorithms will have worst and best cases - you want to make sure you're not using an algorithm on a worst-case data set.
Time complexity is not the same as running time. Remember that time complexity only describes how the performance of an algorithm varies as the size of the data set increases. An algorithm that always does one pass over all the input would be O(n) - it's performance is linearly correlated with the size of the input. But, an algorithm that always does two passes over the data set is also O(n) - the correlation is still linear, even if the constant (and actual running time) is different.
Similarly, space complexity describes how much space an algorithm needs to run. For example, a simple sort such as insertion sort needs an additional fixed amount of space to store the value of the element currently being inserted. This is an auxiliary space complexity of O(1) - it doesn't change with the size of the input. However, merge sort creates extra arrays in memory while it runs, with an auxiliary space complexity of O(n). This means the amount of extra space it requires is linearly correlated with the size of the input.

Of course, algorithm design is often a trade-off between time and space - algorithms with a low space complexity may require more time, and algorithms with a low time complexity may require more space.



Under what conditions is a specific sorting algorithm actually the fastest one?

1) When implemented in a parallel way in hardware, does it need to have a reasonably low latency while requiring as few gates as possible? Yes -> use a bitonic sorter or Batcher odd-even mergesort, latency is Θ(log(n)2)Θ(log⁡(n)2) and the number of comparators and multiplexers is Θ(n⋅log(n)2)Θ(n⋅log⁡(n)2).

2) How many different values can each element have? Cans every possible value have assigned a unique place in memory or cache Yes -> use count sort or radix sort, those usually have a linear runtime of Θ(n⋅k)Θ(n⋅k) (count sort) or Θ(n⋅m)Θ(n⋅m) (bucket sort) but slow down for a large number of different values, as k=2#number_of_Possible_valuesk=2#number_of_Possible_values and m=#maximum_length_of_keysm=#maximum_length_of_keys.

3) Does the underlying data structure consist of linked elements? Yes -> allways use in place merge sort. There are both easy to implement fixed size or adaptive(aka natural) bottom-up in place merge sorts of different arities for linked data structures, and since they never require copying the entire data in each step and they never require recursions either, they are faster than any other general comparision-based sorts, even faster than quick sort.

4) Does the sorting need to be stable? Yes -> use merge sort, either in place or not, fixed-size or adaptive, depending on the underlying data structure and the kind of data to be expected, even in cases where quick sort would otherwise be preferred, as stabilizing an arbitrary sorting algorithm requires Θ(n)Θ(n) additional memory in the worst case consisting of original indexes, which also needs to be kept in sync with each swap that is to be performed on the input data, so that every performance gain that quick sort might have over merge sort is probably thwarted.

5) Can the size of the underlying data be bound to a small to medium size? e.g. Is n < 10,000...100,000,000 (depending on the underlying architecture and data structure)? Yes -> use bitonic sort or Batcher odd-even mergesort. Goto 1)

6) Can you spare another Θ(n)Θ(n) memory? Yes -> a) Does the input data consist of large pieces of already sorted sequential data? -> use adaptive (aka natural) merge sort or tim sort Yes -> b) Does the input data mostly consist of elements that are almost in the correct place? -> use bubble sort or insertion sort. If you fear their Θ(n2)Θ(n2) time complexity (which is pathological for almost sorted data), maybe consider switching to shell sort with an (almost) asymptotically optimal sequence of gaps, some sequences that yield Θ(n⋅log(n)2)Θ(n⋅log⁡(n)2) worst case run time are known, or maybe try comb sort. I'm not sure either shell sort or comb sort would perform reasonably good in practice.

No -> 7) Can you spare another Θ(log(n))Θ(log⁡(n)) memory? Yes -> a) Does the undelying data structure allow for directed sequential access or better? Yes -> Does it allow only a single sequence of read/write accesses at a time up till the end of the data has been reached (e.g. directed tape access)? Yes -> i) use merge sort, but there is no obvious way to make this case in place, so it may require additional Θ(n)Θ(n) memory. But if you have time and the balls to do it, there is a way to merge 2 arrays in Θ(n)Θ(n) time using only Θ(log(n))Θ(log⁡(n)) space in a stable way, according to Donald E. Knuth "The Art of Computer Programming, Volume 3: Sorting and Searching", exercise 5.5.3. states that there is an algorithm by L. Trabb-Pardo that does so. However, I doubt this would be any faster than the naive mergesort version or the quicksort from the case above. No, it allows multiple simultaneous accesses to a sequence of data (e.g. is not a tape drive) -> ii) use quicksort, for practical purposes I would recommend either a randomized or an approximated median one. If you are wary of pathological Θ(n2)Θ(n2) cases, consider using intro sort. If you are hell-bent on deterministic behavior, consider using the median-of-median algorithm to select the pivot element, it requires Θ(n)Θ(n) time and its naive implementation requires Θ(n)Θ(n) space (parallelizable), whereas it may be implemented to only require Θ(log(n))Θ(log⁡(n)) space (not parallelizable). However, the median-of-median algorithm gives you a deterministic quicksort which has worst-case Θ(n⋅log(n))Θ(n⋅log⁡(n)) run-time. No -> you're screwed (sorry, we need at least 1 way of accessing each data element once)

No -> 8) Can you spare a small constant amount of memory? Yes -> Does the underlying data structure allow for random access? Yes -> use heapsort, it has an asymptotic optimal run-time of Θ(n⋅log(n))Θ(n⋅log⁡(n)), but dismal cache coherency and doesn't parallelize well. No -> you are screwed No -> you are screwed

Implementation hints for quicksort:

1) Naive binary quicksort requires Θ(n)Θ(n) additional memory, however, it is relatively easy to reduce that down to Θ(log(n))Θ(log⁡(n)) by rewriting the last recursion call into a loop. Doing the same for k-ary quicksorts for k > 2 requires Θ(nlogk(k−1))Θ(nlogk⁡(k−1)) space (according to the master theorem), so binary quicksort requires the least amount of memory, but I would be delighted to hear if anyone knows whether k-ary quicksort for k > 2 might be faster than binary quicksort on some real world setup.

2) There exist bottom-up, iterative variants of quicksort, but AFAIK, they have the same asymptotic space and time boundaries as the top-down ones, with the additional down sides of being difficult to implement (e.g. explicitly managing a queue). My experience is that for any practical purposes, those are never worth considering.

Implementation hints for mergesort:

1) bottum-up mergesort is always faster than top-down mergesort, as it requires no recursion calls.

2) the very naive mergesort may be sped up by using a double buffer and switch the buffer instead of copying the data back from the temporal array after each step.

3) For many real-world data, adaptive mergesort is much faster than a fixed-size mergesort.

4) the merge algorithm can easily be parallelized by splitting the input data into k approximately same-sized parts. This will require k references into data, and it is a good thing to choose k such that all of k (or c*k for a small constant c >= 1) fit into the nearest memory hierarchy(usually L1 data cache). Choosing the smallest out of k elements the naive way(linear search) takes Θ(k)Θ(k) time, whereas building up a min-heap within those k elements and choosing the smallest one requires only amortized Θ(log(k))Θ(log⁡(k)) time (picking the minimum is Θ(1)Θ(1) of course, but we need to do a little maintenance as one element is removed and replaced by another one in each step). The parallelized merge always requires Θ(n)Θ(n) memory regardless of k.

From what I have written, it is clear that quicksort often isn't the fastest algorithm, except when the following conditions all apply:

1) there are more than a "few" possible values

2) the underlying data structure is not linked

3) we do not need a stable order

4) data is big enough that the slight sub-optimal asymptotic run-time of a bitonic sorter or Batcher odd-even mergesort kicks in

5) the data isn't almost sorted and doesn't consist of bigger already sorted parts

6) we can access the data sequence simultaneously from multiple places

7) { memory writes are particularly expensive (because that's mergesort's main disadvantage), so far as it slows down the algorithm beyond a quicksort's probable sub-optimal split. } or { we can only have Θ(log(n))Θ(log⁡(n)) additional memory, Θ(n)Θ(n) is too much (e.g. external storage) }

p.s.: Someone need to help me with the formatting of the text.

# Merge Sort

### Why Study Merge Sort?

1. Good introduction to Divide and Conquer
   -Improves over Selection, Insertion, Bubble Sorts (all 3 are O(n^2))

## Merge Sort: Pseudocode
split array into 2 or more parts
recursively sort and left and right arrays
merge the resultant sorted arrays into one.
### Pseudocode for Merge step
C = output [length = n]
A = 1st sorted array [length n/2]
B = 2nd sorted array [length n/2]
i = 1
j = 1

for k=1 to n
   if A[i] < B[j]
       C[k] = A[i]
       i++
   else //B[j] < A[i]
       C[k] = B[j]
       j++
end

## Merge Sort Running Time?

Running time of Merge step is O(n)
and
## Merge Sort takes O(nlogn)
This can be easily proved with recursion tree and Master method.

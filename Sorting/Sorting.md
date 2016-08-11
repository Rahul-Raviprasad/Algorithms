# Sorting

## The Sorting problem

Input : Array of n numbers, unsorted
Output same numbers, sorted in increasing order

[5,4,1,8,7,2,6,3] => [1,2,3,4,5,6,7,8]

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

## Counting Inversions

### The Problem

Input: An array A containing the numbers 1,2,3,...n in some arbitrary order.
Output:  Number of inversions  = number of pair (i,j) of array indices with i < j and A[i] > A[j].

### Brute force approach O(n^2)
Can we do better?
Key idea : Divide and Conquer

We are gonna call an inversion (i,j) [with i < j]:
  left if i,j <= n/2
  right if i,j > n/2
  split if i <= n/2 < j

#### High level Algorithm
sortAndCount(array A, length n)
  if n == 1 return 0
  else
  (B, X) = sortAndCount(1st half of A, n/2)
  (C, Y) = sortAndCount(2nd half of A, n/2)
  (D, Z) = mergeAndCountSplitInv(X,Y)(split inversions) //currently unimplemented
  return X+Y+Z

Goal: implement the mergeAndCountSplitInv task in O(n) time, then the Count function will have a O(nlogn) time.

Key idea2: have recursive algorithm both count inversions and sort.[i.e piggy back on Merge Sort.]
Motivation: Merge subroutine naturally uncovers split inversions.

Claim:  The split inversions involving an element Y of the second array C are precisely the numbers left in the 1st array B when Y was copied  to the output D.

Steps to do this
while merging the two sorted sub arrays, keep running total of number of split inversions.
when element of the right sub array get copied to the output array, increment the total by the number of elements remaining in the left array.

```javascript

//Counting Inversion and Sorting using merge sort.
function sortAndCount(obj) {
  if ( obj.arr.length == 1) return obj;
  else {
    var returnObj = {};
    returnObj.arr = [];
    returnObj.count = 0;
    var B = sortAndCount({ "arr": obj.arr.slice(0,obj.arr.length/2), "count": 0});
    var C = sortAndCount({ "arr": obj.arr.slice(obj.arr.length/2, obj.arr.length), "count": 0});
    var i = 0, j = 0;

    for(var k = 0; k < obj.arr.length; k++) {
      if(B.arr[i] < C.arr[j] || !C.arr[j]) {
        returnObj.arr[k] = B.arr[i];
        i++;
      } else if(B.arr[i] > C.arr[j] || !B.arr[i]) {
        returnObj.arr[k] = C.arr[j]; //while copying from the C array increment the count of total
        returnObj.count += B.arr.length - i;
        j++;
      }
    }
    returnObj.count = returnObj.count + B.count + C.count;
    return returnObj;
  }
}

```

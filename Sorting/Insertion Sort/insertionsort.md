## Insertion Sort
Insertion sort is an algorithm that seeks to sort a list one element at a time. With each iteration, it takes the next element waiting to be sorted, and adds it, in proper location, to those elements that have already been sorted.

```
for (int i = 0; i <= data.Length; i++) {
   int j = i;
   while (j > 0 && data[i] < data[j - 1])
      j--;
   int tmp = data[i];
   for (int k = i; k > j; k--)
      data[k] = data[k - 1];
   data[j] = tmp;
}
```
One of the principal advantages of the insertion sort is that it works very efficiently for lists that are nearly sorted initially. Furthermore, it can also work on data sets that are constantly being added to. For instance, if one wanted to maintain a sorted list of the highest scores achieved in a game, an insertion sort would work well, since new elements would be added to the data as the game was played.


###### When to use?
There are many scenarios when the probability of the data coming in is already in a sorted order. we should use it then.

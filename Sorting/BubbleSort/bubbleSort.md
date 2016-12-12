## Bubble Sort

Keywords: stable, in-place, inefficient, O(n^2)

One of the first sorting algorithms that is taught to students is bubble sort. While it is not fast enough in practice for all but the smallest data sets, it does serve the purpose of showing how a sorting algorithm works. Typically, it looks something like this:

```
for (int i = 0; i < data.Length; i++)
   for (int j = 0; j < data.Length - 1; j++)
      if (data[j] > data[j + 1])
      {
         tmp = data[j];
         data[j] = data[j + 1];
         data[j + 1] = tmp;
      }
```

The idea is to pass through the data from one end to the other, and swap two adjacent elements whenever the first is greater than the last. Thus, the smallest elements will “bubble” to the surface. This is O(n²) runtime, and hence is very slow for large data sets. The single best advantage of a bubble sort, however, is that it is very simple to understand and code from memory. Additionally, it is a stable sort that requires no additional memory, since all swaps are made in place.

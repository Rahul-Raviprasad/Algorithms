#Recursion

keywords: Recursion, recursive trace, activation record, activation frame

Recursion is a technique by which a method makes one or more calls to itself during execution, or by which a data structure relies upon smaller instances of the very same type of structure in its representation.

### Some Examples of Recursion

1. There are many examples of recursion in art and nature. For example, fractal patterns are naturally recursive.

2. The factorial function (denoted as n!) has a natural recursive definition in Mathematics.

3. The English Ruler has a recursive pattern, that is a simple example of a fractal structure.

4. Binary Search, allows us to efficiently locate a desired value in a data set with upwards of billions of entries.

5. The File system for a computer has a recursive structure in which directories can be nested arbitrarily deeply within other directories. Recursive algorithms are widely used to explore and manage these file systems.

### The factorial function
The factorial function is mathematically defined as follows

n!  = { 1                                            if n = 0;
        n * (n-1) * (n-2) * .... * 3 * 2 * 1         if n >=1
      }

The factorial function is important because it gives us the number of permutation of n items.

Permutations: Number of ways 'n' distinct items can be arranged into a sequence.
Example (a,b,c) can be arranged as follows
abc, acb, bac, bca, cab, cba = 3! = 3 * 2 * 1 = 6 ways

```java
public static int factorial(int n) throws IllegalArgumentException {
  if(n < 0) {
    throw IllegalArgumentException(); // argument must be non negative
  } else if(n == 0) {
    return 1; // base case
  } else {
    return n * factorial(n-1); // recursive case
  }
}
```

A recursion trace closely mirrors a programming language's execution of the recursion.
In Java, each time a method (recursive or otherwise) is called, a structure known as an activation record or activation frame is created to store information about the progress of that invocation of the method. This frame stores the parameters and local variables specific to a given call of the method, and information about which command in the body of the method is currently executing.
When the execution of a method leads to a nested method call, the execution of the former call is suspended and its frame stores the place in the source code at which the flow of control should continue upon return of the nested call. A new frame is then created for the nested method call. This process is used both in the standard case of one method calling a different method, or in the recursive case where a method invokes itself. The key point is to have a separate frame for each active call.

### English Ruler - A fractal pattern example.

```java
/* Draw an english ruler for given number of inches and major tick lengths*/
public static void drawRuler(int nInches, int majorlength) {
  drawLine(majorLength, 0); // draw inch 0 line and label
  for(int j = 1; j <= nInches; j++) {
    drawInterval(majorLength -  1);  // draw interior ticks for inch
    drawLine(majorLength, j); // draw inch j line and label
  }
 }

 public static void drawInterval(int centralLength) {
   if(centralLength >= 1) {
    drawInterval(centralLength - 1); //recursively draw top interval
    drawLine(centralLength); // draw center tick line(without label)
    drawInterval(centralLength - 1); //recursively draw the bottom interval
   }
 }

 public static void drawLine(int tickLength, int tickLabel) {
   for (int j = 0; j < tickLength; j++) {
     System.out.print("-");
     if(tickLabel >= 0)
       System.out.print(" " + tickLabel);
     System.out.print("\n");
   }
 }

 /*Draws a line with the given tick length, but can't choose a tickLabel*/
 public static void drawLine(int tickLength) {
   drawLine(tickLength, -1);
 }

```

### Binary Search
It is very easily among the most important of computer algorithm, and it is the reason that so often we store data in a sorted order.
To read more on Binary Search goto:
https://github.com/Rahul-Raviprasad/Algorithms/blob/master/Binary%20Search/Binary-Search.md

### File System


Modern operating systems define file-system directories (also called “folders”) in a recursive way. Namely, a file system consists of a top-level directory, and the contents of this directory consists of files and other directories, which in turn can contain files and other directories, and so on. The operating system allows directories to be nested arbitrarily deeply (as long as there is enough memory), although by necessity there must be some base directories that contain only files, not further subdirectories.

Given the recursive nature of the file-system representation, it should not come as a surprise that many common behaviors of an operating system, such as copying a directory or deleting a directory, are implemented with recursive algorithms. In this section, we consider one such algorithm: computing the total disk usage for all files and directories nested within a particular directory.

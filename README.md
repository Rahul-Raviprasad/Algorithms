# Algorithms
My compilation of Popular Algorithms.


## Analysis of Algorithm
Theoretical Study of computer program performance and resource usage.

### What's more important than performance?
1. correctness
2. cost
3. time to market
4. stability
5. Maintainability
6. modularity
7. security
8. Scalability
9. User friendly


### Why study algorithms and performance?
1. more user friendly, nobody likes a slow application
2. there are some time constraints on certain app
3. performance draws the line between what is feasible and infeasible.
4. becomes important when you want to do stuff nobody's before, when you want to push the limits.
5. Provides a language to talk about program behavior.
6. provides the currency for other things like user behavior more functionality.
7. It's FUN

## Ways to classify Algorithms
1. Implementation
2. Design
3. Domain
4. Others

## Classifying Algorithms based on Implementation

### Recursive vs iterative
Recursive Algorithms call themselves until a base case is reached, meanwhile iterative functions use loops and other construct and data structure like stacks and queues to solve the problem. Any recursive problem can be converted to iterative and vice versa. Generally for same complexity cases, it is a matter of choice.

### Procedural vs Declarative
In Declarative programming, we say what we want without specifying the steps to do it. Whereas in procedural we have to specify the steps exactly. example: SQL is more declarative than procedural, since we pass a query to fetch something without specifying exact step how to perform the step.

### Serial or Parallel or Distributed
* In general, while discussing about the algorithms, we assume that the computer is processing instruction step by step. These are called Serial Algorithms.
* Parallel Algorithms take advantage of computer architectures to process several instructions at a time. They divide the problem into subproblems and serve them to several processors or threads. Iterative algorithms are generally parallelizable.
* If the parallel algorithms are distributed over to different machines then, we call such algorithm distributed algorithm

### Deterministic or Non Deterministic
Deterministic Algorithms solve the problem with a predefined process whereas non Deterministic algorithms guess the best solution at each step through the help of heuristics.

### Exact vs Approximate
Algorithms for which we are able to find exact solutions are Exact Algorithms. If we don't have optimal solution, then we give approximation algorithms. approximation algorithms are generally associated with NP-hard problems.

## Classifying Algorithms based on Design Method

### Greedy Algorithms
Greedy Algorithms work in stages and in each stage a decision is made based on the local best without considering the future. It assumes that local best solution can give a globally optimized solution.

### Divide and Conquer
The Divide and Conquer strategy works on these steps
1. Divide: Breaking the problem into sub problems which are themselves smaller versions of the same type of problem.
2. Recursion: recursively solve these sub problems
3. Conquer: Appropriately combine their answers.
Example: merge sort and binary search algorithms.

### Dynamic Programming
Dynamic Programming and memoization work together. In DP by using memoization(maintaining a table for already solved sub problems) DP reduces exponential complexity to polynomial complexity  for many problems.

### Linear Programming
In linear programming, there are inequalities in terms of inputs and maximize(or minimize) some linear functions of the inputs. Many problems like maximum flow for linear graphs can be spoken in terms of linear programming.

### Reduction (Transform and Conquer)
In this case we reduce the problem by transforming it in a form for which asymptotically optimal algorithms.
In this case the goal is to find a reducing algorithm which is not dominated by the resulting reduced algorithms.

## Classifying Algorithms based on Domain
In computer science there are broad fields which require their own algorithms or use it frequently. Some areas are
Search algorithms, sorting algorithms, merge algorithms, numerical algorithms, graph algorithms, string algorithms,  geometric algorithms, combinatorial algorithms, machine learning, cryptography, Parallel Algorithms, data compression algorithms and parsing techniques

## Other ways to classify Algorithms
* Based on complexity
* Randomized Algorithm
* Branch and Bound enumeration and Backtracking used in Artificial intelligence.

### Kinds of Analysis
Worst case analysis(usually)
T(n) = max time in any input given of size n
Average case
T(n) = expected time over all inputs of size n
Need assumptions on the statistical distribution of the inputs
Best case(bogus)

What is the Insertion sorts worst case time?

Asymptotic Analysis
1. Ignore machine dependent constants
2. Look at the growth of the running time T(n) as n tends to infinity.

Asymptotic notation
* theta notation
  drop lower order terms and Ignore leading constants
  eg: 3n^3 + 90n^2 + 5n + 6 == Theta(n^3)

  As n tends to infinity, theta(n^2) will always beat theta(n^3)

### Problem: Sorting
  Input: sequence a1, a2 ......, aN
  Output: a permutation of above sequence a1'<= a2'<= ...... <= aN'

### Insertion Sort
  Running time
    * depends on the Input
    * depends on the input size
    * want upper bounds

What is the Insertion sorts worst case time?
  Worst case:  reverse sorted
  T(n) = theta(n^2)

  fast for small n
  not fast for large n

#### Merge sort
Recurrence T(n) = { theta(1) if n=1; 2T(n/2)+ theta(n) if n > 1}
T(n) = nlogn

so merge sort on big enough input will always beat insertion sort.


## To Do : needs more research
https://jackmott.github.io/programming/2016/08/20/when-bigo-foolsya.html

## Resources
The Algorithms have been studied, taken from many resources online. Few of the significant ones are
1. Introduction to Algorithms, CLRS
2. List of Parallel Algorithms
https://www.cs.cmu.edu/~scandal/nesl/algorithms.html
3. DSA made easy in JAVA by Narasimha Karumachi

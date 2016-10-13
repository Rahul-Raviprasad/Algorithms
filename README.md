# Algorithms
My compilation of Popular Algorithms.

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

## To Do : needs more research
https://jackmott.github.io/programming/2016/08/20/when-bigo-foolsya.html

## Resources
The Algorithms have been studied, taken from many resources online. Few of the significant ones are
1. Introduction to Algorithms, CLRS
2. List of Parallel Algorithms
https://www.cs.cmu.edu/~scandal/nesl/algorithms.html
3. DSA made easy in JAVA by Narasimha Karumachi

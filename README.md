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

## Resources
The Algorithms have been studied, taken from many resources online. Few of the significant ones are
1. Introduction to Algorithms, CLRS
2. List of Parallel Algorithms
https://www.cs.cmu.edu/~scandal/nesl/algorithms.html
3. DSA made easy in JAVA by Narasimha Karumachi

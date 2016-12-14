## String Matching Algorithms

Problem:  Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m.

Examples:
1) Input:

  txt[] =  "THIS IS A TEST STRING"
  pat[] = "TEST"
Output:

Pattern found at index 10
2) Input:

  txt[] =  "AABAACAADAABAAABAA"
  pat[] = "AABA"
Output:

   Pattern found at index 0
   Pattern found at index 9
   Pattern found at index 13

### Brute Force implementation

```javascript
var txt = "THIS IS A TEST STRING TO TEST THIS FUNCTION";

function search(pattern) {
  for (var i = 0; i < (txt.length - pattern.length + 1); i++) {
    for(var j = 0; j < pattern.length; j++) {
      if(txt.charAt(i+j) === pattern.charAt(j)) {
        continue;
      } else {
        break; //break out of inner loop only, since the search the pattern didn't match
      }
    }
    if(j == pattern.length) {
      //compared and matched all of the pattern
      console.log("Pattern found at index: " + i);
    }
  }
}

/*
Running few test gives us
search("THIS");
Pattern found at index: 0
Pattern found at index: 30

search("TEST");
Pattern found at index: 10
Pattern found at index: 25

search("xyz"); // no logs since we didn't handle string not found scenario, we can be achieved easily using a counter.
and If  counter == 0 at the end print not found.
*/

```

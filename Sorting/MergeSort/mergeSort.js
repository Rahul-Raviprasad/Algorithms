//Merge Sort
function mergeSort(arr) {
  if(arr.length == 1) return arr;
  else {
    var returnArr = [];
    var A = mergeSort(arr.slice(0,arr.length/2));
    var B = mergeSort(arr.slice(arr.length/2, arr.length));
    var i = 0, j = 0;

    for(var k = 0; k < arr.length; k++) {
      if(A[i] < B[j] || !B[j]) {
        returnArr[k] = A[i];
        i++;
      } else if(A[i] > B[j] || !A[i]) {
        returnArr[k] = B[j];
        j++;
      }
    }
    return returnArr;
  }
}

// Read the file and print its contents.
var fs = require('fs');
var filename = 'IntegerArray.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  var integerArray = data.replace('/ /g','').split(/\r?\n/);
  console.log(integerArray);

  var result = sortAndCount({'arr': integerArray, 'count': 0});
  console.log(result.count); // should log 2407905288 which is the right answer for that txt file.

});

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
      if(parseInt(B.arr[i]) < parseInt(C.arr[j]) || !C.arr[j]) {
        returnObj.arr[k] = B.arr[i];
        i++;
      } else if(parseInt(B.arr[i]) > parseInt(C.arr[j]) || !B.arr[i]) {
        returnObj.arr[k] = C.arr[j]; //while copying from the C array increment the count of total
        returnObj.count += B.arr.length - i;
        j++;
      }
    }
    returnObj.count = returnObj.count + B.count + C.count;
    return returnObj;
  }
}

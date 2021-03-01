function binarySearch(numArr, key) {
  var middleIndex = Math.floor(numArr.length / 2);
  var middleElem = numArr[middleIndex];

  if (middleElem === key) {
    return true;
  } else if (middleElem < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIndex, numArr.length), key);
  } else if (middleElem > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, middleIndex), key);
  } else return false;
}

const test = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

console.log(test);

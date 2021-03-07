//1. Understanding merge sort
//Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

//A. What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//B. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//C. What are the first 2 lists to be merged?
//D. Which two lists would be merged on the 7th merge?
//          0, 1, 2,   3,  4,  5, 6, 7, 8,   9, 10, 11, 12, 13, 14, 15
//array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

// middle = 8
// array = [21, 1, 26, 45, 29, 28, 2, 9 / 16, 49, 39, 27, 43, 34, 46, 40]
// let left = [21, 1, 26, 45, 29, 28, 2, 9]
// let right = [16, 49, 39, 27, 43, 34, 46, 40]

// Take the left array, divide it by two, and slice it in the middle
// Call 1: left = [21, 1, 26, 45, 29, 28, 2, 9]
// Call 2: left = [21, 1, 26, 45]
// Call 3: mergeSort([21,1]) 
// Call 4: Left returns 21, Right Returns 1
// Call 5: mergeSort([1]) = returns 1
// Call 6: calls merge ([21], [1]) => (21, 1)
// Call 7: merge returns [21, 1] => mergeSort returns [1, 21]
// Call 8: mergeSort([26, 45]) => left = 26, right = 45
// Call 9: mergeSort([26]) returns 26
// Call 10: mergeSort([45]) returns 45
// Call 11: merge ([26], [45]) returns ([26, 45])
// Call 12: mergeSort ([21, 1, 26, 45]) calls merge([21, 1], [26, 45], [21, 1, 26, 45]) and returns [1, 21, 26, 45]
// Call 13: mergeSort ([29, 28, 2, 9]), divides array by 2 to have [29, 28] and [2, 9]
// Call 14: mergeSort ([29, 28]), divides array by 2, to have [29] and [28]
// Call 15: mergeSort [29] returns 29
// Call 16: mergeSort [28] returns 28

//2. Understanding quicksort
//1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, 
//the contents of the array is in the following order: 3 9 1 14 17 24 22 20. 
//Which of the following statements is correct about the partition step? Explain your answer.

//The pivot could have been 17, but could not have been 14
//The pivot could have been either 14 or 17
//Neither 14 nor 17 could have been the pivot
//The pivot could have been 14, but could not have been 17

// A. The pivot could have been 17, but could not have been 14 ***The pivot could have been either 14 or 17 Neither 14 nor 17 could have been the pivot The pivot could have been 14, but could not have been 17

//2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting 
//list after the second partitioning according to the quicksort algorithm.

//When using the last item on the list as a pivot
//When using the first item on the list as a pivot

array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end); // partition(array, 0, 9)
  array = quickSort(array, start, middle); //quicksort(array)
  array = quickSort(array, middle + 1, end);
  return array;
};

//There are different partitioning algorithms. A common in-place algorithm is Lomuto's algorithm:
function partition(array, start, end) { //partition(array, 0, 10)
  const pivot = array[end - 1]; //pivot = 12
  let j = start; // j = 0
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) { //14 <= 12
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j); 
  return j;
};
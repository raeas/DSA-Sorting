//swap function simply swaps the values at 2 indices in an array
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

//bubbleSort function looks through adjacent pairs of values in the array. 
//If the values are in the wrong order then it swaps them around and increases the swaps counter.
//best case check each pair 1 time; an O(n) operation
//worst case each value needs swapping with each other value, so that's O(n^2)
//average case, which is also O(n^2).
function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swaps++;
      }
  }

  if (swaps > 0) {
      return bubbleSort(array);
  }
  return array;
};
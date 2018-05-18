//takes the 0 index and fake-separates it from the unsorted array
//[0] of the reamining array is compared to the sorted arry of one and placed either 
//before or after that value depending on whether it is greater than or less than.
//** edges of for loop are the imaginary delineation between the sorted and unsorted arrays**


// const numbers = [5, || 4, 3, 2, 1]
//first iteration [4, 5, || 3, 2, 1]
//second iteration [3, 4, 5,|| 2, 1]
//third iteration [2, 3, 4, 5,|| 1]
//fourth iteration [1, 2, 3, 4, 5 ||]

 insertionSort(array => {
  for (let i = 0; i < array.length; i++) {
    var tempArray = array[i]; 
    //sets up fake array
    var j = i - 1;
    while (let j >= 0 && array[j] > tempArray) {
      array[j + 1] = array[j];
      j--;
    } 
    array[j + 1] = temp;
  }
    //continue to run through for loop until each idex is in it's right place
}
  return array;
}


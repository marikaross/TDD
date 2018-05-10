//takes the 0 index and fake-separates it from the unsorted array
//[0] of the reamining array is compared to the sorted arry of one and placed either 
//before or after that value depending on whether it is greater than or less than.
//** edges of for loop are the imaginary delineation between the sorted and unsorted arrays**


const numbers = [5, || 4, 3, 2, 1]
//first iteration [4, 5, || 3, 2, 1]
//second iteration [3, 4, 5,|| 2, 1]
//third iteration [2, 3, 4, 5,|| 1]
//fourth iteration [1, 2, 3, 4, 5 ||]


for insertionSort(array => {
  for (let i = 0; i < array.length; i++) {
    //this sets up our fake separate array to [0]? how? does it?
    for (let j = 1; j < array.length - i; j--) {
      //subtract one from array length because we're starting at [1]
      //increment up or down array for j for-loop? I think up..want to keep comparing [0]...or not
    if( j[1] > j[0]) {
      //destucture into proper order

    } 
  }
    //continue to run through for loop until each idex is in it's right place
}
  return array;
}

insertionSort(numbers);
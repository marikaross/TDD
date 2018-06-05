const mergeSort = array => {

    if(array.length === 1) {
      return array
    }
    let middle = Math.floor(array.length/2)
    let array1 = array.slice(0, middle)
    let array2 = array.slice(middle)

 return mergeSorted(mergeSort(array1), mergeSort(array2))
}



const mergeSorted = (array1, array2) => {
//empty array to push new numbers in
let sortedArray = []
//compare array1[0] and array2[0] 
while (array1.length && array2.length) {
  if(array1[0] <= array2[0]) {
    sortedArray.push(array1.shift())
  } else {
    sortedArray.push(array2.shift())  
  }

  if (!array1.length) {
    sortedArray = [...sortedArray, ...array2]
  }
  if (!array2.length) {
    sortedArray = [...sortedArray, ...array1]
  }
  }
  return sortedArray
}

export default mergeSort


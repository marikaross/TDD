

const quickSort = potato => {
  let array = [...potato]
  if (array.length <= 1) {
    return array
  }
    let lessThanPivot = [];
    let greaterThanPivot = [];
    let pivot = array.pop();
    
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      lessThanPivot.push(array[i])
    } else { 
      greaterThanPivot.push(array[i])
    }
  }
   return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]

}

export default quickSort;
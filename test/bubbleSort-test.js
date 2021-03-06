import { expect } from 'chai';
import bubbleSort from '../lib/bubbleSort.js';
import helper from '../lib/helper.js';

describe('bubbleSort', () => {


it('should sort the array from smallest to largest', () => {
  let array = [7, 12, 5, 42, 3];
  
  let expectedArray = [3, 5, 7, 12, 42];


  expect(bubbleSort(array)).to.deep.equal(expectedArray);
})

it('should include negative integers in a numerical array', () => {
  let array = [7, 12, -2, 5, 42, 3, -75, -21];

  let expectedArray = [-75, -21, -2, 3, 5, 7, 12, 42];

  expect(bubbleSort(array)).to.deep.equal(expectedArray);
})

it('should be able to sort floating point integers', () => {
  let array = [87.2, 3.67, 22.43, 9.5, -7.6];

  let expectedArray = [-7.6, 3.67, 9.5, 22.43, 87.2];
  expect(bubbleSort(array)).to.deep.equal(expectedArray);
})

it('should place elements of the same value next to each other', () => {
  let array = [7, 3, 5, 10, 3, 5, 6, 15, 5];

  let expectedArray = [3, 3, 5, 5, 5, 6, 7, 10, 15];
  expect(bubbleSort(array)).to.deep.equal(expectedArray);
})

it('should be able to handle a very large array of numbers', () => {
 let array = helper(1000)
 let expectedArray = array.sort()

 expect(bubbleSort(array)).to.deep.equal(expectedArray);
})
})
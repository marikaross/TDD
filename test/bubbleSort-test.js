import { expect } from 'chai';
import { bubbleSort } from '../lib/bubbleSort.js';

let bubble = bubbleSort
//should be a function bubbleSort()
//should take a small array as an argument bubbleSort(array)
//largest value of two indices being compared will bubble up to it's top positon


describe('bubbleSort', () => {

it('should take an array as an argument', () => {
expect()
})

it.only('should sort the array from smallest to largest', () => {
  let array = [7, 12, 5, 42, 3];
  
  let expectedArray = [3, 5, 7, 12, 42];


  expect(bubble(array)).to.deep.equal(expectedArray);
})

it('should include negative integers in a numerical array', () => {
  let array = [7, 12, -2, 5, 42, 3, -75, -21];

  let expectedArray = [-75, -21, -2, 3, 5, 7, 12, 42];

  expect(bubbleSort(array).to.equal(expectedArray));
})

it('should be able to sort floating point integers', () => {
  let array = []

})

it('should be able to sort letters', () => {

})

it('should be ')
})
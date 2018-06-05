 const helper = (number) => {
  let array = [];
  for(let i = 0; i < number; i++) {
  array.push(Math.floor(Math.random() * 1000));
  } 
  return array
}



  //push random numbers into an array
  //for loop over it so that it keeps running as many times as i want?
  export default helper;
//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let numArray;
  if(typeof(num)){
    numArray = [...String(num)];
    //console.log(num);
  }
  
  
  //console.log(numArray);
  //console.log(numArray);
  let sum = 0;
  //for loop
  let result = BigInt(0);
  if(typeof(num) == "bigint"){
    for (let index=0; index < numArray.length; index++) {
      
      result += (BigInt(Number(numArray[index])) ** BigInt(numArray.length))
    
    }
    return result === BigInt(num)
  }
  for (let index = 0; index < (numArray.length); index++) {
    //console.log((numArray[index]));
    
    sum += ((numArray[index]))**(numArray.length);
    //console.log(sum);
    
  }
  console.log(sum);
  if(sum == num){
    return true
  }
  if(sum != num){
    return false;
  }
  
};

//console.log(isArmstrongNumber(123));

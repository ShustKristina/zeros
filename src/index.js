module.exports = function getZerosCount(number) {
  // your implementation
  
  var countZeros=0;
  var i=5;
  while(number/i!=0){
    countZeros+=Math.floor((number/i));
    i=i*5;
  }

return countZeros;
}

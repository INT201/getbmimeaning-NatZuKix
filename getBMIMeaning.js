const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height);
}
function getBMIMeaning(weight, height) {
  let a=calculateBMI(weight,height);
   if(a>25.0){
    return"Overweight";
   }else if(a>18.5 && a<=24.9){
    return "Normal weight";
   }else{
    return"Underweight";
   }
}
module.exports = getBMIMeaning

// คิดค่า  bmi  = weight/(hight^2)
//เทียบค้่า bmi 

getBMIMeaning(50,1.6);
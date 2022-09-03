function calculateBMI(weight, height) {
    return weight/(height*height);   // The function returns the product of p1 and p2
  }
function getBMIMeaning(weight, height){
    let x=calculateBMI(weight,height);
    if(x<18.5){
        return "Underweight";
    }else if(x>=18.5 && x<24.9){
        return "Normal weight";
    }else{
        return "Overweight";
    }
}


console.log(getBMIMeaning(65,1.8));
console.log(getBMIMeaning(80,1.7));
console.log(getBMIMeaning(44,1.6));
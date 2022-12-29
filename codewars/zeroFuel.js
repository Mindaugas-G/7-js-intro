console.clear();

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    const availableDistance = fuelLeft * mpg;
    return distanceToPump <= availableDistance;
}

console.log(zeroFuel(50, 25, 2), '-->', true);
console.log(zeroFuel(100, 50, 1), '-->', false);
console.log(zeroFuel(40, 10, 10), '-->', true);



var summation = function (num) {
    let suma = 0;
  for (let i=1; i< num; i++) {
    //0+1= 1
    //1+2 =3
    //3+3 = 6
    //6 + 4 = 10
    //10 + 5 = 15
    //15 + 6 = 21
    //21 + 7 =28
    //28 + 8 = 36
    suma = suma + i
  }
    if(num >= 1){
       return suma
    }
    return 1
    
  
  }
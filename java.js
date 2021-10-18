const isPandigital = (j) => {
  let a = j.toString();
  let b = true ;
  
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= 6; j++) {
      if (a[i] !== j.toString()) {
        b = false;
      }
    }
  }
  return b;
}


console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));
console.log(isPandigital(112233445566778899));
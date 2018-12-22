// Soal 1

console.log ('LOOPING PERTAMA')
var numberTop = 1;
while(numberTop < 21) { 
  if (numberTop %2 == 0) 
  {
    console.log(numberTop + ' - I love coding'); 
  }
  numberTop++; 
}
console.log('LOOPING KEDUA')
var numberBottom = 21;
while(numberBottom > 0) {
    if (numberBottom %2 == 0) 
    {
        console.log(numberBottom + '- I will become fullstack developer')
    }
    numberBottom--;
}

// Soal 2

console.log('LOOPING PERTAMA')
for (var numberTopFor = 1; numberTopFor < 21 ; numberTopFor++) {
    console.log(numberTopFor + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var numberBottomFor = 20; numberBottomFor > 0 ; numberBottomFor--) {
    console.log(numberBottomFor + ' - I will become fullstack developer')
}


// Soal 3

for (var number = 1 ; number < 101 ; number ++) {
    if (number % 2 == 0) {
        console.log ('GENAP')
    }
    else {
        console.log ('GANJIL')
    }
}

for (var number = 1 ; number < 101 ; number += 2) {
    if (number % 3 == 0) {
        console.log (number + ' kelipatan 3')
    }
    else {
        console.log ('""')
    }
}

for (var number = 1 ; number < 101 ; number += 5) {
    if (number % 6 == 0) {
        console.log (number + ' kelipatan 6')
    }
    else {
        console.log ('""')
    }
}

for (var number = 1 ; number < 101 ; number += 9) {
    if (number % 10 == 0) {
        console.log (number + ' kelipatan 10')
    }
    else {
        console.log ('""')
    }
}
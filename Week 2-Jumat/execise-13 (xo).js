

// Soal XOXO
//Function akan me-return true jika 
//jumlah karakter x sama dengan jumlah karakter o
// dan false jika tidak.

function xo(str) {
    counterX = 0 // kalo ini didalam loop nanti dia balik nol lagi
    counterY = 0
      for (var y = 0; y<=str.length-1; y++) {
        if (str[y] === 'x') {  //sama dengannya harus tiga atau dua
        return counterX += 1
        // console.log(counterX) //dapet x nya
        }
        else {
        return counterY += 1
        // console.log(counterY) //dapet y nya
        }
      }
    // mulai bandingkan stlh loop selesai
    
    if (counterX === counterY) {
      console.log('true')
    }
    else {
      console.log('false')
    }
    }
    
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

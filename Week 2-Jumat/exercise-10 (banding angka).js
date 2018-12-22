//Soal bandingkan angka
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {

    if (angka1 === angka2) { 
        //bukan console log, karena gk perlu ngeprint hny perlu disimpan
       return ('-1')
    }
    else if (angka2 > angka1) {
       return ('true')
    }
    else {
        return ('false')
    }
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false


  //Soal balikkata
 // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
 // Function akan me-return kata yang dibalik.
 // Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
 
function balikKata(kata) {
    console.log(kata)
    var hasil = ''
      for (i = kata.length - 1; i >= 0; i--) { // kalo i-- mundur, berarti harus lebih dari = 0 batasnya, kalo ga di min - mulainya dari 4 berarti ngga ada alias undefined, makanya harus di min 1 biar mulainya dari angka terakhir 0123 -> i=4; i-1=3
        hasil += kata[i]
    } 
    return hasil
  }
    
    // TEST CASES
    console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
    console.log(balikKata('John Doe')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS

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

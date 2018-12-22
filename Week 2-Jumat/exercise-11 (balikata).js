
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
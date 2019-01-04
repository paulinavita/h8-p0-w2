//Soal bandingkan angka
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {

  if (angka1 === angka2) { 
      //bukan console log, karena gk perlu ngeprint hny perlu disimpan
    result = '-1'
  }
  else if (angka2 > angka1) {
    result = true
  }
  else {
    result = false
  }
  return result
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


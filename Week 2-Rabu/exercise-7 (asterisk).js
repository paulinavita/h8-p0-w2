// Soal 1 barisan bintang

var rows1 = ''
for (var i = 1 ; i < 6 ; i++) {
    console.log(rows1+'*')
}


// Soal 2 
row2 = 5
col2 = 5

for (var a = 0 ; a <= row2 - 1 ; a++) { //jml baris yg diinginkan
  var line = ''
  for (var b=0 ; b <= col2 - 1 ; b++) { //jml kolom ke kanan yg mau diisi atau jumlah bintang per baris
    line += '*'
  }
  console.log(line)
}

// Soal 3
row3 = 5

for (var a = 0 ; a <= 0 ; a++) { // pengulangan seri bintang
  var line = '' // jumlah baris
  for (var b=0 ; b <= row3 - 1 ; b++) {
    console.log(line += '*')
  }
  console.log()
}


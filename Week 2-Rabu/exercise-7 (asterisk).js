// Soal 1 barisan bintang

var rows1 = ''
for (var i = 1 ; i < 6 ; i++) {
    console.log(rows1+'*')
}

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
}


for (var n = 0; n <10; n++) { //baris
   var line1 = ''
    for (var m = 0, m > n; m--) {
       console.log(' ')
   }
   for (var k = 0, k < 15, k++) {
       console.log('*')
   }
console.log(isi)
}



//kotak kosong

// row = 5
// col = 5

// for (var a = 0 ; a <= 5 -1 ; a++){ ////baris
//   var isi =''
//     for (var b = 0 ; b <= 5 - 1; b++) ////kolom
//     if ( a == 0 ) {
//       (isi += 'x')
//     }
//     else if ( a == 5 - 1) {
//       (isi += 'y')
//     }
//     else if ( b == 0 ) {
//       isi += 'o'
//     }
//     else if (b == 5 - 1) {
//       (isi += 'z')
//     }
//     else {
//       isi += ' '
//     }
// console.log(isi)
// }


// // jajar genjang
// for (var n = 0; n <10; n++) { //baris
//     var isi = '' //kolom
//     for (var m = 15 ; m > n; m--) {
//        isi += '.'
//        }
//     for (var y = 0; y < 10 ; y++) {
//       isi += 'o'
//     }
//      console.log(isi)
//   }
  
// // bikin segitiga sama sisi
// for (var n = 0 ; n < 12 ; n++ ) { //bkin 3 baris
//   var isi = 'g' //kolom
//   for (var m = 12 ; m > n ; m--) { //selama nilai m lebih besar dari n(nilai baris sekarang) terjadi looping, stop kalo uda ngulang lebih byk dari n
//     isi += '_'
//   } // semua baris dilakukan looping y dan looping z, mslhnya masuk kondisi nggak itu yg ntnuin ada o atau p di tiap baris
//   for (var y = 0 ; y <= n; y++) {
//     isi += 'o'
//   }
//   for (var z = 0 ; z<= n-1 ; z ++) {
//     isi += 'P'
//   }

//   console.log (isi)
// }

// // sama sisi kebalik
// for (var n = 0 ; n < 4 ; n++ ) { //bkin 3 baris
//     var isi = 'g' //kolom
//     for (var m = 0 ; m < n ; m++) { //selama nilai m lebih besar dari n(nilai baris sekarang) terjadi looping, stop kalo uda ngulang lebih byk dari n
//       isi += '_'
//     } // semua baris dilakukan looping y dan looping z, mslhnya masuk kondisi nggak itu yg ntnuin ada o atau p di tiap baris
//     for (var y = 3 ; y >= n; y--) {
//       isi += 'o'
//     }
//     for (var z = 2 ; z>= n ; z --) {
//       isi += 'P'
//     }
  
//     console.log (isi)
//   }

// //bentuk segitiga ke kanan |>

// for (var a = 0; a <=6; a++) {
//     var isiAtas =''
//     for (var b = 0; b<=(a); b++) {
//       isiAtas += 'x'
//     }
//     console.log(isiAtas)
//   }
//   for (var c = 0; c <6; c++) {
//     var isiBwh =''
//     for (var d = 5; d>=(c); d--) {
//       isiBwh += 'x'
//     }
//     console.log(isiBwh)
//   }

//bentuk belah ketupat romadon

// for (var e= 0; e<=6; e++){
//     var isiKiriAtas =''
//     for (var f=6; f>=e ;f--){
//       isiKiriAtas += '_'
//     }
//     for (var g= 0 ; g <= e ;g++){
//       isiKiriAtas += 'x'
//     }  
//     for (var p = 0; p<=e-1; p++) {
//       isiKiriAtas += 'y'
//     }
//     console.log(isiKiriAtas)
//   }
  
//   for (var r= 0; r<=6; r++){
//     var isiKiriBawah =''
//     for (var t=0; t<=r ;t++) {
//       isiKiriBawah += '_' 
//       //cara belajar: ini ulangan ke bereapa? 
//       //cek r nya. oh ke 0, berarti yg pling pertama muncul siapa? spasi_ nya; 
//       // spasinya berkuang apa nambah nanti, 
//       //oh nambah. brarti kerjanya ++, kalo ++ temennya dibatesin dgn <=, 
//       //berarti variabel initialnya gimana biar ga kopong?
//       //pas di ++ ber kali2 masih masuk ke syarat
//       //jadi loopingnya jalan terus.
//     }
//     for (var u= 6 ; u >=r ;u--){ 
//       isiKiriBawah += 'x'
//     }  
//     for (var v = 5; v>=r; v--) {
//       isiKiriBawah += 'y'
//     }
//     console.log(isiKiriBawah)
//   }
  
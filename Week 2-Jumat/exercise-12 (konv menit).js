function konversiMenit(menit) {

    hasilMod = menit%60
    hasilBagi = Math.floor(menit/60)
    
    if (hasilMod < 10){
      hasilMod = '0' + hasilMod
     
    }
    
     return (hasilBagi + ':' + hasilMod ) //jangan salah!!//
     //kalo returnya didalam if berarti pas else > 10 ngga ada
     //jadi nya hasilnya undefined!!
    
    }
    
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
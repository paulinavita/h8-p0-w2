// Soal 1
function shoutOut() {
    console.log('Halo Function!')
    return
}

shoutOut()

// Soal 2
function calculateMultiply (num1,num2) {
    return num1 * num2;
 }
 var hasilPerkalian = calculateMultiply(5,6)
 console.log(hasilPerkalian)

 // Soal 3

 function processSentence() {
    return ('Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan  saya punya hobby yaitu '+hobby+'!')
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
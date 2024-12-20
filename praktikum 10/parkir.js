//menghitung biaya parkir
function hitungParkir(){
    let jamMasuk = document.getElementById("jam_masuk").value;
    let jamKeluar = document.getElementById("jam_keluar").value;
    let durasi = jamKeluar - jamMasuk
    console.log(durasi);

    //Biaya Parkir
    let biayaParkir = 3000
    durasi -= 2

    //Hitung Sisa Jam
    if(durasi > 0) {
        biayaParkir = biayaParkir + (durasi * 1000)
    }
    console.log(biayaParkir);
    //Tampilkan hasil ke dalam html
    document.getElementById("biaya").innerHTML = biayaParkir
    
}
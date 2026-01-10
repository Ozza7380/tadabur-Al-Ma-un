console.log("script jalan")
let currentAudio = null;
let currentButton = null;
let maxLoop = 5
let currentLooping = 0
document.querySelectorAll(".play-btn").forEach(button => { // untuk memamnggil element tombol play setiap button
    button.addEventListener("click", function() { // setiap element tombol diatambahkan fitur click
        currentLooping = 0
        const ayatDiv = this.parentElement; // mencari parent element dari tombol
        const audioSrc = ayatDiv.getAttribute("data-audio"); // mencari alamat audio di atribut data audio
console.log(audioSrc) // mengcek audio
      // jika ada audio maka audio itu di berhentikan dan dimulai dari awal dan tombol kembali menunjukan "play"
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
            if (currentButton) {
                currentButton.textContent = "5x play"; 
            }
        }
       //  jika ada ada audio maka di reset dan menunjukan tombol "play"
        if (this === currentButton) {
            currentAudio = null
            currentButton = null
            this.textContent = "5x play";
        } // ketika belum ada audia terputar maka sistem akan memutar audio saat button audio "play" di tekan, dan saat audio jalan tombol "play berubah menjadi "stop"
          else {
            currentAudio =  new Audio(audioSrc);
            currentButton = this;

            currentAudio.play();
            this.textContent = "Stop"
          // ketika audio selesai semua element di reset ke awal
            currentAudio.onended = () => {
                currentLooping++ // buat mendeteksi 
                console.log(currentLooping) // cek jumlah loop
              // agar bisa loop 5 kali dan berhenti setelah 5 kali
                if (currentLooping >= maxLoop) {
                 this.textContent = "5x play";
                currentAudio = null;
                currentButton = null; 
                } else {
                    currentAudio.currentTime = 0
                 currentAudio.play()
                }
            };
            
        }
    })
})
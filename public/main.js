console.log("script jalan")
let currentAudio = null;
let currentButton = null;

document.querySelectorAll(".play-btn").forEach(button => {
    button.addEventListener("click", function() {
        const ayatDiv = this.parentElement;
        const audioSrc = ayatDiv.getAttribute("data-audio");
console.log(audioSrc)
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
            if (currentButton) {
                currentButton.textContent = "Play";
            }
        }

        if (this === currentButton) {
            currentAudio = null
            currentButton = null
            this.textContent = "Play";
        } else {
            currentAudio =  new Audio(audioSrc);
            currentButton = this;

            currentAudio.play();
            this.textContent = "Stop"

            currentAudio.oneended = () => {
                this.textContent = "Play"


                currentAudio = null;
                currentButton = null;
            };
        }
    })
})
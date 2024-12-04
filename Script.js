document.addEventListener("DOMContentLoaded", function () {
    const musicButton = document.getElementById("music-button");
    const audio = document.getElementById("background-music");

    // Initially, music is paused
    let isPlaying = false;

    // Toggle play/pause when the music button is clicked
    musicButton.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            musicButton.style.background = "linear-gradient(45deg, #ff4d4d, #ff8c1a)"; // Indicate pause state
        } else {
            audio.play();
            isPlaying = true;
            musicButton.style.background = "linear-gradient(45deg, #4dff4d, #1aff8c)"; // Indicate play state
        }
    });

    // Optional: Play music automatically when the page loads
    // Uncomment this line if auto-play is required
    // audio.play();
});

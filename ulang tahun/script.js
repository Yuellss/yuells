function showMessage() {
    document.getElementById("specialMessage").style.display = "block";

    // Membuat efek petasan (confetti)
    confetti({
        particleCount: 500,
        spread: 150,
        origin: { y: 0.6 }
    });
}

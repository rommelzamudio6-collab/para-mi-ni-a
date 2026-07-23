document.addEventListener("DOMContentLoaded", () => {

    // 1. MÁQUINA DE ESCRIBIR
    const textToType = "Eres lo mejor que me ha pasado en la vida ✨";
    let index = 0;
    const typedTextElement = document.getElementById("typed-text");

    function typeWriter() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();

    // 2. CONTADOR DE TIEMPO (04/07/2026)
    const startDate = new Date("2026-07-04T00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const difference = Math.abs(now - startDate);

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // 3. CORAZONES FLOTANTES
    const particlesContainer = document.getElementById("particles-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        heart.style.fontSize = Math.random() * 15 + 10 + "px";

        particlesContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    setInterval(createHeart, 400);

    // 4. MÚSICA
    const musicBtn = document.getElementById("music-btn");
    const bgMusic = document.getElementById("bg-music");
    let isPlaying = false;

    musicBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = "🎵 Reproducir Música";
        } else {
            bgMusic.play();
            musicBtn.innerHTML = "⏸️ Pausar Música";
        }
        isPlaying = !isPlaying;
    });

    // 5. RAZONES
    const reasonsContainer = document.getElementById("reasons-container");
    const sampleReasons = [
        "Tu sonrisa me arregla cualquier día.",
        "Cómo me miras cuando no me doy cuenta.",
        "Tu forma de abrazarme tan sincera.",
        "Lo divertida que eres en todo momento.",
        "Tu voz transmitiéndome tanta paz.",
        "Cómo te preocupas por las personas que quieres.",
        "Tus bromas que me hacen reír siempre.",
        "El brillo único de tus ojos.",
        "Tu inteligencia y la pasión con la que hablas.",
        "Sencillamente, por ser tú."
    ];

    for (let i = 1; i <= 100; i++) {
        const reasonDiv = document.createElement("p");
        reasonDiv.classList.add("reason-item");
        const reasonText = sampleReasons[(i - 1) % sampleReasons.length];
        reasonDiv.innerHTML = `<strong>#${i}:</strong> ${reasonText}`;
        reasonsContainer.appendChild(reasonDiv);
    }

    // 6. BOTÓN SORPRESA
    const surpriseBtn = document.getElementById("surprise-btn");
    const secretLetter = document.getElementById("secret-letter");

    surpriseBtn.addEventListener("click", () => {
        secretLetter.classList.remove("hidden");
        surpriseBtn.style.display = "none";
        secretLetter.scrollIntoView({ behavior: 'smooth' });
    });
});

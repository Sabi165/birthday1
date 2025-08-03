// Navigation
function goToWishes() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("wishes-screen").style.display = "flex";
}

function goToCake() {
  document.getElementById("wishes-screen").style.display = "none";
  document.getElementById("cake-screen").style.display = "flex";
}

// Cake slice animation
function cutCake() {
  document.querySelectorAll('.cake-slice').forEach(slice => {
    slice.classList.add('cut');
  });
  document.getElementById("message").classList.remove("hidden");
}

// Confetti background
window.onload = () => {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 300;
  const confettiPieces = Array.from({ length: confettiCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: Math.random() * Math.PI,
    fallSpeed: Math.random() * 3 + 2,
  }));

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.ellipse(p.x, p.y, p.r, p.r / 2, p.tiltAngle, 0, Math.PI * 2);
      ctx.fill();
    });
    updateConfetti();
  }

  function updateConfetti() {
    confettiPieces.forEach(p => {
      p.y += p.fallSpeed;
      p.tiltAngle += 0.05;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(drawConfetti, 20);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};

// Music toggle
document.getElementById('music-toggle').addEventListener('click', () => {
  const audio = document.getElementById('birthday-audio');
  audio.muted = !audio.muted;
  document.getElementById('music-toggle').textContent = audio.muted ? '🔇' : '🎵';
});

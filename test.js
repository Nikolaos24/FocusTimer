function flipTo(el, newVal) {
  const upper = el.querySelector(".upper");
  const lower = el.querySelector(".lower");
  const flipUpper = el.querySelector(".flip-upper");
  const flipLower = el.querySelector(".flip-lower");

  const frontUpper = flipUpper.querySelector(".flip-front");
  const backUpper = flipUpper.querySelector(".flip-back");

  const frontLower = flipLower.querySelector(".flip-front");
  const backLower = flipLower.querySelector(".flip-back");

  if (upper.textContent === newVal) return;

  // Set Werte
  frontUpper.textContent = upper.textContent;
  backUpper.textContent = newVal;
  frontLower.textContent = upper.textContent;
  backLower.textContent = newVal;

  // Animation starten
  flipUpper.classList.add("flip-animate");
  flipLower.classList.add("flip-animate");

  // Nach der Animation: Werte aktualisieren + Reset
  setTimeout(() => {
    upper.textContent = newVal;
    lower.textContent = newVal;
    flipUpper.classList.remove("flip-animate");
    flipLower.classList.remove("flip-animate");
  }, 800);
}

// Countdown-Logik
let minutes = 1;
let seconds = 25;

const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      return;
    }
    minutes--;
    seconds = 59;
    flipTo(minEl, String(minutes).padStart(2, "0"));
  } else {
    seconds--;
  }

  flipTo(secEl, String(seconds).padStart(2, "0"));
}

const timer = setInterval(updateTimer, 1000);

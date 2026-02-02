document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music) music.play().catch(()=>{});
}, { once:true });

function nextScreen(n) {
  document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
  const s = document.getElementById("screen" + n);
  if (s) s.classList.remove("hidden");
  if (n === 3) startTyping();
}

function goBirthday() {
  window.location.href = "birthday.html";
}

const text =
"From the moment you came into my life, everything felt warmer and brighter.\n" +
"Your smile is my favorite place, your voice is my comfort, and your presence is my peace.\n\n" +
"You don’t just make my days beautiful — you make me better.\n\n" +
"Today is special because you were born.\n" +
"But for me, every day is special because you exist.";

let i = 0;
function startTyping() {
  const el = document.getElementById("typing");
  el.innerHTML = "";
  i = 0;
  const sign = document.getElementById("signature");
  sign.classList.remove("show");

  function type() {
    el.innerHTML += text.charAt(i++);
    if (i < text.length) {
      setTimeout(type, 60);
    } else {
      sign.classList.add("show");
    }
  }
  type();
}

setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = Math.random() > 0.5 ? "💖" : "💕";
  h.style.left = Math.random()*100 + "vw";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),8000);
},700);

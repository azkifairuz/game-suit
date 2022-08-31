// pilihan jarvis

function getPilihanJarvis() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return " SERI!";
  if (player == "batu") return comp == "gunting" ? " MENANG!" : " KALAH!";
  if (player == "gunting") return comp == "kertas" ? " MENANG!" : " KALAH!";
  if (player == "kertas") return comp == "batu" ? " MENANG!" : " KALAH!";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  let j = document.querySelector(".j")
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const start = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".jpg");
    if (i == gambar.length) i = 0;
    j.innerHTML = gambar[i]
  }, 100);
}
const takePlayer = document.querySelector(".p");

// const papanScore = document.querySelector(".scoring p");
let scoreWin = 0;
function win() {
  scoreWin++;
  takePlayer.innerHTML = "YOU: " + scoreWin;
}
let scoreLose = 0;
const takeJarvis = document.querySelector(".C");
function lose() {
  scoreLose++;
      takeJarvis.innerHTML = "JARVIS: " + scoreLose;
    if (scoreLose > 3){
      alert("kesempatan anda habis, mulai ulang")
      window.location.reload()
    }
}

const pilihanUser = document.querySelectorAll("li img");
pilihanUser.forEach(function (user) {
  user.addEventListener("click", function () {
    const pilihanComputer = getPilihanJarvis();
    const pilihanPlayer = user.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      if (hasil == " MENANG!") {
        win();
      } else if (hasil == " KALAH!") {
        lose();
      } 
      
    }, 1000);
  });
});

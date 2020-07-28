const buttons = Array.from(document.querySelectorAll(".key"));
const audios = Array.from(document.querySelectorAll("audio"));

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList += " playing";
    audios[index].currentTime = 0;
    audios[index].play();
    setTimeout(() => {
      button.classList = "key";
    }, 100);
  });
});

addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
  button.classList.add('playing');
  setTimeout(() => {
    button.classList.remove('playing');
  }, 100);
});


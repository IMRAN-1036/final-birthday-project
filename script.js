const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Sound effects
const SOUNDS = {
  CHEER: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/cheer.mp3"
  ),
  MATCH: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/match-strike-trimmed.mp3"
  ),
  TUNE: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/happy-birthday-trimmed.mp3"
  ),
  ON: new Audio("https://assets.codepen.io/605876/switch-on.mp3"),
  BLOW: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/blow-out.mp3"
  ),
  POP: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/pop-trimmed.mp3"
  ),
  HORN: new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/horn.mp3"
  ),
};

// Change position of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const imageContainer = document.getElementById('imageContainer');
const buttonsContainer = document.querySelector('.buttons');

function moveNoButton() {
  const maxX = buttonsContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = buttonsContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Para mouse
noBtn.addEventListener('mouseover', moveNoButton);
// Para toque em celular
noBtn.addEventListener('touchstart', moveNoButton);

yesBtn.addEventListener('click', () => {
  imageContainer.classList.add('visible');
});


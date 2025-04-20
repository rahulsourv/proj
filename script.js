const noLink = document.querySelector('.btn a[href="no2.html"]');
const yesLink = document.querySelector('.btn a[href="yes.html"]');
const image = document.querySelector('.photo img');

function isOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function moveNoButton(event) {
  event.preventDefault(); // Prevent link from being followed

  const maxAttempts = 100;
  let attempt = 0;

  const noWidth = noLink.offsetWidth;
  const noHeight = noLink.offsetHeight;

  const yesRect = yesLink.getBoundingClientRect();
  const imgRect = image.getBoundingClientRect();

  while (attempt < maxAttempts) {
    const x = Math.random() * (window.innerWidth - noWidth);
    const y = Math.random() * (window.innerHeight - noHeight);

    noLink.style.position = 'absolute';
    noLink.style.left = `${x}px`;
    noLink.style.top = `${y}px`;

    const noRect = noLink.getBoundingClientRect();

    if (
      isOverlapping(noRect, yesRect) ||
      isOverlapping(noRect, imgRect)
    ) {
      attempt++;
      continue;
    }

    break;
  }
}

noLink.addEventListener('mouseenter', moveNoButton);
noLink.addEventListener('click', moveNoButton);

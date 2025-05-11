// Removed duplicate declaration of isFlipped
function flipCard() {
  const cardInner = document.querySelector('.card-inner');
  isFlipped = !isFlipped;
  cardInner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
}

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");

const images = [
  "images/mom1.jpg", "images/mom2.jpg", "images/mom3.jpg", "images/mom4.jpg", "images/mom5.jpg", "images/mom6.jpg",
  "images/mom7.jpg", "images/mom8.jpg", "images/mom9.jpg", "images/mom10.jpg", "images/mom11.jpg", "images/mom12.jpg",
  "images/mom13.jpg", "images/mom14.jpg", "images/mom15.jpg", "images/mom16.jpg", "images/mom17.jpg", "images/mom18.jpg",
  "images/mom19.jpg", "images/mom20.jpg", "images/mom21.jpg", "images/mom22.jpg", "images/mom23.jpg", "images/mom24.jpg",
  "images/mom25.jpg", "images/mom26.jpg", "images/mom27.jpg", "images/mom28.jpg", "images/mom29.jpg", "images/mom30.jpg",
  "images/favourites.jpg"
];

let current = 0;
let slideInterval;

function openModal() {
  modal.style.display = "block";
  modalImage.src = images[current];
  startSlideshow();
}

function closeModal() {
  modal.style.display = "none";
  if (slideInterval) clearInterval(slideInterval);
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    current = (current + 1) % images.length;
    modalImage.src = images[current];
  }, 3000);
}

function nextImage() {
  current = (current + 1) % images.length;
  modalImage.src = images[current];
  shootHearts();
  createSparkles();
}

function shootHearts() {
  const heartContainer = document.getElementById('heart-container');
  
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = '90%';
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

function createSparkles() {
  const sparkleContainer = document.getElementById('sparkle-container');

  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }
}

// Initialize heart and sparkle containers
document.addEventListener('DOMContentLoaded', () => {
  // Heart Container
  const heartContainer = document.createElement('div');
  heartContainer.id = 'heart-container';
  document.body.appendChild(heartContainer);

  // Sparkle Container
  const sparkleContainer = document.createElement('div');
  sparkleContainer.id = 'sparkle-container';
  document.body.appendChild(sparkleContainer);
});
let isFlipped = false;

function flipCard() {
  const cardInner = document.querySelector('.card-inner');
  isFlipped = !isFlipped;
  cardInner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
}

function continueButtonClicked() {
  // Flip to the back of the card and show Hindi message
  flipCard();
  // Add the Hindi message transition after flip
  setTimeout(() => {
    const back = document.querySelector('.card-back');
    back.innerHTML = `
      <h2>मेरी सबसे प्यारी मम्मा,</h2>
      <p>शायद मैं ये अक्सर नहीं कह पाती/पाता, लेकिन मैं आपसे बहुत प्यार करती/करता हूँ — दिल से, आत्मा से, और हर उस एहसास से जो मेरे अंदर है...</p>
      <p>मम्मा, मुझे पता है आप अभी ये सोच रही होंगी कि, "इसको तो समझ में ही नहीं आता, फिर भी इंग्लिश में ही लिखकर भेज दिया है!"</p>
      <p>Don't worry Mumma, मैंने नीचे इसका हिंदी में अनुवाद भी कर दिया है — आप पढ़ती जाइए, आपको सब समझ में आ जाएगा कि मैंने क्या लिखा है।</p>
      <button onclick="goBack()">Back</button>
    `;
  }, 1000); // Wait for the flip animation to complete before changing content
}

function goBack() {
  // Flip back to the front
  flipCard();
  setTimeout(() => {
    const front = document.querySelector('.card-front');
    front.innerHTML = `
      <h1>Happy Mother's Day 💐</h1>
      <p>Click to see your surprise, Mom!</p>
      <p>My Dearest Mumma,</p>
      <p>I don’t think I say this enough, but I love you — deeply, endlessly, and with all my heart...</p>
      <button id="continueBtn" onclick="continueButtonClicked()">Continue</button>
    `;
  }, 1000); // After flipping back, revert to the English content
}

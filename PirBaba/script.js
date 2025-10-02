// Starry night effect
const starContainer = document.getElementById("star-container");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starContainer.appendChild(star);
}

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Quotes Carousel
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentItem = 0;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

function nextItem() {
  currentItem = (currentItem + 1) % carouselItems.length;
  showItem(currentItem);
}

prevBtn.addEventListener("click", () => {
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentItem);
});
nextBtn.addEventListener("click", nextItem);

setInterval(nextItem, 5000); // Auto-slide every 5 seconds

// Fun Tools
const quoteGeneratorBtn = document.getElementById("quote-generator-btn");
const generatedQuoteDiv = document.getElementById("generated-quote");
const spiritualQuotes = [
  "দুপুরে ঝালমুড়ি খাও, আত্মার শান্তি আনো।",
  "আজকের জন্য তোমার আধ্যাত্মিক কাজ হলো, রিকশাওয়ালাকে মামা ডাকা।",
  "টিভির রিমোট খুঁজে বের করো, নিজের ভেতরের প্রশান্তিও খুঁজে পাবে।",
  "গান শুনতে শুনতে বাথরুমে নাচাও একটি উচ্চমার্গীয় সাধনা।",
  "মন খারাপ? এক কাপ গরম চা খাও, সব ঠিক হয়ে যাবে।",
];
quoteGeneratorBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * spiritualQuotes.length);
  generatedQuoteDiv.textContent = `"${spiritualQuotes[randomIndex]}"`;
});

const wazifaBtn = document.getElementById("wazifa-btn");
const wazifaTextDiv = document.getElementById("wazifa-text");
wazifaBtn.addEventListener("click", () => {
  wazifaTextDiv.textContent =
    '"আজ সারাদিন হাসতে হবে, এটাই ওজিফা। কারণ, হাসলে আত্মার ডিটক্স হয়।"';
});

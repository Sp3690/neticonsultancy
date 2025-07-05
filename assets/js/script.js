const cards = document.querySelectorAll('.feature-card');

function revealCardsSequentially() {
  let delay = 0;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible && !card.classList.contains('visible')) {
      setTimeout(() => {
        card.classList.add('visible');
      }, delay);
      delay += 300; // each appears after 300ms gap
    }
  });
}

window.addEventListener('scroll', revealCardsSequentially);
window.addEventListener('load', revealCardsSequentially);

// Image scroll reveal
const image = document.getElementById("leftImage");

function showImageOnScroll() {
  const rect = image.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    image.classList.add("visible");
  }
}
window.addEventListener("scroll", showImageOnScroll);
window.addEventListener("load", showImageOnScroll);

// Button click to show content
document.getElementById("showContent").addEventListener("click", () => {
  const content = document.getElementById("rightContent");
  content.classList.remove("hidden");

  // Animate paragraph by paragraph
  const paragraphs = content.querySelectorAll("p");
  paragraphs.forEach((p, index) => {
    p.style.opacity = 0;
    setTimeout(() => {
      p.style.transition = "opacity 0.5s";
      p.style.opacity = 1;
    }, index * 400); // delay per para
  });
});
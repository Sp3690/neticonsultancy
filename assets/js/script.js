//card section

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

//about section
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-down');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });
});

// counters
let started = false;

function startCounting() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const speed = target / 100; // smaller = faster

    const updateCount = () => {
      if (count < target) {
        count += speed;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

function handleScroll() {
  const countersSection = document.getElementById('counters');
  const rect = countersSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100 && !started) {
    started = true;
    startCounting();
  }
}

window.addEventListener('scroll', handleScroll);
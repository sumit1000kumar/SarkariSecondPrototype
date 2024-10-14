document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.cards');
  const card = document.querySelector('.card');
  const container = document.querySelector('.container');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  if (cardsContainer && card && container && nextButton && prevButton) {
    const cardWidth = card.clientWidth + 20; // Including margin
    const totalCards = cardsContainer.children.length;
    const cardsPerView = Math.floor(container.clientWidth / cardWidth);
    let currentIndex = 0;

    function slideCards() {
      currentIndex++;
      if (currentIndex > totalCards - cardsPerView) { // Adjust based on number of cards
        currentIndex = 0;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transform = `translateX(${offset}px)`;
    }

    setInterval(slideCards, 3000); // Slide every 3 seconds

    nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex > totalCards - cardsPerView) {
        currentIndex = 0;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transform = `translateX(${offset}px)`;
    });

    prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalCards - cardsPerView;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transform = `translateX(${offset}px)`;
    });
  } else {
    console.error('One or more elements were not found in the DOM');
  }
});


//Star rating

const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
   item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
   })
);

//Slick slider

$('.testimonial__slider-items').slick({
   prevArrow: '<svg class="slick-left" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14L2 8L8 2" stroke="#150C01" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>',
   nextArrow: '<svg class="slick-right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L8 8L2 14" stroke="#150C01" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>',
});

// Menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}



//Smooth scrolling

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockId = anchor.getAttribute('href').substr(1);

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active')
         menuBody.classList.remove('_active')
      }

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })


   })
}


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockId = anchor.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   })
}
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

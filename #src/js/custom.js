//? SKILLS

function skillsHeight() {
   $.each($('.sliders__item'), function (index, val) {
      let
         dataProcent = $(val).attr('data-procent'),
         spanTitle = $(val).find('.sliders__title').find('span'),
         spanSlide = $(val).find('.sliders__slide').find('span:eq(0)');

      $(spanTitle).html(dataProcent + '%');
      $(spanSlide).css({
         'width': dataProcent + '%',
         'transition-delay': (index + 1) + 's'
      });
   });
}
skillsHeight();

//? SLIDER
function testimonialsSliderInit() {
   let slickContainer = $('.testimonials__slider');

   slickContainer.slick({
      autoplay: true, //Автоматическое перелистывание
      autoplaySpeed: 2000, // Скорость автоматического перелистывания
      dots: true, // Точки
      arrows: false, // Стрелки
      adaptiveHeight: false, // Адаптивная высота слайда
      lazyLoad: 'progressive',//Ленивая загрузка
      easing: 'ease', // Характер анимации перелистывания
      pauseOnHover: true, // Пауза при наведении
      touchTreshold: 1, // Срабатывание прокрутки слайда при таче (default: 5)
      waitForAnimate: false, //Задержка при быстром клике на стрелке
   });
}
testimonialsSliderInit();

function checkInitSlider() {
   let el = document.querySelector('.testimonials__slider');
   if (!el.classList.contains('slick-initialized')) {
      $('.testimonials__slider').slick({
         autoplay: true, //Автоматическое перелистывание
         autoplaySpeed: 2000, // Скорость автоматического перелистывания
         dots: true, // Точки
         arrows: false, // Стрелки
         adaptiveHeight: false, // Адаптивная высота слайда
         lazyLoad: 'progressive',//Ленивая загрузка
         easing: 'ease', // Характер анимации перелистывания
         pauseOnHover: true, // Пауза при наведении
         touchTreshold: 1, // Срабатывание прокрутки слайда при таче (default: 5)
         waitForAnimate: false, //Задержка при быстром клике на стрелке
      });
   }
}



function animateNumber() {
   let numbers = document.querySelectorAll('.numbers__numbers');
   for (let index = 0; index < numbers.length; index++) {
      const el = numbers[index].firstElementChild;
      const number = parseInt(numbers[index].firstElementChild.getAttribute('data-number'));

      $(el).animateNumber({
         number: number,
         easing: 'swing',
      }, 3000);
   }
}

function startAnimate() {
   sectors($(this).scrollTop());
   let sector = document.querySelector('.numbers');
   let trigger = 0;
   checkActiveBlock();
   window.addEventListener('scroll', function () {
      checkActiveBlock();
   });

   function checkActiveBlock() {
      if (sector) {
         if (sector.classList.contains('active')) {
            if (!trigger) {
               trigger = 1;
               animateNumber();
            }
         }
      }
   }
}
startAnimate();



function delay(n) {
   n = n || 2000;
   return new Promise((done) => {
      setTimeout(() => {
         done();
      }, n);
   });
}

function pageTransition() {
   let tl = gsap.timeline();
   tl.to('.loading-screen', {
      duration: 1.2,
      width: '100%',
      left: '0%',
      ease: 'Expo.easeInOut',
   });
   tl.to('.loading-screen', {
      duration: 1,
      width: '100%',
      left: '100%',
      ease: 'Expo.easeInOut',
      delay: 0.3,
   });
   tl.set('.loading-screen', { left: '-100%' });
   setTimeout(startAnimate, 3000);
}

function contentAnimation() {
   let tl = gsap.timeline();
   tl.to('.animate-header', {
      duration: 1,
      opacity: 1,
      stagger: 0.4,
      delay: 0.2,
   });
   tl.to('.animate-content', {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.4,
      delay: 0.2,
   });
}
contentAnimation();

const slider = function () {
  const slides = document.querySelectorAll(".carousel_card");
  const btnLeft = document.querySelector(".slider_btn--left");
  const btnRight = document.querySelector(".slider_btn--right");
  // const dotContainer = document.querySelector(".dots");
  console.log(slides);
  let curSlide = 0;
  const maxSlide = slides.length;
  
  // FUNCTIONS
  
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    // createDots();

    // activateDot(0);
  };
  init();

  // Event handlers
  
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // dotContainer.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("dots__dot")) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //     // activateDot(slide);
  //   }
  // });
};
slider();


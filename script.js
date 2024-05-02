
// navbar scroll
window.onscroll = () => {
    const navbar = document.querySelector(".navbar");
    const fixedNav = navbar.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
  };

  let currentIndex = 0;
  const totalCards = document.querySelectorAll('.card').length;
  
  function nextSlide() {
      currentIndex += 1;
      if (currentIndex > totalCards - 1) {
          currentIndex = 0;
      }
      updateSlider();
  }
  
  function prevSlide() {
      currentIndex -= 1;
      if (currentIndex < 0) {
          currentIndex = totalCards - 1;
      }
      updateSlider();
  }
  
  function updateSlider() {
      const slideWidth = getSlideWidth(); 
      const marginBetweenSlides = getMarginBetweenSlides(); 
  
      const slider = document.querySelector('.slider');
      const maxSlideWidth = (slideWidth + marginBetweenSlides) * totalCards - marginBetweenSlides; 
  
    
      let newPosition = -currentIndex * (slideWidth + marginBetweenSlides);
      newPosition = Math.min(newPosition, 0); 
      newPosition = Math.max(newPosition, -maxSlideWidth + slideWidth); 
  
      slider.style.transform = `translateX(${newPosition}px)`;
  }
  
  function getSlideWidth() {
      if (window.innerWidth < 600) {
          return 365; 
      } else if (window.innerWidth < 820) {
          return 400; 
      } else {
          return 200; 
      }
  }
  
  function getMarginBetweenSlides() {
      if (window.innerWidth < 600) {
          return 15; 
      } else if (window.innerWidth < 820) {
          return 30; 
      } else {
          return 80; 
      }
  }
  
//   slider review
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slider = document.querySelector(".slider-review");
    const dotsContainer = document.querySelector(".dots-container");
  
    prevBtn.addEventListener("click", () => {
      slider.scrollBy(-slider.offsetWidth, 0);
    });
  
    nextBtn.addEventListener("click", () => {
      slider.scrollBy(slider.offsetWidth, 0);
    });
  
    // Generate dots
    const totalSlides = document.querySelectorAll(".card-review").length;
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        slider.scrollTo({
          left: i * slider.offsetWidth,
          behavior: "smooth"
        });
      });
      dotsContainer.appendChild(dot);
    }
  
    // Update active dot
    slider.addEventListener("scroll", () => {
      const scrollPosition = slider.scrollLeft;
      const slideWidth = slider.offsetWidth;
      const currentSlide = Math.round(scrollPosition / slideWidth);
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("active-dot");
        } else {
          dot.classList.remove("active-dot");
        }
      });
    });
  });


  // navbar responsive
    const buttonNav = document.getElementById('toggleButton');
    const menuList = document.querySelector(".menu");
    
    buttonNav.addEventListener("click", () => {
      if (menuList.classList.contains("menu-respon")) {
        menuList.classList.remove("menu-respon");
      } else {
        menuList.classList.add("menu-respon");
      }
    });
  
  
// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active'); 
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });

});

 // Create floating particles
function createParticles() {
    const container = document.querySelector('.particle-container');
    const particleCount = 100; 
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = Math.random() > 0.8 ? 'particle large' : 'particle'; 
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%'; 
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's'; 
        container.appendChild(particle);
    }
}    

// Add mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
}); 

$(document).ready(function(){
    createParticles();
});
// end particles


// partner check padding
window.addEventListener("load", function() {
    let banner = document.getElementById("banner");
    let header = document.querySelector("header.header");
    let partner = document.getElementById("partner");
    
    if (banner && header && partner) {
        let bannerH = banner.offsetHeight;
        let headerH = header.offsetHeight;
        partner.style.marginTop = (bannerH - headerH) + "px";
    }
});
// end partner check padding

// đếm số
function countUp(element, target, duration) {
  let start = 0;
  let startTime = null;

  function update(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * target);
    element.textContent = current + "+"; // thêm dấu +

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + "+"; // đảm bảo kết thúc có +
    }
  }

  requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", () => {
  const rowCount = document.querySelector(".row-count");
  if (!rowCount) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = rowCount.querySelectorAll(".count-up");
        counters.forEach(el => {
          const target = parseInt(el.getAttribute("data-target"), 10);
          countUp(el, target, 3000); // Thời gian chạy (ms)
        });
        observer.unobserve(entry.target); // Chỉ chạy 1 lần
      }
    });
  }, {
    threshold: 0.5 // 50% vào tầm nhìn mới chạy (có thể điều chỉnh)
  });

  observer.observe(rowCount);
});
// end đếm số



$(".slider-main").owlCarousel({
    items: 1,
    responsive: {
        1200: { item: 1, },
        992: { items: 1, },
        768: { items: 1, },
        480: { items: 1, },
        0: { items: 1, }
    },
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000, //slide speed smooth
    dots: true,
    dotsEach: false,
    loop: false,
    nav: false,
    navText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
    margin:0,
    //animateOut: ['fadeOut', 'zoomOut'], // default: false
    //animateIn: ['fadeIn', 'zoomIn'], // default: false
    center: false,
    onInitialized: counter, // gọi khi khởi tạo
    onChanged: counter      // gọi khi đổi slide
});

function counter(event) {
      // Xóa số cũ
    $('.owl-dots .owl-dot').each(function(index){
    $(this).find('span').text(index+1); // Gán số thứ tự
    });
}

$(".slider-partner").owlCarousel({
    items: 4,
    responsive: {
        1200: { item: 4, },
        992: { items: 3, },
        768: { items: 3, },
        480: { items: 2, },
        0: { items: 2, }
    },
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 3000, //slide speed smooth
    dots: false,
    dotsEach: true,
    loop: true,
    nav: false,
    navText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
    margin:100, 
    center: false, 
});


$(".slider-blockchain").owlCarousel({
    items: 3,
    responsive: {
        1200: { item: 3, },
        992: { items: 3, },
        768: { items: 2, },
        480: { items: 2, },
        0: { items: 1, }
    },
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 3000, //slide speed smooth
    dots: false,
    dotsEach: true,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin:10, 
    center: true, 
});
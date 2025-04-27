$(function () {
    // $('#banner_part').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     arrows: false,
    //     dots: true,
    // });

    //veno box start
    // $('.venobox').venobox({
    //     spinner: 'wave',
    //     spinColor: '#e23e38',
    //     share: false,
    // });

    // $('.venobox2').venobox({
    //     spinner: 'wave',
    //     spinColor: '#e23e38',
    //     share: false,
    //     arrowsColor: '#e23e38',
    //     infinigall: true,
    //     numeratio: true,
    //     numerationPosition: 'bottom',
    // });

//     $('.team_slider').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: false,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//     },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//     },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//     }
//   ]
//     });


    //    testimonial slide
//     $('.test_slide').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: true,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//     },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//     },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//     }
//   ]
//     });

    //    counterup start
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    //    sister slide
//     $('.sister_logo').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: false,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 }
//     },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//     },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//     }
//   ]
//     });


    //Testimonial  part start
    
    //Testimonial  part startend
    //footer counter part start
    
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
    
      const update = () => {
        const increment = target / 40;
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
    
      update();
    });
    //footer counter part end
    //menu fix Part start
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('fixed');
      }
       else {
        navbar.classList.remove('fixed');
      }
    });
    //menu fix Part end

});

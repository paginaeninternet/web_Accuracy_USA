window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista2'),{
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.arrow__anterior2',
            next: '.arrow__siguiente2'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});
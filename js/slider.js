$(document).ready(() => {
    let currentSlide = 0;
    let isBusy = false;

    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);
        const slidesCount = slides.length - 1;
        if (!isBusy){
            if (that.hasClass('right')) {
                currentSlide += 1;
                if (currentSlide > slidesCount) currentSlide = 0;
            } else {
                currentSlide -= 1;
                if (currentSlide < 0) currentSlide = slidesCount;
            }
            isBusy = true;
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(../img/blog/' + slides[currentSlide] + ')');
                $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
            });
        }
    });
});

const slides = [
    'blog00.jpg',
    'blog01.jpg',
    'blog02.jpg',
    'blog03.jpg',
    'blog04.jpg',
    'blog05.jpg',
    'blog06.jpg',
]
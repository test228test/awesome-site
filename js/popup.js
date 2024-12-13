$(document).ready(() => {
    $('.portfolio-item').on('click', (e) => {
        e.stopPropagation();
        createPopup(e.currentTarget);
    });

    $('.control-item').on('click', (e) => {
        e.stopPropagation();
        slideTestimonials(e.currentTarget);
    });
});

function createPopup(item) {
    console.log(item);
    const clicked = $(item);
    const src = clicked.data('src');
    const container = $('<div>', {'class': 'popup-container'});
    const img = $('<img>', {'class': 'popup', 'src': src});
    container.append(img);
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });

    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();
        }, 250);
    });
}

function slideTestimonials(item) {
    const clicked = $(item);
    if (clicked.hasClass('active')){
        return;
    }
    const index = $('.control-item').index(clicked);

    const width = $('.testimonials-card').outerWidth(true);
    const scroll = width * 2 * index;
    console.log(scroll);
    $('.testimonials-inner').css('transform', 'translateX(-' + scroll + 'px)');
    $('.control-item').removeClass('active');
    $('.control-item').eq(index).addClass('active');
}
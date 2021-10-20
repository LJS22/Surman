var carouselInterval;

$('.pageButton').on('click', function () {
	let page = $(this).attr('data-id');

	$('.pageButton.active').removeClass('active');
	$(this).addClass('active');

	$('.page.active').removeClass('active');
	$('.page[data-id=' + page + ']').addClass('active');

	if (page == 'home') {
		startCarousel();
		return;
	}

	clearInterval(carouselInterval);
});

function startCarousel() {
	carouselInterval = setInterval(function () {
		let currentImage = $('#carousel img.active');
		let nextImage = currentImage.next();

		if (nextImage.length == 0) {
			nextImage = $('#carousel img').first();
		}

		currentImage.fadeOut(function () {
			currentImage.removeClass('active');
		});
		nextImage.fadeIn(function () {
			nextImage.addClass('active');
		});
	}, 4500);
}

startCarousel();

$('#projectNav ul li').on('click', function () {
	let page = $(this).attr('data-id');

	$('#projectNav ul li.active').removeClass('active');
	$(this).addClass('active');

	$('.projectText.active').removeClass('active');
	$('.projectText[data-id=' + page + ']').addClass('active');
});

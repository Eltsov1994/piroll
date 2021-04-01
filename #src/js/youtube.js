function youtube(){
	$('.video__item').each(function(){
		var v = $(this).attr('data-id')
		$(this).html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	});
}

youtube();
(function($){
	$.fn.informanant = function(settings) {
		var config = {'holder': 'span'};
		if(settings) { $.extend(config, settings); }
		this.each(function(){
			$(this).find(config.holder).each(function(){
				var itemClass = $(this).attr('class');
				if(itemClass == 'email') {
					$(this).wrap('<a title="Email us" href="mailto:' + ($(this).text()) + '" />');
				} else if(itemClass == 'phone') {
					$(this).wrap('<a title="Call us" href="tel:' + ($(this).text()) + '" />');
				} else if(itemClass == 'twitter') {
					$(this).wrap('<a title="Our Twitter" href="http://www.twitter.com/' + ($(this).text()) + '" />');
				}
			});
		});
		return this;
	};
})(jQuery);

$(document).ready(function() {
	
	
	$('.cartItems').css('display','none');
	$('#cartView').hide();
	$('#contView').show();

	
	$('.account').hover(function(){
	
		$('.cartItems').slideDown(1000).addClass('cartBorder2');
		$(this).addClass('cartBorder1');
		return false;
	});
	

	
	$('.cartItems').click(function(){
	
		$(this).removeClass('cartBorder2').slideUp(1000);
		$('.account').removeClass('cartBorder1');
		
		return false;
	});
	

	$('.account').click(function() {
	
		$('#content').toggleClass(function() {
		
			if ($(this).is('.contView')) {
		
				$('#cartView').show();
				$('#contView').hide();
			} else {
				$('#cartView').hide();
				$('#contView').show();
			}
		
		});
	return false;
	 });
	
	
});


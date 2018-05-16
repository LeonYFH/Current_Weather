		
		
		
		
		
		
		
		$('#my-slider').change(function() {
		
		$('#show-me').css({
			display: 'block'
		});
		
		$('#first-me').css({
			display: 'none'
		});
		
		var myswitch = $(this);
		var show     = myswitch[0].selectedIndex == 1 ? true:false;
		var hide     = myswitch[0].selectedIndex == 1 ? false:true;
		$('#show-me').toggle(show);
		$('#first-me').toggle(hide);
		});
$(function(){

	var cf_api_url_base = 'https://codeforces.com/api/';
	var cf_api_url_user_info = cf_api_url_base + "user.info";

	var jqxhr = $.ajax( {
		url: cf_api_url_user_info,
		type: "get",
		data: { 
			handles: "sushmanth.dampur8780" 
		}
	} )
	.done(function(response) {
		alert( JSON.stringify(response) );
	})
	.fail(function(error) {
		alert( error );
	})
	// .always(function(xhr) {
	// 	alert( JSON.stringify(xhr) );
	// });
	
	// Perform other work here ...
	// Set another completion function for the request above
	// jqxhr.always(function() {
	// 	alert( "second complete" );
	// });

})
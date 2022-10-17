$(function(){

	var cf_api_url_base = 'https://codeforces.com/api/';
	var cf_api_url_user_info = cf_api_url_base + "user.info";
	var cf_api_url_user_rating = cf_api_url_base + "user.rating";
	var cf_api_url_user_status = cf_api_url_base + "user.status";
	var cf_api_url_contest_standings = cf_api_url_base + "contest.standings";

	var jqxhr = $.ajax( {
		url: cf_api_url_user_status,
		type: "get",
		data: { 
			handle: "sushmanth.dampur8780" 
		}
	} )
	.done(function(response) {
		alert( JSON.stringify(response) );
	})
	.fail(function(error) {
		alert( JSON.stringify(error) );
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
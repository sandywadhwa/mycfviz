$(async function(){

	var cf_api_url_base = 'https://codeforces.com/api/';
	var cf_api_url_user_info = cf_api_url_base + "user.info";
	var cf_api_url_user_rating = cf_api_url_base + "user.rating";
	var cf_api_url_user_status = cf_api_url_base + "user.status";
	var cf_api_url_contest_standings = cf_api_url_base + "contest.standings";
	var getAjaxResponse = async function(args) {
		if(!args.type)
			args.type = "get";
		let result;
		try {
			result = await $.ajax( {
				url: args.url,
				type: args.type,
				data: args.data
			} )
		} catch (error) {
			alert(JSON.stringify(error));
		}
		finally{
			return result;
		}
	}

	var getUserCFData = async function(userHandle){
		let userInfo = await getAjaxResponse({
			url: cf_api_url_user_info, 
			type: "get",
			data : { 
				handles: userHandle 
			}
		});
		let userRating = await getAjaxResponse({
			url: cf_api_url_user_rating, 
			type: "get",
			data : { 
				handle: userHandle
			}
		});
		let userStatus = await getAjaxResponse({
			url: cf_api_url_user_status, 
			type: "get",
			data : { 
				handle: userHandle 
			}
		});
		var result = {
			userInfo   : userInfo,
			userRating : userRating,
			userStatus : userStatus,

		};
		return result;
	}

	var userData = await getUserCFData("sushmanth.dampur8780");
	alert(JSON.stringify(userData));
})
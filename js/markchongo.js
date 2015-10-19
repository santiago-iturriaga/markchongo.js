function loadMainMarkdown(filename) {
	// Using the core $.ajax() method
	$.ajax({
		// The URL for the request
		url: filename,
	 
		// The data to send (will be converted to a query string)
		data: {},
	 
		// Whether this is a POST or GET request
		type: "GET",
	 
		// The type of data we expect back
		dataType : "html",
	 
		// Code to run if the request succeeds;
		// the response is passed to the function
		success: function( md ) {
			$( ".main-md" ).html(micromarkdown.parse(md));
		},
	 
		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		},
	 
		// Code to run regardless of success or failure
		complete: function( xhr, status ) {
			window.location.hash = "#" + filename;
		}
	});
}

$().ready(function() {
	var page = '';
	
	/*var page = window.location.hash;
	if (page.length > 1) {
		page = page.substring(1);
	} else {
		page = "main.md";
	}*/
	
	/*
	 * queryParameters -> handles the query string parameters
	 * queryString -> the query string without the fist '?' character
	 * re -> the regular expression
	 * m -> holds the string matching the regular expression
	 */
	var queryParameters = {}, queryString = location.search.substring(1),
		re = /([^&=]+)=([^&]*)/g, m;
	 
	// Creates a map with the query string parameters
	while (m = re.exec(queryString)) {
		queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	}
	
	if (queryParameters['p']) { 
		page = queryParameters['p'];
	} else {
		// Add new parameters or update existing ones
		queryParameters['p'] = 'main.md';
		page = 'main.md';
	}
	 
	/*
	 * Replace the query portion of the URL.
	 * jQuery.param() -> create a serialized representation of an array or
	 *     object, suitable for use in a URL query string or Ajax request.
	 */
	//location.search = $.param(queryParameters); // Causes page to reload
	//loc = $.param(queryParameters); // Causes page to reload
	
	loadMainMarkdown(page);
	
	// Using the core $.ajax() method
	$.ajax({
		// The URL for the request
		url: "sidebar.md",
	 
		// The data to send (will be converted to a query string)
		data: {},
	 
		// Whether this is a POST or GET request
		type: "GET",
	 
		// The type of data we expect back
		dataType : "html",
	 
		// Code to run if the request succeeds;
		// the response is passed to the function
		success: function( md ) {
			$( ".sidebar-md" ).html(micromarkdown.parse(md));
		},
	 
		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		},
	 
		// Code to run regardless of success or failure
		complete: function( xhr, status ) {
			$($( ".sidebar-md" ).children()[0]).addClass("nav nav-sidebar");
		}
	});
});

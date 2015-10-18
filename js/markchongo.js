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
		}
	});
}

$().ready(function() {
	loadMainMarkdown("main.md");
	
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

var CURRENT_PAGE = null;

var DEFAULT_EXT = '.md';
var BIBTEX_PREFIX = '';
var BIBTEX_EXT = '.bib';
var LANGUAGE = '';
var DEFAULT_PAGE = '';
var SIDEBAR_PAGE = '';

function getPageUrl(filename) {
  var filename_parts = filename.split('.');
  if (filename_parts.length == 1) {
    filename = filename + DEFAULT_EXT;
  }

  if (LANGUAGE != '') {
    return LANGUAGE + '/' + filename;
  } else {
    return filename + DEFAULT_EXT;
  }
}

function toHtml(markup) {
    var html = '';
    html = marked(markup);
    return html
}

function goToPage(filename) {
    loadMainMarkdown(filename);
}

function cleanCurrentPageActiveStyle() {
    $( ".sidebar-container a" ).removeClass("active");
}

function setCurrentPageActiveStyle() {
  var filename_parts = CURRENT_PAGE.split('#').pop().split('/').pop().split('.');
  var filename_ext = '.' + filename_parts.pop();
  var filename = filename_parts.pop();
  var href_link = null;

  if (filename_ext != DEFAULT_EXT) {
    href_link = filename + filename_ext;
  } else {
    href_link = filename;
  }
  links = $( ".sidebar-container a" );
  for (i=0; i<links.length; i++) {
      if (links[i].href.split('#').pop()==href_link) {
        $(links[i]).addClass("active");
      }
  }
}

function loadMainMarkdown(filename) {
    if (CURRENT_PAGE != filename) {
        CURRENT_PAGE = filename;
        cleanCurrentPageActiveStyle();

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
            success: function( markup ) {
                $( document ).scrollTop(0);

                var filename_ext = '.' + CURRENT_PAGE.split('.').pop();
                var filename = CURRENT_PAGE.substr(0,CURRENT_PAGE.length - filename_ext.length - 1);

                $( ".main-container" ).html('');
                $( "#pubTable" ).empty();
                $( "#bibtex" ).empty();
                $( "#bibtex-container" ).html('');

                if (filename_ext == BIBTEX_EXT) {
                    $( "#bibtex-container" ).show();
                    $( "#bibtex-container" ).append($("<table id='pubTable' class='display'></table>"));
                    $( "#bibtex-container" ).append($("<pre id='bibtex'></pre>"));
                    $( "#bibtex" ).html(markup);
                    bibtexify("#bibtex", "pubTable");
                } else {
                    $( "#bibtex-container" ).hide();
                    $( ".main-container" ).html(toHtml(markup));
                }
                $( "body" ).removeClass("error404");
                setCurrentPageActiveStyle();
            },

            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            error: function( xhr, status, errorThrown ) {
                $( "body" ).addClass("error404");
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
                console.dir( xhr );
            },

            // Code to run regardless of success or failure
            complete: function( xhr, status ) {
            }
        });
    }
}

function loadCurrentState() {
    var newPage = null;

    queryString = location.search.substring(1);
    if (queryString) {
      LANGUAGE = queryString;
      DEFAULT_PAGE = config.default_page[LANGUAGE];
      SIDEBAR_PAGE = config.sidebar_page[LANGUAGE];
    }

    var hash = window.location.hash;
    if (hash.length > 1) {
        newPage = getPageUrl(hash.substring(1));
    } else {
        newPage = getPageUrl(DEFAULT_PAGE);
    }

    if ((newPage) && (newPage != CURRENT_PAGE)) {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request
            url: getPageUrl(SIDEBAR_PAGE),

            // The data to send (will be converted to a query string)
            data: {},

            // Whether this is a POST or GET request
            type: "GET",

            // The type of data we expect back
            dataType : "html",

            // Code to run if the request succeeds;
            // the response is passed to the function
            success: function( markup ) {
                $( ".sidebar-container" ).html(toHtml(markup));
                $( ".topbar-container" ).html(toHtml(markup));
            },

            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            error: function( xhr, status, errorThrown ) {
                alert( "Sorry, there was a problem!" );
                console.log( "No sidebar.md found!" );
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
                console.dir( xhr );
            },

            // Code to run regardless of success or failure
            complete: function( xhr, status ) {
                $( ".sidebar-container a" ).addClass("list-group-item");
                $( ".topbar-container a" ).addClass("list-group-item");
                loadMainMarkdown(newPage);
            }
        });
    }
}

$(document).on({
    ajaxStart: function() {
        $("body").addClass("loading");
    },
    ajaxStop: function() {
        $("body").removeClass("loading");
    }
});

$(window).on('hashchange', function() {
  loadCurrentState();
});

$(document).ready(function() {
  for (i=0; i<config.lang.length; i++) {
    $(".language").append("<a href='?"+config.lang[i]+"'><img src='img/flags/"+config.lang[i]+".png' class='img-responsive' style='margin:auto;' alt='["+config.lang[i]+"]' /></a>");
  }

  LANGUAGE = config.lang[0];
  DEFAULT_PAGE = config.default_page[LANGUAGE];
  SIDEBAR_PAGE = config.sidebar_page[LANGUAGE];

  loadCurrentState();

  document.title = config.title[LANGUAGE];
  $('#title-page').html(config.title[LANGUAGE]);
  $('#sub-title-page').html(config.sub_title[LANGUAGE]);
});

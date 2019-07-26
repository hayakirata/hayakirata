
/*
 *		This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var albums_template;

// variables to store the current displayed album and photo
var current_album = gallery.albums[0];



// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);

}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
 source   = $("#album-template").html();

	
	// 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	//
	$("#albums-tab").dblclick(function () {

		// displays the albums template
		showTemplate(albums_template, gallery);

        
            $(".album-thumbnail").click(function(){
            var index = $(this).data("id");
     var b =gallery.albums[index];
      document.getElementById("pdf").src = b.src;
        document.getElementById("pdf").data = b.src;
 
    $("#myModal").modal("toggle");
});

	});
    
    
    
    
	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	
	// start the page by showing the albums view
	// we do this by virtually clicking on the 
	// albums tab
	$("#albums-tab").dblclick();

});
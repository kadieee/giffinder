// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE

  $("button").click(function(){
    console.log("button");
    
    var search=$("#search").;
    
    
   });
   // 1. click handler function
    //2. get the typed input from the search input box
    //3. call the functions below!
  //*/
  
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
    var firstPart="https://api.giphy.com/v1/stickers/search?q"+ searchTerm;
      var secondPart="&api_key=dc6zaTOxFJmzC";
      var newURL= firstPart+secondPart;
      console.log(newURL);
      return newURL;
}

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
       var image='<img src="' + srcURL + '"></img>';
       $("body").append(image);
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen var giphyURL = "https://api.giphy.com/v1/stickers/search?"+ searchTerm+"q=dog&api_key=dc6zaTOxFJmzC";
   var giphyURL = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
           var url = response.data[0].images.original.url;
           appendImageToBody(url);
      },
    }); 

  //  for ();
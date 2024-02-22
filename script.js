// Redirect to "additional_photos.html" after 11 seconds (11000 milliseconds)
setTimeout(function() {
    window.location.href = "additional_photos.html";
  }, 13000);
  
  // Check for the presence of the query parameter "fromAnimation" when the window is loaded
  window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    if (params.has('fromAnimation')) {
      window.location.href = "index.html"; // Redirect to "index.html" if the query parameter is present
    }
  };
  
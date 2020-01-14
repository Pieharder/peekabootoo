// front-end logic:

$(document).ready(function() {
  $(".clickable").click(function() {
    $("p").after("<img src='img/balloon.jpg' alt='A photo of a hot air balloon'>");
    $("img").click(function() {
      $("img").remove();
    });
  });
});
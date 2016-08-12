$(document).ready(function () {
  $(document).on("keyup keydown", function(key) {
    if (key.which === 39) { // right arrow key
      $("#canvas_mal").animate({left: "+=100px"}, 500);
    }
    else if (key.which === 37) { // left arrow key
      $("#canvas_mal").animate({left: "-=100px"}, 500);
    }
    else if (key.which === 32 || key.which === 38) { //spacebar or up arrow
      $("#canvas_mal").animate({top: "200px"});
      setTimeout(function() {
        $("#canvas_mal").animate({top: "300px"});
      }, 1500);
    }
    else if (key.which === 40) { // down arrow key
      $("#canvas_mal").animate({top: "450px"});
      setTimeout(function() {
        $("#canvas_mal").animate({height: "300px", top: "300px"});
      }, 1500);
    }
  }); // end of commands to move avatar

  setInterval(function () {
    var progress = $("#canvas_mal").offset().left;
    if (progress >= 1500) {
      alert('You finished the level!');
      $("#canvas_mal").hide();
    }
  }, 500);

  setTimeout(function() {
    $(".puck").stop().animate({left: "-=1200px"}, 1500);
  }, 1500); // puck's pattern

  setInterval(function () {
    setTimeout(function () {
      $(".bird").animate({top: "+=500px"}, 5000);
    }, 1000);
    setTimeout(function () {
      $(".bird").animate({top: "-=500px"}, 5000);
    }, 1000);
  }, 3000); // the bird's pattern

}); //end of jQuery body

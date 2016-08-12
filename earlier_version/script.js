$(document).ready(function () {
  $(document).keydown(function (key) {
    if (key.which === 37) { //left arrow key
      $("#avatar").stop().animate({left: "-=50px"});
    }
    else if (key.which === 39) { //right arrow key
      $("#avatar").stop().animate({left: "+=50px"});
    }
    else if (key.which === 32 || key.which === 38) { //spacebar or up arrow to jump
      $("#avatar").stop().animate({top: "-=80px"}, 800); //jump up
      setTimeout(function() {
        $("#avatar").stop().animate({top: "+=80px"}); //jump down
      }, 800);
    } //end of jump command
    else if (key.which === 40) { //down arrow key to duck
      $("#avatar").animate({height: "75px", top: "75px"});
      setTimeout(function() {
        $("#avatar").animate({height: "150px", top: "0px"});
      }, 600);
    }
  }); //end of directional control function for avatar

  setTimeout(function() {
    $(".enemy").stop().animate({right: "+=1500px"}, 6000);
  }, 1000); //directional control for enemy
  setInterval(function () {
    $(".enemy").toggleClass("en-new");
  }, 500); //the flashing of enemy

}); //end of jQuery body

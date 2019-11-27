jQuery(document).ready(function ($) {

    var BtnRight = $('.arr-right');
    var BtnLeft = $('.arr-left');
    var side = 1;
    var width = 0;
    var isRunning = false;

    function SlideRight(){
       $('.sl-first-slide').css({display:'none'});
       $('.sl-second-slide').css({display:'inherit'});
       if (window.matchMedia("(min-width: 1024px)").matches) {
         var hauteurTotaleElem = document.getElementById("sl-container").offsetHeight;
         console.log(hauteurTotaleElem)
         $('#sl-container').css({height:hauteurTotaleElem});
       } else {
         $('#sl-container').height($('#sl-container').height() + 80);
       }
        update();
    }

    function SlideLeft(){
      $('.sl-first-slide').css({display:'grid'});
      $('.sl-second-slide').css({display:'none'});
      if (window.matchMedia("(min-width: 1024px)").matches) {
        var hauteurTotaleElem = document.getElementById("sl-container").offsetHeight;
         console.log(hauteurTotaleElem)
        $('#sl-container').css({height:hauteurTotaleElem});
      } else {
          $('#sl-container').css({height:'auto'});
      }
      update();
    }




  var swipe = false;
  var container = document.querySelector("#sl-container");

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);


    var initialX = null;
    var initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          console.log("swiped left");
           SlideRight();
        } else {
          // swiped right
          console.log("swiped right");
          SlideLeft();

        }
      } else {
        return
      }

      initialX = null;
      initialY = null;

      e.preventDefault();
    };

  BtnRight.click(function rd() {
    SlideRight();
    console.log("right")
  }
);

  BtnLeft.click(function(){
    SlideLeft();
  });

  function update() {

    console.log(isRunning)
      width = 0;
    var identity = setInterval(scene, 140);
      if (isRunning == true){
          clearInterval(identity);
      }
            clearInterval(identity);
    function scene() {
      if (width >= 100 ) {
        isRunning = false;
        clearInterval(identity);
        if (side == 1){
           side = 2;
           SlideRight();
         } else if (side == 2) {
           side = 1;
           SlideLeft();
         }
      } else {
        isRunning = true;
          width++ ;
          $('.sl-progress').css({width:width + '%'});
      }
    }
  }
  update();

});

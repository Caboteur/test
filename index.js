jQuery(document).ready(function ($) {

    var BtnRight = $('.sl-arr-right');
    var BtnLeft = $('.sl-arr-left');
    var side = 1;
    var width = 0;
    var isRunning = false;

    function SlideRight(){
       $('.sl-first-slide').css({display:'none'});
       $('.sl-second-slide').css({display:'inherit'});
       update();
    }

    function SlideLeft(){
      $('.sl-first-slide').css({display:'grid'});
      $('.sl-second-slide').css({display:'none'});
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

  BtnRight.click(()=> {
    SlideRight();
  });

  BtnLeft.click(()=> {
    SlideLeft();
  });

  function update() {
    console.log(isRunning)
    width = 0;

    var identity = setInterval(scene, 80);
      if (isRunning == true){
          clearInterval(identity);
      }
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



  var hauteurTotaleElem = document.getElementById("sl-container").offsetHeight;
  $('#sl-container').css({height:hauteurTotaleElem});
});

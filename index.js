jQuery(document).ready(function ($) {

    var BtnRight = $('.arr-right');
    var BtnLeft = $('.arr-left');

    function SlideRight(){
      $( ".first-slide" ).replaceWith( '<div class="second-slide slide-appear"><div class="second-slide-wrapper"><div class="info"><h2>PHOTO REPORTER</h2><h1>PHOTO-JOURNALISTE</h1><hr></hr></br><p>Photographe corporate, je traduis efficacement et esthétiquement en images les messages et les idées des entreprises à travers des portraits de leurs collaborateurs et de leurs dirigeants. Jinterviens au sein de lentreprise ou lors dévénements pour des portraits déquipe comme pour des photos individuelles. Je pratique la <b>photographie en entreprise</b> depuis plus de 20 ans et je suis basé en région parisienne</p><a>DECOUVRIR MES PORTRAITS CORPORTATE</a></div><div class="background-img"></div></div></div>' );

    }

    function SlideLeft(){
      $( ".second-slide" ).replaceWith( '   <div class="first-slide slide-appear"><li><div class="column"><h2>PHOTOGRAPHE PROFESSIONNEL A PARIS</h2><h1>PHOTOGRAPHE CORPORATE</h1><p>Photographe corporate, je traduis efficacement et esthétiquement en images les messages et les idées des entreprises à travers des portraits de leurs collaborateurs et de leurs dirigeants. Jinterviens au sein de lentreprise ou lors dévénements pour des portraits déquipe comme pour des photos individuelles. Je pratique la <b>photographie en entreprise</b> depuis plus de 20 ans et je suis basé en région parisienne</p><a>DECOUVRIR MES PORTRAITS CORPORTATE</a></div></li><li><div class="column"><img class="profil-img" src="./sportrait.jpg"></img></div></li></div>')
    }




  var swipe = false;
  var container = document.querySelector("#container");

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
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

    var width = 0;
    var identity = setInterval(scene, 60);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++ ;
          $('.progress').css({width:width + '%'});
      }
    }
  }
  update();


  setInterval(function(){
    update();
  }, 6000);

});

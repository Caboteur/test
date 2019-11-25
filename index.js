jQuery(document).ready(function ($) {

    var BtnRight = $('.sl-arr-right');
    var BtnLeft = $('.sl-arr-left');

    function SlideRight(){
      $( ".sl-first-slide" ).replaceWith( '<div class="sl-second-slide sl-slide-appear"><div class="sl-second-slide-wrapper"><div class="sl-info"><h2>PHOTO REPORTER</h2><h1>PHOTO-JOURNALISTE</h1><hr class="sl-hr"></hr></br><p>Photographe corporate, je traduis efficacement et esthétiquement en images les messages et les idées des entreprises à travers des portraits de leurs collaborateurs et de leurs dirigeants. Jinterviens au sein de lentreprise ou lors dévénements pour des portraits déquipe comme pour des photos individuelles. Je pratique la <b>photographie en entreprise</b> depuis plus de 20 ans et je suis basé en région parisienne</p><a>DECOUVRIR MES PORTRAITS CORPORTATE</a></div><div class="sl-background-img alt="photo reporter"></div></div></div>' );

    }

    function SlideLeft(){
      $( ".sl-second-slide" ).replaceWith( '   <div class="sl-first-slide sl-slide-appear"><li><div class="sl-column"><h2>PHOTOGRAPHE PROFESSIONNEL A PARIS</h2><h1>PHOTOGRAPHE CORPORATE</h1><p>Photographe corporate, je traduis efficacement et esthétiquement en images les messages et les idées des entreprises à travers des portraits de leurs collaborateurs et de leurs dirigeants. Jinterviens au sein de lentreprise ou lors dévénements pour des portraits déquipe comme pour des photos individuelles. Je pratique la <b>photographie en entreprise</b> depuis plus de 20 ans et je suis basé en région parisienne</p><a>DECOUVRIR MES PORTRAITS CORPORTATE</a></div></li><li><div class="sl-column"><img class="sl-profil-img" src="./sportrait.jpg"></img></div></li></div>')
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

    var width = 0;
    var identity = setInterval(scene, 80);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++ ;
          $('.sl-progress').css({width:width + '%'});
      }
    }
  }
  update();


  setInterval(function(){
    update();
  }, 8000);
  setInterval(function(){
    SlideRight();
  }, 8000);
  setInterval(function(){
    SlideLeft();
  }, 16000);

  var hauteurTotaleElem = document.getElementById("sl-container").offsetHeight;
  console.log(hauteurTotaleElem);
  $('#sl-container').css({height:hauteurTotaleElem});
});

$(document).ready(function() {

  var square = $('.face').width();
  $('.face').css({'height':square+'px'});

  // var photoWidth = $('.camera').width();
  // $('.camera').css({'height':photoWidth + 'px'});

  $('.camera').hover(function() {
    $(this).addClass('flash')
    .delay(100)
    .queue(function() {
      var cameraBtn = $('.camera-btn-center').addClass('pressed');
      setTimeout(function () {
        cameraBtn.removeClass('pressed');
      }, 200);
      $(this).addClass('photo-captured');
      $('.focus').toggleClass('focus');
      hideCameraBtn();

      });

    });



  });

function hideCameraBtn(usePhoto) {
  $('.camera-btn, .camera-btn-center')
  .delay(1000)
  .fadeOut(200);
  setTimeout(function(){
    $('.use-photo').append('<a class="retake-link left">Retake</a>');
    $('.use-photo').append('<a class="use-photo-link right">Use Photo</a>');
  }, 2000);

  // usePhoto();
}

// function usePhoto() {
//   $('.use-photo').delay(1000).append('<a class="use-photo-link">Use Photo</a>');
//   console.log("usePhoto");
// }

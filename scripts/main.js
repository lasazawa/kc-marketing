$(document).ready(function() {

  var square = $('.face').width();
  $('.face').css({'height':square+'px'});

  // var photoWidth = $('.camera').width();
  // $('.camera').css({'height':photoWidth + 'px'});

  $('.camera').hover(function() {
    var cameraBtn = $('.camera-btn-center').addClass('pressed');
    setTimeout(function () {
      cameraBtn.removeClass('pressed');
    }, 200);
    photoCapture();

    });
});

function photoCapture() {
  $('.camera').addClass('flash')
  .delay(500)
  .queue(function(){
    $('.camera').addClass('photo-captured');
    $('.focus').toggleClass('focus');
    hideCameraBtn();
  });
}

function hideCameraBtn(usePhoto) {
  $('.camera-btn, .camera-btn-center')
  .delay(1000)
  .fadeOut(100);
  setTimeout(function(){
    $('.use-photo').append('<a class="retake-link left">Retake</a>');
    $('.use-photo').append('<a class="use-photo-link right">Use Photo</a>');
  }, 1200);
  showStudents();
}

function showStudents() {
  setTimeout(function(){
    $('.retake-link').fadeOut(1);
    $('.use-photo-link').fadeOut(1);
    $('.faces').addClass('show');
  }, 2000);
}



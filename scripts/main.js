$(document).ready(function() {

  var square = $('.face').width();
  $('.face').css({'height':square+'px'});

  // var photoWidth = $('.camera').width();
  // $('.camera').css({'height':photoWidth + 'px'});
  setTimeout(function(){
    $('.header').addClass('slideUp show');
  }, 1500);

  $('.phone').hover(function() {
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
    $('.use-photo').append('<a class="retake-link left slideUp">Retake</a>');
    $('.use-photo').append('<a class="use-photo-link right slideUp">Use Photo</a>');
  }, 1000);
  underLine();
}

function underLine() {
  setTimeout(function(){
    $('.use-photo-link').addClass('underline');
  }, 2000);
  showStudents();
}

function showStudents() {
  setTimeout(function(){
    $('.use-photo-link').addClass('underline');
    $('.faces').addClass('show slideUp');
    $('.retake-link').fadeOut(1);
    $('.use-photo-link').fadeOut(1);
  }, 2400);
  selectStudent1();
}

function selectStudent1() {
  setTimeout(function() {
    $('.face1').addClass('selected');
    $('.camera-btn-container').append('<a class="right send">Send</a>');
  }, 3600);
  selectStudent2();
}
function selectStudent2() {
  setTimeout(function() {
    $('.face2').addClass('selected');
  }, 4000);
  selectStudent3();
}
function selectStudent3() {
  setTimeout(function() {
    $('.face3').addClass('selected');
  }, 4400);
  sendPhoto();
}

function sendPhoto() {
  setTimeout(function() {
    $('.send').addClass('underline');
  }, 5000);
}





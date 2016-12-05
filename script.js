var index = 0;
$('.box').click(function() {
  if ( index++ % 2 === 0 ) {
    if ( $(this).children().hasClass('active')){
      index --;
    } else{
      $(this).children('.x').addClass('active');
    }
  } else {
    if ( $(this).children().hasClass('active')){
      index --;
    } else{
      $(this).children('.o').addClass('active');
    }
  }

  var xChild1 = $('.box:nth-child(1)').children('.x').hasClass('active'),
      oChild1 = $('.box:nth-child(1)').children('.o').hasClass('active'),
      xChild2 = $('.box:nth-child(2)').children('.x').hasClass('active'),
      oChild2 = $('.box:nth-child(2)').children('.o').hasClass('active'),
      xChild3 = $('.box:nth-child(3)').children('.x').hasClass('active'),
      oChild3 = $('.box:nth-child(3)').children('.o').hasClass('active'),
      xChild4 = $('.box:nth-child(4)').children('.x').hasClass('active'),
      oChild4 = $('.box:nth-child(4)').children('.o').hasClass('active'),
      xChild5 = $('.box:nth-child(5)').children('.x').hasClass('active'),
      oChild5 = $('.box:nth-child(5)').children('.o').hasClass('active'),
      xChild6 = $('.box:nth-child(6)').children('.x').hasClass('active'),
      oChild6 = $('.box:nth-child(6)').children('.o').hasClass('active'),
      xChild7 = $('.box:nth-child(7)').children('.x').hasClass('active'),
      oChild7 = $('.box:nth-child(7)').children('.o').hasClass('active'),
      xChild8 = $('.box:nth-child(8)').children('.x').hasClass('active'),
      oChild8 = $('.box:nth-child(8)').children('.o').hasClass('active'),
      xChild9 = $('.box:nth-child(9)').children('.x').hasClass('active'),
      oChild9 = $('.box:nth-child(9)').children('.o').hasClass('active');

  if(  xChild1 && xChild2 && xChild3 ){
    $('.top-horiz').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild2 && oChild3 ){
    $('.top-horiz').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild4 && xChild5 && xChild6 ){
    $('.mid-horiz').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild4 && oChild5 && oChild6 ){
    $('.mid-horiz').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild7 && xChild8 && xChild9 ){
    $('.bottom-horiz').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild7 && oChild8 && oChild9 ){
    $('.mid-horiz').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild1 && xChild4 && xChild7 ){
    $('.left-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild4 && oChild7 ){
    $('.left-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild2 && xChild5 && xChild8 ){
    $('.mid-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild2 && oChild5 && oChild8 ){
    $('.mid-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild3 && xChild6 && xChild9 ){
    $('.right-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild3 && oChild6 && oChild9 ){
    $('.right-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild1 && xChild5 && xChild9 ){
    $('.ltr-diag').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild5 && oChild9 ){
    $('.ltr-diag').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild3 && xChild5 && xChild7 ){
    $('.rtl-diag').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild3 && oChild5 && oChild7 ){
    $('.rtl-diag').addClass('active');
    $('.o-wins').addClass('active');
  }
});

$('.js-wins, .reset').on('click', function(){
  $('.js-wins').removeClass('active');
  $('.x').removeClass('active');
  $('.o').removeClass('active');
  $('.red-line').removeClass('active');
  index = 0;
});

/**
* Listener for name changes
*/
$('body').on('keyup', 'input.name', function(){
  if($(this).parent().attr('id') === 'player1'){
    if($(this).val() === ''){
      $('div.x-wins').html('X Wins! <span>Play Again?</span>');
    }else{
      $('div.x-wins').html($(this).val()+' Wins! <span>Play Again?</span>');
    }
  }else if ($(this).parent().attr('id') === 'player2') {
    if($(this).val() === ''){
      $('div.o-wins').html('O Wins! <span>Play Again?</span>');
    }else{
      $('div.o-wins').html($(this).val()+' Wins! <span>Play Again?</span>');
    }
  }
});

/**
* Listener for removeing images
*/
$('body').on('click', '.remove-img', function(){
  $(this).parent().children('.img_upload').css('background-image', '');
  if($(this).parent().parent().attr('id') === 'player1'){
    $('div.x-wins').html($(this).val()+' Wins! <span>Play Again?</span>');
    $('span.x').each(function(){
      $(this).css('background-image', '');
      $(this).text('X');
    });
  }else if ($(this).parent().parent().attr('id') === 'player2') {
    $('div.o-wins').html($(this).val()+' Wins! <span>Play Again?</span>');
    $('span.o').each(function(){
      $(this).css('background-image', '');
      $(this).text('O');
    });
  }
});

/**
* Listener for image uploads. Calls below function on change.
*/
$('body').on('change', '.img_upload', function(){
   readURL(this, $(this));
});

/**
 * Reads a filestream to an image target. Reisizes image before applying background preview
 * @param input
 * @param img_target
 */
function readURL(input, img_target) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var image = new Image();
            image.onload = function (imageEvent) {
                // Resize the image
                var canvas = document.createElement('canvas'),
                    max_size = 768,
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                $.event.trigger({
                    type: "imageResized",
                    url: dataUrl
                });
                img_target.css('background-image', 'url(' + dataUrl + ')');
                if(img_target.parent().parent().attr('id') === 'player1'){
                  $('span.x').each(function(){
                    $(this).css('background-image', 'url(' + dataUrl + ')');
                    $(this).text('');
                  });
                }else if (img_target.parent().parent().attr('id') === 'player2') {
                  $('span.o').each(function(){
                    $(this).css('background-image', 'url(' + dataUrl + ')');
                    $(this).text('');
                  });
                }
            };
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};

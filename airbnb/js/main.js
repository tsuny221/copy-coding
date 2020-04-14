$(function(){
   var duration = 300;

   var $aside = $('#aside');
   var $asideButton = $('button')
   .on('click', function(){
    $aside.toggleClass('open');
    if($aside.hasClass('open')){
        $aside.stop(true).animate({
            top: '0px'
        }, duration);
    }else{
        $aside.stop(true).animate({
            top: '-100vh'
        }, duration);
    };
   });
});
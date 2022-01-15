
$('document').ready(function(){
    $('.show__pop-up__button').on("click",function(){
        $('.pop-up').show();
        $('.show__pop-up').css('display','none');
        $('body').css('background','#acacac');
    });

    $('pop-up__headbox-exit').on('click',function(){
        $('.show__pop-up').css('display','block');
        $('body').css('background','#ffffff');
        $('.pop-up').css('display','none');
    });
});
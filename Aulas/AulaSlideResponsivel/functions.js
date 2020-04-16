$(function () {

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 6000;

    initSlider();
    cliqueSlider();

    function initSlider() {
        for(var i=0; i < indiceMaximo; i++){
            if(i==0)
                $('.bullets-nav').append('<span style="background-color: #595959;"></span>');            
            else
                $('.bullets-nav').append('<span></span>');            
        }

        $('.slider img').eq(0).fadeIn();
        setInterval(function () {
            alternarSlider()
        }, delay);

        //$('.slider img').each(function (i) {
        // if (i > 0) {
        //     $(this).hide();
        // }else{
        //     $(this).fadeIn();
        //     $(this).show();
        // }

        // if(i==0){
        //     $(this).fadeIn();
        // } 
        //});
    }

    function cliqueSlider() {
        $('span').click(function () {
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $('span').css('background-color', '#ccc');
            $(this).css('background-color', '#595959').css('transition', '2s')
        });
    }

    function alternarSlider() {

        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        $('span').eq(indiceAtual).css('background-color', '#ccc');

        indiceAtual += 1;

        if (indiceAtual == indiceMaximo)
            indiceAtual = 0;

        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);

        $('span').eq(indiceAtual).css('background-color', '#595959').css('transition', '2s')
    }
});
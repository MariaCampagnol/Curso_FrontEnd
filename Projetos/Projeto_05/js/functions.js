$(function () {
    //MENU MOBILE
    $('.mobile').click(function () {
        $(this).find('ul').slideToggle();
    });

    //BARRA DE PESQUISA DE VALORES DOS CARROS
    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 70000;
    var precoAtual = 0;

    $('.barra-pointer').mousedown(function () {
        isDrag = true;
    });

    $(document).mouseup(function () {
        isDrag = false;
        enableTextSelection();
    });

    $('.barra-preco').mousemove(function (e) {
        if (isDrag) {

            disableTextSelection();

            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;

            if (mouseX < 0)
                mouseX = 0;
            if (mouseX > elBase.width())
                mouseX = elBase.width();

            $('.barra-pointer').css('left', (mouseX - 13) + 'px')
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue + '%');

            precoAtual = (currentValue / 100) * precoMaximo;
            precoAtual = formatPeco(precoAtual);
            $('.preco-atual').html('R$ ' + precoAtual);
        }
    })

    function formatPeco(preco_atual) {
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');

        var novo_preco = formatTotal(preco_arr);

        return novo_preco;
    }

    function formatTotal(preco_arr) {
        if (preco_arr[0] < 1000)
            return preco_arr[0] + ',' + preco_arr[1];
        else if (preco_arr[0] < 10000)
            return preco_arr[0][0] + '.' + preco_arr[0].substr(1, preco_arr[0].length) + ',' + preco_arr[1];
        else
            return preco_arr[0][0] + preco_arr[0][1] + '.' + preco_arr[0].substr(2, preco_arr[0].length) + ',' + preco_arr[1];
    }

    function disableTextSelection() {
        $('body').css('-webkit-user-select', 'none');
        $('body').css('-moz-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('-o-user-select', 'none');
        $('body').css('user-select', 'none');
    }

    function enableTextSelection() {
        $('body').css('-webkit-user-select', 'auto');
        $('body').css('-moz-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('-o-user-select', 'auto');
        $('body').css('user-select', 'auto');
    }

    //SLIDER GALERIA DE DETALHES DO CARRO
    var imgShow = 3;
    var miniIndex = imgShow - 1;
    var maxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider() {
        var amount = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');

        elScroll.css('width', amount + '%');
        elSingle.css('width', 33.3 * (100 / amount) + '%')
    }

    function navigateSlider() {
        $('.arrow-right-nav').click(function () {
            if (curIndex < maxIndex) {
                curIndex++;

                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').stop().animate({ 'scrollLeft': elOff + 'px' });
            }
        });

        $('.arrow-left-nav').click(function () {
            if (curIndex > 0) {
                curIndex--;

                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').stop().animate({ 'scrollLeft': elOff + 'px' });
            }
        });
    }

    function clickSlider() {
        $('.mini-img-wraper').click(function () {
            $('.mini-img-wraper').css('background-color', 'transparent');
            $(this).css('background-color', 'gray');

            var img = $(this).children().css('background-image');
            $('.img-destaque').css('background-image', img);
        });

        $('.mini-img-wraper').eq(2).click();

        $('.mini-img-wraper').mouseover(function () {
            $(this).css('transform', 'scale(1.1, 1.1)').css('z-index', '999');
        });

        $('.mini-img-wraper').mouseout(function () {
            $(this).css('transform', 'scale(1, 1)');
        });
    }

    //IR PARA CONTATO COM BASE NO ATRIBUTO GOTO
    var directory = '/Cursos/FrontEnd/Projetos/Projeto_05/';

    $('[goto=contato]').click(function () {
        location.href = directory + 'index.html?contato';
        return false;
    });

    checkUrl();

    function checkUrl() {
        var url = location.href.split('/');
        var curPage = url[url.length - 1].split('?');

        if (curPage[1] != undefined && curPage[1] == 'contato') {
            $('nav a').css('color', 'black');
            $('footer nav a').css('color', 'white');

            $('[goto=contato]').css('color', '#eb2d2d');

            $('html,body').animate({ 'scrollTop': $('#contato').offset().top });
        }
    }

    //NAVEGANDO NOS DEPOIMENTOS DO INDEX
    var amountDepoimento = $('.depoimento-single p').length;
    var curIndexDepo = 0;

    navegarDepoimentos();
    iniciarDepoimentos();

    function navegarDepoimentos() {
        $('[name=next]').click(function () {
            curIndexDepo++;

            if (curIndexDepo >= amountDepoimento)
                curIndexDepo = 0;

            $('.depoimento-single p').hide();
            $('.depoimento-single p').eq(curIndexDepo).show();
        });

        $('[name=prev]').click(function () {
            curIndexDepo--;

            if (curIndexDepo < 0)
                curIndexDepo = amountDepoimento - 1;

            $('.depoimento-single p').hide();
            $('.depoimento-single p').eq(curIndexDepo).show();
        });
    }

    function iniciarDepoimentos() {
        $('.depoimento-single p').hide();
        $('.depoimento-single p').eq(0).show();
    }
});

// $('[goto=contato]').click(function(){
//     $('nav a').css('color','black');
//     $('footer nav a').css('color','white');

//     $(this).css('color','#eb2d2d');
//     $('footer nav a[goto=contato]').css('color','#eb2d2d');

//     $('html,body').animate({'scrollTop':$('#contato').offset().top});
//     return false;
// });
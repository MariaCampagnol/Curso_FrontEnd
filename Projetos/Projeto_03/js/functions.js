window.onload = function () {
    var map;
    var delay = 3000;
    var curIndex = 0;
    var amt;

    function initialize() {
        var mapProp = {
            zoom: 15,
            center: new google.maps.LatLng(-22.764004, -47.4258853),
            scrollWheel: false,
            MapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    function addMarker(lat, lng, icon, content, click) {
        var latLng = {
            'lat': lat,
            'lng': lng
        };

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffser: new google.maps.Size(0, 20)
        });

        if (click == true) {
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        } else /*if (click == true)*/ {
            infoWindow.open(map, marker);
        }
    }

    initialize();

    var conteudo = '<p style="color: black;font-size: 13px; padding: 10px 0; font-weight: bold;">Minha Casa</p>';

    addMarker(-22.764010, -47.4258860, '', conteudo, true);

    this.setTimeout(function () {
        map.panTo({
            lat: -22.75338787,
            lng: -47.41579056
        });

        map.setZoom(10);
    }, 2000);

    //MENU MOBILE 

    $('.mobile-menu').click(function () {
        $(this).find('ul').slideToggle();
    })

    //MENU SCROLL
    $('nav a').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    });

    ///////////SLIDER

    initSliDer()
    cliqueSlider();
    
    function initSliDer() {
        amt = $('.author').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.author').css('width', sizeBoxSingle + '%');
        $('.scroll-wraper').css('width', sizeContainer + '%');
        
        
        for (var i = 0; i < amt; i++) {
            if (i == 0)
            $('.slider-bullets').append('<span style="background-color:violet;"></span>');
            else
            $('.slider-bullets').append('<span></span>');
        }

        autoPlay();
    }

    function autoPlay() {
        setInterval(function () {
            curIndex++;
            if (curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.author').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color', 'indigo');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'violet');
        $('.scroll-equipe').stop().animate({ 'scrollLeft': offSetX + 'px' });
    }

    $(window).resize(function () {
        $('.scroll-equipe').stop().animate({ 'scrollLeft': 0 });
    });
}
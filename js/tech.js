
// $window.scroll(function() {
//     // let scrollAmt = $window.scrollTop();
//     if ($(this).scrollTop() > 300) {
//         $(".nth-3").css({left: '68px'});
//         $(".nth-2").css({left: '136px'});
//         $(".nth-1").css({left: '204px'});
//     }
//   });

let $window = $(window);
let oled= $window.innerHeight();
let oledLayer = $('.oled-layer-list');
let oledLayerTop = oledLayer.offset().top;
let scrollAmt = $window.scrollTop();
$window.scroll(function() {

    if(scrollAmt >= oledLayerTop - 500){
        $('.oled-layer-list').addClass('unfold');
    }else{
        $('.oled-layer-list').removeClass('unfold');
    }
});
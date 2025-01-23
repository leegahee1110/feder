$('.swiper-slide img').hide();
$('.swiper-slide img:nth-child(1)').show();
setInterval(function(){
    $('.swiper-slide img:nth-child(1)').fadeOut(1400).next(1400).fadeIn().end()
    .appendTo('.swiper-slide img')
},2000);
//.end()메서드는 재선택된 요소의 이전 요소를 선택하는 명령 입니다.//
// .appendTo()는 재선택된 요소를 append to의 소괄호 안에 넣습니다. //
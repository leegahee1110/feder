$('.swiper-slide img').hide();
$('.swiper-slide img:nth-child(1)').show();
setInterval(function(){
    $('.swiper-slide img:nth-child(1)').fadeOut(1400).next(1400).fadeIn().end()
    .appendTo('.swiper-slide img')
},2000);
//.end()메서드는 재선택된 요소의 이전 요소를 선택하는 명령 입니다.//
// .appendTo()는 재선택된 요소를 append to의 소괄호 안에 넣습니다. //



// Intersection Observer 설정
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 요소가 화면에 보이면 'visible' 클래스를 추가
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 애니메이션이 한번만 실행되도록
        }
    });
}, { threshold: 0.5 }); // 50% 이상 보이면 트리거

// .explore_stores 요소를 감지
const exploreStores = document.querySelector('.explore_stores');
observer.observe(exploreStores);
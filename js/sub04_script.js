$(function() {
    // 처음에 모든 .answer 요소를 숨깁니다.
    $('.answer').hide();

    // .plus_btn img 요소를 클릭했을 때
    $('.qna .plus_btn').click(function() {
        // 클릭된 <a> 요소가 속한 <li> 내의 .answer 요소를 찾습니다.
        var $answer = $(this).closest('li').find('.answer');
        
        // .answer 요소를 슬라이드로 보이거나 숨깁니다.
        $answer.stop().slideToggle();

        // 플러스 버튼 이미지 회전 효과 추가 (클릭 시)
        var $img = $(this).find('img');
        $img.stop().toggleClass('rotated');
    });
});

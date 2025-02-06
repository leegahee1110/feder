document.addEventListener('DOMContentLoaded', function() {
    // 모든 필터 링크를 선택
    var filterLinks = document.querySelectorAll('.product_nav a');

    // 필터링 동작
    filterLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작(페이지 이동) 방지

            var filterValue = this.getAttribute('data-filter'); // 클릭한 필터 값 가져오기
            var isoBoxes = document.querySelectorAll('.iso-box'); // 모든 갤러리 항목

            // 전체(모든 이미지)일 경우
            if (filterValue === "*") {
                isoBoxes.forEach(function(box) {
                    box.style.display = 'block'; // 모든 항목 보이기
                });
            } else {
                // 선택된 필터에 해당하는 항목만 보이게
                isoBoxes.forEach(function(box) {
                    if (box.classList.contains(filterValue.replace('.', ''))) {
                        box.style.display = 'block'; // 해당 클래스가 있으면 보이기
                    } else {
                        box.style.display = 'none'; // 다른 항목은 숨기기
                    }
                });
            }
        });
    });
});

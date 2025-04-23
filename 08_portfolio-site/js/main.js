// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {

  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정) (옵션)
})
.setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가 (옵션)
.addTo(controller); // 컨트롤러에 장면을 할당(필수!) - 라이브러리에서 지정한 문법으로 깊게 이해X
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
    direction: 'vertical',  // 수직 슬라이드
    direction: 'horizontal',  // 수평 슬라이드(기본값)
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
    autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  },
  
  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

// 모달창 띄우기
const modalBtn = document.querySelector('.project .btn-modal')
const modalEl = document.querySelector('#modal')
const closeBtn = document.querySelector('#modal .btn-close')

const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imageModalEl = document.querySelector('#imageModal')
const imageCloseBtn = document.querySelector('#imageModal .btn-close')
const imageEl = document.querySelector('#imageModal img')

// Quiz: 
// style 속성: JS로 CSS 스타일을 제어할 수 있는 속성
// 예시: 요소.style.CSS속성="";
modalBtn.addEventListener('click', function () {
  modalEl.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
});

imageModalBtnList.forEach(function (imageModalBtn, index) {
  imageModalBtn.addEventListener('click', function () {
    imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModalEl.style.display = 'flex';
  })
});
imageCloseBtn.addEventListener('click', function () {
  imageModalEl.style.display = 'none';
})

// 추가로 더 해볼 만한 것!
// 모달 바깥 영역 클릭 시 닫기
// ESC 키로 닫기
// fade 애니메이션 넣기

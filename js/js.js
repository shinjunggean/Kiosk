// 화면 움직임이 감지안될때 메인화면으로 이동
let timeout;
// 부재시 알람이 뜨는 스크립트 변수 선언
let TimerEl = document.getElementById("timer");
let AlarmEl = document.querySelector(".message");
let time = 20;

// 메인화면 이동 함수
function goToMain() {
    window.location.href = "../index.html"
}

// 타이머 초기화 함수
function resetTimer() {
    clearTimeout(timeout);  // 기존에 설정된 타이머 취소
    timeout = setTimeout(goToMain, 20000);  // 20초후에 goTomain을 시작해라
    time = 20
    AlarmEl.style.display = "none";
}

// 사용자 이벤트 감지 함수
function Detact() {
    window.onload = () => {
        ['click', 'mousemove', 'touchstart'].forEach(e => {
            document.addEventListener(e, resetTimer);
        })
    }
}
//페이지 첫 로드시 타이머시작
resetTimer();
Detact()

// 부재시 알람이 뜨는 스크립트
const ShowAlarm = setInterval(() => {
    TimerEl.textContent = time
    time--;
    if (time <= 10) {
        AlarmEl.style.display = "block";
        TimerEl.textContent = time;
    }
     if (time <= 0) {
        goToMain();
    }
}, 1000);
const timeInput = document.querySelector("#time-input")
const startBtn = document.querySelector("#start-timer")
const stopBtn = document.querySelector("#stop-timer")
const display = document.querySelector("#timer-display")

let timerId = null;
let remainingSeconds = 0;

function updateDisplay() {
    const min = Math.floor(remainingSeconds / 60);
    const sec = remainingSeconds % 60;

    display.textContent = 
        String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
    display.className = "fs-3" 
};

startBtn.addEventListener("click", ()=> {

    if (timerId !== null) {
        alert("이미 동작 중인 타이머가 있습니다!");
        return;
    };

    const minutes = Number(timeInput.value);
    if (!minutes || isNaN(minutes) || minutes <= 0) {
        alert(" 시간을 분 단위(숫자)로 입력하세요.");
        return;
    };

    remainingSeconds = minutes * 60;
    updateDisplay();


    timerId = setInterval(()=> {
        remainingSeconds--; 

        if (remainingSeconds <= 0) {
            resetTimer();
        } else {
            updateDisplay();
        };

        updateDisplay(); 
    }, 1000);

});

stopBtn.addEventListener("click", resetTimer);

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
}
var $ = document;
var leftEye = $.getElementById("lefteye");
var rightEye = $.getElementById("righteye");
var userInput = $.getElementById("userInput");
var passInput = $.getElementById("passInput");

var leftEyeTop = 75;
var leftEyeLeft = 110;
var leftEyePaddingLeft = 0;
var leftEyePaddingTop = 0;

var rightEyeTop = 75;
var rightEyeLeft = 174;
var rightEyePaddingLeft = 0;
var rightEyePaddingTop = 0;

userInput.addEventListener("focus", userInputFocus);
userInput.addEventListener("blur", userInputBlur);
userInput.addEventListener("keyup", userKeyUp);

passInput.addEventListener('focus', passInputFocus)
passInput.addEventListener('blur', passInputBlur)

function userInputFocus() {
  var leftEyePosition = setInterval(function () {
    if (leftEyePaddingTop == 10) {
      clearInterval(leftEyePosition);
    }
    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";
    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";
    leftEyePaddingTop++;
    leftEyeLeft--;
    rightEyePaddingTop++;
    rightEyeLeft--;
  }, 20);
}

function userInputBlur() {
  var eyesPosition = setInterval(function () {
    if (leftEyePaddingTop == 0) {
      clearInterval(eyesPosition);
    }
    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";
    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";
    leftEyePaddingTop--;
    leftEyeLeft++;
    rightEyePaddingTop--;
    rightEyeLeft++;
  }, 20);
}

function userKeyUp(e) {
  if (leftEyePaddingLeft > 20 || rightEyePaddingLeft > 20) {
    return false;
  }
  // console.log(typeof e.keyCode);
  if (e.keyCode === 8) {
    leftEyePaddingLeft--;
    leftEye.style.paddingLeft = leftEyePaddingLeft + "px";
    rightEyePaddingLeft--;
    rightEye.style.paddingLeft = rightEyePaddingLeft + "px";
  } else {
    leftEye.style.paddingLeft = leftEyePaddingLeft + "px";
    leftEyePaddingLeft++;
    rightEye.style.paddingLeft = rightEyePaddingLeft + "px";
    rightEyePaddingLeft++;
  }
}


function passInputFocus() {
  var eyePosition = setInterval(function() {
    if(leftEyeTop == 60) {
      clearInterval(eyePosition)
    }
    leftEye.style.top = leftEyeTop + "px"
    leftEye.style.left = leftEyeLeft + "px"

    rightEye.style.top = rightEyeTop + "px"
    rightEye.style.left = rightEyeLeft + "px"

    leftEyeTop--
    leftEyeLeft++
    rightEyeTop--
    rightEyeLeft--

  }, 20)
}

function passInputBlur() {
  var eyePosition = setInterval(function() {
    if(leftEyeTop == 75) {
      clearInterval(eyePosition)
    }
    leftEye.style.top = leftEyeTop + "px"
    leftEye.style.left = leftEyeLeft + "px"

    rightEye.style.top = rightEyeTop + "px"
    rightEye.style.left = rightEyeLeft + "px"

    leftEyeTop++
    leftEyeLeft--
    rightEyeTop++
    rightEyeLeft++
  }, 20)
}
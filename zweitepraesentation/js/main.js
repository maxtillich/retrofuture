document.addEventListener("DOMContentLoaded", function() {
  var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: false
  });

  window.addEventListener("scroll", toggleAngledOverlay);

  loadWebcam();
});

toggleAngledOverlay = function() {
  var timer, el = $('.overlay-shutters'),
  flag = false;

  $(window).scroll(function() {
    if (!flag) {
      flag = true;
      el.addClass('scrolling');
    }
    clearTimeout(timer);

    timer = setTimeout(function() {
      el.removeClass('scrolling');
      flag = false;
    }, 100);
  });

  var timer2, el2 = $('.venetians span'),
  flag2 = false;

  $(window).scroll(function() {
    if (!flag2) {
      flag2 = true;
      el2.addClass('scrolling');
    }
    clearTimeout(timer2);

    timer2 = setTimeout(function() {
      el2.removeClass('scrolling');
      flag2 = false;
    }, 100);
  });
}

loadWebcam = function() {
  var video = document.querySelector("#webcam");
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }

  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
    alert('Webcam access needs secure connection (SSL)')
  }
}

// document.querySelector(".dialogue").addEventListener("click", yesYouCan)
// document.querySelector(".dialogue").addEventListener("mousemove", tiltQuestion)
//
// setTimeout(function() {
//   const circleType = new CircleType(document.getElementById('text-rocknroll'));
//   circleType.radius(150);
// }, 300);

// yesYouCan = function() {
//   e = window.event
//   posX = e.clientX + Math.floor((Math.random() * 50) + 1)
//   posY = e.clientY - Math.floor((Math.random() * 50) - 1)
//   size = Math.floor((Math.random() * 9) + 1) * 0.3 + 'em'
//
//   printYesYouCan(posX, posY, size)
// }
//
// printYesYouCan = function(horizontal, vertical, size) {
//   wordsCount += 1
//
//   if(wordsCount === 6) {
//     replaceQuestion()
//   } else if(wordsCount > 6) {
//     replaceQuestionBack()
//     showLyrics()
//   }
//
//   var wordsGo = document.createElement('span');
//   wordsGo.classList.add('dialogue-words');
//   wordsGo.style.left = horizontal + 'px';
//   wordsGo.style.top = vertical + 'px';
//   wordsGo.style.fontSize = size;
//   wordsGo.innerHTML = 'Go on then!';
//
//   var wordsYes = document.createElement('span');
//   wordsYes.classList.add('dialogue-words');
//   wordsYes.style.left = horizontal + 'px';
//   wordsYes.style.top = vertical + 'px';
//   wordsYes.style.fontSize = size;
//   wordsYes.innerHTML = 'Yes you can!';
//
//   if(wordsCount === 7) {
//     var dialogueWrapper = document.querySelectorAll('.dialogue'), i;
//
//     for (i = 0; i < dialogueWrapper.length; ++i) {
//       dialogueWrapper[i].appendChild(wordsGo)
//     }
//     console.log(size)
//   } else {
//     var dialogueWrapper = document.querySelectorAll('.dialogue'), i;
//
//     for (i = 0; i < dialogueWrapper.length; ++i) {
//       dialogueWrapper[i].appendChild(wordsYes)
//     }
//     console.log(size)
//   }
// }
//
// tiltQuestion = function() {
//   e = window.event
//   posX = e.clientX
//   posY = e.clientY
//
//   middleX = document.querySelector(".dialogue").clientWidth / 2
//   middleY = document.querySelector(".dialogue").clientHeight / 2
//
//   if(posX < middleX) {
//     document.querySelector(".dialogue").classList.remove("maus-rechts")
//     document.querySelector(".dialogue").classList.add("maus-links")
//   } else {
//     document.querySelector(".dialogue").classList.remove("maus-links")
//     document.querySelector(".dialogue").classList.add("maus-rechts")
//   }
//
//   if(posY < middleY) {
//     document.querySelector(".dialogue").classList.remove("maus-unten")
//     document.querySelector(".dialogue").classList.add("maus-oben")
//   } else {
//     document.querySelector(".dialogue").classList.remove("maus-oben")
//     document.querySelector(".dialogue").classList.add("maus-unten")
//   }
// }
//
// replaceQuestion = function() {
//   var dialogueQuestions = document.querySelectorAll('.dialogue-question'), i;
//
//   for (i = 0; i < dialogueQuestions.length; ++i) {
//     dialogueQuestions[i].classList.add("dialogue-question-gone")
//     dialogueQuestions[i].innerHTML = 'Well, I’m gone!'
//   }
// }
//
// replaceQuestionBack = function() {
//   var dialogueQuestions = document.querySelectorAll('.dialogue-question'), i;
//
//   for (i = 0; i < dialogueQuestions.length; ++i) {
//     dialogueQuestions[i].classList.remove("dialogue-question-gone")
//     dialogueQuestions[i].innerHTML = 'Can I kick it?'
//   }
// }
//
// showLyrics = function() {
//   document.querySelector(".lyrics").classList.add("lyrics-visible")
//
//   var dialogueQuestions = document.querySelectorAll('.dialogue-words'), i;
//
//   for (i = 0; i < dialogueQuestions.length; ++i) {
//     dialogueQuestions[i].classList.add("dialogue-words-hidden")
//   }
// }

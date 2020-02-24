<script>
  var storage = localStorage.getItem('storage')
  storage = storage ? JSON.parse(storage) : {}
  //if user hasn't seen the pop up, add event listener

  if(storage.exitPopUp == false) {
    document.addEventListener("mouseout", showExitPopUp);
  }

  function showExitPopUp(event) {
  // If the mouse is near the top of the window, show the popup
  // Also, do NOT trigger when hovering or clicking on selects
  if ( event.clientY < 50 && event.relatedTarget == null && event.target.nodeName.toLowerCase() !== 'select') {
    document.removeEventListener("mouseout", showExitPopUp);
    var exitPop = document.getElementById("exit-popup")
    var popContent = document.getElementById('popup-content')
    var exitPopBtn = document.getElementById('close-exit-popup')
    exitPop.classList.add('active')
    popContent.classList.add('active')
    gsap.to(exitPop, {
      opacity: 1,
      duration: .25,
      ease: Power2.easeIn
    })
    var existingStorage = localStorage.getItem('storage')
    existingStorage = existingStorage ? JSON.parse(existingStorage) : {};
    existingStorage['exitPopUp'] = true;
    localStorage.setItem('storage', JSON.stringify(existingStorage));
    exitPopBtn.addEventListener("click", closeExitPopUp)
    exitPop.addEventListener("click", closeExitPopUp)
  }
}

function closeExitPopUp() {
    var exitPop = document.getElementById("exit-popup")
    var popContent = document.getElementById('popup-content')
    gsap.to(exitPop, {
    opacity: 0,
    duration: .25,
    ease: Power2.easeIn,
        onComplete: function() {
          exitPop.classList.remove('active')
          popContent.classList.remove('active')
        }
  })
}

</script>
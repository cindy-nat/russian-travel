const upButton = document.querySelector('.arrow-container');

window.onscroll = function() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 200) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}

const smoothJumpUp = () => {
  if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
    window.scrollBy(0,-50);
    setTimeout(smoothJumpUp, 10);
  }
}

upButton.addEventListener('click', smoothJumpUp);


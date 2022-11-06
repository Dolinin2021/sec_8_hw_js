function isVisible(element) {
  const {top, bottom} = element.getBoundingClientRect();
  if (bottom < 0) {
    return false;
  }
  if (top > window.innerHeight) {
    return false;
  }
  return true;
}

function showVisible() {
  const reveal = document.querySelectorAll('.reveal');
  for (let item of reveal) {
    if (isVisible(item)) {
      item.classList.add('reveal_active');
    }
  }
}

showVisible();
window.onscroll = showVisible;

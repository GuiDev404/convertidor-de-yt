import { btnTop } from '../config/htmlElements';

function isScrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

function scrollToTop() { 
  if(!btnTop) return false;
  
  if(!isScrollbarVisible(document.documentElement)){
    btnTop.classList.add('d-none');
  } else {
    btnTop.addEventListener('click', ()=> {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}

function scrollToBottom() {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth"
  })
}

export {
  scrollToTop,
  scrollToBottom
};
import { removeClass, insertClass } from "./handleClass";
const TIME_IN_MS = 4000;

function showErrorMsg(element, message = 'Lo sentimos, algo salio mal 😔') {
  element.innerText = message; 
  removeClass(element, 'invisible');

  setTimeout(()=> {
    element.innerText = '';
    insertClass(element, 'invisible');
  } , TIME_IN_MS);
}

export default showErrorMsg
import { BASE_URL } from "./config/const";
import { loader, resultado, msgErr, inputUrl, imgAdd } from './config/htmlElements'
import { removeClass, insertClass, randomNumberBetween } from './utils'
import showVideoInfo from './showVideoInfo'

const TIME_IN_SECONDS = 4000;

async function getVideoInfo (){
  const INPUT_URL = inputUrl.value;

  if(!INPUT_URL){
    removeClass(msgErr, 'invisible');
    msgErr.innerText = 'La URL es requirida 😔'; 
    return false;
  }

  msgErr.innerText = '';
  insertClass(msgErr, 'invisible');

  try {
    const res = await fetch(`${BASE_URL}/info?url=${INPUT_URL}`);
    const data = await res.json();

    if(!res.ok){
      msgErr.innerText = data.msg || 'La URL ingresada no es valida 😬'; 
      removeClass(msgErr, 'invisible');

      setTimeout(()=> {
        msgErr.innerText = '';
        insertClass(msgErr, 'invisible');
      } , TIME_IN_SECONDS);
      return false;
    }
    insertClass(resultado, 'd-none');

    insertClass(imgAdd, 'd-none');
    removeClass(loader, 'd-none');

    setTimeout(()=> {
      insertClass(loader, 'd-none');
      showVideoInfo({...data, url: INPUT_URL});
    }, randomNumberBetween(3000, 5000))
     
  } catch (error) {
    msgErr.innerText = 'Ups algo salio mal 😞'; 
    removeClass(msgErr, 'invisible');
  }

}

export default getVideoInfo;
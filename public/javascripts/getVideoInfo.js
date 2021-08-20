import { BASE_URL } from "./config/const";
import { loader, resultado, msgErr, inputUrl, imgAdd } from './config/htmlElements'
import { removeClass, insertClass, randomNumberBetween, showErrorMsg } from './utils'
import showVideoInfo from './showVideoInfo'

async function getVideoInfo (){
  const INPUT_URL = inputUrl.value;

  if(!INPUT_URL){
    showErrorMsg(msgErr, 'La URL es requerida 😔');
    return false;
  }

  msgErr.innerText = '';
  insertClass(msgErr, 'invisible');

  try {
    const res = await fetch(`${BASE_URL}/info?url=${INPUT_URL}`);
    const data = await res.json();

    if(!res.ok){
      showErrorMsg(msgErr, data.msg || 'La URL ingresada no es valida 😬');
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
    showErrorMsg(msgErr, 'Ups algo salio mal 😞');
    return false;
  }

}

export default getVideoInfo;
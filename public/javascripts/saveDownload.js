import { KEY_LOCAL_STORAGE } from './config/const' 
import { getStorage, setStorage } from './utils' 

function saveDownload(payload) {
  if(!getStorage(KEY_LOCAL_STORAGE)){
    setStorage(KEY_LOCAL_STORAGE, [payload]);
  } else {
    const storaged = getStorage(KEY_LOCAL_STORAGE);
    const alreadyExist = storaged.some(video=> video.url === payload.url);
    
    if(!alreadyExist) { 
      const data =  [...storaged, payload];
      const dataFiltered = data.length > 10 ? data.filter((_, idx)=> idx > 0) : data;
      setStorage(KEY_LOCAL_STORAGE, dataFiltered);
    }
  }

}

export default saveDownload;
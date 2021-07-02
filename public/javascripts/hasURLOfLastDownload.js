import { SEARCH_PARAMS, KEY_PARAM_LAST_URL } from './config/const';
import { inputUrl } from './config/htmlElements';
import getVideoInfo from './getVideoInfo';

function hasURLOfLastDownload() {
  if(SEARCH_PARAMS){
    const URL_PARSED = new URLSearchParams(SEARCH_PARAMS);
    inputUrl.value =  URL_PARSED.get(KEY_PARAM_LAST_URL);
  
    getVideoInfo();
  }
}

export default hasURLOfLastDownload;
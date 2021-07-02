import { btnComenzar }  from './javascripts/config/htmlElements'
import getVideoInfo  from './javascripts/getVideoInfo'
import hasURLOfLastDownload from './javascripts/hasURLOfLastDownload'
import showLastDownloads from './javascripts/showLastDownloads';
import { activePage, scrollToTop } from './javascripts/utils';

function init() {
  hasURLOfLastDownload();
  showLastDownloads();
  activePage();
  scrollToTop();
  btnComenzar && btnComenzar.addEventListener('click', getVideoInfo);
}

window.addEventListener('DOMContentLoaded', init);
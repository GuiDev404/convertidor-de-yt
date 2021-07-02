import { lastDownlaodContainer, headerEmpty, headerFill } from "./config/htmlElements";
import { KEY_LOCAL_STORAGE } from './config/const' 
import { getStorage, insertClass, removeClass } from './utils' 

const VIDEOS_ALMACENADOS = getStorage(KEY_LOCAL_STORAGE);

function showLastDownloads() {
  if(!lastDownlaodContainer) return false;

  if(!VIDEOS_ALMACENADOS || !VIDEOS_ALMACENADOS.length){
    removeClass(headerEmpty, 'd-none')
    insertClass(lastDownlaodContainer, 'd-none')
  } else {
    removeClass(headerFill, 'd-none')
    lastDownlaodContainer.innerHTML = '';

    VIDEOS_ALMACENADOS.reverse().forEach(item => {
      lastDownlaodContainer.innerHTML += `
        <div class="card mb-3 rounded-0 shadow-none" id='card_download'>
          <a class='text-decoration-none' href='/?last_url=${item.url}'>
            <div class="row">
            <div class="col-sm-12 col-md-3 container-card-img">
              <img src="${item.img}" class='small-card__img' alt="${item.title} yt converter">
            </div>
            <div class="col-sm-12 col-md-9">
              <div class="card-body pb-md-0">
                <h5 class="text-start ellipsis card-title text-dark"> ${item.title} • <small> ${item.author} </small></h5>
                <p class="card-text text-start ellipsis" id="url">${item.url}</p>
              </div>
            </div>
          </div>  
          </a>
        </div>
      `;
    });
  }
}

export default showLastDownloads;
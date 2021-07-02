import { resultado } from './config/htmlElements'
import saveInfoAndDownload from './saveInfoAndDownload';
import { scrollToBottom, removeClass } from "./utils";

function showVideoInfo(data) {
  const normalizeData = {
    title: data.title,
    img: data.thumbnails[3].url || '/dafault/img',  
    author: data.ownerChannelName,
    duration: data.duration,
    url: data.url
  }
  
  const cardVideoInfo =  `
    <div class="mb-5 bg-gray p-5">
      <div class="card mb-3 rounded-0 shadow-none">
        <div class="row g-0">
          <div class="col-md-4 container-card-img">
            <img src="${normalizeData.img}" class='large-card__img' alt="${normalizeData.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title ellipsis text-dark">${normalizeData.title}</h5>
              <p class="card-text">${normalizeData.author}</p>
              <p class="card-text">
                <small class="text-muted">${new Date(normalizeData.duration * 1000).toISOString().substr(11, 8)}</small>
              </p>
              <div class="dropdown mt-3">
                <button class="btn bg-gray dropdown-toggle rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Formatos
                </button>
                <ul class="dropdown-menu rounded-0" id="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  ${data.formatosDisponibles.map(video=> {
                    return `<li>
                      <button class='dropdown-item' data-itag="${video[0]}"> ${video[1]} </button> 
                    </li>`
                  }).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
  </div>`;

  resultado.innerHTML = cardVideoInfo;
  removeClass(resultado, 'd-none');
  
  scrollToBottom();
  saveInfoAndDownload(normalizeData);
}

export default showVideoInfo;
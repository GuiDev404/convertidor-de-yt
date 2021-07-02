import { BASE_URL } from "./config/const";

const downloadVideo = async function (e, normalizeData) {
  const payload = {...normalizeData, itag: e.target.dataset['itag']};

  const DOWNLOAD_URL = `${BASE_URL}/download?url=${payload.url}&itag=${payload.itag}&title=${payload.title}`; 
  // window.open(DOWNLOAD_URL);
  window.location.href = DOWNLOAD_URL; 
}

export default downloadVideo;
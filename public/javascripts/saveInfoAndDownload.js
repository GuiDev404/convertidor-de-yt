import downloadVideo from './downloadVideo';
import saveDownload from './saveDownload';

function saveInfoAndDownload (normalizeData) {
  import('./config/htmlElements')
  .then(elements=> {
    return elements.dropdownList();
  }).then(dropdownList => {
    dropdownList.forEach(item=> {
      item.addEventListener('click', e=> {
        downloadVideo(e, normalizeData) 
        saveDownload(normalizeData);
      })
    });
  })
  //.catch(console.log)
}

export default saveInfoAndDownload;
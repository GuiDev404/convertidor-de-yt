module.exports  = {
  /**
   * 
   * @param {Array} info 
   * @returns un arreglo de las extensiones disponibles, en formatos legibles.
   */
  formatearExtDisponibles(info) {
    return info.map(video=> [ video.itag, `${video.qualityLabel} (.${video.container})`, video.quality ])
  },
  /**
   * @param {String} title 
   * @returns un string que representa un nombre de archivo unico.
   */
  getFilename (title) {
    const TIMESTAMP = Date.now();
    const EXTENSION_NAME = '.mp4';
    const NAME = title.toLowerCase().split(' ').join('_');
  
    return `${TIMESTAMP}_${NAME}${EXTENSION_NAME}`;
  }  
}

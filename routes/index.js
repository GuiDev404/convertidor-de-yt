const express = require('express');
const ytdl = require('ytdl-core');
const router = express.Router();
const { formatearExtDisponibles, getFilename } = require('../utils');

router.get('/', function(req, res, next) {
  // res.locals.urlValidation = ytdl.validateURL;

  res.render('index', { currentPageTitle: 'YT Conversor | Home' });
});

router.get('/info', async function(req, res) {
  const { url } = req.query;

  const isValidURL = ytdl.validateURL(url);
  if(!isValidURL) return res.status(400).json({ msg: 'La URL ingresada no es valida 😏' })

  try {
    const info = await ytdl.getInfo(url);
    const { title, lengthSeconds: duration, description, ownerChannelName, thumbnails } = info.videoDetails;

    const formatosDeVideo = ytdl.filterFormats(info.formats, 'audioandvideo')
    const formatosDisponibles = formatearExtDisponibles(formatosDeVideo);

    res.status(200).json({
      title, duration, description, ownerChannelName, thumbnails,
      formatosDisponibles
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/download', (req, res)=> {
  const { url, title, itag } = req.query;
  
  const filename = getFilename(title);
  res.attachment(filename);

  ytdl(url, {
    filter: (format) => format.itag == parseInt(itag, 10)
  })
  .pipe(res)
  .on('error', (err)=> console.log(err));
})

router.get('/last-download', (req, res)=> {
  res.render('lastDownload', { 
    currentPageTitle: 'YT Conversor | Ultimas descargas',
    title: 'Ultimas descargas',
    subtitle: "Seleccione un video para volver a descargarlo."
  })
})

module.exports = router;

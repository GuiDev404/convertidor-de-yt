const express = require('express');
const { home, videoInfo, downloadVideo, lastDownloads } = require('../controllers');
const router = express.Router();

router.get('/', home);
router.get('/info', videoInfo);
router.get('/download', downloadVideo);
router.get('/last-download', lastDownloads);

module.exports = router;

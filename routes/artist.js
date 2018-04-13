'use strict'

var express = require('express');
var ArtistController = require('../controllers/artist');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var m_upload = multipart({ uploadDir: './uploads/artists' });

api.get('/artist/:id?', md_auth.ensureAuth, ArtistController.getArtist);
api.post('/artist', md_auth.ensureAuth, ArtistController.saveArtist);
api.get('/artists/:page?', md_auth.ensureAuth, ArtistController.getArtists);
api.put('/artists/:id', md_auth.ensureAuth, ArtistController.updateArtist);
api.delete('/artists/:id', md_auth.ensureAuth, ArtistController.deleteArtist);
api.post('/upload-image-artist/:id', [md_auth.ensureAuth, m_upload], ArtistController.uploadImage);
api.get('/get-image-artist/:imageFile', ArtistController.getImageFile);

module.exports = api;
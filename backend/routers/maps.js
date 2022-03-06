const express = require('express');
const router = express.Router();
const Maps = require('./../maps.js');

router.post('/sketchy', sketchyMap);
router.post('/foodbank', foodbankMap);
router.post('/healthcare', healthcareMap);

function sketchyMap(req, res, next){
    const ret = Maps.mapSketchy(req.body.lat, req.body.lng);
    res.send(ret);
}

function foodbankMap(req, res, next){
    const ret = Maps.mapFoodbank(req.body.lat, req.body.lng);
    res.send(ret);
}

function healthcareMap(req, res, next){
    const ret = Maps.mapHealth(req.body.lat, req.body.lng);
    res.send(ret);
}

module.exports = router;
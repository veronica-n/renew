const express = require('express');
const router = express.Router();
const Firebase = require('./../firebase.js');

router.post('/user', createUser);
router.get('/:userID', getUserByID);
router.post('/post', createPost);
router.post('/comment', createComment);

function createUser(req, res, next){
    const ret = Firebase.createUser(req.body.authID, req.body.email, req.body.name, req.body.password, 
        req.body.origin, req.body.residence);
    res.send(ret); // send userID and groupID
}

function createPost(req, res, next){
    const ret = Firebase.createPost(req.body.userID, req.body.groupID, req.body.content);
    res.send(ret); // send postID
}

function createComment(req, res, next){
    const ret = Firebase.createComment(req.body.userID, req.body.postID, req.body.content);
    res.send(ret); // send comment
}

function getUserByID(req, res, next){
    const ret  = Firebase.getUserByID(req.params.userID);
    res.send(ret); // send all  the user and  group info
}

module.exports = router;
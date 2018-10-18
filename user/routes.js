const router = require('express').Router()
const sha1 = require('sha1')
const model = require('./user-model')
const controller = require('./user-controller')

router.get('/register', function(req,res) {
    controller.register_page(req,res);
});

router.post('/register', function(req,res) {
    controller.register(req,res)});

router.get('/login', function(req,res) {
    controller.login_page(req,res);
})

router.post('/login', function(req,res) {
    controller.sign_in(req,res);
})

router.get('/home', function(req,res,next) {
    controller.loginRequied(req,res,next);}, function(req,res) {
    controller.home_page(req,res);
})

router.get('/logout', function(req,res) {
    controller.logout(req,res);
})

router.get('/create_team1', function(req,res) {
    controller.create_team1_page(req,res);
})

router.post('/create_team1', function(req,res) {
    controller.create_team1(req,res);
})

// router.get('/create_team2', function(req,res) {
//     controller.create_team2_page(req,res);
// })

router.post('/create_team2', function(req,res) {
    controller.create_team2(req,res);
})
module.exports = router;
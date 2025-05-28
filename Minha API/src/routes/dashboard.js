var express = require("express")

var router = express.Router()

var dashboardController = require("../controllers/dashboardController")

router.get("/post/:id", function (req, res) {
    dashboardController.post(req, res)
})

router.get("/curtida/:id", function (req, res) {
    dashboardController.curtida(req, res)
})

router.get("/comentario/:id", function (req, res) {
    dashboardController.comentario(req, res)
})

router.get("/listarPost/:id", function (req, res) {
    dashboardController.listarPost(req, res)
})

router.get("/listarCurtida/:id", function (req, res) {
    dashboardController.listarCurtida(req, res)
})

router.get("/listarComentario/:id", function (req, res) {
    dashboardController.listarComentario(req, res)
})


router.get("/dash/:id", function (req, res) {
    dashboardController.dash(req, res)
})

module.exports = router
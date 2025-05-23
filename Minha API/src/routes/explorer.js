var express = require("express");
var router = express.Router();

var explorerController = require("../controllers/explorerController");

// Crio uma rota
// (/explorer/listar)
router.get("/listar", function (req, res) {
    explorerController.listar(req, res)
})

router.get("/:idPost", function (req, res) {
    explorerController.listarComentario(req, res)
})

router.post("/novoComentario/:idPost", function(req, res) {
    explorerController.novo_comentario(req,res)
})

module.exports = router
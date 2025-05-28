var express = require("express")
var router = express.Router()
var upload = require("../config/configUploadForum")
var forumController = require("../controllers/forumController")

router.get("/listarArquivos_pdf", function (req, res) {
  forumController.listar(req, res)
})

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/enviarPdf', upload.single('arquivo_pdf'), (req, res) => {
  forumController.enviarPdf(req, res);
})


module.exports = router;
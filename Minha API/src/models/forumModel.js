var database = require("../database/config");

function listar() {
    var instrucao = `SELECT a.idArquivo as idAquivo,a.extencao as extencao, 
    a.nome as nome, a.quem_postou as quem_postou,
    u.nome as nome_usuario 
        FROM arquivos as a join usuario as u 
        on a.quem_postou = u.idUsuario 
    ORDER BY a.idArquivo DESC;`

    return database.executar(instrucao);
}

function enviarPdf(idUsuario, descricao, pdf) {
    var instrucaoSql = `INSERT INTO arquivos (quem_postou, nome, extencao) VALUES
(${idUsuario}, "${descricao}", "${pdf}");`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    enviarPdf
}
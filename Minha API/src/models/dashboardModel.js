var database = require("../database/config")

function post(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtPostagem, 1) AS semana, 
    COUNT(*) AS qtd_post FROM post WHERE quem_postou = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function curtida(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtCurtida, 1) AS semana, 
    COUNT(*) AS qtd_curtida FROM curtida WHERE quem_postou = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function comentario(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtComentario, 1) AS semana, 
    COUNT(*) AS qtd_comentario FROM comentario WHERE quem_postou = ${idUsuario}
    GROUP BY semana ORDER BY semana DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarPost(idUsuario) {
    var instrucaoSql = `
select count(*) AS qtd_post from post where quem_postou = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarCurtida(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(*) AS qtd_curtida  FROM curtida WHERE quem_postou = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarComentario(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(*) AS qtd_comentario  FROM comentario WHERE quem_postou = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function dashCurtida(idUsuario) {
    var instrucaoSql = `
        SELECT YEARWEEK(dtCurtida) AS semana, 
    COUNT(*) AS qtd_curtida 
    FROM curtida 
    WHERE quem_postou = ${idUsuario}
    GROUP BY semana 
    ORDER BY semana DESC LIMIT 6;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function dashComentario(idUsuario) {
    var instrucaoSql = `
    SELECT YEARWEEK(dtComentario) AS semana, 
    COUNT(*) AS qtd_comentario
    FROM comentario
    WHERE quem_postou = ${idUsuario}
    GROUP BY semana
    ORDER BY semana DESC LIMIT 6;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    post,
    curtida,
    comentario,
    listarPost,
    listarCurtida,
    listarComentario,
    dashCurtida,
    dashComentario
}
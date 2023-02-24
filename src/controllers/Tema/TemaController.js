const TemaModels = require('../../models/tema/TemaModels');

async function listarTema(req,res){
    const observartemas = await TemaModels().observa();
    console.log(observartemas);
    res.render('add/add1', {observartemas});
}

async function crearTema(req,res){
    const datos = req.body;
    await TemaModels().createTema(datos);
    res.redirect('/tema/listarTema');

}
async function eliminarTema(req,res){
    const datos_id = req.params.id_temas;
    await TemaModels().deleteTema(datos_id);
    res.redirect('/tema/listarTema');
}
async function modificarTema(req,res){


    const datos=[
        req.body.Temas,
        req.params.id_temas
    ]
    await TemaModels().updateTema(datos);
    res.redirect('/tema/listarTema');
}

module.exports = {
    listarTema,
    crearTema,
    eliminarTema,
    modificarTema
    
}
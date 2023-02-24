const MaterialModels = require('../../models/material/MaterialModels');

async function listarMaterial(req,res){
    //const TodoMaterial = await MaterialModels().ObservaMaterial();
    //const observartema = await MaterialModels().observartemas();
    const observartema1 = await MaterialModels().ObservaCaste();
    const observartema2 = await MaterialModels().ObservaFil();
    const observartema3 = await MaterialModels().ObservaFis();
    const observartema4 = await MaterialModels().ObservaInfo();
    const observartema5 = await MaterialModels().ObservaIng();
    const observartema6 = await MaterialModels().ObservaMate();
    const observartema7 = await MaterialModels().ObservaNatu();
    const observartema8 = await MaterialModels().ObservaQui();
    const observartema9 = await MaterialModels().ObservaSoci();

    res.render('add/add2', {observartema1,observartema2,observartema3,observartema4,observartema5,observartema6,observartema7,observartema8,observartema9});
}

async function crearMaterial(req,res){
    const datos = req.body;
    await MaterialModels().createMaterial(datos);
    res.redirect('/material/listarMaterial');

}
async function eliminarMaterial(req,res){
    const datos_id = req.params.id;
    await MaterialModels().deleteMaterial(datos_id);
    res.redirect('/material/listarMaterial');
}
async function modificarMaterial(req,res){


    const datos=[
        req.body.nombre,
        req.body.descripcion,
        req.body.id_temas,
        req.params.id
    ]
    await MaterialModels().updateMaterial(datos);
    res.redirect('/material/listarMaterial');
}

module.exports = {
    listarMaterial,
    crearMaterial,
    eliminarMaterial,
    modificarMaterial
    
}
/*
req.file.filename 
*/
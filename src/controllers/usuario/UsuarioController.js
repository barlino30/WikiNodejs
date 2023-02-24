const UsuarioModels = require('../../models/usuario/UsuarioModels');

async function listarUsuario(req,res){
    const listaTodos_Usuario = await UsuarioModels().listall();
    console.log(listaTodos_Usuario);
    res.render('usuarios/usuarios', {listaTodos_Usuario});
}

async function listarUsuarioApi(req,res){
    const listaTodos_Usuario = await UsuarioModels().listall();
    console.log(listaTodos_Usuario);
    res.status(208).json(listaTodos_Usuario);
}

async function crearUsuario(req,res){
    const datos = req.body;
    await UsuarioModels().createUsuario(datos);
    res.redirect('/usuario/listarUsuario');

}

async function crearUsuarioApi(req,res){
    
    const datos = req.body;
    await UsuarioModels().createUsuario(datos);
    res.status(208).json({
        success: 1,
        message:"creado con exito"
    });
}


async function eliminarUsuario(req,res){
    const datos_id = req.params.id;
    await UsuarioModels().deleteUsuario(datos_id);
    res.redirect('/usuario/listarUsuario');
}
async function eliminarUsuarioApi(req,res){
    const datos_id = req.params.id;
    await UsuarioModels().deleteUsuario(datos_id);
    res.status(200).json({
        succes: 1,
        message: "eliminado con exito"
    })    
}

async function modificarUsuario(req,res){


    const datos=[
        req.body.nombre,
        req.body.apellidos,
        req.body.correo,
        req.body.contrasena,
        req.params.id
    ]
    await UsuarioModels().updateUsuario(datos);
    res.redirect('/usuario/listarUsuario');
}
async function modificarUsuarioApi(req,res){

    const datos=[
        req.body.nombre,
        req.body.apellidos,
        req.body.correo,
        req.body.contrasena,
        req.params.id
    ]
    await UsuarioModels().updateUsuario(datos);
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })
}



async function listarUsuario1(req,res){
    res.render('crear/crear');
}
async function crearUsuario1(req,res){
    const datos = req.body;
    await UsuarioModels().createUsuario(datos);
    res.redirect('/homes/home');

}




module.exports = {
    listarUsuario,
    listarUsuarioApi,
    crearUsuario,
    crearUsuarioApi,
    eliminarUsuario,
    eliminarUsuarioApi,
    modificarUsuario,
    modificarUsuarioApi,
    crearUsuario1,
    listarUsuario1
    
}
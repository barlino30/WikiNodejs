const pool =require('../../database');

module.exports = function(){

    async function listall(){
        let query = "select * from usuarios";
        return await pool.query(query);
    }
    async function createUsuario(datos){
        let query = "insert into usuarios set ?";
        return await pool.query(query,datos);
    }

    async function deleteUsuario(datos){
        let query = "delete from usuarios where id=?";
        return await pool.query(query,datos);
    }

    async function updateUsuario(datos){
        let query = "update usuarios set nombre=?, apellidos=?, correo=?, contrasena=? where id=?";
        return await pool.query(query,datos);
    }

    return{
        listall,
        createUsuario,
        deleteUsuario,
        updateUsuario
    }
}
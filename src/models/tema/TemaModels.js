const pool =require('../../database');

module.exports = function(){
    async function observa(){
        let query = "select * from temas";
        return await pool.query(query);
    }

    async function createTema(datos){
        let query = "insert into temas set ?";
        return await pool.query(query,datos);
    }

    async function deleteTema(datos){
        let query = "delete from temas where id_temas=?";
        return await pool.query(query,datos);
    }

    async function updateTema(datos){
        let query = "update temas set Temas=? where id_temas=?";
        return await pool.query(query,datos);
    }

    return{
        observa,
        createTema,
        deleteTema,
        updateTema
    }
}
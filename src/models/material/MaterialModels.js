const pool =require('../../database');

module.exports = function(){
    /*async function ObservaMaterial(){
        let query = "select * from material";
        return await pool.query(query);
    }*/
    /*async function observartemas(){
        let query = "select * from temas";
        return await pool.query(query);
    }*/
    async function createMaterial(datos){
        let query = "insert into material set ?";
        return await pool.query(query,datos);
    }

    async function deleteMaterial(datos){
        let query = "delete from material where id=?";
        return await pool.query(query,datos);
    }

    async function updateMaterial(datos){
        let query = "update material set nombre=?, descripcion=?, id_temas=? where id=?";
        return await pool.query(query,datos);
    }




    async function ObservaCaste(){
        let query = "SELECT * FROM material WHERE id_temas = 1";
        return await pool.query(query);
    }
    async function ObservaFil(){
        let query = "SELECT * FROM material WHERE id_temas = 2";
        return await pool.query(query);
    }
    async function ObservaFis(){
        let query = "SELECT * FROM material WHERE id_temas = 3";
        return await pool.query(query);
    }
    async function ObservaInfo(){
        let query = "SELECT * FROM material WHERE id_temas = 4";
        return await pool.query(query);
    }
    async function ObservaIng(){
        let query = "SELECT * FROM material WHERE id_temas = 5";
        return await pool.query(query);
    }
    async function ObservaMate(){
        let query = "SELECT * FROM material WHERE id_temas = 6";
        return await pool.query(query);
    }
    async function ObservaNatu(){
        let query = "SELECT * FROM material WHERE id_temas = 7";
        return await pool.query(query);
    }
    async function ObservaQui(){
        let query = "SELECT * FROM material WHERE id_temas = 8";
        return await pool.query(query);
    }
    async function ObservaSoci(){
        let query = "SELECT * FROM material WHERE id_temas = 9";
        return await pool.query(query);
    }


    return{
        //ObservaMaterial,
        createMaterial,
        deleteMaterial,
        updateMaterial,
        //observartemas
        ObservaCaste,
        ObservaFil,
        ObservaFis,
        ObservaInfo,
        ObservaIng,
        ObservaMate,
        ObservaNatu,
        ObservaQui,
        ObservaSoci
    }
}
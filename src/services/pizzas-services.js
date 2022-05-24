import config from './dbconfig';
import sql from 'mssql';

class PizzasService {
    getAll = async () => {}
    getById = async (id) =>{
        let returnEntity = null;
        console.log('Estoy en: PizzasService.getById');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                .input ('pId', sql.Int, id)
                                .query ('SELECT * FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets [0][0];
        } catch (error){
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (pizza) => {}
    update = async (pizza) => {}
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzasService.getById');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                .input ('pId', sql.Int, id)
                                .query ('DELETE FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets [0][0];
        } catch (error){
            console.log(error);
        }
        return rowsAffected;
    }
}
export default PizzasService;

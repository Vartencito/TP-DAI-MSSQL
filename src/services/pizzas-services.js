import config from '../dbconfig.js';
import sql from 'mssql';
import pizza from '../models/pizza.js'

class PizzasService {
    getAll = async () => {
        let returnEntity = null;
        console.log('estoy en el service 1');
        try {
            console.dir(config);
            let pool = await sql.connect(config);
            console.log('estoy en el service 2');
            const result  = await pool.request()
                                .query ('SELECT * FROM Pizzas');
            returnEntity = result.recordsets;

        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    getById = async (id) =>{
        let returnEntity = null;
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
    insert = async (pizza) => {
            let returnEntity = null;
            console.log(pizza);
            try {
                let pool    = await sql.connect(config);
                let result  = await pool.request()
                                    .input ('pNombre', sql.VarChar(50), pizza.nombre)
                                    .input ('pGluten', sql.Bit, pizza.libreGluten)
                                    .input ('pImporte', sql.Float, pizza.importe)
                                    .input ('pDescripcion', sql.VarChar, pizza.descripcion)
                                    .query (`INSERT into PIZZAS (Nombre, LibreGluten, Importe, Descripcion)
                                     VALUES (@pNombre, @pGluten, @pImporte, @pDescripcion )`);
                returnEntity = result.recordsets;
            }
            catch(error){
                console.log(error);
            }
            return returnEntity;
    }
    update = async (pizza) => {
        let returnEntity = null;
        try{
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                    .input ('pId', sql.Int, pizza.id)
                                    .input ('pNombre', sql.VarChar(50), pizza.nombre)
                                    .input ('pGluten', sql.Bit, pizza.libreGluten)
                                    .input ('pImporte', sql.Float, pizza.importe)
                                    .input ('pDescripcion', sql.VarChar, pizza.descripcion)
                                    .query ('UPDATE Pizzas SET Nombre = @pNombre, LibreGluten = @pGluten, Importe = @pImporte, Descripcion = @pDescripcion WHERE Id = @pId');
                returnEntity = result.recordsets;
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    deleteById = async (Id) => {
        let rowsAffected = 0;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pId', sql.Int, Id)
                                        .query("DELETE FROM Pizzas WHERE Id=@pId");
            rowsAffected = result.rowsAffected;
        } catch (error){
            console.log(error);
        }
        return rowsAffected;
    }
}
export default PizzasService;

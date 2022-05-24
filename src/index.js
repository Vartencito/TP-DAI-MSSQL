import config from './dbconfig';
import sql from 'mssql';

let pool    = await sql.connect(config);
let result  = await pool.request().query("SELECT top 2 * from Pizzas");

console.log(result.recordsets[0]);

process.exit();
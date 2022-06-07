import express from 'express'
import pizzasController from './src/controllers/pizzasController.js'
import cors from 'cors'

const app = express();
const port = 5000;

app.set('port', port);

app.listen(app.get('port'));

console.log("servidor en el puerto", app.get('port'));

app.use(cors());

app.use(express.json());

app.use("/api/pizzas", pizzasController);

export default app;




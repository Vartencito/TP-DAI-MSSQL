import PizzaServices  from './services/pizzas-services.js';
import config from './dbconfig';
import sql from 'mssql';
import express from 'express'

const app = express();

app.use(cors());
app.use(express.json());

process.exit();


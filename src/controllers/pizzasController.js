import { Router } from "express";
import PizzasService from "../services/pizzas-services.js";
import Pizza from '../models/pizza.js'

const router = Router();

const pizzasService = new PizzasService();
const pizza = new Pizza();

router.get('', async(req,res)=>{
    console.log('estoy aca 1');
    const pizzas = await pizzasService.getAll();
    console.log('estoy aca 2');
    return res.status(200).json(pizzas);
});

router.get('/:id', async (req,res)=>{
    const {
        id
    } = req.params;
    const pizza = await pizzasService.getById(id);
    return res.status(200).json(pizza);
});

router.post('',async (req,res)=>{
    let pizza = req.body;
    let pizzainsert = await pizzasService.insert(pizza);
    return res.status(200).json(pizzainsert);
});

router.put('/:id',async(req,res)=>{
    let pizza = req.body;
    const pizzaUpdate = await pizzasService.update(pizza);
    return res.status(200).json(pizzaUpdate);
})

router.delete('/:id', async(req,res)=>{
    const Id = req.params;
    const pizzaDelete = await pizzasService.deleteById(req.params['id']);
    return res.status(200).send('Se borro');
    
})

export default router;

import { Router } from "express";
import PizzasService from "../services/pizzas-services";

const router = Router();

const pizzasService = new PizzasService();

router.get('/pizzas', async(req,res)=>{
    const pizzas = await pizzasService.getAll();
    return res.status(200).json(pizzas);
});

router.get('/pizzas/:id', async (req,res)=>{
    const pizza = await pizzasService.getById(req.params);
    return res.status(200).json(pizza);
});

router.post('/pizzas/:pizza',async (req,res)=>{
    const pizza = await pizzasService.insert(req.params);
    return res.status(200).json(pizza);
});

router.put('/pizzas/:pizza',async(req,res)=>{
    const pizza = await pizzasService.update(req.params);
    return res.status(200).json(pizza);
})

router.delete('/pizzas/:id', async(req,res)=>{
    const pizza = await pizzasService.update(req.params);
    return res.status(200).json(pizza);
})

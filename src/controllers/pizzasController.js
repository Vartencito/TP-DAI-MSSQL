import { Router } from "express";
import PizzasService from "../services/pizzas-services.js";

const router = Router();

const pizzasService = new PizzasService();

router.get('', async(req,res)=>{
    console.log('estoy aca 1');
    const pizzas = await pizzasService.getAll();
    console.log('estoy aca 2');
    return res.status(200).json(pizzas);
});

router.get('/:id', async (req,res)=>{
    const pizza = await pizzasService.getById(req.params);
    return res.status(200).json(pizza);
});

router.post('',async (req,res)=>{
    const pizza = await pizzasService.insert(req.body);
    return res.status(200).json(pizza);
});

router.put('',async(req,res)=>{
    const pizza = await pizzasService.update(req.body);
    return res.status(200).json(pizza);
})

router.delete('/:id', async(req,res)=>{
    const pizza = await pizzasService.update(req.params);
    // return res.status(200).json(pizza);
})

export default router;

import express from 'express';
const router = express.Router();

// importar el modelo User
import User from '../models/user';

// Agregar un usuario
router.post('/new-user', async(req, res) => {

    const body = req.body;

    try {            
        const userDB = await User.create(body);        
        res.status(200).json(userDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'An error ocurred',
            error
        })
    }
});

// Get con Parametros
router.get('/user/:id', async(req, res) => {

    const _id =req.params.id;

    try {

        const userDB = await User.findOne({_id});
        return res.json(userDB);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'An error ocurred',
            error     
        })          
    }
});

// Get todos documentos
router.get('/user', async(req,res) => {

    try {

       const userDB = await User.find();
       //console.log(userDB);
       res.json(userDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'An error ocurred',
            error     
        })                 
    }
});

// delete an user
router.delete('/user/:id', async(req, res) => {

    const _id = req.params.id;
    console.log(_id);

    try {
        
        const userDb = await User.findByIdAndDelete({_id});

        return res.json(userDb);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'An error ocurred',
            error     
        }) 
    }
})

// Actualizar una nota
router.put('/user/:id', async (req,res) => {

    const _id = req.params.id;
    const body = req.body;

    try {
        
        const userDB = await User.findByIdAndUpdate(_id, body, {new: true});
        
        return res.json(userDB);

    } catch (error) {
        
        return res.status(400).json({
            mensaje: 'An error ocurred',
            error     
        }) 
    }
});


module.exports = router;
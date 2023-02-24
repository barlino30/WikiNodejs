const express = require('express');
const router = express.Router();

router.get('/home',async(req,res)=>{
    res.render('home/home');
});

router.get('/homeE',async(req,res)=>{
    res.render('home/homeE');
});

router.get('/homeD',async(req,res)=>{
    res.render('home/homeD');
});

router.get('/castellano',async(req,res)=>{
    res.render('temas/castellano');
});

router.get('/filosofia',async(req,res)=>{
    res.render('temas/filosofia');
});

router.get('/fisica',async(req,res)=>{
    res.render('temas/fisica');
});

router.get('/informatica',async(req,res)=>{
    res.render('temas/informatica');
});

router.get('/ingles',async(req,res)=>{
    res.render('temas/ingles');
});

router.get('/matematica',async(req,res)=>{
    res.render('temas/matematica');
});

router.get('/naturales',async(req,res)=>{
    res.render('temas/naturales');
});

router.get('/quimica',async(req,res)=>{
    res.render('temas/quimica');
});

router.get('/sociales',async(req,res)=>{
    res.render('temas/sociales');
});

router.get('/pagina',async(req,res)=>{
    res.render('pagina/pagina');
});

router.get('/buscado',async(req,res)=>{
    res.render('buscados/buscado');
});

router.get('/sesion',async(req,res)=>{
    res.render('session/session');
});

router.get('/crear',async(req,res)=>{
    res.render('crear/crear');
});

router.get('/buscar',async(req,res)=>{
    res.render('buscar/buscar');
});





module.exports = router;
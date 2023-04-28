const {login} = require('../controllers/login')
const {getCharById } = require('../controllers/getCharById')
const {postFav , deleteFav} = require('../controllers/handleFavorites')



const router = require('express').Router();


router.get('/character/:id', (req, res)=>{
getCharById(req,res)

})

router.get('/login', (req,res)=> {
login(req, res)
})

router.post('/fav', (req,res)=> {
    postFav(req, res)
})

router.delete('/Fav/:id', (req,res)=> {
    deleteFav(req, res)
})

//router.delete('/Fav/:id', deleteFav)
// tambien se puede hacer asi y directamente pasarle la funcion

module.exports= router



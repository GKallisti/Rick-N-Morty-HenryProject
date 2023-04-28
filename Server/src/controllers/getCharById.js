const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios')



const getCharById = async (req, res)=> {

try {
const {id}= req.params;
const { data } = await axios(`${URL}/${id}`)

if(!data.name) throw new Error (`Faltan datos del personaje con ID: ${id}`)
//con este if si no se encuentra el id buscado tira error, de lo contrario crea el personaje
// si a data.name lo cambio por cualquier categoria, se convierte en un buscador por categorias (ejemplo, !data.status va a tirar chars que tengan status)   
const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
        status: data.status
    }
    return res.status(200).json(character)


} catch (error) {
    error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)}
//cuando se manda texto plano se usa .send y cuando mandamos datos es .json
}


module.exports={
    getCharById
};
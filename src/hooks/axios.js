import axios from "axios";

export const PokemonSearch = async (NomePokemon) => {
  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${NomePokemon}`)
    return response.data
  }catch(error){
    console.log(error.response)
  }
}
export const LimitadorDeApi = async (quantidadePokemon) => {
  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${quantidadePokemon}&offset=0`)
    return response.data
  }catch(error){
    console.log(error.response)
  }
}
export const getAllPokeName = async () => {
  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`)
    return response.data
  }catch(error){
    console.log(error.response)
  }
}
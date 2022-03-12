import React,{useState} from 'react'
import axios from 'axios'


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})



export async function getMovie() {
    try{
        const {data} = await api.get('movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=1')
        return data.results
    }
      catch(error) {
        console.warn(error)
      }
  }

  export async function geet(){
    const [dados,setDados] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    try{
      if(loading)return;
      const {data} = await api.get(`movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`)
      setData1([...dados, ...data.results]) 
      setPage(page + 1)
      setLoading(false)
      return dados;

  }
    catch(error) {
      consol1e.warn(error)
    }
  
  }
export default api;

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, FlatList} from 'react-native';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
// import api, {getMovie} from '../../service/api';

export default function Home() {
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   async function awaitMovie() {
  //     const response = await getMovie();
  //     setMovie(response);
  //   }
  //   awaitMovie();
  // }, []);


  const baseURL= 'https://api.themoviedb.org/3/';
  const perPage = 20;

  const [data1,setData1] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);

  useEffect(()=>{ 
   geet()
   },[])

   async function geet(){
    try{
      if(loading)return;
      const {data} = await axios.get(`${baseURL}movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`)
      setData1([...data1, ...data.results]) 
      setPage(page + 1)
      setLoading(false)

  }
    catch(error) {
      consol1e.warn(error)
    }
  }






  console.warn(data1)

  return(
   <View>
     <FlatList 
     data={data1}
     keyExtractor={item => item.id.toString()}
     onEndReached={geet}
     onEndReachedThreshold={0.3}
     ListFooterComponent={ <FooterList Load={loading} /> }
     renderItem={({item}) => 
     <Text style={{fontSize:50, marginTop:120,backgroundColor:'pink'}}>{item.title}</Text>}
     
     />
  </View>
  );
}

function FooterList({Load}){
  if(!Load) return null;
  
  return(
    <View>
      <ActivityIndicatorViewNativeComponent size={25} color="#121212" />
    </View>
  )
}
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationHelpersContext } from '@react-navigation/native';

export default function Movies({ navigation }) {

  const testflatlist = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <View style={styles.container}>

      <View>
        <Image style={styles.backGroundMovie} source={{
          uri: 'http://image.tmdb.org/t/p/w780/cKNxg77ll8caX3LulREep4C24Vx.jpg'
        }} />
        <TouchableOpacity style={styles.buttomBack}
          onPress={() => goBack()}>
          <AntDesign name='arrowleft' size={25} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name='star' size={30} style={styles.starIcon} />
        </TouchableOpacity>

        <Image style={styles.capaMovie} source={{
          uri: 'http://image.tmdb.org/t/p/w780/cKNxg77ll8caX3LulREep4C24Vx.jpg'
        }} />

        <Text style={styles.titleMovie}>The Batman 2022</Text>
        <Text style={styles.yearMovie}>2022</Text>
        <Text style={styles.timeMovie}>174min</Text>
        <Text style={styles.autorMovie}>Direção por Matt Reeves</Text>
        <Text style={styles.rated}>8.5/10</Text>
        <TouchableOpacity>
          <AntDesign name='heart' size={25} style={styles.heartIcon} />
        </TouchableOpacity>
        <Text style={styles.descriptionMovie}>DESCUBRA A VERDADE. Em seu segundo ano de combate ao crime, Batman descobre a corrupção em Gotham City que se conecta à sua própria família enquanto enfrenta um serial killer conhecido como Charada.</Text>
        <Text style={styles.elenco}>Elenco</Text>


      </View>

      <FlatList
        style={styles.viewFLatList}
        data={testflatlist}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <View >
            <Image style={styles.imagemFlatList}
              source={{
                uri: `https://image.tmdb.org/t/p/w780/cKNxg77ll8caX3LulREep4C24Vx.jpg`
              }} />
            <Text style={styles.name}>FelipeMattos de Lima Valença</Text>
            <Text style={styles.papel}>nome do papel</Text>
          </View>
        )}

      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'

  },

  backGroundMovie: {
    width: 420,
    height: 170.42,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttomBack: {
    marginLeft: 20,
    marginTop: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    color: 'black,'


  },
  starIcon: {

    color: 'white',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -125,
    marginLeft: 360,



  },

  capaMovie: {
    marginLeft: 20,
    marginTop: 120,
    position: 'absolute',
    width: 116,
    height: 182,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,

  },

  titleMovie: {
    alignSelf: 'center',
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 50,
    marginTop: 15,

  },

  yearMovie: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    alignSelf: 'flex-end',
    marginTop: -17,
    marginRight: 70,
    color: "#FFFFFF"
  },

  timeMovie: {
    fontSize: 7,
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 25,



  },

  autorMovie: {
    alignSelf: 'center',
    marginLeft: 70,
    fontSize: 10,
    color: "#FFFFFF"

  },

  rated: {
    alignSelf: 'center',
    color: "#E9A6A6",
    fontSize: 30,
    marginTop: 15,
    marginLeft: -20,

  },

  heartIcon: {

    color: 'red',
    alignSelf: 'center',
    marginLeft: 200,
    marginTop: -30,

  },

  descriptionMovie: {
    color: "#FFFFFF",
    fontSize: 12,
    width: 332,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,

  },

  elenco: {
    flexDirection: 'row',
    marginTop: -25,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    marginLeft: 20,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 35,
    height: 20,
    backgroundColor: '#9C4A8B',
    fontSize: 10,
    marginBottom: 5,

  },

  viewFLatList: {
    flex: 1,
    backgroundColor: 'black',
    width: 400,
    flexWrap: 'wrap',

  },

  imagemFlatList: {
    marginLeft: 20,
    marginTop: 12,
    width: 36,
    height: 36,
    borderRadius: 50,
  },

  name: {
    color: 'white',
    fontSize: 15,
    marginLeft: 70,
    marginTop: -40

  },

  papel: {
    color: 'white',
    fontSize: 11,
    marginLeft: 70,

  },



})

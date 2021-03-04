import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loadWeather, getWeather } from '../../redux/weatherRedux'

export default function WeatherGeneral({route}) {
  const {res} = route.params
  const navigation = useNavigation(); 
  const [weatherData] = useState([res.data])

  const kToC = (kalvin) => {
    const kTemp = kalvin
    const kToCel = kTemp - 273.15
    return (kToCel.toFixed(0) + ' ℃')
  }
  
  const naviToDetails = (navigation) => {
  navigation.navigate('WeatherDetails', {res, kToC})
  }

  return (
    <ImageBackground source={{ uri: "https://i.imgur.com/MV97Xtc.jpg" }} style={styles.image}>
    <View style={styles.container}>
      {weatherData.map((item) => {
        return (
          <>
          <Image source={{uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`}}
       style={{width: 80, height: 80}} />
          <Text style={styles.city}>{item.name}</Text>
          <Text style={styles.condition}>{item.weather[0].main}</Text>
          <Text style={styles.temp}>{kToC(item.main.temp)}</Text>
          <TouchableOpacity 
          onPress={() => naviToDetails(navigation)}
          style={styles.button}>
            <Text style={styles.text}> Viev more details </Text>
          </TouchableOpacity>
          </>
          )
      })}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
   position: 'relative'
  },
  city: {
    marginTop: 30,
    fontSize: 20,
    position: 'absolute',
    top: 20,
    color:'white'
  },
  condition: {
    fontSize: 12,
    marginBottom: 30,
    position: 'absolute',
    top: 80,
    color:'white'
  },
  temp: {
    fontSize: 60,
    color:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0099ff',
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    position: 'absolute',
    bottom: 20,
    borderRadius: 50
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    lineHeight: 40,
    color: 'white',
  }
});
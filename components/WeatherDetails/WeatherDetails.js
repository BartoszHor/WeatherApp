import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Text, View, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';

export default function WeatherDetails({route}) {
const {res} = route.params
const {kToC} = route.params
const [weatherData] = useState([res.data])
console.log(weatherData)

  return (
    <ImageBackground source={{ uri: "https://i.imgur.com/MV97Xtc.jpg" }} style={styles.image}>
    <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={[
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`City`}</Text>
              <Text style={styles.itemValue}>{`${item.name}`}</Text>
            </>)})},
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`Temperature`}</Text>
              <Text style={styles.itemValue}>{`${kToC(item.main.temp)}`}</Text>
            </>)})},
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`Feels like`}</Text>
              <Text style={styles.itemValue}>{`${kToC(item.main.feels_like)}`}</Text>
            </>)})},
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`Preasure`}</Text>
              <Text style={styles.itemValue}>{`${item.main.pressure} hPa`}</Text>
            </>)})},
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`Humidity`}</Text>
              <Text style={styles.itemValue}>{`${item.main.humidity} `}</Text>
            </>)})},
          {key: weatherData.map((item) => {return(
            <>
              <Text style={styles.item}>{`Wind speed`}</Text>
              <Text style={styles.itemValue}>{`${item.wind.speed} km/h`}</Text>
            </>)})},
        ]}
        renderItem={({item}) => <View>{item.key}</View>}
      />
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
   width: '100%',
   position: 'relative',
  },
  list: {
    width: '100%',
  },
  item: {
    fontSize: 22,
    height: 60,
    lineHeight: 40,
    marginLeft: 10,
    color: 'white'

  },
  itemValue: {
    fontSize: 26,
    position: 'absolute',
    right: 10,
    color: 'white'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
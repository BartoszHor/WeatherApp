import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Search from '../Search/Search'


export default function WeatherForecast() {
  return (
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }} style={styles.image}>
      <View style={styles.container}>
          <Search/>
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});
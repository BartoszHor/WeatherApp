import React, {useEffect, useState, useRef} from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeather, getWeather, getLoadingState } from '../../redux/weatherRedux'
import { useNavigation } from '@react-navigation/native';


export default function Search()  {
  const navigation = useNavigation(); 
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()  
  const loadingState = useSelector(getLoadingState)
  const loading = loadingState?.active
  const fetchForecast = () => {
    dispatch(loadWeather(search, navigation))
    setSearch('')
  }

  
    return (
      <View style={styles.container}>
      <Text style={styles.title}> Weather App </Text>
        <SearchBar
          clearIcon={false}
          searchIcon={false}
          style={styles.searchBar}
          placeholder="Your city name"
          placeholderTextColor='white'
          onChangeText={(value) => setSearch(value)}
          value={search}
          showLoading={loading ? true : false}
        />
      <TouchableOpacity
         style={styles.button}
         onPress={fetchForecast}
       >
         <Text style={styles.text}> FIND CITY </Text>
      </TouchableOpacity>
      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  searchBar: {
    width: 200,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0099ff',
    height: 40,
    marginTop: 20,
    borderRadius: 50
  },
  text: {
    lineHeight: 40,
    color: 'white',
  }
});





import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../constans/Colors';

interface IProps {
  temp: string;
  rainChances: string;
  city: string;
}
const Temperture = (props: IProps) => {
  const {temp, rainChances, city = 'New York'} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.rain}>{rainChances}%</Text>
      </View>
      <Image
        source={require('../assets/icons/clouds.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  city: {
    color: Colors.text,
    fontSize: 20,
    letterSpacing: 0.3,
  },
  temp: {
    color: Colors.text,
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'space-around',
  },
  rain: {
    fontSize: 18,
    color: Colors.text,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
});
export default Temperture;

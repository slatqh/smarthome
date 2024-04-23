import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../constans/Colors';
import {Switch, Temperture} from '../components';
import FavoriteBase from '../components/FavoriteBase';

export const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.titleWrapper}>
        <View style={styles.dot} />
        <Text style={styles.title}>LATESTAPPTESTING</Text>
      </View>
      <Temperture city="New York" temp="22" rainChances="94" />
      <FavoriteBase label="scenes" onPress={() => console.log('pressed')} />
      <View style={styles.switchWrapper}>
        <FavoriteBase label="devices" onPress={() => console.log('pressed')} />
        <Switch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 2,
  },
  title: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 24,
  },
  dot: {
    marginHorizontal: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'aquamarine',
  },
  titleWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchWrapper: {
    marginTop: 20,
  },
});

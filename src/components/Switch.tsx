import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constans/Colors';

interface ISwitch {
  onPress: (id: number) => void;
  isOn: boolean;
  switch: string;
}

const Switch = (props: ISwitch) => {
  return (
    <TouchableOpacity style={styles.container}>
      <>
        <View style={styles.isOn}>
          <View style={styles.indicator} />
          <Text style={styles.text}>Off</Text>
        </View>
        <View style={styles.room}>
          <Text style={styles.text}>Switch 1.2</Text>
          <Text style={styles.text}>Living Room</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    padding: 7,
  },
  isOn: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  indicator: {
    width: 30,
    height: 15,
    backgroundColor: 'gray',
  },
  text: {
    color: Colors.text,
  },
  room: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default Switch;

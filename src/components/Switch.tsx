import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constans/Colors';

export interface ISwitch {
  onPress?: (id: string) => void;
  isOn: boolean;
  switchNumber: string;
  id: string;
  room: string;
}

export const Switch = (props: ISwitch) => {
  const {onPress, isOn, room, switchNumber, id} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress(id)}>
      <>
        <View style={styles.isOn}>
          <View style={styles.indicator} />
          <Text style={styles.text}>{isOn ? 'On' : 'Off'}</Text>
        </View>
        <View style={styles.room}>
          <Text style={styles.text}>Switch {switchNumber}</Text>
          <Text style={styles.text}>{room}</Text>
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

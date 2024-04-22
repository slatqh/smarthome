import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constans/Colors';

const FavoriteBase = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite {label}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.text,
    fontSize: 18,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
export default FavoriteBase;

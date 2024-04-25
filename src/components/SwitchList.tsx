import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ISwitch, Switch} from './Switch';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/state';
import {updateSwitch} from '../store/slice/switchSlice';

const SwitchList = () => {
  const dispatch = useDispatch();
  const switchState = useSelector((state: RootState) => state?.switch);

  const handlePress = (id: string) => {
    dispatch(updateSwitch({id}));
  };
  const renderItem = ({item}: {item: ISwitch}) => {
    return (
      <View style={styles.switchWrapper} key={item.id}>
        <Switch
          switchNumber={item.switchNumber}
          isOn={item.isOn}
          id={item.id}
          room={item.room}
          onPress={handlePress}
        />
      </View>
    );
  };
  return (
    <FlatList
      // columnWrapperStyle={{marginHorizontal: 5}}
      data={switchState.switch}
      renderItem={renderItem}
      keyExtractor={(item: ISwitch) => item?.id}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    margin: 10,
    flex: 1,
  },
});
export default SwitchList;

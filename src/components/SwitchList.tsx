import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ISwitch, Switch} from './Switch';
import switchesData from '../mock/switchesData';

type ISwitchData = Omit<ISwitch, 'onPress'>;
const SwitchList = () => {
  const [swithes, setSwitches] = React.useState<
    ISwitchData[] | null | undefined
  >(switchesData);

  const handlePress = (id: string) => console.log('switch pressed', id);
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
      data={swithes}
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

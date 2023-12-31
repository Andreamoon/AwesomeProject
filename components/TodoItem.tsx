import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
  pressHandler: (arg: string) => void;
  item: {
    text: string;
    key: string;
  };
};
export default function TodoItem<T extends Props>({pressHandler, item}: T) {
  return (
    <TouchableOpacity      onPress={(event: GestureResponderEvent) => pressHandler(item.key)}>
      <View style={styles.item}>
      <Icon name="delete" size={18} color='#333' />

      <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});
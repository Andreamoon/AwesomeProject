import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native';

type Props = {
  pressHandler: (arg: string) => void;
  item: {
    text: string;
    key: string;
  };
};
export default function TodoItem<T extends Props>({pressHandler, item}: T) {
  return (
    <TouchableOpacity
      onPress={(event: GestureResponderEvent) => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    // borderRadius: 1,
    borderRadius: 10,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
} from 'react-native';

type Props = {
  submitHandler: (arg: string) => void;
};
export function AddTodo<T extends Props>({submitHandler}: T) {
  const [text, setText] = useState('');
  const onChangeHandler = (value: string): void => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={onChangeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add-todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

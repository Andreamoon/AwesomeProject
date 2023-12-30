/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState('ciao');
  const [age, setAge] = useState(0);
  function clickHandler() {
    setName('Andrea');
  }
  function onChangeNameHandler(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const value = e.nativeEvent.text;
    setName(value);
  }
  function onChangeAgeHandler(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const value = e.nativeEvent.text;
    setAge(value);
  }
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Jhon Doe"
        onChange={onChangeNameHandler}
      />
      <Text>enter age</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 45"
        onChange={onChangeAgeHandler}
      />
      <Text>
        name:{name}, age:{age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;

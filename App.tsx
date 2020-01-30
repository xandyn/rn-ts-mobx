import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {
    const { value } = appStore;
    const onChangeText = (text: string) => {
        appStore.setValue(text);
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
  },
});

export default App;

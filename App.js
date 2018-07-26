import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SixKeyInput } from 'react-native-braille-six-key-input'
import { Audio } from 'expo';


const soundObject = new Audio.Sound();
try {
  soundObject.loadAsync(require('./assets/sounds/a1.mp3'))
    .then(() => {
      soundObject.playAsync().then(() => {
        console.log('should be playing sound now');
      })
    })
} catch (error) {
  // An error occurred!
  console.log(error);
}


export default class App extends React.Component {

  state = {
    value: '',
  }

  _onChangeHandler = value => {
    this.setState({ value: this.state.value + value })
  }

  _clearResultValue = () => {
    this.setState({ value: '' })
  }

  _onDelete = () => {
    this.setState({
      value: this.state.value.slice(0, -1),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.value}</Text>
        <SixKeyInput
          onChange={this._onChangeHandler}
          onDelete={this._onDelete}
          clear={this._clearResultValue}
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
});

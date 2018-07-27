import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SixKeyInput } from 'react-native-braille-six-key-input'
import { Audio } from 'expo';


export default class App extends React.Component {

  state = {
    'a1': null,
    'b1': null,
    'c1': null,
    'd1': null,
    'e1': null,
    'f1': null,
  }

  async loadSounds() {
    const soundObjectA1 = new Expo.Audio.Sound();
    const soundObjectB1 = new Expo.Audio.Sound();
    const soundObjectC1 = new Expo.Audio.Sound();
    const soundObjectD1 = new Expo.Audio.Sound();
    const soundObjectE1 = new Expo.Audio.Sound();
    const soundObjectF1 = new Expo.Audio.Sound();
    try {
      await soundObjectA1.loadAsync(require('./assets/sounds/a1.mp3'));
      await soundObjectB1.loadAsync(require('./assets/sounds/b1.mp3'));
      await soundObjectC1.loadAsync(require('./assets/sounds/c1.mp3'));
      await soundObjectD1.loadAsync(require('./assets/sounds/d1.mp3'));
      await soundObjectE1.loadAsync(require('./assets/sounds/e1.mp3'));
      await soundObjectF1.loadAsync(require('./assets/sounds/f1.mp3'));

      this.setState({
        'a1': soundObjectA1,
        'b1': soundObjectB1,
        'c1': soundObjectC1,
        'd1': soundObjectD1,
        'e1': soundObjectE1,
        'f1': soundObjectF1,
      })
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  }

  componentDidMount() {
    this.loadSounds().then(() => {
      console.log("sounds loaded!");
    })
  }

  _onChangeHandler = value => {
    console.log(value);

    switch (value) {
      case '⠁':
        this.state.a1.playAsync().then(() => {console.log('Playing note: a1');})
        break;
      case '⠂':
        this.state.b1.playAsync().then(() => {console.log('Playing note: b1');})
        break;
      case '⠄':
        this.state.c1.playAsync().then(() => {console.log('Playing note: c1');})
        break;
      case '⠈':
        this.state.d1.playAsync().then(() => {console.log('Playing note: d1');})
        break;
      case '⠐':
        this.state.e1.playAsync().then(() => {console.log('Playing note: e1');})
        break;
      case '⠠':
        this.state.f1.playAsync().then(() => {console.log('Playing note: f1');})
        break;
      case '⠃':
        this.state.a1.playAsync().then(() => {console.log('Playing note: a1');})
        this.state.b1.playAsync().then(() => {console.log('Playing note: b1');})
        break;
      case '⠿':
        this.state.a1.playAsync().then(() => {console.log('Playing note: a1');})
        this.state.b1.playAsync().then(() => {console.log('Playing note: b1');})
        this.state.c1.playAsync().then(() => {console.log('Playing note: c1');})
        this.state.d1.playAsync().then(() => {console.log('Playing note: d1');})
        this.state.e1.playAsync().then(() => {console.log('Playing note: e1');})
        this.state.f1.playAsync().then(() => {console.log('Playing note: f1');})
        break;
      default:
        console.log('Unhandled case!');
    }
  }

  _clearResultValue = () => {
  }

  _onDelete = () => {
  }

  render() {
    return (
      <View style={styles.container}>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SixKeyInput } from 'react-native-braille-six-key-input'
import { Audio } from 'expo';


export default class App extends React.Component {

  state = {
    soundObjects: []
  }

  async loadSounds() {
    const soundObjectC1 = new Expo.Audio.Sound();
    const soundObjectD1 = new Expo.Audio.Sound();
    const soundObjectE1 = new Expo.Audio.Sound();
    const soundObjectF1 = new Expo.Audio.Sound();
    const soundObjectG1 = new Expo.Audio.Sound();
    const soundObjectA1 = new Expo.Audio.Sound();
    try {
      await soundObjectC1.loadAsync(require('./assets/sounds/c1.mp3'));
      await soundObjectD1.loadAsync(require('./assets/sounds/d1.mp3'));
      await soundObjectE1.loadAsync(require('./assets/sounds/e1.mp3'));
      await soundObjectF1.loadAsync(require('./assets/sounds/f1.mp3'));
      await soundObjectG1.loadAsync(require('./assets/sounds/g1.mp3'));
      await soundObjectA1.loadAsync(require('./assets/sounds/a1.mp3'));

      this.setState({
        soundObjects: [soundObjectC1, soundObjectD1, soundObjectE1, soundObjectF1, soundObjectG1, soundObjectA1]
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

  createOnTouchStartFn = i => () => {
    this.state.soundObjects[i-1].replayAsync().then(() => {console.log('Pressed', i);})
  }

  createOnTouchEndFn = i => () => {
    console.log('released', i);
  }

  render() {
    return (
      <View style={styles.container}>
        <SixKeyInput
          onChange={() => {}}
          onTouchStartFunctions={[1,2,3,4,5,6].map(this.createOnTouchStartFn)}
          onTouchEndFunctions={[1,2,3,4,5,6].map(this.createOnTouchEndFn)}
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

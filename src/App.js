/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';

function App() {
  return (
    <View
      style={{
        backgroundColor: '#E7DFDD',
        flex: 1,
      }}>
      <Image
        source={require('./icon/welcome_logo.png')}
        style={{
          alignSelf: 'center',
          aspectRatio: 0.6,
          resizeMode: 'contain',
          flex: 0.6,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontFamily: 'sans-serif-thin',
          fontSize: 29,
          alignSelf: 'center',
        }}>
        KDB-REMOTE
      </Text>
      <View style={{flex: 0.2}} />
      <Image
        source={require('./icon/loading.gif')}
        style={{
          alignSelf: 'center',
          aspectRatio: 0.9,
          resizeMode: 'contain',
          flex: 0.2,
        }}
      />
    </View>
  );
}

export default App;

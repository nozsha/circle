/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
import { Card, Button } from 'react-native-elements'
import Desk from './src/Desk'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// let radius = 10;
type Props = {};

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
  export default class App extends Component<Props> {

  renderCard(item){
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
      >

      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
       <Desk 
         data= {DATA}
         renderCard={this.renderCard}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: 200,
    // height: 200,
    // borderWidth: 20,
    // borderRadius: 100,
    // borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  },
  progressLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    borderRadius: 100,
    transform:[{rotateZ: '-445deg'}]
  }
});

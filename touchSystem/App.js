/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  AlertAndroid
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

/**
 * 可点击的组件。
 *  使用"Touchable"开头的一系列组件。
 *  一般来说，使用 TouchableHighlight 来制作链接或者链接。按下时背景变暗。
 *  TouchableOpacity 则会在按下时降低按钮的透明度，一般设置为0.5即可。
 *  如果想点击时不显示任何视觉反馈，则可以使用 TouchableWithoutFeedback。
 * 安卓上还可以使用 TouchableNativeFeedback，会在按下时形成类似墨水涟漪的视觉效果。
 */
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      title:'暂时没有任何点击事件'
    }
  }
  activeEvent(eventName){
    this.setState({
      title:eventName
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={() => this.activeEvent('press点击')}
          onPressIn={() => this.activeEvent('pressIn按下先执行，然后再执行press点击')}
          onPressOut={() =>this.activeEvent('按下时从组件划出执行PressOut抬起')}
          onLongPress={() => this.activeEvent('按着不放变成LongPress长按')}>
          <Text style={styles.texts}>点击事件</Text>
        </TouchableHighlight>

        <View>
          <Text>{this.state.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  texts:{
    width:screenWidth,
    fontSize:30,
    backgroundColor:'red',
    textAlign:'center'
  }
});

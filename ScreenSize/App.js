/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import navData from './navs.json';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');                           // 屏幕的宽度
const boxWidth = 130;                                               // 盒子的宽度
const boxHeight = 150;                                              // 盒子的高度
const cols = 3;                                                     // 每列的盒子树
const vMargin = (width - cols * boxWidth) / (cols + 1);              // 水平间距，算法：(总宽度-所有盒子的宽度) / (每行的盒子数 + 1)。用剩余的空间/盒子总数+1
const hMargin = 25;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this._creatNav()}
      </View>
    );
  }

  _creatNav(){
    let navComs = [];
    for(let i=0;i<navData.data.length;i++){
      const nav = navData.data[i];
      navComs.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri:nav.imgUrl}} style={styles.imageStyle} resizeMode='contain'/>
          <Text style={styles.mainTitle}>
            {nav.navTitle}
          </Text>
        </View>
      );
    }
    return navComs;
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  outViewStyle:{
    alignItems:'center',
    width:boxWidth,
    height:boxHeight,
    marginLeft:vMargin,
    marginTop:hMargin
  },
  imageStyle:{
    width:120,
    height:120
  },
  mainTitle:{

  }
});

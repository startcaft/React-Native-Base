/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin'
import imgData from './images.json'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      currentPage:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref="scrollView"
          // 水平排列
          horizontal={true} 
          // 去掉水平滚动条
          showsHorizontalScrollIndicator={false}
          // 自动分页
          pagingEnabled={true}
          // 一帧滚动结束事件监听
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          // 开始拖拽的时候，停止定时器
          onScrollBeginDrag={this.onScrollBeginDrag}
          // 停止拖拽，恢复定时器
          onScrollEndDrag = {this.onScrollEndDrag}
        >
          {this._swiper()}
        </ScrollView>

        {/* 返回指示器 */}
        <View style={styles.pageView}>
          {this._dot()}
        </View>
      </View>
    );
  }

  onScrollEndDrag(){
    this._startTimer();
  }
  onScrollBeginDrag(){
    // 停止定时器
    clearInterval(this.timer);
  }
  onAnimationEnd(e){
    // 求出水平方向的偏移量
    let offSetX = e.nativeEvent.contentOffset.x
    // 通过偏移量和屏幕宽度计算第几页
    let current = Math.floor(offSetX/screenWidth);
    this.setState({
      currentPage:current
    });
    
    const ele = e.target;
  }
  _dot(){
    const views = [];
    let style;
    
    for(let i=0;i<imgData.data.length;i++){
      style = (i === this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
      let data = imgData.data[i];
      views.push(
        <Text key={i} style={[{fontSize:30},style]}>&bull;</Text>
      );
    }

    return views;
  }
  _swiper(){
    const views = [];

    for(let i=0;i<imgData.data.length;i++){
      let data = imgData.data[i];
      views.push(
        <Image key={i} source={{uri:data.img}} style={styles.imgStyle}/>
      );
    }

    return views;
  }
  _startTimer(){
    // 拿到 ScrollView 
    let scrollView = this.refs.scrollView;

    // 添加定时器
    this.timer = setInterval(() => {
      // 设置圆点
      let activePage = 0;
      if((this.state.currentPage + 1) >= imgData.data.length){  // 越界
        activePage = 0;
      }
      else {
        activePage = this.state.currentPage + 1;
      }
      this.setState({
        currentPage:activePage
      });

      // 根据scrollView的偏移量进行滚动
      let offSetX = activePage * screenWidth;
      scrollView.scrollResponderScrollTo({x:offSetX,y:0,animated:true});

    },this.props.duration);
  }
  componentDidMount(){
    // 实现一些复杂的功能
    this._startTimer();
  }
  componentWillUnmount(){
    // 如果存在 this.timer，则使用 clearTimeout 清空。
    // 如果使用了多个 timer，那么用多个变量，或者用个数组来保存引用，然后逐个清空。
    this.timer && clearInterval(this.timer);
  }
}

App.defaultProps = {
  duration:1000
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position:'relative'
  },
  imgStyle:{
    width:screenWidth,
    height:120
  },
  pageView:{
    width:screenWidth,
    height:25,
    backgroundColor:'rgba(0,0,0,0.2)',
    position:'absolute',
    bottom:0,
    left:0,
    flexDirection:'row',
    alignItems:'center'
  }
});


export default App;

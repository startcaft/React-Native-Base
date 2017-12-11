import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from 'react-native';

const {width} = Dimensions.get('window');

class LoginView extends React.Component {
    render(){
        return(
            <View style={loginStyle.container}>
                <Image source={require('../images/Portrait_Mode_133.73134328358px_1192335_easyicon.net.png')}
                    style={loginStyle.headerImg}/>
                <TextInput placeholder='请输入用户名' style={loginStyle.inputs} underlineColorAndroid='transparent'/>
                <TextInput placeholder='请输入密码' style={loginStyle.inputs} underlineColorAndroid='transparent'/>

                <View style={loginStyle.loginBtn}>
                    <Text style={loginStyle.loginText}>登陆</Text>
                </View>

                <View style={loginStyle.loginHelp}>
                    <Text>无法登陆</Text>
                    <Text>使用帮助</Text>
                </View>

                <View style={loginStyle.footer}>
                    <Text>其他登陆方式</Text>
                    <Image source={require('../images/sina_weibo_64px_1107977_easyicon.net.png')} style={loginStyle.footerImg}/>
                    <Image source={require('../images/Wechat_64px_1127960_easyicon.net.png')} style={loginStyle.footerImg}/>
                    <Image source={require('../images/tencent_mobileqq_old_64px_1186945_easyicon.net.png')} style={loginStyle.footerImg}/>
                </View>
            </View>
        )
    }
}

const loginStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        alignItems:'center'
    },
    headerImg:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:20,
        marginBottom:20,
        borderWidth:2,
        borderColor:'white'
    },
    inputs:{
        height:35,
        width:width,
        textAlign:'center',
        padding: 0,
        borderWidth:1,
        borderColor:'#eee',
    },
    loginBtn:{
        marginTop:20,
        width:width*0.9,
        height:40,
        backgroundColor:'#0099CC',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    loginText:{
        color:'white'
    },
    loginHelp:{
        width:width*0.9,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footer:{
        alignSelf:"flex-end",
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:width,
        position:'absolute',
        left:20,
        bottom:10
    },
    footerImg:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:8
    }
});

export default LoginView


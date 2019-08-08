/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import { Button } from 'react-native'
import * as WeChat from 'react-native-wechat';


export default class App extends Component {
  componentDidMount () {
    // WeChat.registerApp('appid');
  }
  wechatLogin () {

  }
  render() {
    return (
      // <Button
      //   onPress={this.wechatLogin}
      //   title="Learn More"
      //   color="#841584"
      //   accessibilityLabel="Learn more about this purple button"
      // />
      <WebView
        source={{ uri: 'https://bestzjl.vicp.io/blog' }}
        originWhiteList={["*"]}
      />
    );
  }
}

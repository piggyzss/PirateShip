/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Book from './iosViews/Book/BookList'

export default class PirateShip extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'book'};
    }
    render() {
    return (
        <View style={styles.container}>
          <TabBarIOS
          >
              <TabBarIOS.Item
                  title="图书"
                  onPress={() => {this.setState({selectedTabItem:'book'})}}
                  selected={this.state.selectedTabItem == 'book'}
              >
                  <Book />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title="会议"
                  onPress={() => {this.setState({selectedTabItem:'meeting'})}}
                  selected={this.state.selectedTabItem == 'meeting'}
              >
                  <View style={{backgroundColor:'powderblue', flex: 1}}>
                      <Text></Text>
                  </View>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title="其他"
                  onPress={() => {this.setState({selectedTabItem:'other'})}}
                  selected={this.state.selectedTabItem == 'other'}
              >
                  <View style={{backgroundColor:'steelblue', flex: 1}}>
                      <Text></Text>
                  </View>
              </TabBarIOS.Item>
          </TabBarIOS>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('PirateShip', () => PirateShip);

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  StatusBar,
  Text,
} from 'react-native';

export default class Bar extends Component {
  static navigationOptions = {
    title: 'StatusBar',
    headerTintColor: '#fff',
    headerTransparent: true,
  };

  render() {
    return (
      <View style={styles.fill}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <ImageBackground
          style={styles.bg}
          source={require('../assets/imgs/bg.png')}>
          <View style={styles.head}>
            <Text style={styles.title}>标题</Text>
          </View>
        </ImageBackground>
        <View style={styles.buttonWrapper}>
          <Button
            title="返回"
            onPress={() => this.props.navigation.goBack()}
            color="#437dff"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  bg: {
    height: 234,
    alignItems: 'center',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 80,
  },
  title: {
    fontSize: 40,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#437dff',
    textAlign: 'center',
  },
  buttonWrapper: {
    padding: 16,
  },
});

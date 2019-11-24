import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  StatusBar,
  Text,
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home 主页',
  };
  constructor(prop) {
    super(prop);
  }

  goToBar = () => {
    this.props.navigation.navigate('Bar');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <Button
            title="隐藏状态栏"
            style={styles.button}
            onPress={() => this.goToBar()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  actionContainer: {
    width: '90%',
  },
  button: {
    marginTop: '100',
    padding: '100',
  },
});

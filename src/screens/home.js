import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBtn from '../addNote/addBtnContainer'


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <AddBtn />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

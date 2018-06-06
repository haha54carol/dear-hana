import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default class AddBtn extends Component {

  render() {

    return (
      <TouchableOpacity
        onPress={this.props.addNote}
        style={styles.button}
      >
        <Text>{this.props.note.count}</Text>
      </TouchableOpacity>
    )
  }
};


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10
  }
})
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';


class AddBtn extends Component {

  render() {

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Text>increment</Text>
      </TouchableOpacity>
    )
  }
};

class DelBtn extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Text>decrement</Text>
      </TouchableOpacity>
    )
  }
}

class DogImage extends Component {

  componentDidMount() {
    this.props.fetchDog()
  }

  render() {
    return (
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: this.props.url }} />
    )
  }
}

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AddBtn onPress={this.props.addNote} />
        <DelBtn onPress={this.props.deleteNote} />
        <DogImage url={this.props.note.url} fetchDog={this.props.callRequest} />
        <Text>{this.props.note.count}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('List')}
          style={styles.button}
        >
          <Text>New Note</Text>
        </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10
  }
})
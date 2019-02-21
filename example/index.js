import Picker from '../lib/Picker'
import React, { Component } from 'react'
import { AppRegistry, ScrollView, View, Text, TouchableOpacity } from 'react-native'

class TestComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }

  logEmoji (emoji) {
    console.log(emoji)
  }

  render() {
    return (
      <ScrollView style={{height: 480, width: 360, backgroundColor: '#f8f8ff'}}>
        <Picker
          onEmojiSelected={this.logEmoji.bind(this)}
          visible={this.state.visible}
          />
          <TouchableOpacity
            onPress={() => {this.setState({visible: !this.state.visible})}}>
            <Text>show / hide</Text>
          </TouchableOpacity>
      </ScrollView>
    )
  }
}


AppRegistry.registerComponent('App', () => TestComponent);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

//ReactDOM.render(<TestComponent />, document.getElementById('root'))

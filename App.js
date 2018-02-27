import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  state = {
    taps: 0,
    fact: null,
  }

  tap = () => {
    this.setState(prevState => ({ taps: prevState.taps + 1 }))
  }

  getCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(responseJson => this.setState({ fact: responseJson.fact }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.taps !== this.state.taps && this.state.taps % 5 === 0) {
      this.getCatFact()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Click here" onPress={this.tap} testID="button-tap" />

        {this.state.taps % 2 === 1 && (
          <Text testID="text-taps">{this.state.taps}</Text>
        )}

        {this.state.fact && <Text testID="text-fact">{this.state.fact}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
})

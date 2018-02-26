import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    clicks: 0,
    fact: null
  };

  click = () => {
    this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
  }

  getCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(responseJson => this.setState({ fact: responseJson.fact }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks && this.state.clicks % 5 === 0) {
      this.getCatFact()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Click here' onPress={this.click} />

        {this.state.clicks % 2 === 1 && (
          <Text testID="clicks">{this.state.clicks}</Text>
        )}

        {this.state.fact && (
          <Text testID="fact">{this.state.fact}</Text>
        )}
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

import React, { Component } from 'react'
import { Text } from 'react-native';

export default class Schedule extends Component {
  state = {
    schedule: {}
  }

  componentDidMount() {
    fetch('https://api.thefestfl.com/fest18/events')
      .then((response) => response.json())
      .then((response) => this.setState({ schedule: response }))
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Text>
        {JSON.stringify(this.state.schedule, null, 2)}
      </Text>
    )
  }
}

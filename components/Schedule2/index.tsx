import React, { Component } from 'react'

import { Container, Content, Text } from 'native-base'
import { groupBy, toPairs } from 'ramda'

import EventGroup from '../EventGroup'

export default class Schedule extends Component {
  state = {
    schedule: []
  }

  componentDidMount() {
    fetch('https://api.thefestfl.com/fest18/events')
      .then((response) => response.json())
      .then((response) => this.setState({ schedule: toPairs(groupBy(({ start_time }) => start_time, response)) }))
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.state.schedule.map(([timeBlock, schedule]) => (
              <EventGroup timeBlock={timeBlock} schedule={schedule} key={timeBlock}/>
            ))
          }
        </Content>
      </Container>
    )
  }
}

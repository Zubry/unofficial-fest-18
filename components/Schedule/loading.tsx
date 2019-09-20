import React from 'react'
import { Container, Content, Spinner, Header, Body, Left, Text, Button, Icon, Right } from 'native-base'

export default function ScheduleLoading({ day }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Text>
            {
              day === '1'
                ? 'Friday'
              : day === '2'
                ? 'Saturday'
              : 'Sunday'
            }
          </Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <Spinner />
      </Content>
    </Container>
  )
}

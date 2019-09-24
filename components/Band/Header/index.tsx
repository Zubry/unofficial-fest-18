import React from 'react'
import { Header, Body, Left, Text, Button, Icon, Right } from 'native-base'

export default function BandHeader({ name }) {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Text>{ name }</Text>
      </Body>
      <Right />
    </Header>
  )
}

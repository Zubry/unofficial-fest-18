import React from 'react'
import { Header, Body, Left, Text, Button, Icon, Right } from 'native-base'
import { useSelector } from 'react-redux'

export default function AppHeader() {
  const title = useSelector(state => {
    return state.headerApp.title
  })

  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Text>{ title }</Text>
      </Body>
      <Right />
    </Header>
  )
}

import React from 'react'
import { Header, Body, Left, Text, Button, Icon, Right } from 'native-base'
import { useSelector } from 'react-redux'

import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
});

export default function AppHeader() {
  const title = useSelector(state => {
    return state.headerApp.title
  })

  return (
    <Header style={styles.header}>
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

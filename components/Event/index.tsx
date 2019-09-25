import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem, Body, Right, Button, Icon, Text } from 'native-base'

export default function Event({ label, start_string, end_string }) {
  return (
    <ListItem noIndent>
      <Body>
        <Text>{label}</Text>
        <Text note numberOfLines={1}>{start_string}-{end_string}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="add-circle" style={{ color: '#ff4081' }} />
        </Button>
      </Right>
    </ListItem>
  )
}

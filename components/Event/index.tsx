import React, { Component } from 'react';

import { Container, Header, Content, List, ListItem, Text } from 'native-base';

interface EventProps {
  performer?: string,
  venue_name: string,
  memo: string,
  start_string: string,
  end_string: string,
}

export default function Event(props: EventProps) {
  return (
    <ListItem>
      <Text>{props.performer ? props.performer : props.memo}</Text>
    </ListItem>
  )
}

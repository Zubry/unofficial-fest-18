import React from 'react'
import { Container, Content, Spinner, Header, Body, Left, Text, Button, Icon, Right } from 'native-base'

export default function ScheduleLoading({ day }) {
  return (
    <Content>
      <Spinner />
    </Content>
  )
}

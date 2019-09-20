import React from 'react'

import { Container, Content, View, Card, CardItem, Header, Body, Left, Text, List, ListItem, Button, Icon, Right } from 'native-base'

import { groupBy, toPairs } from 'ramda'

export default function schedule({ day, schedule }) {
  const byVenue = toPairs(groupBy(({ venue_name }) => venue_name, schedule))
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
              day === 1
                ? 'Friday'
              : day === 2
                ? 'Saturday'
              : 'Sunday'
            }
          </Text>
        </Body>
        <Right />
      </Header>
      <Content>
        {
          byVenue.map(([venue, shows]) => (
            <Card key={venue}>
              <CardItem header>
                <Text>{venue}</Text>
              </CardItem>
              <CardItem>
                <List style={{ width: "100%" }}>
                  {
                    shows
                      .filter(show => show.memo !== 'Doors')
                      .map(show => (
                        <ListItem key={show.event_id} noIndent>
                          <View>
                            <Text>{ show.performer ? show.performer : show.memo }</Text>
                            <Text note>{show.start_string} - {show.end_string}</Text>
                          </View>
                        </ListItem>
                      ))
                  }
                </List>
              </CardItem>
            </Card>
          ))
        }
      </Content>
    </Container>
  )
}




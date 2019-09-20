import React from 'react'

import { Container, Content, View, Card, CardItem, Header, Body, Left, Text, List, ListItem, Button, Icon, Right } from 'native-base'
import { groupBy, toPairs } from 'ramda'

export default function ScheduleLoaded({ day, schedule }) {  
  const byVenue = toPairs(groupBy(({ venue_name }) => venue_name, schedule))

  return (
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
  )
}

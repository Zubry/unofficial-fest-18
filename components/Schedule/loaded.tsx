import React from 'react'

import { Container, Content, View, Card, CardItem, Header, Body, Left, Text, List, ListItem, Button, Icon, Right } from 'native-base'
import { groupBy, toPairs } from 'ramda'
import Event from '../Event'

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
                      <Event
                        key={show.event_id}
                        label={show.performer ? show.performer : show.memo}
                        start_string={show.start_string}
                        end_string={show.end_string}
                      />
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

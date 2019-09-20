import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';

import { Content, List, H2 } from 'native-base'
import { format } from 'date-fns'

import Event from '../Event'

export default function EventGroup({ timeBlock, schedule }) {
  return (
    <List>
      <H2>{format(parseInt(timeBlock, 10) * 1000, 'cccc, h:mm a')}</H2>
      {
        schedule.map(({ performer, venue_name, memo, event_id, start_string, end_string }) => (
          <Event
            performer={performer}
            venue_name={venue_name}
            memo={memo}
            start_string={start_string}
            end_string={end_string}
            key={event_id}
          />
        ))
      }
    </List>
  )
}

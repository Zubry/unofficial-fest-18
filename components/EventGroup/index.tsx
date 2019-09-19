import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

export default function EventGroup({ timeBlock, schedule }) {
  return (
    <View>
      <Text>{timeBlock}</Text>
      {
        schedule.map(({ performer, venue_name, memo, event_id, start_string, end_string, ...props }) => (
          <View key={event_id}>
            <Text>{start_string} - {end_string}</Text>
            <Text>{performer ? performer : memo} @ {venue_name}</Text>
          </View>
        ))
      }
    </View>
  )
}

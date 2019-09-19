import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

export default function Event(props) {
  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  )
}

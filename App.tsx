import React from 'react';
import { Container, Text } from 'native-base'

import { groupBy } from 'ramda'

import ScheduleData from './schedule.json'
import Schedule from './components/Schedule'

const schedule = groupBy(({ day }) => day, ScheduleData)

export default function App() {
  return (
    <Schedule schedule={schedule['1']} day={1} />
  );
}

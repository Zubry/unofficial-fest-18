import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'native-base'

import { fetchSchedule } from '../../stores/data/actions'
import { setHeader } from '../../stores/header/actions'

import ScheduleLoading from './loading'
import ScheduleLoaded from './loaded'
import Header from './Header'

export default function schedule({ day }) {
  const schedule = useSelector(state => {
    return state.dataApp.schedule ? state.dataApp.schedule[day] : null
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (schedule === null) {
      dispatch(fetchSchedule())
    }

    if (schedule != null) {
      dispatch(setHeader(day === 1 ? 'Friday' : day === 2 ? 'Saturday' : 'Sunday'))
    }
  })

  if (schedule === null) {
    return (
      <Container>
        <ScheduleLoading day={day}/>
      </Container>
    )
  } else {
    return (
      <Container>
        <ScheduleLoaded day={day} schedule={schedule} />
      </Container>
    )
  }
}

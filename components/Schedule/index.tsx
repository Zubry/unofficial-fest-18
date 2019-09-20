import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSchedule } from '../../stores/data/actions'

import ScheduleLoading from './loading'
import ScheduleLoaded from './loaded'

export default function schedule({ day }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSchedule())
  })

  const schedule = useSelector(state => {
    return state.dataApp.schedule ? state.dataApp.schedule[day] : null
  })

  if (schedule === null) {
    return (
      <ScheduleLoading day={day}/>
    )
  } else {
    return (
      <ScheduleLoaded day={day} schedule={schedule} />
    )
  }
}

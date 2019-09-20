import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text } from 'native-base'

import { setView } from './stores/view/actions'

import Schedule from './components/Schedule'

export default function Router() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setView('schedule', { day: '1' }))
  })

  const router = useSelector(state => {
    return state.viewApp
  })

  switch (router.route) {
    case 'schedule':
      return (
        <Schedule day={router.params.day} />
      )
    default:
      return (
        <Text>Home</Text>
      )
  }
}

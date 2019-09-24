import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text } from 'native-base'

import { setView } from './stores/view/actions'

import Schedule from './components/Schedule'
import Band from './components/Band'

export default function Router() {
  const router = useSelector(state => {
    return state.viewApp
  })

  switch (router.route) {
    case 'band':
      return (
        <Band id={router.params.id} />
      )
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

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Content, Text, Card, CardItem, Left, Right, Body, Button, Icon, List, ListItem, Footer, FooterTab, H2, H3 } from 'native-base'
import { Image } from 'react-native'
import { pipe, map, filter, toPairs } from 'ramda'

import { fetchBand, fetchSchedule } from '../../stores/data/actions'
import { setHeader } from '../../stores/header/actions'

import BandLoading from './Loading'
import Header from './Header'

const BandDescription = ({ text }) => (
  <Text>
    {text.slice(4, -5)}
  </Text>
)

export default function Band({ id }) {
  const { band, schedule, all } = useSelector(state => {
    return {
      band: state.dataApp.band ? state.dataApp.band[id] : null,
      schedule: state.dataApp.schedule
        ? pipe(
            map(schedule => filter(event => event.performer_id && parseInt(event.performer_id, 10) === id, schedule)),
            filter(day => day.length > 0),
            toPairs
          )(state.dataApp.schedule)
        : null,
      all: state.dataApp
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (band == null) {
      dispatch(fetchBand(id))
    }

    if (schedule == null) {
      dispatch(fetchSchedule())
    }

    if (band != null) {
      dispatch(setHeader(band.title.rendered))
    }
  })

  if (band == null) {
    return (
      <Container>
        <BandLoading />
      </Container>
    )
  } else {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{ uri: band.acf.photo.sizes.thumbnail }} style={{ width: null, height: band.acf.photo.sizes['thumbnail-height'], flex: 1 }} />
            </CardItem>
            <CardItem>
              <BandDescription text={band.content.rendered} />
            </CardItem>
            <CardItem>
              <Left style={{flexDirection: "row", justifyContent: "center"}}>
                <Button transparent>
                  <Icon active name="logo-twitter" style={{ color: '#ff4081' }} />
                </Button>
              </Left>
              <Body style={{flexDirection: "row", justifyContent: "center"}}>
                <Button transparent>
                  <Icon active name="logo-facebook" style={{ color: '#ff4081' }} />
                </Button>
              </Body>
              <Right style={{flexDirection: "row", justifyContent: "center"}}>
                <Button transparent>
                  <Icon active name="link" style={{ color: '#ff4081' }} />
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <H2>See {band.title.rendered} live</H2>
              </Body>
            </CardItem>
            {
              schedule.map(([day, daily_schedule]) => (
                <React.Fragment key={day}>
                  <CardItem>
                    <H3>
                      {
                        day === '1'
                          ? 'Friday'
                        : day === '2'
                          ? 'Saturday'
                        : 'Sunday'
                      }
                    </H3>
                  </CardItem>
                  <CardItem>
                    <List style={{ width: "100%" }}>
                      {
                        daily_schedule.map(event => (
                          <ListItem key={event.event_id}>
                            <Body>
                              <Text>{event.venue_name}</Text>
                              <Text note numberOfLines={1}>{event.start_string}-{event.end_string}</Text>
                            </Body>
                            <Right>
                              <Button transparent>
                                <Icon name="add-circle" style={{ color: '#ff4081' }} />
                              </Button>
                            </Right>
                          </ListItem>
                        ))
                      }
                    </List>
                  </CardItem>
                </React.Fragment>
              ))
            }
          </Card>
          <Card>
            <CardItem>
              <Body>
                <H2>Listen to {band.title.rendered}</H2>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Text>{band.acf.mp3_song_name}</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon name="play" style={{ color: '#ff4081' }} />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

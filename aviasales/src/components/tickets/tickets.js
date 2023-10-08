import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { format, roundToNearestMinutes } from 'date-fns'

import AviasalesService from '../../services/aviasales-services'
import S7 from '../../assets/images/S7.svg'
import U6 from '../../assets/images/U6.svg'
import UT from '../../assets/images/UT.svg'
import FV from '../../assets/images/FV.svg'
import W6 from '../../assets/images/W6.svg'
import DP from '../../assets/images/DP.svg'
import BT from '../../assets/images/BT.svg'
import AK from '../../assets/images/AK.svg'

import classes from './tickets.module.scss'

// ErrorBoundery
const carriers = {
  S7,
  U6,
  UT,
  FV,
  W6,
  DP,
  BT,
  AK,
}

function Tickets() {
  const [ticketsArr, setTicketsArr] = useState([])
  const aviasalesService = new AviasalesService()

  useEffect(() => {
    updateTickets()
  }, [])

  const updateTickets = () => {
    aviasalesService.getSearchId().then(onTicketsLoaded)
  }

  const onTicketsLoaded = (tickets) => {
    setTicketsArr((ticketsArr) => [...ticketsArr, ...tickets])
  }

  const tickets = ticketsArr.map(({ carrier, price, segments }) => {
    const id = uuidv4()

    const priseToString = price.toString()
    const priseToStringLength = priseToString.length
    const prise = priseToString.slice(0, priseToStringLength - 3) + ' ' + priseToString.slice(priseToStringLength - 3)

    const ticketRows = segments.map(({ date, destination, duration, origin, stops }, i) => {
      function roundedDate(date) {
        return roundToNearestMinutes(date, { nearestTo: 5 })
      }
      const originTime = format(roundedDate(new Date(date)), 'HH:mm')
      const destinationTime = format(roundedDate(new Date(Date.parse(date) + duration * 60000)), 'HH:mm')

      function formatTime(minutes) {
        const hours = Math.floor(minutes / 60)
        const remainingMinutes = Math.round((minutes % 60) / 5) * 5
        return `${hours}ч ${remainingMinutes}м`
      }

      const formattedTime = formatTime(duration)

      let stop
      if (stops.length === 1) stop = '1 пересадка'
      else stop = `${stops.length} пересадки`

      return (
        <div className={classes['ticket__row']} key={i}>
          <div className={classes['ticket__column']}>
            <p className={classes['ticket__head']}>
              {origin} - {destination}
            </p>
            <p className={classes['ticket__info']}>
              {originTime} - {destinationTime}
            </p>
          </div>
          <div className={classes['ticket__column']}>
            <p className={classes['ticket__head']}>В пути</p>
            <p className={classes['ticket__info']}>{formattedTime}</p>
          </div>
          <div className={classes['ticket__column']}>
            <p className={classes['ticket__head']}>{stop}</p>
            <p className={classes['ticket__info']}>{stops.join(', ')}</p>
          </div>
        </div>
      )
    })

    return (
      <div key={id} className={classes.ticket}>
        <div className={classes['ticket__header']}>
          <p className={classes['ticket__price']}>{prise} Р</p>
          <img className={classes['ticket__logo']} src={carriers[carrier]} alt="logo" />
        </div>
        <div className={classes['ticket__content']}>{ticketRows}</div>
      </div>
    )
  })

  return <>{tickets}</>
}

export default Tickets

// src={`//pics.avs.io/99/36/${el.carrier}.png`}

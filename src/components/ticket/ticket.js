import { v4 as uuidv4 } from 'uuid'
import { format, roundToNearestMinutes } from 'date-fns'

import classes from './ticket.module.scss'

function Ticket({ ticket: { price, carrier, segments } }) {
  const id = uuidv4()

  const priseToString = price.toString()
  const priseToStringLength = priseToString.length
  const prise = priseToString.slice(0, priseToStringLength - 3) + ' ' + priseToString.slice(priseToStringLength - 3)

  const ticketRows = segments.map((segment, i) => {
    return <TicketRows segment={segment} key={i} />
  })

  return (
    <div key={id} className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <p className={classes['ticket__price']}>{prise} Р</p>
        <img className={classes['ticket__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={classes['ticket__content']}>{ticketRows}</div>
    </div>
  )
}

function TicketRows({ segment: { date, destination, duration, origin, stops } }) {
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
  if (stops.length === 0) stop = '0 пересадок'
  else if (stops.length === 1) stop = '1 пересадка'
  else stop = `${stops.length} пересадки`

  return (
    <div className={classes['ticket__row']}>
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
}

export default Ticket

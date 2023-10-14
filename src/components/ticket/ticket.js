import { v4 as uuidv4 } from 'uuid'

import TicketRows from '../ticketRows'

import classes from './ticket.module.scss'

function Ticket({ ticket: { price, carrier, segments } }) {
  const priseToString = price.toString()
  const priseToStringLength = priseToString.length
  const prise = priseToString.slice(0, priseToStringLength - 3) + ' ' + priseToString.slice(priseToStringLength - 3)

  const ticketRows = segments.map((segment, i) => {
    return <TicketRows segment={segment} key={i} />
  })

  return (
    <div key={uuidv4()} className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <p className={classes['ticket__price']}>{prise} Р</p>
        <img className={classes['ticket__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={classes['ticket__content']}>{ticketRows}</div>
    </div>
  )
}

export default Ticket

import { v4 as uuidv4 } from 'uuid'

import classes from './tickets.module.scss'
import logo from './Logo.svg'

function Tickets() {
  const ticketArr = [
    {
      price: 13400,
      logo: logo,
      firstDir: 'MOW – HKT',
      firstInterval: '10:45 – 08:00',
      secondDir: 'MOW – HKT',
      secondInterval: '11:20 – 00:50',
      firstDuration: '21ч 15м',
      secondDuration: '13ч 30м',
      firstTransfer: '2 пересадки',
      firstTransferName: 'HKG, JNB',
      secondTransfer: '1 пересадка',
      secondTransferName: 'HKG',
    },
    {
      price: 13400,
      logo: logo,
      firstDir: 'MOW – HKT',
      firstInterval: '10:45 – 08:00',
      secondDir: 'MOW – HKT',
      secondInterval: '11:20 – 00:50',
      firstDuration: '21ч 15м',
      secondDuration: '13ч 30м',
      firstTransfer: '2 пересадки',
      firstTransferName: 'HKG, JNB',
      secondTransfer: '1 пересадка',
      secondTransferName: 'HKG',
    },
    {
      price: 13400,
      logo: logo,
      firstDir: 'MOW – HKT',
      firstInterval: '10:45 – 08:00',
      secondDir: 'MOW – HKT',
      secondInterval: '11:20 – 00:50',
      firstDuration: '21ч 15м',
      secondDuration: '13ч 30м',
      firstTransfer: '2 пересадки',
      firstTransferName: 'HKG, JNB',
      secondTransfer: '1 пересадка',
      secondTransferName: 'HKG',
    },
    {
      price: 13400,
      logo: logo,
      firstDir: 'MOW – HKT',
      firstInterval: '10:45 – 08:00',
      secondDir: 'MOW – HKT',
      secondInterval: '11:20 – 00:50',
      firstDuration: '21ч 15м',
      secondDuration: '13ч 30м',
      firstTransfer: '2 пересадки',
      firstTransferName: 'HKG, JNB',
      secondTransfer: '1 пересадка',
      secondTransferName: 'HKG',
    },
    {
      price: 13400,
      logo: logo,
      firstDir: 'MOW – HKT',
      firstInterval: '10:45 – 08:00',
      secondDir: 'MOW – HKT',
      secondInterval: '11:20 – 00:50',
      firstDuration: '21ч 15м',
      secondDuration: '13ч 30м',
      firstTransfer: '2 пересадки',
      firstTransferName: 'HKG, JNB',
      secondTransfer: '1 пересадка',
      secondTransferName: 'HKG',
    },
  ]

  const ticket = ticketArr.map((el) => {
    const id = uuidv4()

    const priseToString = el.price.toString()
    const priseToStringLength = priseToString.length
    const prise = priseToString.slice(0, priseToStringLength - 3) + ' ' + priseToString.slice(priseToStringLength - 3)

    return (
      <div key={id} className={classes.ticket}>
        <div className={classes['ticket__header']}>
          <p className={classes['ticket__price']}>{prise} Р</p>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes['ticket__content']}>
          <div className={classes['ticket__column']}>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>{el.firstDir}</p>
              <p className={classes['ticket__info']}>{el.firstInterval}</p>
            </div>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>{el.secondDir}</p>
              <p className={classes['ticket__info']}>{el.secondInterval}</p>
            </div>
          </div>
          <div className={classes['ticket__column']}>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>В пути</p>
              <p className={classes['ticket__info']}>{el.firstDuration}</p>
            </div>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>В пути</p>
              <p className={classes['ticket__info']}>{el.secondDuration}</p>
            </div>
          </div>
          <div className={classes['ticket__column']}>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>{el.firstTransfer}</p>
              <p className={classes['ticket__info']}>{el.firstTransferName}</p>
            </div>
            <div className={classes['ticket__row']}>
              <p className={classes['ticket__head']}>{el.secondTransfer}</p>
              <p className={classes['ticket__info']}>{el.secondTransferName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return <div>{ticket}</div>
}

export default Tickets

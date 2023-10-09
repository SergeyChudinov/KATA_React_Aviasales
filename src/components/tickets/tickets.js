import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'

import { listTicked } from '../../redux/actions'
import Ticket from '../ticket'
import Btn from '../button/button'
import Spinner from '../spinner/spinner'
import sortTickets from '../../sortFunc/sortTickets'
import filterTickets from '../../sortFunc/filterTickets'

function Tickets() {
  const dispatch = useDispatch()
  const ticketsArr = useSelector((state) => state.tickets.tickets)
  const sortValue = useSelector((state) => state.sort)
  const checkboxValue = useSelector((state) => state.check)
  const loading = useSelector((state) => state.tickets.loading)
  const [ticketsLenth, setTicketsLenth] = useState(5)

  useEffect(() => {
    dispatch(listTicked())
  }, [])

  const addTickets = () => {
    setTicketsLenth((ticketsLenth) => ticketsLenth + 5)
  }

  sortTickets(ticketsArr, sortValue)
  const filtredTickets = filterTickets(ticketsArr, checkboxValue)

  const tickets = filtredTickets.slice(0, ticketsLenth).map((ticket) => {
    const id = uuidv4()
    return <Ticket key={id} ticket={ticket} />
  })

  if (filtredTickets.length > 0) {
    return (
      <>
        {loading ? <Spinner /> : null}
        {tickets}
        <Btn addTickets={addTickets} />
      </>
    )
  }
  return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
}

export default Tickets

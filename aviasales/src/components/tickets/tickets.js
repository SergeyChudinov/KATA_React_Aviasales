import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AviasalesService from '../../services/aviasales-services'
import Ticket from '../ticket'

function Tickets() {
  const [ticketsArr, setTicketsArr] = useState([])
  const [searchId, setSearchId] = useState(null)
  // const [stop, setStop] = useState(false)
  const aviasalesService = new AviasalesService()

  useEffect(() => {
    if (!searchId) {
      getSearchId()
    } else {
      updateTickets(searchId)
    }
  }, [searchId])

  const getSearchId = () => {
    aviasalesService.getSearchId().then(onSearchIdLoaded)
  }

  const updateTickets = () => {
    aviasalesService.getTickets(searchId).then(onTicketsLoaded)
  }

  const onSearchIdLoaded = (res) => {
    setSearchId(res)
  }

  const onTicketsLoaded = (res) => {
    setTicketsArr((ticketsArr) => [...ticketsArr, ...res.tickets])
    // setStop(res.stop)
    // !stop && updateTickets()
  }

  const tickets = ticketsArr.map((ticket) => {
    const id = uuidv4()
    return <Ticket key={id} ticket={ticket} />
  })

  if (ticketsArr) return <>{tickets}</>
}

export default Tickets

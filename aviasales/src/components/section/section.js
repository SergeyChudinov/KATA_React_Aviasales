import './section.scss'

import Filter from '../filter'
import Tickets from '../tickets'

function Section() {
  return (
    <section className="section">
      <Filter />
      <Tickets />
    </section>
  )
}

export default Section

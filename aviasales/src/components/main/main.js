import FilterTransfer from '../filterTransfer/filterTransfer'
import Section from '../section/section'

import classes from './main.module.scss'

function Main() {
  return (
    <div className={classes.main}>
      <FilterTransfer />
      <Section />
    </div>
  )
}

export default Main

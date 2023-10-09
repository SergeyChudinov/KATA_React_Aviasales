import Checkboxes from '../checkboxes/checkboxes'
import Section from '../section/section'

import classes from './main.module.scss'

function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Checkboxes />
      </div>
      <Section />
    </div>
  )
}

export default Main

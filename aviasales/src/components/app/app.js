import Main from '../main'

import classes from './app.module.scss'
import logo from './Logo.svg'

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <Main />
    </div>
  )
}

export default App

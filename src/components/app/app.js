import Main from '../main'
import ErrorBoundry from '../error-boundry/error-boundry'

import classes from './app.module.scss'
import logo from './Logo.svg'

function App() {
  return (
    <ErrorBoundry>
      <div className={classes.app}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Main />
      </div>
    </ErrorBoundry>
  )
}

export default App

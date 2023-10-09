import React from 'react'
import { Spin } from 'antd'

import classes from './spinner.module.scss'

const App = () => (
  <div className={classes.example}>
    <Spin />
  </div>
)
export default App

import React from 'react'
import { Button, Space } from 'antd'

import classes from './button.module.scss'

const Btn = ({ addTickets }) => (
  <div className={classes.btn}>
    <Space wrap>
      <Button type="primary" onClick={addTickets}>
        Далее
      </Button>
    </Space>
  </div>
)
export default Btn

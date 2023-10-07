import { connect } from 'react-redux'

import { ALL, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from '../../redux/types'
import * as actions from '../../redux/actions'

import classes from './checkboxes.module.scss'

function Checkboxes({ check, setAllTransfers, setNoTransfers, setOneTransfer, setTwoTransfers, setThreeTransfers }) {
  const filters = [
    {
      type: ALL,
      checked: 'all',
      name: 'Все',
      sort: setAllTransfers,
    },
    {
      type: NO_TRANSFERS,
      checked: 'noTransfers',
      name: 'Без пересадок',
      sort: setNoTransfers,
    },
    {
      type: ONE_TRANSFER,
      checked: 'oneTransfers',
      name: '1 пересадка',
      sort: setOneTransfer,
    },
    {
      type: TWO_TRANSFERS,
      checked: 'twoTransfers',
      name: '2 пересадки',
      sort: setTwoTransfers,
    },
    {
      type: THREE_TRANSFERS,
      checked: 'threeTransfers',
      name: '3 пересадки',
      sort: setThreeTransfers,
    },
  ]

  const checkboxs = filters.map((el, i) => {
    return (
      <div className={classes['check__container']} key={i}>
        <label className={`${classes.check} ${classes.option}`}>
          <input className={classes['check__input']} type="checkbox" checked={check[el.checked]} onChange={el.sort} />
          <span className={classes['check__box']}></span>
          {el.name}
        </label>
      </div>
    )
  })

  return (
    <div className={classes.checkboxes}>
      <h3 className={classes.title}>Количество пересадок</h3>
      {checkboxs}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    check: state.check,
  }
}

export default connect(mapStateToProps, actions)(Checkboxes)

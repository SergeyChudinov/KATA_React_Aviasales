import { connect } from 'react-redux'

import { CHEAP, FAST, OPTIMAL } from '../../redux/types'
import * as actions from '../../redux/actions'

import classes from './sort.module.scss'

function Sort({ filter, showCheap, showFast, showOptimal }) {
  const filters = [
    {
      type: CHEAP,
      name: 'Самый дешевый',
      sort: showCheap,
    },
    {
      type: FAST,
      name: 'Самый быстрый',
      sort: showFast,
    },
    {
      type: OPTIMAL,
      name: 'Оптимальный',
      sort: showOptimal,
    },
  ]

  const filtersItems = filters.map((el, i) => {
    let className = ''
    if (el.type === filter) {
      className = classes.active
    }
    return (
      <div key={i} className={`${classes['sort']} ${className}`} onClick={el.sort}>
        <input type="radio" name="sort" id={el.type} className={`${classes['sort__radio']}`} />
        <label htmlFor={el.type} className={`${classes['sort__label']}`}>
          {el.name}
        </label>
      </div>
    )
  })

  return <fieldset className={classes.fieldset}>{filtersItems}</fieldset>
}

const mapStateToProps = (state) => {
  return {
    filter: state.sort,
  }
}

export default connect(mapStateToProps, actions)(Sort)

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
      <button className={`${classes['sort__btn']} ${className}`} key={i} onClick={el.sort}>
        {el.name}
      </button>
    )
  })

  return <div className={classes.sort}>{filtersItems}</div>
}

const mapStateToProps = (state) => {
  return {
    filter: state.sort,
  }
}

export default connect(mapStateToProps, actions)(Sort)

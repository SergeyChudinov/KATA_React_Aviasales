import classes from './filter.module.scss'

function Filter() {
  return (
    <div className={classes.filter}>
      <button className={`${classes['filter__btn']} ${classes.active}`}>Самый дешевый</button>
      <button className={classes['filter__btn']}>Самый быстрый</button>
      <button className={classes['filter__btn']}>Оптимальный</button>
    </div>
  )
}

export default Filter

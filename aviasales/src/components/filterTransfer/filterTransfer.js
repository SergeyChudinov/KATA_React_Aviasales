import classes from './filterTransfer.module.scss'

function FilterTransfer() {
  const filters = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  const checkboxs = filters.map((el, i) => {
    return (
      <div className={classes['check__container']} key={i}>
        <label className={`${classes.check} ${classes.option}`}>
          <input className={classes['check__input']} type="checkbox" />
          <span className={classes['check__box']}></span>
          {el}
        </label>
      </div>
    )
  })

  return (
    <div className={classes.filterTransfer}>
      <h3 className={classes.title}>Количество пересадок</h3>
      {checkboxs}
    </div>
  )
}

export default FilterTransfer

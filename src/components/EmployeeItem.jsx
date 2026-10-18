function EmployeeItem({
  employee,
  onRemove,
  onTogglePromotion,
  onToggleBonus
}) {
  const { id, name, salary, bonus, promotion } = employee

  return (
    <div className="employee">
      <span
        className={promotion ? 'name promotion' : 'name'}
        onClick={() => onTogglePromotion(id)}
      >
        {name}
      </span>

      <span>{salary}$</span>

      <div className="actions">
        <button
          className={bonus ? 'cookie active' : 'cookie'}
          onClick={() => onToggleBonus(id)}
          aria-label={`Переключить премию: ${name}`}
        >
          🍪
        </button>

        <button
          onClick={() => onRemove(id)}
          aria-label={`Удалить сотрудника: ${name}`}
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default EmployeeItem

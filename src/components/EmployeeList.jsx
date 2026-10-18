import EmployeeItem from './EmployeeItem'

function EmployeeList({
  employees,
  onRemove,
  onTogglePromotion,
  onToggleBonus
}) {
  return (
    <section className="list">
      {employees.map(emp => (
        <EmployeeItem
          key={emp.id}
          employee={emp}
          onRemove={onRemove}
          onTogglePromotion={onTogglePromotion}
          onToggleBonus={onToggleBonus}
        />
      ))}

      {!employees.length && (
        <div className="empty">
          Сотрудники не найдены
        </div>
      )}
    </section>
  )
}

export default EmployeeList

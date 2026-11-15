function AddEmployee({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value.trim()
    const salary = Number(form.salary.value)

    if (!name) {
      alert('Введите имя сотрудника')
      return
    }

    if (!form.salary.value || !Number.isFinite(salary) || salary <= 0) {
      alert('Введите корректную зарплату (больше 0)')
      return
    }

    onAdd(e)
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <h2>Добавьте нового сотрудника</h2>

      <input
        name="name"
        placeholder="Как его зовут?"
        required
        minLength={2}
        maxLength={30}
      />

      <input
        name="salary"
        type="number"
        min="0.01"
        step="0.01"
        placeholder="З/П в $"
        required
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddEmployee

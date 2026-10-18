function AddEmployee({
  name,
  setName,
  salary,
  setSalary,
  onAdd
}) {
  return (
    <form className="add" onSubmit={onAdd}>
      <h2>Добавьте нового сотрудника</h2>

      <input
        placeholder="Как его зовут?"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="number"
        min="0"
        placeholder="З/П в $"
        value={salary}
        onChange={e => setSalary(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddEmployee
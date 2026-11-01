function AddEmployee({ onAdd }) {
  return (
    <form className="add" onSubmit={onAdd}>
      <h2>Добавьте нового сотрудника</h2>

      <input
        name="name"
        placeholder="Как его зовут?"
        required
      />

      <input
        name="salary"
        type="number"
        min="0"
        placeholder="З/П в $"
        required
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddEmployee
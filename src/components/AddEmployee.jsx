import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Введите имя сотрудника')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(30, 'Имя не должно превышать 30 символов'),

  salary: yup
    .number()
    .typeError('Введите корректную зарплату')
    .positive('Зарплата должна быть больше 0')
    .required('Введите зарплату')
})

function AddEmployee({ onAdd }) {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget

    const values = {
      name: form.elements.name.value,
      salary: form.elements.salary.value
    }

    try {
      const validatedData = await validationSchema.validate(values)

      onAdd({
        name: validatedData.name,
        salary: validatedData.salary
      })

      form.reset()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <h2>Добавьте нового сотрудника</h2>

      <input
        name="name"
        placeholder="Как его зовут?"
        minLength={2}
        maxLength={30}
      />

      <input
        name="salary"
        type="number"
        min="0.01"
        step="0.01"
        placeholder="З/П в $"
      />

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddEmployee

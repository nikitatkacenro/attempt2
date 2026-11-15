import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      salary: ''
    }
  })

  const onSubmit = (data) => {
    onAdd({
      name: data.name,
      salary: data.salary
    })

    reset()
  }

  return (
    <form className="add" onSubmit={handleSubmit(onSubmit)}>
      <h2>Добавьте нового сотрудника</h2>

      <input
        {...register('name')}
        placeholder="Как его зовут?"
        minLength={2}
        maxLength={30}
      />

      {errors.name && (
        <p className="error">{errors.name.message}</p>
      )}

      <input
        {...register('salary')}
        type="number"
        min="0.01"
        step="0.01"
        placeholder="З/П в $"
      />

      {errors.salary && (
        <p className="error">{errors.salary.message}</p>
      )}

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddEmployee

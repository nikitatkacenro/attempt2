import * as yup from 'yup'

export const validationSchema = yup.object({
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

// import { useForm } from "react-hook-form";

// function RegistrationForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       secondName: "",
//       email: "",
//       password: "",
//       phone: "",
//       sex: "male",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Данные формы:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h2>Регистрация</h2>

      
//       <div>
//         <label>Имя:</label>
//         <input
//           {...register("firstName", {
//             required: "Имя обязательно для заполнения",
//           })}
//         />
//         {errors.firstName && (
//           <p>{errors.firstName.message}</p>
//         )}
//       </div>

      
//       <div>
//         <label>Фамилия:</label>
//         <input
//           {...register("secondName", {
//             required: "Фамилия обязательна для заполнения",
//           })}
//         />
//         {errors.secondName && (
//           <p>{errors.secondName.message}</p>
//         )}
//       </div>

      
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           {...register("email", {
//             required: "Email обязателен для заполнения",
//             pattern: {
//               value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//               message: "Введите корректный email",
//             },
//           })}
//         />
//         {errors.email && (
//           <p>{errors.email.message}</p>
//         )}
//       </div>

      
//       <div>
//         <label>Пароль:</label>
//         <input
//           type="password"
//           {...register("password", {
//             required: "Пароль обязателен для заполнения",
//             pattern: {
//               value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
//               message:
//                 "Пароль должен содержать минимум 8 символов, букву и цифру",
//             },
//           })}
//         />
//         {errors.password && (
//           <p>{errors.password.message}</p>
//         )}
//       </div>

      
//       <div>
//         <label>Телефон:</label>
//         <input
//           type="tel"
//           {...register("phone", {
//             required: "Телефон обязателен для заполнения",
//             pattern: {
//               value: /^\+?[0-9]{10,15}$/,
//               message: "Введите корректный номер телефона",
//             },
//           })}
//         />
//         {errors.phone && (
//           <p>{errors.phone.message}</p>
//         )}
//       </div>

      
//       <div>
//         <label>Пол:</label>
//         <select {...register("sex")}>
//           <option value="male">Мужской</option>
//           <option value="female">Женский</option>
//         </select>
//       </div>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

// export default RegistrationForm;

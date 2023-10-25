import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  role: yup.string().required(),
  salary: yup.number().integer().required(),
  working_hours: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});

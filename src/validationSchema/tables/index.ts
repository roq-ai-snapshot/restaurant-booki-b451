import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().required(),
  seating_capacity: yup.number().integer().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
  reservation_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  table_number: yup.number().integer().required(),
  special_requests: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});

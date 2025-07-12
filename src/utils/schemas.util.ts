import * as Yup from 'yup';

export const loginShema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

export const registerSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      'Must include uppercase, lowercase, and number'
    )
    .required('Password is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirmation required'),
  education_start_date: Yup.date()
    .typeError('Start date must be a valid date')
    .required('Start date is required'),
  education_end_date: Yup.date()
    .typeError('End date must be a valid date')
    .min(Yup.ref('education_start_date'), 'End date must be after start date')
    .required('End date is required'),
  terms: Yup.bool()
    .oneOf([true], 'You must accept the terms')
    .required('Terms must be accepted'),
})

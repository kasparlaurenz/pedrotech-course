import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormInputs = {
  fullName: string;
  email: string;
  age: number;
  password: string;
  confirmedPassword: string;
};
const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(15).required(),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords dont match')
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Full Name" {...register('fullName')} />
      <p>{errors.fullName?.message}</p>
      <p>{errors.fullName && <div>Individual Error Message</div>}</p>

      <input type="text" placeholder="Email" {...register('email')} />
      <input type="number" placeholder="Age" {...register('age')} />
      <input
        type="password"
        placeholder="Password"
        autoComplete="on"
        {...register('password')}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="on"
        {...register('confirmedPassword')}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

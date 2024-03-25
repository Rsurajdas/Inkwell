'use client';

import { useForm } from 'react-hook-form';
import Button from '@/components/button/button';
import FormGroup from '@/components/form/FormGroup';
import FormInput from '@/components/form/FormInput';
import styles from '@/components/form/form.module.css';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className="pt-12 bg-dark text-center min-h-screen">
      <div className="xl:container">
        <div className="form-header">
          <h1 className="text-h1 text-center mb-2">Sign Up</h1>
          <p className="mr-auto mb-10 ml-auto max-w-[24rem] text-center">
            Fill out the form below to sign up for InkWell. Already signed up?
            Then just{' '}
            <a href="login" style={{ textDecoration: 'underline' }}>
              Log In
            </a>
          </p>
          {/* {errors ? (
            <div className=" max-w-[26rem] mb-4 bg-white text-secondary p-4 my-auto">
              <ul className="mt-[0.375rem] text-[#555] text-xs text-left mb-0 pl-0 list-none">
                <li>{errors?.confirmPassword?.message}</li>
              </ul>
            </div>
          ) : null} */}
        </div>
        <div className="form-container pt-9 px-7 pb-5 max-w-[26rem] mx-auto rounded-lg bg-[#f3f7fd]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormInput
                type="text"
                label="Username"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="username"
                register={register}
                inputName={'username'}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="email"
                label="Email"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="email"
                register={register}
                inputName={'email'}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                label="Password"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="password"
                register={register}
                inputName={'password'}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                label="Confirm Password"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="confirmPassword"
                register={register}
                inputName={'confirmPassword'}
                getValues={getValues('password')}
                hasError={errors}
              />
            </FormGroup>
            <FormGroup>
              <label
                htmlFor="terms"
                className={`text-[#555] ${styles.checkbox} flex items-center`}
              >
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-[0.375rem] accent-secondary"
                  {...register('terms')}
                />
                I agree with InkWell&apos;s Privacy Policy and Terms Conditions
              </label>
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                className="inline-block w-full h-14 bg-secondary rounded-3xl border border-solid border-secondary text-white font-bold text-[0.875rem] uppercase cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:text-secondary"
              >
                Sign up
              </Button>
            </FormGroup>
          </form>
        </div>
      </div>
    </main>
  );
}

'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

export default function FormInput({
  type,
  inputName,
  inputStyles,
  labelStyles,
  id,
  label,
  hasError,
  register,
  getValues,
}) {
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {inputName !== 'confirmPassword' ? (
        <input
          type={!showPassword ? type : 'text'}
          className={`${inputStyles} ${inputValue ? 'notEmpty' : ''}`}
          id={id}
          {...register(inputName, {
            onChange: (e) => setInputValue(e.target.value),
          })}
        />
      ) : (
        <input
          type={!showPassword ? type : 'text'}
          className={`${inputStyles} ${inputValue ? 'notEmpty' : ''}`}
          id={id}
          {...register(inputName, {
            validate: (value) => value === getValues || 'Password not matching',
            onChange: (e) => setInputValue(e.target.value),
          })}
        />
      )}
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      {type === 'password' ? (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword((s) => !s)}
        >
          <FontAwesomeIcon
            icon={!showPassword ? faEyeSlash : faEye}
            className="text-[#555]"
          />
        </button>
      ) : null}
    </>
  );
}

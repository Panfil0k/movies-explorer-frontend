import { useState, useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    !value
    ? setErrors({ ...errors, [name]: 'Заполните это поле' })
    : (name === 'userName' && (value.length < 3 || value.length > 30))
    ? setErrors({...errors, [name]: 'Имя должно содержать от 3 до 30 символов'})
    : (name === 'userName' && !/^[a-zA-Z\- \u0400-\u04FF]*$/.test(value))
    ? setErrors({...errors, [name]: 'Только латиница, кириллица, пробел и дефис'})
    : (name === 'userEmail' && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
    ? setErrors({ ...errors, [name]: 'Некорректный E-mail' })
    : (name === 'password' && value.length < 6)
    ? setErrors({ ...errors, [name]: 'Слишком короткий пароль' })
    : setErrors({ ...errors, [name]: '' });

    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, setValues, isValid, errors, resetForm };
}

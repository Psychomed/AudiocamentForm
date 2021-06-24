import {useEffect, useState} from 'react';
import FormCodeService from "../components/services/FormCodeService";

const useForm = (callback, validate, onResponse) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    code: '41D92-28EAF-B3B53',
    email: '',
    resellers: '',
    customResseler: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleChangeCode = e => {
    const { name, value } = e.target
    
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    FormCodeService.postCode(values).then(function (data) {
      console.log(data);
      onResponse(true, data);
    }).catch((e) => {
      onResponse(false, e);
    })

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChangeCode, handleChange, handleSubmit, values, errors };
};

export default useForm;

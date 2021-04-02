import React, { useState, useEffect } from "react";

const Useform = (callback, Validate) => {
  const [values, setValues] = useState({
    emailc: "",
    pwdc: "",
    nom: "",
    prenom: "",
    email: "",
    pwd: "",
    mpwd: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default Useform;

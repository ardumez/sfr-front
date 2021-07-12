import React, { useState } from "react";
import InputText from '../../components/InputText';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const telephoneFormStep1Schema = Yup.object().shape({
  nom: Yup.string()
    .min(2, 'Taille min de 2')
    .max(50, 'Taille max de 50')
    .required('Obligatoire'),
  prenom: Yup.string()
    .min(2, 'Taille min de 2')
    .max(50, 'Taille max de 50')
    .required('Obligatoire'),
});

function TelephoneFormStep1({ onStepSubmit = f => f }) {
  const onSubmit = values => {
    onStepSubmit({ ...values });
  }
  return (
    <Formik
      initialValues={{
        nom: '',
        prenom: '',
      }}
      validationSchema={telephoneFormStep1Schema}
      onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form className="s-form-content">
          <p>
            En répondant a ces quelques questions vous pourrez changer de forfait mobile de façon rapide et facile
            <br />
            <br />
          </p>
          <InputText label="Nom" name="nom" touched={touched} errors={errors} />
          <InputText label="Prénom" name="prenom" touched={touched} errors={errors} />
          <div className="form-group row s-form-row s-form-submit-row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Définir mes options</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TelephoneFormStep1;
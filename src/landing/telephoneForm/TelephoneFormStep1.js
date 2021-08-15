import React, { useState } from "react";
import InputText from '../../Components/InputText';
import FormLabel from '../../Components/FormLabel';
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

function TelephoneFormStep1({ onStepSubmit = f => f, defaultValue }) {
  const onSubmit = values => {
    onStepSubmit({ ...values });
  }
  return (
    <Formik
      initialValues={{
        nom: defaultValue?.nom || '',
        prenom: defaultValue?.prenom || '',
      }}
      validationSchema={telephoneFormStep1Schema}
      onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form className="s-form-content">
          <FormLabel>
            En répondant a ces quelques questions vous pourrez comparer les forfaits mobiles.
          </FormLabel>
          <InputText label="Nom" name="nom" touched={touched} errors={errors} />
          <InputText label="Prénom" name="prenom" touched={touched} errors={errors} />
          <div className="form-group row s-form-row s-form-submit-row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Définir mes options</button>
            </div>
          </div>
        </Form>
      )
      }
    </Formik >
  );
}

export default TelephoneFormStep1;
import React, { useState } from "react";
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const telephoneFormStep1Schema = Yup.object().shape({
  operateurCode: Yup.string()
    .required('Obligatoire'),
  smsIlimite: Yup.boolean()
    .required('Obligatoire'),
  appelIlimite: Yup.boolean()
    .required('Obligatoire'),
});

function TelephoneFormStep2({ onStepSubmit = f => f }) {

  const dropdownOptions = [
    { key: '', value: 'Choisir un operateur' },
    { key: 'ORANGE', value: 'Orange' },
    { key: 'SFR', value: 'Sfr' },
    { key: 'BOUYGUES', value: 'Bouygues' }
  ]
  return (
    <Formik
      initialValues={{
        nom: '',
        prenom: '',
      }}
      validationSchema={telephoneFormStep1Schema}
      onSubmit={onStepSubmit}>
      {({ errors, touched }) => (
        <Form className="s-form-content">
          <p>
            Vous pouvez décrire votre forfait actuelle.
            <br />
            <br />
          </p>

          <Field as="select" name="operateur">
            <option value="orange">Orange</option>
            <option value="green">Sfr</option>
            <option value="blue">Bouygues</option>
          </Field>
          <Dropdown label="Operateur" name="operateurCode" options={dropdownOptions} touched={touched} errors={errors} />
          <InputText label="Operateur" name="nom" touched={touched} errors={errors} />
          <InputText label="SMS Ilimité" name="prenom" touched={touched} errors={errors} />
          <InputText label="Appel Ilimité" name="prenom" touched={touched} errors={errors} />
          <InputText label="Internet" name="prenom" touched={touched} errors={errors} />
          <div className="form-group row s-form-row s-form-submit-row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5">Précedent</button>
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Etape suivante</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TelephoneFormStep2;
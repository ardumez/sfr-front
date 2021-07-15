import React, { useState, useEffect } from "react";
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const telephoneFormStep1Schema = Yup.object().shape({
  operateurCode: Yup.string()
    .required('Obligatoire'),
  smsCode: Yup.boolean()
    .required('Obligatoire'),
  internetCode: Yup.boolean()
    .required('Obligatoire'),
});

function TelephoneFormStep2({ onStepSubmit = f => f, operateurs }) {
  const dropdownOperateursOptions = operateurs.map((a) => {
    var obj = {};
    obj.key = a.code;
    obj.value = a.label;
    return obj;
  });
  const dropdownDureeAppelsOptions = [
    { key: '', value: 'Choisir une durée d\'appels' },
    { key: 'APPELS_2H', value: '2h d\'appels' },
    { key: 'APPEL_ILIMITE', value: 'Ilimité' },
  ];
  const dropdownSmsOptions = [
    { key: '', value: 'Choisir une option d\'SMS' },
    { key: 'SMS_ILIMITE', value: 'Ilimité' },
  ];
  const dropdownInternetOptions = [
    { key: '', value: 'Choisir une option internet' },
    { key: 'INTERNET_5GO', value: '5Go' },
    { key: 'INTERNET_10GO', value: '10Go' },
  ];
  return (
    <Formik
      initialValues={{
        operateurCode: '',
        dureeAppelCode: '',
        smsCode: ''
      }}
      validationSchema={telephoneFormStep1Schema}
      onSubmit={onStepSubmit}>
      {({ values, errors, touched }) => (
        <Form className="s-form-content">
          <p>
            Vous pouvez décrire votre forfait actuelle.
            <br />
            <br />
          </p>
          <Dropdown label="Operateur" name="operateurCode" options={dropdownOperateursOptions} touched={touched} errors={errors} />
          {values.operateurCode &&
            <>
              <Dropdown label="Durée d'appels" name="dureeAppelCode" options={dropdownDureeAppelsOptions} touched={touched} errors={errors} />
              <Dropdown label="SMS" name="smsCode" options={dropdownSmsOptions} touched={touched} errors={errors} />
              <Dropdown label="Internet" name="internetCode" options={dropdownInternetOptions} touched={touched} errors={errors} />
            </>
          }
          <div className="form-group row s-form-row s-form-submit-row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5">Mon profile</button>
              <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Voir les offres</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TelephoneFormStep2;
import { Field } from 'formik';
import './InputText.css';

function InputText({ label, name, touched, errors }) {
  return (
    <div className="form-group row s-form-row">
      <label className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-8">
        <Field
          name={name}
          type="text"
          className="sfr-form-control form-control"
          autoComplete="off" />
        {touched[name] && errors[name] && <div><i className="sfr-error-form">{errors[name]}</i></div>}
      </div>
      <label className="col-sm-1 col-form-label">
        {touched[name] && !errors[name] && <i className="bi bi-check-lg"></i>}
      </label>
    </div>
  );
}

export default InputText;
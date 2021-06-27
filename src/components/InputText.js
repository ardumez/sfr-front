import { Field } from 'formik';
import './InputText.css';

function InputText({ label, name, touched, errors }) {
  return (
    <div className="form-group row s-form-row">
      <label className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-9">
        <Field
          name={name}
          type="text"
          className="sfr-form-control form-control"
          autoComplete="off" />
        {touched[name] && errors[name] && <div><i class="sfr-error-form">{errors[name]}</i></div>}
      </div>
    </div>
  );
}

export default InputText;
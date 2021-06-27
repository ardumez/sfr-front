import { Field } from 'formik';

function Dropdown({ label, name, options, touched, errors }) {
  return (
    <div className="form-group row s-form-row">
      <label className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-9">
        <Field as="select" name={name} className="sfr-form-control form-select">
          {options.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </Field>
        {touched[name] && errors[name] && <div><i class="sfr-error-form">{errors[name]}</i></div>}
      </div>
    </div>
  );
}

export default Dropdown;
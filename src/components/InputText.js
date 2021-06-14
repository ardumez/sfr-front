function InputText({ title, onChange = f => f }) {
  return (
    <div className="form-group row s-form-row">
      <label className="col-sm-4 col-form-label">{title}</label>
      <div className="col-sm-8">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          autoComplete="off"
          onChange={event => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export default InputText;
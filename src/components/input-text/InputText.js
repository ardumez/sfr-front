function InputText({ title, onChange = f => f }) {
  return (
    <div className="form-group row s-form-row">
      <label className="col-sm-2 col-form-label">{title}</label>
      <div className="col-sm-10">
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
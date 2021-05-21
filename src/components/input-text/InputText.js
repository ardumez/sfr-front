function InputText({title}) {
    return (
        <div className="form-group row s-form-row">
            <label className="col-sm-2 col-form-label">{title}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPassword" autoComplete="off" />
            </div>
        </div>
    );
}

export default InputText;
import React, { useState } from "react";
import InputText from '../../components/InputText';

function TelephoneFormStep1({ onStep1Submit = f => f }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const submit = e => {
    e.preventDefault();
    console.log("coucou");
    onStep1Submit({
      nom: nom,
      prenom: prenom
    });
  };
  return (
    <form className="s-form-content" onSubmit={submit}>
      <p>
        Le secteur de la téléphonie réunit un important nombre d’acteurs. Parmi eux, les opérateurs sont sans doute ceux qui intéressent le plus les consommateurs. Avec une multitude d’offres mobiles et des promotions toujours plus attractives, les usagers ont effectivement de quoi être séduits.
        <br />
        <br />
      </p>
      <InputText title="Nom" onChange={setNom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <InputText title="Prénom" onChange={setPrenom} />
      <div className="form-group row s-form-row s-form-submit-row">
        <label className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary s-btn-primary col-sm-5">Précedent</button>
          <button type="submit" className="btn btn-primary s-btn-primary col-sm-5 float-end">Etape suivante</button>
        </div>
      </div>
    </form>
  );
}

export default TelephoneFormStep1;
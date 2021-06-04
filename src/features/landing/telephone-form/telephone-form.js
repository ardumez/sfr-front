import TelephoneFormStep1 from './telephone-form-step1';
import { doStep1Async } from './telephone-form-slice';
import { useSelector, useDispatch } from 'react-redux';

function TelephoneForm() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="s-block">
        <h3>Bonjour, obtenez un devis <b>téléphone</b>,<br /> en répondant a ces quelques questions !</h3>
      </div>
      <div className="s-block">
        <div className="sfr-card d-flex justify-content-center">
          <div className="sfr-card-content">
            <TelephoneFormStep1 onStep1Submit={() => dispatch(doStep1Async())} />
          </div>
        </div>
      </div>
    </>);
}

export default TelephoneForm;
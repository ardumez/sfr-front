import TelephoneFormStep1 from './TelephoneFormStep1';
import { doStep1Async } from './TelephoneFormSlice';
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
            <TelephoneFormStep1 onStep1Submit={(data) => dispatch(doStep1Async(data))} />
          </div>
        </div>
      </div>
    </>);
}

export default TelephoneForm;
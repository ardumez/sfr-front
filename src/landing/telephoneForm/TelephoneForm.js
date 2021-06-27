import TelephoneFormStep1 from './TelephoneFormStep1';
import TelephoneFormStep2 from './TelephoneFormStep2';
import { doStep1Async } from './TelephoneFormSlice';
import { useSelector, useDispatch } from 'react-redux';

function TelephoneForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.telephoneForm.currentStep);
  return (
    <>
      <div className="s-block">
        <h3 className="s-page-title">Bonjour, obtenez un devis <b>téléphone</b>,<br /> en répondant a ces quelques questions !</h3>
      </div>
      <div className="s-block">
        <div className="sfr-card d-flex justify-content-center">
          <div className="sfr-card-content">
            <h3>Étape {currentStep} / 3</h3>
            {currentStep == 1 &&
              <TelephoneFormStep1 onStepSubmit={(data) => dispatch(doStep1Async(data))} />
            }
            {currentStep == 2 &&
              <TelephoneFormStep2 onStepSubmit={(data) => dispatch(doStep1Async(data))} />
            }
          </div>
        </div>
      </div>
    </>);
}

export default TelephoneForm;
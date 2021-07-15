import TelephoneFormStep1 from './TelephoneFormStep1';
import TelephoneFormStep2 from './TelephoneFormStep2';
import { doStep1, fetchAllOperateur } from './TelephoneFormSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function TelephoneForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.telephoneForm.currentStep);
  const operateurs = useSelector(state => state.telephoneForm.operateurs);
  const onSubmitStep1 = (data) => {
    dispatch(doStep1(data)).then(() => {
      console.log("do redirect");
    });
  };
  useEffect(() => {
    console.log("coucou");
    dispatch(fetchAllOperateur()).then(() => {
      console.log(operateurs);
    });
  }, []);
  return (
    <>
      <div className="s-block">
        <h3 className="s-page-title">
          Bonjour, obtenez un devis <b>téléphone</b>,<br /> en répondant a ces quelques questions !</h3>
      </div>
      <div className="s-block">
        <div className="sfr-card d-flex justify-content-center">
          <div className="sfr-card-content">
            <h3>Étape {currentStep} / 3</h3>
            {currentStep == 1 &&
              <TelephoneFormStep1 onStepSubmit={onSubmitStep1} />
            }
            {currentStep == 2 &&
              <TelephoneFormStep2 onStepSubmit={onSubmitStep1} operateurs={operateurs} />
            }
          </div>
        </div>
      </div>
    </>);
}

export default TelephoneForm;
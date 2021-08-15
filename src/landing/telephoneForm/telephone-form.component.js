import TelephoneFormStep1 from './TelephoneFormStep1';
import TelephoneFormStep2 from './TelephoneFormStep2';
import { doStep1, fetchAllOperateur } from './TelephoneFormSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useParams, useHistory, useLocation } from "react-router-dom";
function TelephoneForm({ parentPath }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const matchChild = useRouteMatch(`${match.url}/:currentStep`);
  const { currentStep } = matchChild.params;
  const operateurs = useSelector(state => state.telephoneForm.operateurs);
  const step1 = useSelector(state => state.telephoneForm.step1);

  const onSubmitStep1 = (data) => {
    dispatch(doStep1(data)).then(() => {
      history.push('./2');
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
            <h3 className="sfr-card-title">Étape {currentStep} / 3</h3>
            <Switch>
              <Route path={`${match.url}/1`}>
                <TelephoneFormStep1 onStepSubmit={onSubmitStep1} defaultValue={step1} />
              </Route>
              <Route path={`${match.url}/2`}>
                <TelephoneFormStep2 onStepSubmit={onSubmitStep1} operateurs={operateurs} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>);
}

export default TelephoneForm;
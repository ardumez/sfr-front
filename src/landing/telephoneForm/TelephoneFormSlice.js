import { createSlice } from '@reduxjs/toolkit';
import { createTelephoneProjet } from './TelephoneFormAPI';
import operateurApi from '../../Api/OperateurAPI';

const fetchAllOperateur = createAsyncThunk(
  'telephoneForm/fetchAllOperateur',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

export const slice = createSlice({
  name: 'telephoneForm',
  initialState: {
    operateurs: [],
    currentStep: 1,
    step1: {
      nom: null,
      prenom: null,
      step1Id: null
    },
    step2: {
      solutionId: null,
      debutDate: null
    },
    projetsClient: []
  },
  reducers: {
    doStep1: (state, action) => {
      state.step1.nom = action.payload.nom;
      state.step1.prenom = action.payload.prenom;
      state.currentStep = 2;
    },
    doStep2: (state, action) => {

    },
    addOperateurs: (state, action) => {
      state.operateurs = action.payload.operateurs;
    }
  },
});

export const { doStep1 } = slice.actions;

export const doStep1Async = (step1FormData) => (dispatch) => {
  console.log("put data");
  createTelephoneProjet(step1FormData)
    .then(step1Data => {
      dispatch(doStep1(step1Data.data));
    }).catch(err => {
      console.log(err);
    });
};

export const getOperateursAsync = () => (dispatch) => {
  operateurApi.fetchOperateurs()
    .then(data => {

    });
};


export const selectCount = state => state.counter.value;

export default slice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createTelephoneProjet } from './TelephoneFormAPI';
import operateurApi from '../../Api/OperateurAPI';
import projetTelephoneAPI from '../../Api/ProjetTelephoneAPI';

export const fetchAllOperateur = createAsyncThunk(
  'telephoneForm/fetchAllOperateur',
  async () => {
    const response = await operateurApi.fetchOperateurs();
    return response.data;
  }
)

export const doStep1 = createAsyncThunk(
  'telephoneForm/doStep1',
  async (step1FormData) => {
    const response = await projetTelephoneAPI.doStep1(step1FormData);
    return response.data;
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
    route: '',
    projetsClient: []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOperateur.fulfilled, (state, action) => {
      state.operateurs = action.payload;
    });
    builder.addCase(doStep1.fulfilled, (state, action) => {
      state.step1.nom = action.payload.nom;
      state.step1.prenom = action.payload.prenom;
      state.currentStep = 2;
    });
  }
});

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

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'subscription',
  initialState: {
    currentStep: 'step1',
    step1: {
      nom: null,
      prenom: null
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
    },
  },
});

export const { doStep1 } = slice.actions;

export const doStep1Async = step1FormData => dispatch => {
  console.log("put data");
  fetch("http://localhost:3000/telephone/do-step-1", {
    method: "POST",
    body: JSON.stringify(step1FormData)
  }).then(step1Data => {
    dispatch(doStep1(step1Data));
  }).catch(err => {
    console.log(err);
  })
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      //mutable
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      //set action creator to receive more than 1 argument
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.loanPurpose = "";
      state.balance -= state.loan;
      state.loan = 0;
    },

    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export default accountSlice.reducer;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

const HOST = "api.frankfurter.app";

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  //1.return a function with (dispatch, getState)
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    //2.API call
    const res = await fetch(
      `https://${HOST}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD;
    //3.dispatch action
    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

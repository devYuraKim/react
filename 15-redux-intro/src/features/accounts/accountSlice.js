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
    payLoan(state, action) {
      state.loanPurpose = "";
      state.balance -= state.loan;
      state.loan = 0;
    },
  },
});

export default accountSlice.reducer;
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

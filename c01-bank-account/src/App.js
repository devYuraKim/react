import "./index.css";
import { useReducer } from "react";
/*
INSTRUCTIONS / CONSIDERATIONS:

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  withdrawActive: false,
  loanActive: false,
};

const DEPOSIT_AMOUNT = 150;
const WITHDRAW_AMOUNT = 50;
const LOAN_AMOUNT = 50;

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit":
      return {
        ...state,
        balance: state.balance + DEPOSIT_AMOUNT,
        withdrawActive:
          state.balance + DEPOSIT_AMOUNT - WITHDRAW_AMOUNT >= 0 ? true : false,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - WITHDRAW_AMOUNT,
        withdrawActive: state.balance - WITHDRAW_AMOUNT >= 0 ? true : false,
      };
    case "loan":
      return {
        ...state,
        loan: LOAN_AMOUNT,
        loanActive: true,
        balance: state.balance + LOAN_AMOUNT,
        withdrawActive:
          state.balance + LOAN_AMOUNT - WITHDRAW_AMOUNT >= 0 ? true : false,
      };
    case "payLoan":
      return { ...state, loan: 0, loanActive: false };
    case "closeAccount":
      if (state.balance === 0 && state.loan === 0) {
        return initialState;
      }
      break;
    default:
      throw new Error("unknown error");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive, withdrawActive, loanActive } = state;

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!withdrawActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "loan" })}
          disabled={!isActive || loanActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive || !loanActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

import "./index.css";
import { useReducer } from "react";

/*
1. guard clause: Added a guard clause to handle cases where actions should be ignored if the account is not active.
2. return state: Use `return state` to return the current state when no changes are made.
3. derived state: Removed `withdrawActive` and `loanActive` properties; derived these states directly in the component instead.
4. no 'break' statement: Removed `break` statements(despite the underlining by IDE!) after `return` since `return` exits the function immediately.
 */

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const DEPOSIT_AMOUNT = 150;
const WITHDRAW_AMOUNT = 50;
const LOAN_AMOUNT = 50;

function reducer(state, action) {
  //improvement1: guard clause
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit":
      return {
        ...state,
        balance: state.balance + DEPOSIT_AMOUNT,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - WITHDRAW_AMOUNT,
      };
    case "loan":
      if (state.loan === 0)
        return {
          ...state,
          loan: LOAN_AMOUNT,
          loanActive: true,
          balance: state.balance + LOAN_AMOUNT,
        };
    //improvement4: no 'break' statement
    case "payLoan":
      return { ...state, loan: 0 };
    case "closeAccount":
      if (state.balance === 0 && state.loan === 0) {
        return initialState;
      }
      //improvement2: 'return state'
      return state;
    default:
      throw new Error("unknown action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive } = state;

  //improvement3: derived state
  const withdrawActive = isActive && balance >= WITHDRAW_AMOUNT;
  const canRequestLoan = isActive && loan === 0;
  const canCloseAccount = isActive && balance === 0 && loan === 0;

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
          disabled={!canRequestLoan}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive || loan === 0}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!canCloseAccount}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

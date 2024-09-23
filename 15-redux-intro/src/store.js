//WARNING: use createStore for learning purpose only
import { combineReducers, createStore } from "redux";
import accountReducer, {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./features/accounts/accountSlice";
import customerReducer, {
  createCustomer,
  updateName,
} from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(5000, "purchase a vehicle"));
store.dispatch(payLoan());

store.dispatch(createCustomer("John Doe", "RDSSN1"));
store.dispatch(updateName("John Smith"));

console.log(store.getState());

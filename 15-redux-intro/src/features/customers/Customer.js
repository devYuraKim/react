import { useSelector } from "react-redux";

function Customer() {
  const { fullName, nationalId, createdAt } = useSelector(
    (store) => store.customer
  );
  // if (!fullName) return <h2>You have not yet created account with us</h2>;
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

//React v.18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v.18
// import ReactDom from "react-dom";
// root.render(<App />);

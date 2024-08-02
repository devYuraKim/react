import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="teal" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating maxRating={5} color="blue" size={24} defaultRating={3} />
    <Test />
  </React.StrictMode>
);

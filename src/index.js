import React from "react";
import ReactDOM from "react-dom";
import Header from "./header/index";
import { ReviewTab } from "./review_tab/index";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header />
      <ReviewTab />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

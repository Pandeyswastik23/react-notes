import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Hi Welcome to the messy nested world!
  </h1>
);

const Title = () => <h1>This is title</h1>;

// React functional component
// Component Composition
const num = 10000;
const HeadingComponent = () => (
  <div id="container">
    {num}
    <Title />
    <h2 className="heading1">Hello buddy</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// const subHeading = React.createElement(
//   "h1",
//   { id: "main_heading", tabIndex: "0" },
//   "Padh le bhai, ye laundiyabaazi me kuch bhi nhi rakha hai 💦"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(subHeading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi Welcome to the messy nested world!"),
    React.createElement("h2", {}, "Hi welcome to subHeading"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi Welcome to the messy nested world!"),
    React.createElement("h2", {}, "Hi welcome to subHeading"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

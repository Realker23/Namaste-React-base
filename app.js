/*
<div id="parent">
    <div id="child">
        <h1>hello i am H1 tag</h1>
    </div>
</div>
*/

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World!! Using React."
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello! I am h1 tag"),
    heading
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello! I am h1 tag"),
    heading
  ])
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);

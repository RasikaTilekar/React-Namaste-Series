/*
<div id="parent">
    <div id="child">
        <h1>hello from h1!</h1>
        <h2>hello from h2!</h2>
    </div>
</div>

*/


// const heading = React.createElement("h1", { "id": "heading" }, "hello world");

const parent = React.createElement("div", {"id": "parent"}, React.createElement("div", {"id": "child"}, [React.createElement("h1", {}, "h1 from React"), React.createElement("h2", {}, "h2 from React")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
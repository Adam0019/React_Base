function CustomReact(Reactelements, container) {
  /*const domElement = document.createElement(Reactelements.type);
  domElement.innerHTML = Reactelements.children;
  domElement.setAttribute("href", Reactelements.props.href);
  domElement.setAttribute("target", Reactelements.props.target);
  container.appendChild(domElement);*/

  const element = document.createElement(Reactelements.type);
  element.innerHTML = Reactelements.children;
  for (const prop in Reactelements.props) {
    if (prop === "children") continue;
    element.setAttribute(prop, Reactelements.props[prop]);
  }
  container.appendChild(element);
}
const Reactelements = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click here to visit google",
};
const Mainroot = document.querySelector("#root");

CustomRender(Reactelements, Mainroot);

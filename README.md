# React_Base

################################

# day 1 :

created first react app and printed hello world

cmds for react app using vite:

npm create vite@latest
select react
select only javascript
cd filename
npm i
npm run dev

installing tailwind css:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

then edit the tailwind.config.js file

replace this with old content

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

then put this in index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# day2 :

created my custom react app

# day3 :

exploring custom react app and created a counter project that has 2 buttons for increament and decrement the value

the hook used in the counter project is called useState hook it's syntax is like this:

let [something, setSomething]=useState(initialization)

let== variable
[something, setSomething]== initial variable , variable after re-rendering
useState == hook method to re-render the existing state, it takes ininitial as parameter

ex:
let [counter,setCounter]=useState(0)

# day4 :

learned a little about reacts createroot, virtual dom and fiber algo

1. The createroot created a new dom and compares it with the browsers dom and updates the compomnet that has any changes.
2. in othe rhand the browser removes the entire dom and recreates it to upadate the changes, Its calls reload.
3. react dom follows the browser dom like a tree like structure and updates the compomnet that only needs to change.
4. the updates that react makes are done by comparing the browser dom, but some updates are required more priority than others. to avoid overhead we drop the network calls to make the update prioritize than others.
5. the current algo that react uses is called react fiber algo
6. this algo differentiates the react tree and the browser tree using createroot its called reconciliation
7. the reconciliation in react is called virtual dom
8. in ui not every changes are required to update immediately

# day5 :

learned how to add components using tailwind css and props
used a card from the dev.io and added a pic to it and edited its contents using props
props helps to implement the components for each card or form or table
by giving the value directly to the place to display

syntax
<card const name="click me!" /> ----- on app.jsx---- this is the prop value
we can pass any string, array or object to this
then either we call using props.variable reference or we can simply destructure it and write {variable reference}

# day6 :

Created a password generator using useCallback, useState, useRef and useEffect hooks.

first let me explain the usestate hook. useState hook is used to create the state in which the operation is performed, first you need to declare the initial and the set variable
then call useState hook and give it an default value [can be array, string, boolean, etc]
syntax : const [initial, set variable] = useState(defaultValue)
example : const [length, setLength] = useState(8)

second hook is useCallback hook. this hook creates a callback for the function so it can use in multiple cases without creating a new one each time. It takes a function and dependencies to execute.
syntax: const cb = useCallback(fn,[dependencies])
example: const cb = useCallback(()=>{
fn body
}, [dependencies]) //fn == function

third hook is useEffect hook. this hook creates a syncronization between components and external systems. /// this def needs to be updated
syntax: useEffect((fn), [dependencies])
example: useEffect(()=>{
fn body
}, [dependencies]) //fn == function

fourth hook is useRef hook. this hook as the name suggests creates a reference of a component that’s not needed for rendering.
syntax: const ref = useRef(initialValue)
const passref = useRef(null);

now to talk about the password generator project's inner html

input field in ract is taken like this:

<!-- <input
className=""
type=""
value=""
ref=""
readOnly // its to enable read-only mode
></input> -->

# day7 :

Tried to create a currency converter app but there are some errors in that project, i tried to some methods and edits to solve them but that didn't work. i just pushed the code to github and will try to fix them again soon.

# day 8 :

I installed the props type to fix the errors but it didn't worked. will try again if i find something on that.
Also i commented on the video which i was watching [tutorial] hopefully someone will reply lets see.

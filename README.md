# React_Base

################################
day 1 : created first react app and printed hello world

day2 : created my custom react app

day3 : exploring custom react app and created a counter project that has 2 buttons for increament and decrement the value

the hook used in the counter project is called useState hook it's syntax is like this:

let [something, setSomething]=useState(initialization)

let== variable
[something, setSomething]== initial state , state after re-rendering
useState == hook method to re-render the existing state, it takes ininitial as parameter

ex:
let [counter,setCounter]=useState(0)

day4: learned a little about reacts createroot, virtual dom and fiber algo

1. The createroot created a new dom and compares it with the browsers dom and updates the compomnet that has any changes.
2. in othe rhand the browser removes the entire dom and recreates it to upadate the changes, Its calls reload.
3. react dom follows the browser dom like a tree like structure and updates the compomnet that only needs to change.
4. the updates that react makes are done by comparing the browser dom, but some updates are required more priority than others. to avoid overhead we drop the network calls to make the update prioritize than others.
5. the current algo that react uses is called react fiber algo
6. this algo differentiates the react tree and the browser tree using createroot its called reconciliation
7. the reconciliation in react is called virtual dom
8. in ui not every changes are required to update immediately

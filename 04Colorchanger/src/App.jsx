import { useState } from "react";

function App() {
  const [color, setColor] = useState("#7895");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center  bottom-12   inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3  shadow-xl bg-white rounded-3xl px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none text-white rounded-full shadow-xl px-4 py-1"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

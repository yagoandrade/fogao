import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(localStorage.getItem("firstItem"));
  const [second, setSecond] = useState(localStorage.getItem("secondItem"));
  const [third, setThird] = useState(localStorage.getItem("thirdItem"));
  const [fourth, setFourth] = useState(localStorage.getItem("fourthItem"));

  const handleSetFirst = () => {
    if (first === null) {
      setFirst(true);
      localStorage.setItem("firstItem", true);
    } else {
      setFirst(!first);
      localStorage.setItem("firstItem", !first);
    }
  };

  const handleSetSecond = () => {
    if (second === null) {
      setSecond(true);
      localStorage.setItem("secondItem", true);
    } else {
      setSecond(!second);
      localStorage.setItem("secondItem", !second);
    }
  };

  const handleSetThird = () => {
    if (third === null) {
      setThird(true);
      localStorage.setItem("thirdItem", true);
    } else {
      setThird(!third);
      localStorage.setItem("thirdItem", !third);
    }
  };

  const handleSetFourth = () => {
    if (fourth === null) {
      setFourth(true);
      localStorage.setItem("fourthItem", true);
    } else {
      setFourth(!fourth);
      localStorage.setItem("fourthItem", !fourth);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col gap-y-1">
          <div className="bg-black p-5 rounded drop-shadow-lg ">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-full p-5 border-4 ${
                  first
                    ? "border-yellow-400 bg-white drop-shadow-lg transition"
                    : "bg-black"
                }`}
              ></div>
              <div
                className={`rounded-full p-5 border-4 ${
                  second
                    ? "border-yellow-400 bg-white drop-shadow-lg transition"
                    : "bg-black"
                }`}
              ></div>
              <div
                className={`rounded-full p-5 border-4 ${
                  third
                    ? "border-yellow-400 bg-white drop-shadow-lg transition"
                    : "bg-black"
                }`}
              ></div>
              <div
                className={`rounded-full p-5 border-4 ${
                  fourth
                    ? "border-yellow-400 bg-white drop-shadow-lg transition"
                    : "bg-black"
                }`}
              ></div>
            </div>
          </div>
          <div className="bg-black p-3 gap-x-2 rounded flex">
            <button
              className={`rounded-full flex justify-center items-center border-2 transition ${
                first ? "bg-[#eaeaea] border-yellow-400" : "bg-white"
              }`}
              onClick={() => handleSetFirst(!first)}
            >
              <p className="text-black font-bold px-4 py-2">1</p>
            </button>
            <button
              className={`rounded-full flex justify-center items-center border-2 transition  ${
                second ? "bg-[#eaeaea] border-yellow-400" : "bg-white"
              }`}
              onClick={() => handleSetSecond(!second)}
            >
              <p className="text-black font-bold px-4 py-2">2</p>
            </button>
            <button
              className={`rounded-full flex justify-center items-center border-2 transition  ${
                third ? "bg-[#eaeaea] border-yellow-400" : "bg-white"
              }`}
              onClick={() => handleSetThird(!third)}
            >
              <p className="text-black font-bold px-4 py-2">3</p>
            </button>
            <button
              className={`rounded-full flex justify-center items-center border-2 transition  ${
                fourth ? "bg-[#eaeaea] border-yellow-400" : "bg-white"
              }`}
              onClick={() => handleSetFourth(!fourth)}
            >
              <p className="text-black font-bold px-4 py-2">4</p>
            </button>
          </div>
        </div>
        <p className="mt-5">Pressione qualquer botão para controlar o fogão</p>
      </header>
    </div>
  );
}

export default App;

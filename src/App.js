import { useState, useEffect } from "react";
import "./App.css";

import todosDesligados from "./images/todos-desligados.jpeg";
import um from "./images/1-ligado.jpeg";
import umDois from "./images/1-2-ligado.jpeg";
import umDoisTres from "./images/1-2-3-ligado.jpeg";
import umDoisQuatro from "./images/1-2-4-ligado.jpeg";
import umTres from "./images/1-3-ligado.jpeg";
import umTresQuatro from "./images/1-3-4-ligado.jpeg";
import umQuatro from "./images/1-4-ligado.jpeg";
import dois from "./images/2-ligado.jpeg";
import doisTres from "./images/2-3-ligado.jpeg";
import doisQuatro from "./images/2-4-ligado.jpeg";
import doisTresQuatro from "./images/2-3-4-ligado.jpeg";
import tres from "./images/3-ligado.jpeg";
import tresQuatro from "./images/3-4-ligado.jpeg";
import quatro from "./images/4-ligado.jpeg";
import todosLigados from "./images/todos-ligados.jpeg";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

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

  const [image, setImage] = useState("");

  useEffect(() => {
    if (
      first === (null || false) &&
      second === (null || false) &&
      third === (null || false) &&
      fourth === (null || false)
    ) {
      setImage(todosDesligados);
    }

    // Caso o 1?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === (null || false) &&
      third === (null || false) &&
      fourth === (null || false)
    ) {
      setImage(um);
    }

    // Caso o 2?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === true &&
      third === (null || false) &&
      fourth === (null || false)
    ) {
      setImage(dois);
    }

    // Caso o 3?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === (null || false) &&
      third === true &&
      fourth === (null || false)
    ) {
      setImage(tres);
    }

    // Caso o 4?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === (null || false) &&
      third === (null || false) &&
      fourth === true
    ) {
      setImage(quatro);
    }

    // Caso o 1?? e 2?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === true &&
      third === (null || false) &&
      fourth === (null || false)
    ) {
      setImage(umDois);
    }

    // Caso o 1?? e 3?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === (null || false) &&
      third === true &&
      fourth === (null || false)
    ) {
      setImage(umTres);
    }

    // Caso o 1?? e 4?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === (null || false) &&
      third === (null || false) &&
      fourth === true
    ) {
      setImage(umQuatro);
    }

    // Caso o 1?? 2?? e 3?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === true &&
      third === true &&
      fourth === (null || false)
    ) {
      setImage(umDoisTres);
    }

    // Caso o 1?? 2?? e 4?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === true &&
      third === (null || false) &&
      fourth === true
    ) {
      setImage(umDoisQuatro);
    }

    // Caso o 1?? 2?? e 4?? esteja ligado e o resto desligado
    else if (
      first === true &&
      second === (null || false) &&
      third === true &&
      fourth === true
    ) {
      setImage(umTresQuatro);
    }

    // Caso o 2?? 3?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === true &&
      third === true &&
      fourth === (null || false)
    ) {
      setImage(doisTres);
    }

    // Caso o 2?? e 4?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === true &&
      third === (null || false) &&
      fourth === true
    ) {
      setImage(doisQuatro);
    }

    // Caso o 2??, 3?? e 4?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === true &&
      third === true &&
      fourth === true
    ) {
      setImage(doisTresQuatro);
    }

    // Caso o 3?? 4?? esteja ligado e o resto desligado
    else if (
      first === (null || false) &&
      second === (null || false) &&
      third === true &&
      fourth === true
    ) {
      setImage(tresQuatro);
    }

    // Caso todos estejam ligados
    else if (
      first === true &&
      second === true &&
      third === true &&
      fourth === true
    ) {
      console.log(todosLigados);
      setImage(todosLigados);
    } else {
      setImage(todosDesligados);
    }
  }, [first, second, third, fourth, image]);

  return (
    <div className="App">
      <div className="flex justify-around items-center">
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
          <p className="mt-5">
            Pressione qualquer bot??o para controlar o fog??o
          </p>
        </header>
        <div>
          <img src={image} className="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const useChangeColor = () => {
  const [color, setcolor] = useState("#000000");

  const GenerateColor = () => {
    const min = Math.ceil(0);
    const max = Math.floor(15);

    let numero: Array<string>= [];

    for (let i = 0; i < 6; i++) {   
        let numberR = Math.floor(Math.random() * (max - min + 1)) + min;

        switch (numberR) {
          case 10:
             numero.push('A');
            break;
          case 11:
             numero.push('B');
            break;
          case 12:
             numero.push('C');
            break;
          case 13:
             numero.push('D');
            break;
          case 14:
             numero.push('E');
            break;
          case 15:
             numero.push('F');
          default:
             numero.push(`${numberR}`)
            break;
        }

      };

    console.log('====================================');
    console.log(numero);
    console.log('====================================');
    console.log(`#${numero[0]}${numero[1]}${numero[2]}${numero[3]}${numero[4]}${numero[5]}`);
    setcolor(`#${numero[0]}${numero[1]}${numero[2]}${numero[3]}${numero[4]}${numero[5]}`)
  };

  return {
    // Props
    color,
    // Funtions
    GenerateColor,
  };
};

export default useChangeColor;

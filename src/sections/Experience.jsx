import React from "react";
import { ExperienciaData } from "../data/data";

const ExperienceCard = ({ svg, title, text }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md p-4 m-4">
      <div className="flex items-center mb-2 ">
        <img className="h-8 mr-2 bg-gray-300 rounded-l-full " src={svg} alt="icono de experiencia"  />
        <h2 className="text-lg font-bold text-gray-800  ">{title}</h2>
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-8">Experiencias</h1>
      <div className="grid grid-cols-3 gap-6 justify-center items-center w-[80vw] bg-app-gray-800 p-6 font-light">
        {ExperienciaData.map((experiencia, index) => (
          <ExperienceCard
            svg={experiencia.svg}
            title={experiencia.title}
            text={experiencia.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

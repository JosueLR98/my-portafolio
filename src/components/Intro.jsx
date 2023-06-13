import React from "react";

function Intro() {
  return (
    <div
      id="intro"
      className="flex items-center justify-center flex-col text-center pt-20 pb-6"
    >
      <div></div>
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold underline hover:underline-offset-8   ">
        Josue Lopez
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
      <p className="text-lg max-w-xl mb-3 font-bold">
        Soy un desarrollador full-stack con dominio de html, css, javascript,
        react y redux inicie mi carrera con gran motivacion y actualmete
        estudiante de ingeniería informática, mis proyectos son desde cero,
        desde la planificación y el diseño hasta el final agradezco su tiempo
        por revisar mis proyectos .
      </p>
    </div>
  );
}

export default Intro;

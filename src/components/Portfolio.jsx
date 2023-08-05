import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div id="projects" className=" grid sm:flex-row   sm:w-auto ">
      <h3 className=" text-center text-2xl font-bold w-auto ">
        Lista de proyectos:
      </h3>
      <br />
      <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((port) => (
          <PortfolioItem
            imgUrl={port.imgUrl}
            title={port.title}
            stack={port.stack}
            link={port.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

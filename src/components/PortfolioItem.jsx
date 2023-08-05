import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden shadow-lg shadow-slate-800/80 hover:animate-bounce  m-1 hover:text-red-500"
    >
      <img
        src={imgUrl}
        alt=""
        className="w-full h-auto sm:h-auto object-fill cursor-pointer aspect-square "
      />
      <div className="w-full p-8">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap- flex-row items-center justify-start text-xs md:text-sm dark:text-white  ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-blue-300 dark:border-blue-400 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

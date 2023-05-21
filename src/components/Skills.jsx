const Skills = () => {
  return (
    <section id="skills" className="py-10  ">
      <div className=" flex-row text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className=" text-slate-500">Habilidades</span>
        </h3>
        <p className="text-gray-500 mt-3 text-xl">Mi conocimiento</p>
      </div>
      <div className="mt-8 text-gray-100 text-center flex flex-wrap justify-center gap-3 ">
        <div className="">
          <div className="border-2 group border-cyan-600 relative  bg-slate-500 rounded-xl">
            <div className="object-contain p-3 rounded-full">
              <p className=" flex  flex-row">Javascript</p>
              <div className="text-6xl  bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <i className="bx bxl-javascript"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="border-2 group border-cyan-600 relative   bg-slate-500 rounded-xl">
            <div className="object-contain p-3 rounded-full">
              <p className=" flex  flex-row">CSS</p>
              <div className="text-6xl bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <i className="bx bxl-html5"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="border-2 group border-cyan-600 relative   bg-slate-500 rounded-xl">
            <div className="object-contain p-3 rounded-full">
              <p className=" flex  flex-row">Tailwind</p>
              <div className="text-6xl  bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <i class="bx bxl-tailwind-css"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="border-2 group border-cyan-600 relative   bg-slate-500  rounded-xl">
            <div className="object-contain p-3 rounded-full">
              <p className=" flex  flex-row">Reactjs</p>
              <div className="text-6xl  bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <i className="bx bxl-react"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="border-2 group border-cyan-600 relative   bg-slate-500  rounded-xl">
            <div className="object-contain p-3 rounded-full">
              <p className=" flex  flex-row">Node js</p>
              <div className="text-6xl bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <i class="bx bxl-nodejs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

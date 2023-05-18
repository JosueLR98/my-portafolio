
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "/assets/project-1.png";
import project2 from "/assets/project-2.jpg";
import project3 from "/assets/project-3.jpg";
import project4 from "/assets/project-4.jpg";
import project5 from "/assets/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Skills = () => {
  const projects = [
    {
      img: project1,
      name: "Movie App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "React Nav",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <section className="py-10  ">
      <div className=" flex-row text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className=" text-slate-500">Habilidades</span>
        </h3>
        <p className="text-gray-500 mt-3 text-xl">Mi conocimiento</p>
      </div>
      <div className="mt-8 text-gray-100 text-center flex flex-wrap justify-center gap-3 ">
        <div className="">
          <div className="border-2 group border-cyan-100 relative  bg-slate-500 rounded-xl">
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

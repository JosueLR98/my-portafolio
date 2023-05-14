import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2 ">
            <a
              href="https://www.linkedin.com/in/josue-lopez-213352204/"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <i className="bx bxl-linkedin-square text-3xl"></i>
            </a>
            <a
              href="https://github.com/JosueLR98"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <i className="bx bxl-github text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-base mt-2 ">
        &copy; {new Date().getFullYear()} Josue Lopez. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

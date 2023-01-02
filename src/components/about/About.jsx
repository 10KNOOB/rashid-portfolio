import React from "react";

import MernImg from "../../assets/mern-stack.svg";

const About = () => {
  return (
    <section id="about" className="pt-20 max-w-6xl mx-auto px-2 lg:px-0">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold text-[#3edbf0]">About Me</h1>
        <span className="text-white text-xl">
          Want to learn more about me !
        </span>
      </div>
      <div className="flex justify-center items-center gap-0 md:gap-32 md:flex-row flex-col pt-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <img
            src={MernImg}
            alt="profile"
            className="object-cover object-center rounded"
          />
        </div>
        <div
          className="lg:flex-grow md:w-1/2 flex 
        flex-col md:items-start md:text-left   text-white"
        >
          <span className="text-2xl md:text-5xl pt-10 ">Who am I ?</span>
          <p className="text-justify pt-5">
            I am graduated from the Department of Computer Science from Varendra
            Unversity. currently I am learnig more and more about MERN stacks
            and tring to build more projects for developing my skills to the top
            level. From my chilhood I like to work with Computer Programming and
            web developing. And now I doing my dream job as a fullstack web
            developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

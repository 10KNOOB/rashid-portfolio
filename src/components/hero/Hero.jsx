import React from "react";
import ProfileImg from "../../assets/my-photo.svg";
//import "./hero.css";
import Social from "../social/Social";
import CV from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="pt-20 max-w-6xl mx-auto px-2 lg:px-0">
      <div className="flex justify-center items-center gap-0 md:gap-10 md:flex-row flex-col">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex 
        flex-col md:items-start md:text-left items-center text-center text-white"
        >
          <span className="text-2xl md:text-3xl">Hi, I am</span>
          <span className="text-2xl md:text-3xl font-bold text-[#3edbf0]">
            Rashid Shahriar.
          </span>

          <h1 className="text-2xl md:text-3xl font-bold pt-5">
            I am a Frontend web developer.
          </h1>
          <p className="text-base">
            I have a vast experience in HTML, CSS, Java Script and other
            programming languages. I have done several projects of Web
            developmet. I am adept at handling multiple tasks on a daily basis
            competently and at working well under pressure.
          </p>

          <div className="flex gap-3 pt-5">
            <button
              type="button"
              class=" inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight 
              uppercase rounded transition duration-500 ease-in-out border border-[#77acf1] hover:bg-[#77acf1]"
            >
              <a href={CV} download>
                My Resume
              </a>
            </button>
            <button
              type="button"
              class="inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight 
              uppercase rounded transition duration-500 ease-in-out border border-[#77acf1] bg-[#77acf1] hover:bg-transparent"
            >
              <a href="#contact">Let's Talk</a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src={ProfileImg}
            alt="profile"
            className="object-cover object-center rounded"
          />
        </div>
      </div>

      <div className="hidden lg:block fixed right-0 top-[50%] -rotate-90">
        <Social />
      </div>
    </section>
  );
};

export default Hero;

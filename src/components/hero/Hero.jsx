import React from "react";
import ProfileImg from "../../assets/my-photo.svg";
import "./hero.css";
import Social from "../social/Social";
import CV from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home">
      <div class="container mx-auto flex px-24 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I am <span className="my__name">Rashid Shahriar.</span>
            <br class="hidden lg:inline-block" />
            <strong className="my__details ">
              I am a full stack web developer.
            </strong>
          </h1>
          <p class="mb-8 leading-relaxed text-white">
            I have a vast experience in HTML, CSS, Java Script and other
            programming languages. I have done several projects of Web
            developmet. I am adept at handling multiple tasks on a daily basis
            competently and at working well under pressure.
          </p>
          <div class="button__group">
            <button
              type="button"
              class="contact__btn inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out"
            >
              <a href={CV} download>
                My Resume
              </a>
            </button>
            <button
              type="button"
              class="resume__btn inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full transition duration-150 ease-in-out"
            >
              <a href="#contact">Let's Talk</a>
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="rashid-shahriar"
            src={ProfileImg}
          ></img>
        </div>
      </div>

      <div className="hidden md:block fixed left-0 top-[50%] rotate-90">
        <Social />
      </div>
    </section>
  );
};

export default Hero;

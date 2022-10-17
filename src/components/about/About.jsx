import React from "react";
import "./about.css";
import MernImg from "../../assets/mern-stack.svg";

const About = () => {
  return (
    <section id="about-me">
      <h2>About me</h2>
      <h5>Lets see more about me!</h5>

      <div class="container about__me-div mx-auto flex px-24 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={MernImg}
          ></img>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-8 font-medium text-gray-900">
            Who&nbsp;
            <br class="hidden lg:inline-block" />
            am I ?
          </h1>
          <p class="mb-8 mr-8 leading-relaxed text-white text-right...">
            I am graduated from the Department of Computer Science from
            <br />
            Varendra Unversity. <br />
            currently I am learnig more and more about MERN stacks and tring to
            build more projects for developing my skills to the top level. From
            my chilhood I like to work with Computer Programming and web
            developing. And now I doing my dream job as a fullstack web
            developer.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

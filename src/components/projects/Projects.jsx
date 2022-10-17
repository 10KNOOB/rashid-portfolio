import React from "react";
import "./projects.css";
import FirstImage from "../../assets/qr_design.jpg";
import SecondImage from "../../assets/card_design.jpg";
import ThirdImage from "../../assets/port__design.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Project</h2>
      <h5>Lets see more about my projects!</h5>

      <div class="container projects__my">
        <div className="card">
          <div class="card__content">
            <div class="card__front">
              <img
                src={FirstImage}
                className="projects__img"
                alt="qr design card"
              ></img>
            </div>
            <div class="card__back">
              <div class="p-6 max-w-sm">
                <div className="back__text">
                  <p class="text-left ...">
                    This is a QR code card project. In this project I used HTML
                    and CSS in oreder to built this projects. It is a Front-end
                    Mentor Project.
                  </p>
                </div>
                <hr className="p-2"></hr>
                <button
                  type="button"
                  class="py-2 px-5 text-sm rounded-full back__btn hover:bg-blue focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  <a href="https://responsive-qr-card.netlify.app/">
                    Click here
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="card__content">
            <div class="card__front">
              <img
                src={SecondImage}
                className="projects__img"
                alt="product card design"
              ></img>
            </div>
            <div class="card__back">
              <div class="p-6 max-w-sm">
                <div className="back__text">
                  <p class="text-left ...">
                    Another Front-end Mentor card project. In this project I
                    used HTML and CSS in oreder to built this projects.
                  </p>
                </div>
                <hr className="p-2"></hr>
                <button
                  type="button"
                  class="py-2 px-5 text-sm rounded-full back__btn hover:bg-blue focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  <a href="https://extraordinary-seahorse-d0ed3e.netlify.app/">
                    Click here
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="card__content">
            <div class="card__front">
              <img
                src={ThirdImage}
                className="projects__img"
                alt="my porftfolio"
              ></img>
            </div>
            <div class="card__back">
              <div class="p-6 max-w-sm">
                <div className="back__text">
                  <p class="text-left ...">
                    Are you exicited to look my first porftfolio that I made
                    with only HTML, CSS, JavaScript and Bootstrap.
                  </p>
                </div>
                <hr className="p-2"></hr>
                <button
                  type="button"
                  class="py-2 px-5 text-sm rounded-full back__btn hover:bg-blue focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  <a href="https://rashid-shahriar.netlify.app/">Click here</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

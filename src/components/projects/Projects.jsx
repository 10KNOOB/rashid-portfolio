import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

//import images
import img1 from "../../assets/port__design.png";
import img2 from "../../assets/qr_design.jpg";
import img3 from "../../assets/card_design.jpg";

const data = [
  {
    id: 1,
    img: img1,
    details:
      "This is my first web-site, I created it with only HTML,CSS and Vanila JS.",
    date: "Sep 3, 2022",
    link: "https://rashid-shahriar.netlify.app/",
  },
  {
    id: 2,
    img: img2,
    details: "This is a card design, I created it with only HTML and CSS.",
    date: "Sep 28, 2022.",
    link: "https://responsive-qr-card.netlify.app/",
  },
  {
    id: 3,
    img: img3,
    details: "This is a card design, I created it with only HTML and CSS.",
    date: "Sep 29, 2022.",
    link: "https://extraordinary-seahorse-d0ed3e.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-20 max-w-6xl mx-auto px-2 lg:px-0">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold text-[#3edbf0]">My Project</h1>
        <span className="text-white text-xl">
          Lets see more about my projects!
        </span>

        <div className="mt-20">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-[800px] py-[50px] "
          >
            {data.map(({ id, img, link, details, date }) => (
              <SwiperSlide
                key={id}
                className="flex bg-center bg-cover max-w-[250px] max-h-[400px] border-2 border-[#3edbf0] relative"
              >
                <img src={img} alt="" className="max-w-full" />
                <div
                  className="absolute hover:bg-gradient-to-b from-transparent to-gray-900 w-full h-full opacity-0 hover:opacity-100 flex flex-col justify-end text-white 
                leading-4 gap-y-4 p-2"
                >
                  <span>{details}</span>
                  <span>Created date: {date}</span>
                  <a
                    href={link}
                    className="text-center hover:text-[#3edbf0] font-medium"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Click here to live priview!
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;

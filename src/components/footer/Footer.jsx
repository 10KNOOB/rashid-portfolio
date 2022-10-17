import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer class="p-4 bg-white md:px-6 md:py-8 bg-transparent">
      <div class="sm:flex sm:items-center sm:justify-between">
        <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-white">
          <li>
            <a href="#home" class="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" class="mr-4 hover:underline md:mr-6">
              About Me
            </a>
          </li>
          <li>
            <a href="#experience" class="mr-4 hover:underline md:mr-6 ">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" class="mr-4 hover:underline md:mr-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" class="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__socials flex items-center mb-4 sm:mb-0 gap-8 text-white">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Rashid Shahriar . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

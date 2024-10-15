import React from "react";
import {  FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    
  },
  {
    id: 2,
    url: "https://iadicola.netsons.org/portfolio",
    text: "chi siamo",
    target:'_blank'
  },
  {
    id: 3,
    url: "https://iadicola.netsons.org/progetti",
    text: "progetti",
    target:'_blank'
  },
  {
    id: 4,
    url: "https://iadicola.netsons.org/",
    text: "contattaci",
    target:'_blank'
  },
/*   {
    id: 5,
    url: "https://iadicola.netsons.org/",
    text: "contattaci",
    target:'_blank'
  },
  {
    id: 6,
    url: "https://iadicola.netsons.org/",
    text: "contattaci",
    target:'_blank'
  }, */
 
];

const socialLinks = [
 
  {
    id: 1,
    url: "https://www.facebook.com/people/Tech-CraftCode/61566532360263/?locale=it_IT",
    icon: <FaFacebook className="icon" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/luigi-iadicola/",
    icon: <FaLinkedinIn className="icon" />,
  },
  {
    id: 3,
    url: "https://github.com/AndroLuix",
    icon: <FaGithub className="icon" />,
  },
];

const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} alt="social" target="_blank">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { links, SocialBar };
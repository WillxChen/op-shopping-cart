import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollSpy() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Function to check if an element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll events
    const handleScroll = () => {
      const links = document.querySelectorAll(".nav-link");

      links.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (section && isElementInViewport(section)) {
          setActiveLink(sectionId);
        }
      });
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return null;
}

// About.tsx

import "./About.css";
import LineGroup from "/assets/images/LineGroup.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const splitText = new SplitText("#text span", {
        type: "chars",
      });

      const characters = splitText.chars;
      gsap.from(characters, {
        opacity: 0,
        stagger: 0.1, 
        ease: "none",
        duration: 1, 
        scrollTrigger: {
          trigger: "#text",
          // ✨ --- CHANGES ARE HERE --- ✨
          start: "top 80%", // When the top of the text hits 80% from the top of the viewport
          end: "bottom 50%", // When the bottom of the text hits 50% from the top of the viewport
          scrub: 1, // Links animation to scrollbar. The '1' adds a 1-second smoothing effect.
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="about" ref={container} id="about">
      <div className="content">
        <img id="lineGroup1" src={LineGroup} alt="decorative lines" />
        <img id="lineGroup2" src={LineGroup} alt="decorative lines" />
        <h1 id="text">
          <span>
            Appmatix is a full-service software solutions company specializing in
            building custom web applications, mobile applications, and
            end-to-end software services. Our mission is to help businesses
            innovate, grow, and streamline their operations through reliable,

            scalable, and user-friendly digital solutions. With a focus on
            quality, security, and collaboration, we turn your ideas into
            powerful products that deliver real results.
          </span>
        </h1>
        <img id="lineGroup3" src={LineGroup} alt="decorative lines" />
        <img id="lineGroup4" src={LineGroup} alt="decorative lines" />
      </div>
      <div id="blueCircle" />
      <div id="greenCircle" />
    </div>
  );
};

export default About;
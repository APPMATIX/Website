"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Why.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Why = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Set initial state: only the first description is visible
      gsap.set("#desc-1", { opacity: 1 });
      gsap.set("#desc-2, #desc-3", { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            markers: false,
          },
        })
        // --- Animation Step 1 ---
        // Card 2 comes to the front
        .to("#card-1", { zIndex: 1, rotation: 0 })
        .to("#card-3", { zIndex: 2, rotation: -6 }, "<")
        .to("#card-2", { zIndex: 3, rotation: -13 }, "<")
        // Description for Card 2 fades in
        .to("#desc-1", { opacity: 0 }, "<")
        .to("#desc-2", { opacity: 1 }, "<")

        // --- Animation Step 2 ---
        // Card 3 comes to the front
        .to("#card-2", { zIndex: 1, rotation: 0 })
        .to("#card-3", { zIndex: 3, rotation: -13 }, "<")
        .to("#card-1", { zIndex: 2, rotation: -6 }, "<")
        // Description for Card 3 fades in
        .to("#desc-2", { opacity: 0 }, "<")
        .to("#desc-3", { opacity: 1 }, "<");
    },
    { scope: container }
  );

  return (
    <div className="why" ref={container} id="why">
      <div className="grid">
        {/* Descriptions Section */}
        <div className="descriptions">
          <div id="desc-1" className="description">
            <h2>KEBIN B JACOB</h2>
            <p>
              Former IT Business Analyst and Co-Founder of appmatix.
            </p>
          </div>
          <div id="desc-2" className="description">
            <h2>NANDAKISHORE C V</h2>
            <p>
            Former Software Engineer and Co-Founder of appmatix
            </p>
          </div>
          <div id="desc-3" className="description">
            <h2>ROHITH K</h2>
            <p>
            Former Software Engineer and Co-Founder of appmatix
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-wrapper">
          <div id="card-1" className="flip-card"></div>
          <div id="card-2" className="flip-card"></div>
          <div id="card-3" className="flip-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Why;
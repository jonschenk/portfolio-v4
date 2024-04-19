"use client";

import react, { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import "./AboutMe.css";

function Age() {
  const [age, setAge] = useState("0.0000000000000");
  const birthDate = new Date("2002-10-10");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const ageInMilliseconds = now.getTime() - birthDate.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(13));
    }, 10);

    return () => clearInterval(interval); // cleanup on unmount
  }, [birthDate]);

  return age;
}

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <Reveal>
        <p id="aboutme-description">
          {" "}
          I'm a <span id="aboutme-highlight">{Age()}</span> year old student
          attending <span id="aboutme-highlight">George Fox University</span>{" "}
          and studying
          <span id="aboutme-highlight"> Computer Science</span>. It's currently
          my Junior year. I'm passionate about software development and I'm
          always looking for new opportunities to learn and grow. When I'm not
          making cool things with code, you can find me working out, playing
          guitar, ukulele, piano, bass, drums, or some other random instrument,
          producing music, or diving into a new hobby.
          <br />
          <br />{" "}
          {/* <span id="internship-status">
            I am currently seeking internships for{" "}
            <span id="aboutme-highlight">Summer 2024</span>.
          </span>{" "} */}
        </p>
      </Reveal>
    </div>
  );
}

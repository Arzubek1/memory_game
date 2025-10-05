import React from "react";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <section
      className={scss.hero}
      style={{
        background: `url(/bg.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className={scss.content}>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;

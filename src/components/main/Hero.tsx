"use client";
import React from "react";
import scss from "./Hero.module.scss";
import { useRouter } from "next/navigation";

const Hero = () => {
  const route = useRouter();
  return (
    <section className={scss.hero}>
      <img src="/memory-logo.png" alt="img" className={scss.logo}/>
      <div className={scss.content}>
        <div className={scss.block} onClick={() => route.push("/testIQ")}>
          <img src={"/testIQ.png"} alt="img" />
          <h1>🧠 Проверь свой IQ</h1>
        </div>
        <div className={scss.block}>
          <img src={"/brain-game.png"} alt="img" />
          <h1>⚡ Игры для мозга</h1>
        </div>
        <div className={scss.block} onClick={() => route.push("/memorykids")}>
          <img src={"/memory-for-kids.jpg"} alt="img" />
          <h1>🧩 Память для детей</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

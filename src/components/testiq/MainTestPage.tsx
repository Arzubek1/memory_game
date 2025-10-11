"use client";
import React, { useState } from "react";
import scss from "./MainTestPage.module.scss";
import { FaChevronLeft } from "react-icons/fa6";
import Page1 from "./Page1";

const MainTestPage = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => s + 1);
  return (
    <section className={scss.mainTestPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <a href="/">
              {" "}
              <FaChevronLeft />
            </a>
            <h3>
              <span>{String(step).padStart(2, "0")}</span>
              <span>/10</span>
            </h3>
          </div>
          <div className={scss.timer}>
            <span style={{ width: `${(step / 10) * 100}%` }}></span>
          </div>
          <div className={scss.blocks}>
            <Page1 onNext={next} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTestPage;

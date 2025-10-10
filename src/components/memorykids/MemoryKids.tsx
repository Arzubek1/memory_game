"use client";
import React, { useState } from "react";
import scss from "./MemoryKids.module.scss";
import { FaChevronLeft } from "react-icons/fa6";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import { useAppSelector } from "@/hooks";
import Finish from "./Finish";

const MemoryKids: React.FC = () => {
  const [step, setStep] = useState(1);
  const { finish } = useAppSelector((s) => s.kidsStore);
  const next = () => setStep((s) => s + 1);

  return (
    <section className={scss.memoryKids}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <a href="/">
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
            {step === 1 && <One onNext={next} />}
            {step === 2 && <Two onNext={next} />}
            {step === 3 && <Three onNext={next} />}
            {step === 4 && <Four onNext={next} />}
            {step === 5 && <Five onNext={next} />}
            {step === 6 && <Six onNext={next} />}
            {step === 7 && <Seven onNext={next} />}
            {step === 8 && <Eight onNext={next} />}
            {step === 9 && <Nine onNext={next} />}
            {step === 10 && !finish ? <Ten /> : null}
            {finish && <Finish />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryKids;

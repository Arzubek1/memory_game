"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";

const variants: string[] = [
  "A) Возраст",
  "B) Шарик",
  "C) Дрон",
  "D) Настроение по понедельникам",
];
interface TestProps {
  onNext?: () => void;
}
const Page1: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    if (choose === "A) Возраст") {
      dispatch(handleScore());
    }
    if (isDisabled) return;
    setIsDisabled(true);
    dispatch(handleCorrect(true));
    setTimeout(() => {
      onNext?.();
      dispatch(handleCorrect(false));
    }, 700);
  };
  return (
    <div className={scss.block}>
      <div className={scss.text}>
        <h4>На внимательность</h4>
        <p>Что поднимается, но никогда не опускается?</p>
      </div>
      <div className={scss.varinats}>
        {variants.map((el, idx) => (
          <button
            key={idx}
            disabled={isDisabled}
            onClick={() => handleChoose(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page1;

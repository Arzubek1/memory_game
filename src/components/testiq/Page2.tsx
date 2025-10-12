"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";

const variants: string[] = [
  "A) 6 кг",
  "B) 1.5 кг",
  "C) Всё те же 3 кг",
  "D) Зависит от погоды",
];
interface TestProps {
  onNext?: () => void;
}

const Page2: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    if (choose === "C) Всё те же 3 кг") {
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
        <h4>(Парадокс мышления)</h4>
        <p>
          Если утка стоит на одной ноге, весит 3 кг, сколько она весит на двух?
        </p>
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

export default Page2;

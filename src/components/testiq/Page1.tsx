"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

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
  const [answers, setAnswers] = useState(false);
  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    setAnswers(true)
    if (choose === "A) Возраст") {
      dispatch(handleScore());
    }
    if (isDisabled) return;
    setIsDisabled(true);
    dispatch(handleCorrect(true));
    setTimeout(() => {
      dispatch(handleCorrect(false));
    }, 700);
  };
  return (
    <div className={scss.block}>
      <div className={scss.text}>
        <h4>На внимательность</h4>
        <p>
          {!answers
            ? "Что поднимается, но никогда не опускается?"
            : "✅ Правильный ответ: A) Возраст — растёт, но не падает (если только не в паспорте 😄)."}
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
        <h5 onClick={() => onNext?.()}>Следюший <GrFormNextLink /></h5>
      </div>
    </div>
  );
};

export default Page1;

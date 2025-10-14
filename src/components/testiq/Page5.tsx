"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

const variants: string[] = [
  "A) Букву “М”",
  "B) Время",
  "C) Ошибку",
  "D) Ничего",
];
interface TestProps {
  onNext?: () => void;
}

const Page5: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState(false);

  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    setAnswers(true);
    if (choose === "A) Букву “М”") {
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
        <h4>Словесная игра</h4>
        <p>
          {!answers
            ? "Что можно увидеть один раз в минуте, два раза в моменте, но ни разу в тысяче лет?"
            : "✅ Правильный ответ: A) Букву “М” — встречается 1 раз в слове “минута”, 2 в “моменте”, ни разу в “тысяче лет”."}
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
        <h5 onClick={() => onNext?.()}>
          Следюший <GrFormNextLink />
        </h5>
      </div>
    </div>
  );
};

export default Page5;

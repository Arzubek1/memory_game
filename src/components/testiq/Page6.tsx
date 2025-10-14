"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

const variants: string[] = [
  "A) 1000 мышей",
  "B) 2000 мышей",
  "C) 100 мышей",
  "D) Тот, кто решает, сойдёт с ума раньше",
];
interface TestProps {
  onNext?: () => void;
}

const Page6: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState(false);

  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    setAnswers(true);
    if (choose === "B) 2000 мышей") {
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
        <h4>(Логика-рефлекс)</h4>
        <p>
          {!answers
            ? "Если пять кошек ловят пять мышей за пять минут, то за 100 минут сто кошек поймают…"
            : "✅ Правильный ответ: B) 2000 мышей. Каждая кошка ловит 1 мышь за 5 мин → за 100 мин каждая — 20 мышей → 100 кошек × 20 = 2000 мышей"}
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

export default Page6;

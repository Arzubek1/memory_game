"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

const variants: string[] = [
  "A) Марс",
  "B) Венера",
  "C) Луна",
  "D) Юпитер",
];
interface TestProps {
  onNext?: () => void;
}

const Page7: FC<TestProps> = ({onNext}) => {
      const [isDisabled, setIsDisabled] = useState(false);
      const [answers, setAnswers] = useState(false);
    
      const dispatch = useAppDispatch();
      const handleChoose = (choose: string) => {
        setAnswers(true);
        if (choose === "B) Венера") {
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
            ? "Вопрос: Какая планета находится ближе всего к Земле?"
            : "✅ Правильный ответ: B: Венера — ближайшая к Земле на постоянной основе среди планет; Луна — спутник, не планета."}
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

export default Page7;
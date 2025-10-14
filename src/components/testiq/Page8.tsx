"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

const variants: string[] = [
  "A) Железо",
  "B) Медь",
  "C) Кислород",
  "D) Алюминий",
];
interface TestProps {
  onNext?: () => void;
}

const Page8: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState(false);

  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    setAnswers(true);
    if (choose === "C) Кислород") {
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
            ? "Вопрос: Какой из этих элементов не является металлом?"
            : "✅ Правильный ответ: C: Только кислород не твёрдый металл, остальные — металлы."}
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

export default Page8;

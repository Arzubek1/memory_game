"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";

const variants: string[] = [
  "A) Первую — я хочу получить всё, даже если забуду, зачем",
  "B) Вторую — лучше покой и осознанность, чем хаос желаний.",
  "C) Третью — рискну всем ради нового шанса.",
  "D) Никакую — я останусь и посмотрю, кто войдёт первым.",
];
interface TestProps {
  onNext?: () => void;
}

const Page10: FC<TestProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState(false);

  const dispatch = useAppDispatch();
  const handleChoose = (choose: string) => {
    setAnswers(true);
    if (
      choose === "A) Первую — я хочу получить всё, даже если забуду, зачем" ||
      choose === "B) Вторую — лучше покой и осознанность, чем хаос желаний." ||
      choose === "C) Третью — рискну всем ради нового шанса." ||
      choose === "D) Никакую — я останусь и посмотрю, кто войдёт первым."
    ) {
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
    <div className={`${scss.block} ${scss.page10}`}>
      <div className={scss.text}>
        <h4>«Парадокс выбора»</h4>
        <p>
          {!answers
            ? "Ты стоишь перед тремя дверями:За первой — всё, чего ты хочешь, но навсегда теряешь память.За второй — ничего, но сохраняешь спокойствие и мудрость.За третьей — возможность начать жизнь заново, но с полной неопределённостью (ты можешь стать кем угодно, даже камнем).Какую дверь выберешь?"
            : "Правильного ответа нет — но есть глубина выбора.A) — символ импульсивного ума, сильного желания, но слабого осознания.B) — зрелость, философское мышление, контроль над эмоциями.C) — творческий, исследовательский интеллект, тип «изобретателя».D) — метамысль: наблюдатель, аналитик, IQ-мышление уровня «мета».В настоящем IQ-тесте ты набрал бы максимум, если выбрал D — потому что это ответ вне системы, но с пониманием самой системы."}
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
          Резултать <GrFormNextLink />
        </h5>
      </div>
    </div>
  );
};

export default Page10;

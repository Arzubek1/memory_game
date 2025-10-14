"use client";
import React, { FC, useState } from "react";
import scss from "./AllPages.module.scss";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { handleCorrect, handleScore } from "@/toolkit/testSlice";
import { GrFormNextLink } from "react-icons/gr";
import { useRouter } from "next/navigation";

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
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.testStore.score);

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

  const handleResult = () => {
    setShowResult(true);
  };

  const iq = 100 + (score - 5) * 6;

  const getIQLevel = (iq: number) => {
    if (iq < 85)
      return "🧃 Ниже среднего — но у тебя может быть творческий потенциал!";
    if (iq < 100) return "🙂 Средний уровень — стабильное логическое мышление.";
    if (iq < 115) return "🤓 Выше среднего — гибкий ум и аналитика.";
    if (iq < 130) return "🚀 Высокий IQ — ты мыслящий системно и нестандартно.";
    return "🧠 Гений! Ты думаешь вне привычных рамок!";
  };

  return (
    <div className={`${scss.block} ${scss.page10}`}>
      {!showResult ? (
        <>
          <div className={scss.text}>
            <h4>«Парадокс выбора»</h4>
            <p>
              {!answers
                ? "Ты стоишь перед тремя дверями: За первой — всё, чего ты хочешь, но навсегда теряешь память. За второй — ничего, но сохраняешь спокойствие и мудрость. За третьей — возможность начать жизнь заново, но с полной неопределённостью. Какую дверь выберешь?"
                : "Правильного ответа нет — но есть глубина выбора. A) — импульсивный ум. B) — философская зрелость. C) — исследователь. D) — аналитик вне системы."}
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
            <h5 onClick={handleResult}>
              Результат <GrFormNextLink />
            </h5>
          </div>
        </>
      ) : (
        <div className={scss.resultBlock}>
          <h3>🎯 Твой финальный результат</h3>
          <p>
            У тебя <span>{score}</span> правильных из <b>10</b> возможных!
          </p>
          <p>
            Примерный IQ: <b>{iq}</b>
          </p>
          <h4>{getIQLevel(iq)}</h4>
          <button onClick={() => router.push("/")}>Завершить</button>
        </div>
      )}
    </div>
  );
};

export default Page10;

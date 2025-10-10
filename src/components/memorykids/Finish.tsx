import React from "react";
import scss from "./Blocks.module.scss";
import { FaArrowLeft, FaRedoAlt } from "react-icons/fa";
import { useAppSelector } from "@/hooks";


const Finish = () => {
const {count} = useAppSelector((s) => s.kidsStore)
  return (
    <div className={scss.finish}>
      <div className={scss.card}>
        <h2>🎉 Поздравляем!</h2>
        <p>
          Вы угадали <span>{count}</span> животных!
        </p>

        <div className={scss.buttons}>
          <a href="/" className={scss.back}>
            <FaArrowLeft /> Назад
          </a>
        </div>
      </div>
    </div>
  );
};

export default Finish;

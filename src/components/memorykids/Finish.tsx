import React from "react";
import scss from "./Blocks.module.scss";
import { FaArrowLeft, FaRedoAlt } from "react-icons/fa";
import { useAppSelector } from "@/hooks";


const Finish = () => {

  return (
    <div className={scss.finish}>
      <div className={scss.card}>
        <h2>🎉 Поздравляем!</h2>
        <p>
          Вы угадали <span>{}</span> животных!
        </p>

        <div className={scss.buttons}>
          <a href="/" className={scss.back}>
            <FaArrowLeft /> Назад
          </a>
          <button className={scss.restart}>
            <FaRedoAlt /> Играть снова
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;

import React, { FC } from "react";
import scss from "./AllPages.module.scss";

const variants: string[] = ["A) Возраст", "B) Шарик", "C) Дрон", "D) Настроение по понедельникам"];
interface TestProps {
    onNext?: () => void
}
const Page1: FC<TestProps> = ({onNext}) => {
  return (
    <div className={scss.block}>
      <div className={scss.text}>
        <h4>На внимательность</h4>
        <p>Что поднимается, но никогда не опускается?</p>
      </div>
      <div className={scss.varinats}>
        {variants.map((el) => (
            <button>{el}</button>
        ))}
      </div>
    </div>
  );
};

export default Page1;

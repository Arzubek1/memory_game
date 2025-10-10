"use client";
import React, { FC, useState } from "react";
import scss from "./Blocks.module.scss";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { handleBlocks, handleCount } from "@/toolkit/kidsSlice";

interface BlockProps {
  onNext?: () => void;
}

const variants = ["Кошка", "Собака", "Тигр", "Левь"];

const Three: FC<BlockProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { find } = useAppSelector((s) => s.kidsStore);
  const dispatch = useAppDispatch();
  const handleChoose = (choice: string) => {
    if(choice === "Кошка"){
       dispatch(handleCount())
    }
    if(isDisabled) return;
    setIsDisabled(true)
    dispatch(handleBlocks(true));
    console.log("Choice:", choice);
    setTimeout(() => {
      onNext?.();
      dispatch(handleBlocks(false));
      setIsDisabled(false)
    }, 700);
  };
  return (
    <div className={scss.block}>
      <div className={scss.image}>
        <h4>Угадай животное</h4>
        <Image
          src="/images/memorykids/cat.jpg"
          alt="dog"
          width={380}
          height={220}
        />
      </div>

      <div className={scss.variants}>
        {variants.map((el) => (
          <button
            key={el}
            onClick={() => handleChoose(el)}
            disabled={isDisabled}
            style={{
              backgroundColor: !find
                ? "#9d4edd"
                : find && el === "Кошка"
                ? "green"
                : "red",
            }}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Three;

"use client";
import React, { useState } from "react";
import scss from "./Blocks.module.scss";
import Image from "next/image";
import { handleBlocks, handleCount } from "@/toolkit/kidsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

interface BlockProps {
  onNext?: () => void;
}

const variants: string[] = ["Кошка", "Мышь", "Собака", "Кролик"];

const One: React.FC<BlockProps> = ({ onNext }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { find } = useAppSelector((s) => s.kidsStore);
  const dispatch = useAppDispatch();
  const handleChoose = (choice: string) => {
    if(choice === "Собака") {
       dispatch(handleCount())
    }
    if(isDisabled) return;
    setIsDisabled(true)
    dispatch(handleBlocks(true));
    console.log("User chose:", choice);
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
          src="/images/memorykids/dog.jpg"
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
                : find && el === "Собака"
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

export default One;

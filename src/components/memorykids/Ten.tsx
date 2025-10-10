"use client";
import React, { FC, useState } from "react";
import scss from "./Blocks.module.scss";
import Image from "next/image";
import { handleBlocks, handleFinish } from "@/toolkit/kidsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

interface BlockProps {
  onNext?: () => void;
}

const variants = [ "Осёл", "Лошадь", "Единорог","Зебра"];

const Ten: FC<BlockProps> = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { find, finish } = useAppSelector((s) => s.kidsStore);
  const dispatch = useAppDispatch();
  const handleChoose = (choice: string) => {
    if (isDisabled) return;
    setIsDisabled(true);
    dispatch(handleBlocks(true));
    console.log("Choice:", choice);
    setTimeout(() => {
      dispatch(handleBlocks(false));
      dispatch(handleFinish(true));
      setIsDisabled(false);
    }, 700);
  };
  return (
    <div className={scss.block}>
      <div className={scss.image}>
        <h4>Угадай животное</h4>
        <Image
          src="/images/memorykids/horse.jpg"
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
                : find && el === "Лошадь"
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

export default Ten;

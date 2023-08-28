import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px]
    h-[140px]
    rounded-full
    bg-blue-gradient 
    p-[2px]
    cursor-pointer


    
    `}
    >
      <div
        className={`${styles.flexCenter} flex-col
      bg-primary
      w-[100%]
      h-[100%]
      rounded-full
      transition-all
      duration-150
      hover:w-[250%]
      hover:h-[250%]
      hover:rounded-md
  
      hover:ease-in 
      hover:duration-300
      
      `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p
            className="font-poppins font-medium 
          text-[18px] leading-[23px] mr-2"
          >
            <span className="text-gradient">GET </span>
          </p>
          <img
            src={arrowUp}
            className="w-[23px]
          h-[23px] object-container"
            alt="arrow"
          />
        </div>
        <p
          className="font-poppins font-medium 
          text-[18px] leading-[23px]"
        >
          <span className="text-gradient">STARTED</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

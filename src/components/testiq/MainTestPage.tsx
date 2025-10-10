import React from "react";
import scss from "./MainTestPage.module.scss";
import { FaChevronLeft } from "react-icons/fa6";

const MainTestPage = () => {
  return (
    <section className={scss.mainTestPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <a href="/">
              {" "}
              <FaChevronLeft />
            </a>
            <h3>
                <span>01</span>
                <span>/10</span>
            </h3>
          </div>
          <div className={scss.timer}>
            <span></span>
          </div>
          <div className={scss.blocks}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTestPage;

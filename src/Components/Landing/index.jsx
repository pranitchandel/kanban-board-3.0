import { useState } from "react";
import { icons } from "../../helpers/assets";
import MainSection from "../MainSection";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import styles from "./style.module.css";

const Landing = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      {!isNavOpen && (
        <div className={styles.mobileWrapper}>
          <img
            className={styles.mobileOpenIcon}
            src={icons.navClose}
            alt=""
            srcset=""
            width="26px"
            height="20px"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
        </div>
      )}
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <div
        className={`${styles.rightSection} ${!isNavOpen ? styles.close : ""}`}
      >
        <Topbar />
        <MainSection />
      </div>
    </div>
  );
};

export default Landing;

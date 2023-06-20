import { useEffect, useState } from "react";
import { icons, images } from "../../helpers/assets";
import styles from "./style.module.css";
import TaskSection from "./TaskSection";
import { useLocation } from "react-router-dom";
import { projectsData } from "../../helpers/dummy";

const MainSection = () => {
  const [projectData, setProjectData] = useState({});
  const location = useLocation();
  const search = new URLSearchParams(location.search);

  useEffect(() => {
    const projectName = search.get("project") || projectsData[0].id;
    setProjectData(projectsData.find((project) => project.id === projectName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.sectionNameWrapper}>
          <div className={styles.sectionName}>{projectData?.projectName}</div>
          <img
            src={icons.editName}
            alt=""
            srcset=""
            width={"30px"}
            height={"30px"}
            className={styles.sectionNameImage}
          />
          <img
            src={icons.chain}
            alt=""
            srcset=""
            width={"30px"}
            height={"30px"}
            className={styles.sectionNameImage}
          />
        </div>
        <div className={styles.topRightSection}>
          <img src={icons.addPpt} alt="" width={"15px"} height={"15px"} />
          <div className={styles.inviteText}>Invite</div>
          <div className={styles.ppts}>
            <img
              src={images.ppt1}
              alt=""
              width={"38px"}
              height={"38px"}
              className={`${styles.pptList} ${styles.ppt1}`}
            />
            <img
              src={images.ppt2}
              alt=""
              width={"38px"}
              height={"38px"}
              className={`${styles.pptList} ${styles.ppt2}`}
            />
            <img
              src={images.ppt3}
              alt=""
              width={"38px"}
              height={"38px"}
              className={`${styles.pptList} ${styles.ppt3}`}
            />
            <img
              src={images.ppt4}
              alt=""
              width={"38px"}
              height={"38px"}
              className={`${styles.pptList} ${styles.ppt4}`}
            />
            <div className={styles.remainingPpts}>+2</div>
          </div>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdown}>
            <img
              src={icons.filter}
              alt=""
              srcset=""
              width={"16px"}
              height={"16px"}
            />
            <span>Filter</span>
            <img
              src={icons.profileArrow}
              alt=""
              srcset=""
              width={"16px"}
              height={"16px"}
            />
          </div>
          <div className={styles.dropdown}>
            <img
              src={icons.calendarToday}
              alt=""
              srcset=""
              width={"16px"}
              height={"16px"}
            />
            <span>Today</span>
            <img
              src={icons.profileArrow}
              alt=""
              srcset=""
              width={"16px"}
              height={"16px"}
            />
          </div>
        </div>

        <div className={styles.middleRight}>
          <div className={styles.share}>
            <img src={icons.share} alt="" width={"16px"} height={"16px"} />
            <span>Share</span>
          </div>

          <div className={styles.emptyDiv}></div>
          <img
            src={icons.shareOther}
            alt=""
            width={"40px"}
            height={"40px"}
            className={styles.shareOther}
          />
          <img src={icons.menu} alt="" width={"21px"} height={"21px"} />
        </div>
      </div>
      {projectData && Object.keys(projectData).length && (
        <TaskSection projectData={projectData} />
      )}
    </div>
  );
};

export default MainSection;

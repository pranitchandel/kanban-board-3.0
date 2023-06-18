import { useEffect, useState } from "react";
import { icons } from "../../helpers/assets";
import styles from "./style.module.css";
import { projectsData } from "../../helpers/dummy";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  let searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  useState(() => {
    setProjects(projectsData);
  }, []);

  useEffect(() => {
    console.log("isopen ", isOpen);
    searchParams.set("project", projectsData[0].id);
    navigate({ pathname: ``, search: searchParams.toString() });
  }, []);

  const handleProjectClick = (project) => {
    searchParams.set("project", project.id);
    navigate({ pathname: ``, search: searchParams.toString() });
  };

  const handleNavClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${!isOpen ? styles.navClose : styles.container}`}>
      <div className={styles.navHeading}>
        <div
          className={` ${
            !isOpen ? styles.navHeadingHide : styles.navHeadingShow
          }`}
        >
          <img src={icons.icon} alt="" srcset="" width="24px" height="24px" />
          <div className={styles.projectName}>
            Project M. Pranit Kumar Chandel
          </div>
        </div>
        <img
          className={`${styles.closeIcon} ${!isOpen ? styles.openIcon : ""}`}
          src={icons.navClose}
          alt=""
          srcset=""
          width="26px"
          height="20px"
          onClick={handleNavClick}
        />
      </div>

      <div className={styles.navSections}>
        <div className={styles.section}>
          <img
            src={icons.home}
            alt=""
            srcset=""
            width={"24px"}
            height={"24px"}
          />
          {isOpen && <div className={styles.sectionText}>Home</div>}
        </div>
        <div className={styles.section}>
          <img
            src={icons.message}
            alt=""
            srcset=""
            width={"24px"}
            height={"24px"}
          />
          {isOpen && <div className={styles.sectionText}>Messages</div>}
        </div>
        <div className={styles.section}>
          <img
            src={icons.tasks}
            alt=""
            srcset=""
            width={"24px"}
            height={"24px"}
          />
          {isOpen && <div className={styles.sectionText}>Tasks</div>}
        </div>
        <div className={styles.section}>
          <img
            src={icons.members}
            alt=""
            srcset=""
            width={"24px"}
            height={"24px"}
          />
          {isOpen && <div className={styles.sectionText}>Members</div>}
        </div>
        <div className={styles.section}>
          <img
            src={icons.settings}
            alt=""
            srcset=""
            width={"24px"}
            height={"24px"}
          />
          {isOpen && <div className={styles.sectionText}>Settings</div>}
        </div>
      </div>
      <div
        className={`${styles.emptyDiv} ${!isOpen ? styles.closeEmptyDiv : ""}`}
      ></div>

      {isOpen && (
        <>
          <div className={styles.projectsWrapper}>
            <div className={styles.projectHeading}>
              <div className={styles.headingText}>MY PROJECTS</div>
              <img
                src={icons.addProject}
                alt=""
                srcset=""
                width={"16px"}
                height={"16px"}
              />
            </div>
            <div className={styles.navProjectsListWrapper}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`${styles.projectNameWrapper}
              ${
                project.id === searchParams.get("project")
                  ? styles.projectNameActive
                  : styles.projectNameInactive
              }`}
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={icons[project.tag]}
                    alt=""
                    srcset=""
                    width={"8px"}
                    height={"8px"}
                  />
                  <div className={styles.projectSectionName}>
                    <div className={styles.projectNavName}>
                      {project.projectName}
                    </div>{" "}
                    <div className={styles.tripleDots}>...</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.thought}>
            <div className={styles.bulbWrapper}>
              <div className={styles.blur}></div>
            </div>
            <img
              src={icons.bulb}
              alt=""
              width={24}
              height={24}
              className={styles.bulb}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.contentHeading}>Thoughts Time</div>
              <p className={styles.contentText}>
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <div className={styles.message}>Write a message</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

import styles from "./style.module.css";
import { icons, images } from "../../helpers/assets";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <div className={styles.topIcons}>
          <img
            src={icons.calendar}
            alt=""
            srcset=""
            width="24px"
            height="24px"
          />
          <img
            src={icons.messageQuestion}
            alt=""
            srcset=""
            width="24px"
            height="24px"
          />

          <img
            src={icons.calendar}
            alt=""
            srcset=""
            width="24px"
            height="24px"
          />
        </div>

        <div className={styles.profile}>
          <div className={styles.profileText}>
            <div className={styles.profileName}>Anima Agrawal</div>
            <div className={styles.profileAddress}>U.P, India</div>
          </div>
          <img src={images.porfilePic} alt="" className={styles.profileImage} />
          <img
            src={icons.profileArrow}
            alt=""
            srcset=""
            width="13.5px"
            height="6.45px"
          />
        </div>
      </div>
      <div className={styles.searchBar}>
        <img
          src={icons.searchIcon}
          alt=""
          srcset=""
          width="22px"
          height="22px"
          className={styles.searchIcon}
        />
        <input type="text" placeholder="Search for anything..." />
      </div>
    </div>
  );
};

export default Topbar;

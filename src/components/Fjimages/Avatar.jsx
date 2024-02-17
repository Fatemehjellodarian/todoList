import styles from "./Avatar.module.css";
import { PICTURES } from "../../helpers/constants";

const Avatar = ({ formData }) => {
  return (
    <div className={styles.avatarView}>
      {formData.gender === "female" ? (
        <img
          className={styles.female}
          src={PICTURES.female.url}
          alt={PICTURES.female.alt}
        />
      ) : formData.gender === "male" ? (
        <img
          className={styles.male}
          src={PICTURES.male.url}
          alt={PICTURES.male.alt}
        ></img>
      ) : null}
    </div>
  );
};

export default Avatar;

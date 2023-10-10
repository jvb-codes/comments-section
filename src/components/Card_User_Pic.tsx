import styles from "../styles/Com_Input.module.css";
import JuliusOmo from "../images/avatars/image-juliusomo.png";

function CardUserPic() {
  return (
    <img
      className={styles["reply-box__profile-pic"]}
      src={JuliusOmo}
      alt="profile pic"
    />
  );
}

export default CardUserPic;

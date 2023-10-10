import styles from "../styles/Com_Input.module.css";

function CardUserPic() {
  return (
    <img
      className={styles["reply-box__profile-pic"]}
      src="./images/avatars/image-juliusomo.png"
      alt="profile pic"
    />
  );
}

export default CardUserPic;

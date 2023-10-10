import ComTxtArea from "./Com_TxtArea";
import SendButton from "./Send_Button";
import styles from "../styles/Com_Input.module.css";
import container from "../styles/Cards_Container.module.css";
import JuliusOmo from "../images/avatars/image-juliusomo.png";

function ComInput() {
  return (
    <section className={container["container"]}>
      <div className={styles["comment-box__content"]}>
        <img
          className={styles["comment-box__profile-pic"]}
          src={JuliusOmo}
          alt="profile pic"
        />
        <ComTxtArea />
        <SendButton />
      </div>
    </section>
  );
}

export default ComInput;

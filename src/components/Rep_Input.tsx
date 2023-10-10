import CardUserPic from "./Card_User_Pic";
import RepTextArea from "./Rep_TxtArea";
import RepButton from "./Rep_Button";
import styles from "../styles/Rep_Input.module.css";

type RepInputProps = {
  commenterName: string;
  parentCommentID: number;
};

function RepInput({ commenterName, parentCommentID }: RepInputProps) {
  return (
    <section className={styles["reply-box"]}>
      <div className={styles["reply-box__content"]}>
        <CardUserPic />
        <RepTextArea commenterName={commenterName} />
        <RepButton parentCommentID={parentCommentID} />
      </div>
    </section>
  );
}

export default RepInput;

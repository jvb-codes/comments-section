import styles from "../styles/Cards.module.css";
import EditInput from "./Edit_Input";

type CardTxtProps = {
  comment: string;
  isEditing: boolean;
  parentCommentID: number;
};

function CardTxt({ comment, isEditing, parentCommentID }: CardTxtProps) {
  return (
    <>
      {isEditing ? (
        <EditInput parentCommentID={parentCommentID} comment={comment} />
      ) : (
        <p className={styles["card__comment-body"]}>{comment}</p>
      )}
    </>
  );
}

export default CardTxt;

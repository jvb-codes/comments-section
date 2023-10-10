import styles from "../styles/Cards.module.css";
import { Dispatch, SetStateAction } from "react";

type CardFeedbackProps = {
  feedbackCount: number;
  setFeedbackCount: Dispatch<SetStateAction<number>>;
  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;
};
//not this is a change
export default function CardFeedback({
  feedbackCount,
  setFeedbackCount,
  liked,
  setLiked,
}: CardFeedbackProps) {
  const addOneLike = () => {
    if (!liked) {
      setFeedbackCount((prev) => prev + 1);
      setLiked(true);
    } else return;
  };
  const subtractOneLike = () => {
    if (!liked) {
      setFeedbackCount((prev) => prev - 1);
      setLiked(true);
    } else return;
  };

  return (
    <div className={`${styles["card__feedback"]}`}>
      <img
        className={styles["feedback__up"]}
        onClick={addOneLike}
        src="./images/icon-plus.svg"
        alt="plus-icon"
      />
      <p className={styles["feedback__count"]}>{feedbackCount}</p>
      <img
        className={styles["feedback__down"]}
        onClick={subtractOneLike}
        src="./images/icon-minus.svg"
        alt="minus-icon"
      />
    </div>
  );
}

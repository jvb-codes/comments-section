import styles from "../styles/Cards.module.css";
import { Dispatch, SetStateAction } from "react";
import {
  useIsReplyBoxOpen,
  useOpenEditBox,
  useHandleDeleteComment,
} from "../context/Cards_Context";

type CardFooterProps = {
  feedbackCount: number;
  setFeedbackCount: Dispatch<SetStateAction<number>>;
  parentCommentID: number;
  userName: string;
  edit: boolean;
  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;
};

function CardFooter({
  feedbackCount,
  setFeedbackCount,
  parentCommentID,
  userName,
  edit,
  liked,
  setLiked,
}: CardFooterProps) {
  const { isReplyBoxOpen } = useIsReplyBoxOpen();
  const { openEditBox } = useOpenEditBox();
  const { openDeleteDialog } = useHandleDeleteComment();

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
    <div className={styles["footer__mobile"]}>
      <div className={styles["footer__feedback"]}>
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
      {userName === "juliusomo" && !edit && (
        <div className={styles["footer__icons"]}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(238, 40%, 52%)"
            onClick={() => openDeleteDialog(parentCommentID)}
          >
            <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5357B6"
            className={styles["header__edit-icon"]}
            onClick={() => openEditBox(parentCommentID)}
          >
            <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
          </svg>
        </div>
      )}
      {userName === "juliusomo" ? null : (
        <div
          onClick={() => isReplyBoxOpen(parentCommentID)}
          className={styles["footer__reply"]}
        >
          <img
            className={styles["reply__icon"]}
            src="./images/icon-reply.svg"
            alt="reply-icon"
          />
          <p className={styles["reply__text"]}>Reply</p>
        </div>
      )}
    </div>
  );
}

export default CardFooter;

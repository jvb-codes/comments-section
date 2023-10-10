import styles from "../styles/Cards.module.css";
import { useIsReplyBoxOpen } from "../context/Cards_Context";
import replyIcon from "../images/icon-reply.svg";

type ComHeaderProps = {
  parentCommentID: number;
  userName: string;
  profileImg: string;
  date: string;
};

function ComHeader({
  parentCommentID,
  userName,
  profileImg,
  date,
}: ComHeaderProps) {
  const { isReplyBoxOpen } = useIsReplyBoxOpen();
  return (
    <>
      <div className={styles["card__header"]}>
        <img
          className={styles["header__avatar"]}
          src={profileImg}
          alt="profile-pic"
        />
        <p className={styles["header__username"]}>{userName}</p>
        <p className={styles["header__date"]}>{date}</p>
        <img
          className={styles["header__reply-icon"]}
          src={replyIcon}
          alt="reply-icon"
        />
        <p
          className={styles["header__reply"]}
          onClick={() => isReplyBoxOpen(parentCommentID)}
        >
          Reply
        </p>
      </div>
    </>
  );
}

export default ComHeader;

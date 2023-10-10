import styles from "../styles/Rep_Input.module.css";
import { CommentCardStateType } from "../types/types";
import { useAddReply, useHandleTextInput } from "../context/Cards_Context";

type RepButtonProps = {
  parentCommentID: number;
};

function RepButton({ parentCommentID }: RepButtonProps) {
  const { addReply } = useAddReply();
  const { textareaValue } = useHandleTextInput();

  const newReply: CommentCardStateType = {
    parentCommentID: new Date().getUTCMilliseconds(),
    type: "childReply",
    edit: false,
    profileImg: "./images/avatars/image-juliusomo.png",
    userName: "juliusomo",
    date: "Just now",
    comment: textareaValue,
    feedbackCount: 0,
    isReplyBoxOpen: false,
    replies: [],
  };

  return (
    <button
      onClick={() => addReply(newReply, parentCommentID)}
      className={styles["reply-box__button"]}
    >
      REPLY
    </button>
  );
}

export default RepButton;

import styles from "../styles/Com_Input.module.css";
import { CommentCardStateType } from "../types/types";
import { useAddMyComment, useHandleTextInput } from "../context/Cards_Context";

function SendButton() {
  const { addMyComment } = useAddMyComment();
  const { textareaValue } = useHandleTextInput();

  const newParentComment: CommentCardStateType = {
    parentCommentID: new Date().getUTCMilliseconds(),
    type: "parentComment",
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
      onClick={() => addMyComment(newParentComment)}
      className={styles["comment-box__button"]}
    >
      SEND
    </button>
  );
}

export default SendButton;

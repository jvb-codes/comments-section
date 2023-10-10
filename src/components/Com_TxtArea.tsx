import styles from "../styles/Com_Input.module.css";
import { useEffect, useRef } from "react";

import {
  useHandleTextInput,
  useCommentCardState,
} from "../context/Cards_Context";

function ComTxtArea() {
  const { handleTextareaInput } = useHandleTextInput();
  const textareaRef = useRef<HTMLTextAreaElement>(null!);
  const { commentCardState } = useCommentCardState();

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  useEffect(() => {
    textareaRef.current.value = "";
  }, [commentCardState]);

  return (
    <>
      <textarea
        ref={textareaRef}
        className={styles["comment-box__textarea"]}
        onChange={handleTextareaInput}
      />
    </>
  );
}

export default ComTxtArea;

import styles from "../styles/Rep_Input.module.css";
import { useEffect, useRef } from "react";
import { useHandleTextInput } from "../context/Cards_Context";

type RepTxtAreaProps = {
  commenterName: string;
};

function RepTxtArea({ commenterName }: RepTxtAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { handleTextareaInput } = useHandleTextInput();

  useEffect(() => {
    textareaRef.current?.focus();
    const startPosition = commenterName.length + 1;
    textareaRef.current?.setSelectionRange(startPosition, startPosition);
  }, []);

  return (
    <>
      <textarea
        defaultValue={`@${commenterName}`}
        ref={textareaRef}
        className={styles["reply-box__textarea"]}
        onChange={handleTextareaInput}
      />
    </>
  );
}

export default RepTxtArea;

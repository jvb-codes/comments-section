import styles from "../../../../styles/commentBox.module.css";
import { useEffect, useRef } from "react";

function EditTxtArea() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <>
      <textarea ref={textareaRef} className={styles["comment-box__textarea"]} />
    </>
  );
}

export default EditTxtArea;

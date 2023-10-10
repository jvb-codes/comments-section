import editCommentStyles from "../styles/Edit_Input.module.css";
import {
  useHandleTextInput,
  useHandleUpdateComment,
  useCloseEditBox,
} from "../context/Cards_Context";

type EditCommentBoxProps = {
  parentCommentID: number;
  comment: string;
};

function EditInput({ parentCommentID, comment }: EditCommentBoxProps) {
  const { handleTextareaInput, textareaValue } = useHandleTextInput();
  const { handleUpdateComment } = useHandleUpdateComment();
  const { closeEditBox } = useCloseEditBox();
  return (
    <section className={editCommentStyles["edit"]}>
      <textarea
        className={editCommentStyles["edit__textarea"]}
        onChange={handleTextareaInput}
        defaultValue={comment}
      />
      <div className={editCommentStyles["edit__buttons"]}>
        <button
          className={editCommentStyles["buttons__edit"]}
          onClick={() => handleUpdateComment(parentCommentID, textareaValue)}
        >
          UPDATE
        </button>
        <button
          className={editCommentStyles["buttons__cancel"]}
          onClick={() => closeEditBox(parentCommentID)}
        >
          CANCEL
        </button>
      </div>
    </section>
  );
}

export default EditInput;

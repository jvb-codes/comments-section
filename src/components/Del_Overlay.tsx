import { useHandleDeleteComment } from "../context/Cards_Context";
import styles from "../styles/Del_Overlay.module.css";

const DelOverlay = () => {
  const { openDeleteDialog, handleDeleteComment } = useHandleDeleteComment();

  return (
    <article className={styles["overlay"]}>
      <section className={styles["dialog-box"]}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>Delete Comment</p>
          <p className={styles["description"]}>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div className={styles["buttons"]}>
            <button
              className={styles["cancel-button"]}
              onClick={() => openDeleteDialog(0)}
            >
              NO, CANCEL
            </button>
            <button
              className={styles["delete-button"]}
              onClick={handleDeleteComment}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DelOverlay;

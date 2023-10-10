import Cards from "./Cards";
import ComInput from "./Com_Input";
import DelOverlay from "./Del_Overlay";

import styles from "../styles/Main_Thread.module.css";
import containerStyles from "../styles/Cards_Container.module.css";

import { useCommentCardState } from "../context/Cards_Context";
import { useHandleDeleteComment } from "../context/Cards_Context";

const MainThread = () => {
  const { commentCardState } = useCommentCardState();
  const renderRecursiveCommentCard = commentCardState.map((comment) => (
    <Cards key={comment.parentCommentID} {...comment} />
  ));
  const { isDeleteDialog } = useHandleDeleteComment();

  return (
    <>
      {isDeleteDialog.dialogBox && <DelOverlay />}
      <main className={styles["wrapper"]}>
        <div className={containerStyles["container"]}>
          {renderRecursiveCommentCard}
        </div>
        <ComInput />
      </main>
    </>
  );
};

export default MainThread;

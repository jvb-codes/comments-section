import styles from "../styles/Cards.module.css";
import { useState } from "react";
import { CommentCardStateType } from "../types/types";
import CardFeedBack from "./Card_Feedback";
import CardHeader from "./Card_Header";
import CardTxt from "./Card_Txt";
import CardFooter from "./Card_Footer";
import RepInput from "./Rep_Input";

function Cards(props: CommentCardStateType) {
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <section className={`${props.type === "childReply" && styles["reply"]}`}>
      <div className={styles["card"]}>
        {props.userName === "juliusomo" ? null : (
          <CardFeedBack
            feedbackCount={feedbackCount}
            setFeedbackCount={setFeedbackCount}
            liked={liked}
            setLiked={setLiked}
          />
        )}
        <div className={styles["card__content"]}>
          <CardHeader
            userName={props.userName}
            profileImg={props.profileImg}
            date={props.date}
            parentCommentID={props.parentCommentID}
            edit={props.edit}
          />
          <CardTxt
            isEditing={props.edit}
            comment={props.comment}
            parentCommentID={props.parentCommentID}
          />
        </div>

        <CardFooter
          feedbackCount={feedbackCount}
          setFeedbackCount={setFeedbackCount}
          parentCommentID={props.parentCommentID}
          userName={props.userName}
          edit={props.edit}
          liked={liked}
          setLiked={setLiked}
        />
      </div>

      {props.isReplyBoxOpen && (
        <RepInput
          parentCommentID={props.parentCommentID}
          commenterName={props.userName}
        />
      )}

      {props.replies &&
        props.replies.length > 0 &&
        props.replies.map((reply) => <Cards {...reply} />)}
    </section>
  );
}

export default Cards;

export interface CommentCardStateType {
  parentCommentID: number;
  type: "childReply" | "parentComment";
  edit: boolean;
  profileImg: string;
  userName: string;
  date: string;
  comment: string;
  feedbackCount: number;
  isReplyBoxOpen: boolean;
  replies: CommentCardStateType[];
}

//CommentCard Reducer Action Types

type UpdateRepliesActionType = {
  type: "ADD_NEW_REPLY";
  newReply: CommentCardStateType;
  parentCommentID: number;
  replyID?: string;
};

type UpdateParentCommentsActionType = {
  type: "ADD_MY_COMMENT";
  newParentComment: CommentCardStateType;
};

type IsReplyBoxOpenType = {
  type: "IS_REPLY_BOX_OPEN";
  parentCommentID: number;
};

type HandleTextInputType = {
  type: "HANDLE_TEXT_INPUT";
  comment: string;
};

type OpenEditBoxType = {
  type: "OPEN_EDIT_BOX";
  id: number;
};

type CloseEditBoxType = {
  type: "CLOSE_EDIT_BOX";
  id: number;
};

type UpdateCommentType = {
  type: "UPDATE_COMMENT";
  updatedComment: string;
  id: number;
};

type DeleteCommentType = {
  type: "DELETE_COMMENT";
  id: number;
};

export type ReducerActionType =
  | UpdateRepliesActionType
  | UpdateParentCommentsActionType
  | HandleTextInputType
  | OpenEditBoxType
  | CloseEditBoxType
  | UpdateCommentType
  | DeleteCommentType
  | IsReplyBoxOpenType;

export type CommentCardContextType = {
  commentCardState: CommentCardStateType[];
  commentCardDispatch: React.Dispatch<ReducerActionType>;
};

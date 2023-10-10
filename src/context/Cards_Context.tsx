import {
  createContext,
  useContext,
  useState,
  useReducer,
  ReactElement,
} from "react";

import { CommentCardStateType, ReducerActionType } from "../types/types";

import InitialCards from "../data/Initial_Cards";
//REDUCER FUNCTION
const reducer = (
  state: CommentCardStateType[],
  action: ReducerActionType
): CommentCardStateType[] => {
  switch (action.type) {
    case "ADD_MY_COMMENT":
      return [action.newParentComment, ...state];

    case "IS_REPLY_BOX_OPEN":
      const matchingReplies = (
        id: number,
        replies: CommentCardStateType[]
      ): CommentCardStateType[] => {
        return replies.map((reply) =>
          reply.parentCommentID === id
            ? { ...reply, isReplyBoxOpen: !reply.isReplyBoxOpen }
            : { ...reply, replies: matchingReplies(id, reply.replies) }
        );
      };
      const matchingParentComment = state.map((comment) =>
        comment.parentCommentID === action.parentCommentID
          ? { ...comment, isReplyBoxOpen: !comment.isReplyBoxOpen }
          : {
              ...comment,
              replies: matchingReplies(action.parentCommentID, comment.replies),
            }
      );
      return matchingParentComment;

    case "OPEN_EDIT_BOX": {
      const matchingReplies = (
        id: number,
        replies: CommentCardStateType[]
      ): CommentCardStateType[] => {
        return replies.map((reply) =>
          reply.parentCommentID === id
            ? { ...reply, edit: true }
            : { ...reply, replies: matchingReplies(id, reply.replies) }
        );
      };
      const matchingParentComment = state.map((comment) =>
        comment.parentCommentID === action.id
          ? { ...comment, edit: true }
          : {
              ...comment,
              replies: matchingReplies(action.id, comment.replies),
            }
      );

      return matchingParentComment;
    }
    case "CLOSE_EDIT_BOX": {
      const matchingReplies = (
        id: number,
        replies: CommentCardStateType[]
      ): CommentCardStateType[] => {
        return replies.map((reply) =>
          reply.parentCommentID === id
            ? { ...reply, edit: false }
            : { ...reply, replies: matchingReplies(id, reply.replies) }
        );
      };
      const matchingParentComment = state.map((comment) =>
        comment.parentCommentID === action.id
          ? { ...comment, edit: false }
          : {
              ...comment,
              replies: matchingReplies(action.id, comment.replies),
            }
      );

      return matchingParentComment;
    }

    case "ADD_NEW_REPLY":
      const updateChildren = (
        replies: CommentCardStateType[],
        newReply: CommentCardStateType,
        id: number
      ): CommentCardStateType[] =>
        replies.map((reply) =>
          reply.parentCommentID === id
            ? { ...reply, replies: [newReply, ...reply.replies] }
            : { ...reply, replies: updateChildren(reply.replies, newReply, id) }
        );

      const updatedState = state.map((comment) => ({
        ...comment,
        replies:
          comment.parentCommentID === action.parentCommentID
            ? [action.newReply, ...comment.replies]
            : updateChildren(
                comment.replies,
                action.newReply,
                action.parentCommentID
              ),
      }));
      return updatedState;

    case "UPDATE_COMMENT":
      const matchChildComment = (
        id: number,
        updatedComment: string,
        replies: CommentCardStateType[]
      ): CommentCardStateType[] => {
        return replies.map((reply) =>
          reply.parentCommentID === id
            ? { ...reply, comment: updatedComment, edit: false }
            : {
                ...reply,
                replies: matchChildComment(id, updatedComment, reply.replies),
              }
        );
      };
      const matchParentComment = state.map((comment) =>
        comment.parentCommentID === action.id
          ? { ...comment, comment: action.updatedComment, edit: false }
          : {
              ...comment,
              replies: matchChildComment(
                action.id,
                action.updatedComment,
                comment.replies
              ),
            }
      );
      return matchParentComment;

    case "DELETE_COMMENT":
      const deleteCommentRecursively = (
        id: number,
        replies: CommentCardStateType[]
      ): CommentCardStateType[] => {
        return replies
          .map((reply) => ({
            ...reply,
            replies: deleteCommentRecursively(id, reply.replies),
          }))
          .filter((reply) => reply.parentCommentID !== id);
      };

      const deleteParentComment = state.filter(
        (comment) => comment.parentCommentID !== action.id
      );

      const finalState = deleteParentComment.map((comment) => ({
        ...comment,
        replies: deleteCommentRecursively(action.id, comment.replies),
      }));

      return finalState;

    default:
      return state;
  }
};

const useCommentCardContext = (initState: CommentCardStateType[]) => {
  const [commentCardState, commentCardDispatch] = useReducer(
    reducer,
    initState
  );
  const [textareaValue, setTextareaValue] = useState("");
  const [isDeleteDialog, setIsDeleteDialog] = useState({
    id: 0,
    dialogBox: false,
  });

  const isReplyBoxOpen = (parentCommentID: number) => {
    commentCardDispatch({
      type: "IS_REPLY_BOX_OPEN",
      parentCommentID: parentCommentID,
    });
  };

  const addReply = (
    newReply: CommentCardStateType,
    parentCommentID: number
  ) => {
    if (newReply.comment === "") {
      alert("Enter reply first.");
    } else {
      commentCardDispatch({
        type: "ADD_NEW_REPLY",
        newReply: newReply,
        parentCommentID: parentCommentID,
      });
      setTextareaValue("");
      isReplyBoxOpen(parentCommentID);
    }
  };

  const addMyComment = (myComment: CommentCardStateType) => {
    if (myComment.comment === "") {
      alert("Enter comment first.");
    } else
      commentCardDispatch({
        type: "ADD_MY_COMMENT",
        newParentComment: myComment,
      });
    setTextareaValue("");
  };

  const handleTextareaInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const comment = event.target.value;
    setTextareaValue(comment);
  };

  const openEditBox = (id: number) => {
    commentCardDispatch({ type: "OPEN_EDIT_BOX", id: id });
  };

  const closeEditBox = (id: number) => {
    commentCardDispatch({ type: "CLOSE_EDIT_BOX", id: id });
  };

  const handleUpdateComment = (id: number, updatedComment: string) => {
    if (updatedComment === "") {
      alert("Enter changes first.");
    } else
      commentCardDispatch({
        type: "UPDATE_COMMENT",
        id: id,
        updatedComment: updatedComment,
      });
    setTextareaValue("");
  };

  const openDeleteDialog = (parentCommentID: number) => {
    setIsDeleteDialog({
      id: parentCommentID,
      dialogBox: !isDeleteDialog.dialogBox,
    });
  };

  const handleDeleteComment = () => {
    commentCardDispatch({
      type: "DELETE_COMMENT",
      id: isDeleteDialog.id,
    });

    setIsDeleteDialog({
      id: 0,
      dialogBox: false,
    });
  };

  return {
    commentCardState,
    addReply,
    addMyComment,
    isReplyBoxOpen,
    handleTextareaInput,
    textareaValue,
    openEditBox,
    closeEditBox,
    handleUpdateComment,
    isDeleteDialog,
    openDeleteDialog,
    handleDeleteComment,
  };
};

type UseCommentCardContextType = ReturnType<typeof useCommentCardContext>;

const initContextState: UseCommentCardContextType = {
  commentCardState: InitialCards,
  textareaValue: "",
  isDeleteDialog: { id: 0, dialogBox: false },
  addReply: () => {},
  addMyComment: () => {},
  isReplyBoxOpen: () => {},
  handleTextareaInput: () => {},
  openEditBox: () => {},
  closeEditBox: () => {},
  handleUpdateComment: () => {},
  openDeleteDialog: () => {},
  handleDeleteComment: () => {},
};

export const CommentCardContext =
  createContext<UseCommentCardContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CommentCardProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CommentCardContext.Provider value={useCommentCardContext(InitialCards)}>
      {children}
    </CommentCardContext.Provider>
  );
};

export const useAddReply = () => {
  const { addReply } = useContext(CommentCardContext);
  return { addReply };
};

export const useAddMyComment = () => {
  const { addMyComment } = useContext(CommentCardContext);
  return { addMyComment };
};

export const useCommentCardState = () => {
  const { ...commentCardState } = useContext(CommentCardContext);
  return commentCardState;
};

export const useIsReplyBoxOpen = () => {
  const { isReplyBoxOpen } = useContext(CommentCardContext);
  return { isReplyBoxOpen };
};

export const useHandleTextInput = () => {
  const { handleTextareaInput, textareaValue } = useContext(CommentCardContext);
  return { handleTextareaInput, textareaValue };
};

export const useOpenEditBox = () => {
  const { openEditBox } = useContext(CommentCardContext);
  return { openEditBox };
};

export const useCloseEditBox = () => {
  const { closeEditBox } = useContext(CommentCardContext);
  return { closeEditBox };
};

export const useHandleUpdateComment = () => {
  const { handleUpdateComment } = useContext(CommentCardContext);
  return { handleUpdateComment };
};

export const useHandleDeleteComment = () => {
  const { handleDeleteComment, isDeleteDialog, openDeleteDialog } =
    useContext(CommentCardContext);
  return { handleDeleteComment, isDeleteDialog, openDeleteDialog };
};

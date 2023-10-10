//HOOKS
import { createContext, useContext } from "react";

//TYPESCRIPT

import { ReplyCardType } from "./src/types/types";

type ReducerActionType = {
  type:
    | "INCREMENT"
    | "DECREMENT"
    | "OPEN_REPLY_BOX"
    | "UPDATE_REPLIES"
    | "REPLY_BODY"
    | "CLOSE_REPLY_BOX";
  id?: number;
  incrementCount?: number;
  decrementCount?: number;
  newReply?: ReplyCardType[];
  replyBody?: string;
  commentCardID?: number;
};

type ReplyCardContextType = {
  replyCardState: ReplyCardType[];
  replyCardDispatch: React.Dispatch<ReducerActionType>;
};

//REDUCER FUNCTION
// export const replyCardReducer = (
//   state: ReplyCardType[],
//   action: ReducerActionType
// ): ReplyCardType[] => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state.map((reply) => {
//         console.log(action.replyBody);
//         return reply.parentCommentID === action.id
//           ? {
//               ...reply,
//               feedbackCount: reply.feedbackCount + 1,
//             }
//           : reply;
//       });
//     case "DECREMENT":
//       return state.map((reply) =>
//         reply.parentCommentID === action.id &&
//         action.decrementCount !== undefined
//           ? {
//               ...reply,
//               feedbackCount: reply.feedbackCount - action.decrementCount,
//             }
//           : reply
//       );
//     case "OPEN_REPLY_BOX":
//       return state.map((reply) =>
//         reply.parentCommentID === action.id
//           ? { ...reply, isReplyBoxOpen: true }
//           : reply
//       );
//     case "CLOSE_REPLY_BOX":
//       return state.map((reply) => {
//         return { ...reply, isReplyBoxOpen: false };
//       });
//     case "REPLY_BODY":
//       if (action.replyBody && action.id !== undefined) {
//         return state.map((reply) =>
//           reply.parentCommentID === action.id
//             ? { ...reply, replyBody: action.replyBody }
//             : reply
//         );
//       }
//       return state;

//     default:
//       return state;
//   }
// };

//INITIAL STATE
export const initialReplyCard: ReplyCardType[] = [];

//CREATE CONTEXT
export const ReplyCardContext = createContext<ReplyCardContextType>({
  replyCardState: initialReplyCard,
  replyCardDispatch: () => {},
});

//USE CONTEXT
export const useReplyCardContext = () => useContext(ReplyCardContext);

// {
//   id: 2,
//   profileImg: "./images/avatars/image-ramsesmiron.png",
//   userName: "ramsesmiron",
//   date: "1 week ago",
//   replyBody:
//     "@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
//   feedbackCount: 0,
//   isReplyBoxOpen: false,
// },

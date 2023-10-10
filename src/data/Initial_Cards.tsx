import { CommentCardStateType } from "../types/types";
import AmyRobson from "../images/avatars/image-amyrobson.png";
import MaxBlagun from "../images/avatars/image-maxblagun.png";
import RamsesMiron from "../images/avatars/image-ramsesmiron.png";

const InitialCards: CommentCardStateType[] = [
  {
    parentCommentID: 1,
    type: "parentComment",
    edit: false,
    profileImg: AmyRobson,
    userName: "amyrobson",
    date: "1 month ago",
    comment:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
    feedbackCount: 0,
    isReplyBoxOpen: false,
    replies: [],
  },
  {
    parentCommentID: 2,
    type: "parentComment",
    edit: false,
    profileImg: MaxBlagun,
    userName: "maxblagun",
    date: "2 weeks ago",
    comment:
      "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    feedbackCount: 0,
    isReplyBoxOpen: false,
    replies: [
      {
        parentCommentID: 3,
        type: "childReply",
        edit: false,
        profileImg: RamsesMiron,
        userName: "ramsesmiron",
        date: "1 week ago",
        comment:
          "@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
        feedbackCount: 4,
        isReplyBoxOpen: false,
        replies: [],
      },
    ],
  },
];

export default InitialCards;

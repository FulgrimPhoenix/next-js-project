import { IComment } from "@/types/comments.types";
import { create } from "zustand";

interface CommentStore {
  comments: IComment[];
  addComment: (name: string, email: string, text: string) => void;
}

const useCommentStore = create<CommentStore>((set) => ({
  comments: [],
  addComment: (name: string, email: string, text: string) => {
    set((state) => ({
      comments: [
        ...state.comments,
        { id: String(state.comments.length + 1), name, email, text },
      ],
    }));
  },
}));

export default useCommentStore;

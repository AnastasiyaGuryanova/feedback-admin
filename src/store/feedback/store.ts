import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FeedbackState } from "./types";
import { initialState } from "./initialState";
import { feedbackActions } from "./actions";

export const useFeedbackStore = create<FeedbackState>()(
  devtools(
    (set, get) => ({
      ...initialState,
      ...feedbackActions(set, get),
      initialState,
    }),
    {
      name: "feedback-store",
    }
  )
);

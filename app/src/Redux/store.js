import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./Langauge/LanguageSlice";

export default configureStore({
  reducer: {
    language: languageSlice,
  },
});

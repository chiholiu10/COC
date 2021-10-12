import { FC } from "react";
import { Cat } from "./Cat/Cat";
import { Dog } from "./Dog/Dog";

export const App: FC = () => (
  <div>
    <Dog />
    <Cat />
  </div>
);
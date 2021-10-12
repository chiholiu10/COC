import { FC } from "react";
import { AppComponent } from "./App.styles";
import { Cat } from "./Cat/Cat";
import { Dog } from "./Dog/Dog";

export const App: FC = () => (
  <AppComponent>
    <Dog />
    <Cat />
  </AppComponent>
);
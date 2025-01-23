import React from "react";
import { Menu } from "./pages/menu/index";
import { Provider } from "../components/ui/provider";

export default function Home() {
  return (
    <div>
      <Provider>
        <Menu />
      </Provider>
    </div>
  );
}
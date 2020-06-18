import * as React from "react";
import "./styles.css";
import { UserProvider } from "./context/userContext";
import Routes from "./routes";
export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

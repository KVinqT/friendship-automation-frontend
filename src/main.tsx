import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme.ts";
import { BrowserRouter, Routes, Route } from "react-router";
import AddFriends from "./features/add-friends/AddFriends.tsx";
import CreateDecisionFlow from "./features/create-decision-flow/CreateDecisionFlow.tsx";
import Login from "./features/login/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-friends" element={<AddFriends />} />
          <Route
            path="/create-decision-flow"
            element={<CreateDecisionFlow />}
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);

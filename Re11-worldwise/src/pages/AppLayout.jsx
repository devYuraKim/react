import styles from "./AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import Map from "../components/Map";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AppLayout() {
  const navigate = useNavigate();

  useEffect(
    function () {
      function useBackspace(e) {
        const activeElement = document.activeElement.tagName.toLowerCase();
        if (
          activeElement !== "textarea" &&
          activeElement !== "input" &&
          e.code === "Backspace"
        )
          navigate(-1);
      }

      document.addEventListener("keydown", useBackspace);

      return () => document.removeEventListener("keydown", useBackspace);
    },
    [navigate]
  );

  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;

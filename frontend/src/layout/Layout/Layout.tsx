import Header from "@/layout/Header";
import Main from "@/layout/Main";
import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={styles["layout-container"]}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  )
}

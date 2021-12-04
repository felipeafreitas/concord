import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";


export const App = () => (
  <Layout>
    <Outlet />
  </Layout>
)

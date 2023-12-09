import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "./styles.less";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
);

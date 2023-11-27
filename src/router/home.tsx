import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Layout from "../pages/layout";
import UserSetting from "../pages/user-setting";
// import { Outlet } from "react-router-dom";
// import FundTransfer from "@/pages/fund-transfer";
// import FundReceive from "@/pages/fund-receive";
import MonthlyHistory from "@/pages/monthly-history";
import RecordSearch from "@/pages/record-search";
import FundOperation from "@/pages/fund-operation";

export const HomeRouter = {
  path: "/home",
  element: <Layout />,
  children: [
    {
      index: true,
      path: "userSetting",
      element: <UserSetting />,
    },
    // {
    //   index: true,
    //   path: "fundTransfer",
    //   element: <FundTransfer />,
    // },
    // {
    //   index: true,
    //   path: "fundReceive",
    //   element: <FundReceive />,
    // },
    {
      index: true,
      path: "fundOperation",
      element: <FundOperation />,
    },
    {
      index: true,
      path: "monthlyHistory",
      element: <MonthlyHistory />,
    },
    {
      index: true,
      path: "recordSearch",
      element: <RecordSearch />,
    },
  ],
};

export const homeMenu =
  // {
  //   path: "/home",
  //   element: <Layout />,
  //   title: "首页",
  //   icon: <UserOutlined />,
  //   menuPath: "content",
  //   children:
  [
    {
      index: true,
      path: "userSetting",
      menuPath: "userSetting",
      element: <UserSetting />,
      icon: <UserOutlined />,
      title: "用户设置",
    },
    {
      index: true,
      path: "fundOperation",
      menuPath: "fundOperation",
      element: <FundOperation />,
      icon: <LaptopOutlined />,
      title: "资金流动",
      //   children: [
      //     {
      //       index: true,
      //       path: "fundTransfer",
      //       menuPath: "fundTransfer",
      //       element: <FundTransfer />,
      //       icon: <LaptopOutlined />,
      //       title: "转账",
      //     },
      //     {
      //       index: true,
      //       path: "fundReceive",
      //       menuPath: "fundReceive",
      //       element: <FundReceive />,
      //       icon: <LaptopOutlined />,
      //       title: "收账",
      //     },
      //   ],
    },
    {
      index: true,
      path: "checkHistory",
      menuPath: "checkHistory",
      //   element: <Outlet />,
      icon: <NotificationOutlined />,
      title: "查看历史",
      children: [
        {
          index: true,
          path: "monthlyHistory",
          menuPath: "monthlyHistory",
          element: <MonthlyHistory />,
          icon: <NotificationOutlined />,
          title: "历史月结单",
        },
        {
          index: true,
          path: "recordSearch",
          menuPath: "recordSearch",
          element: <RecordSearch />,
          icon: <NotificationOutlined />,
          title: "交易搜索",
        },
      ],
    },
  ];
//   ,
// };

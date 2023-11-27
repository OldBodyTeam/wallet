import { menu } from "@/router/routes";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  MenuProps,
  theme,
  Avatar,
} from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import a from "@/assets/wallet.png";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Content, Footer, Sider } = Layout;
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const handleMenus = (menus: any) => {
  return menus.map((v: any) => {
    return getItem(
      v.title,
      v.path,
      v.icon,
      v.children ? handleMenus(v.children) : undefined
    );
  });
};

const KEY_TO_TITLE = {
  userSetting: "用户设置",
  fundOperation: "资金流动",
  checkHistory: "查看历史",
  monthlyHistory: "历史月结单",
  recordSearch: "交易搜索",
};

const ContentLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const [nav, setNav] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const handleLeftClick = (props) => {
    const arr = props.keyPath.reverse();
    const res = [];
    for (const item of arr) {
      res.push(KEY_TO_TITLE[item]);
    }
    setNav(res);
    navigate(props.key);
  };
  const item = handleMenus(menu);
  console.log(item);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="flex-col h-full">
            <div className="h-24 w-full flex gap-2 justify-center items-center">
              <Avatar src={a} />
              <div
                className="text-white"
                style={{ display: collapsed ? "none" : "block" }}
              >
                Wallet 网银平台
              </div>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className="flex-1"
              items={item}
              onClick={handleLeftClick}
            />
          </div>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {nav.map((_, i) => {
                return <Breadcrumb.Item>{nav[i]}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <div className="bg-white p-4 min-h-full">
              <Outlet />
            </div>
          </Content>
          <Footer className="bottom-0" style={{ textAlign: "center" }}>
            Wallet ©2023 Created by Jiaxin Yu
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ContentLayout;

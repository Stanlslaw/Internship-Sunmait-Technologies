import { FC, useState } from "react";
import { MenuProps } from "antd";
import { Layout, Menu } from "antd";

import CreateEditPage from "./pages/CreateEditPage";
import ListPage from "./pages/ListPage";
const { Header, Content } = Layout;
import { PagesList } from "./types/index.ts";

const menuItems: MenuProps["items"] = [
  { key: 1, label: "ListPage" },
  { key: 2, label: "EditPage" },
];

const pages: PagesList = {
  "1": <ListPage />,
  "2": <CreateEditPage />,
};

const App: FC = () => {
  const [selectedPage, setSelectedPage] = useState("1");

  function handlePages(key: string): void {
    setSelectedPage(key);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          items={menuItems}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedPage]}
          onClick={({ key }) => handlePages(key)}
          style={{ flex: 1, minWidth: 0 }}></Menu>
      </Header>
      <Layout>
        <Content style={{ padding: "1rem" }}>{pages[selectedPage]}</Content>
      </Layout>
    </Layout>
  );
};

export default App;

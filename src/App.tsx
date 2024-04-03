import "./App.css";

import CustomizationPanel from "./components/CustomizationPanel";
import FishPreview from "./components/FishPreview";
import FishCommandOutput from "./components/FishCommandOutput";

import { Button, ConfigProvider, theme } from "antd";
import { useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

function App() {
  const [globalTheme, setGlobalTheme] = useState("light");

  return (
    <ConfigProvider
      theme={{
        algorithm:
          (globalTheme == "light" && theme.defaultAlgorithm) ||
          theme.darkAlgorithm,
      }}
    >
      <div id="side_panel">
        <CustomizationPanel />
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          marginTop: "48px",
        }}
      >
        <FishPreview />
        <FishCommandOutput />
      </div>
      <Button
        onClick={() => {
          const newTheme = (globalTheme == "light" && "dark") || "light";
          setGlobalTheme(newTheme);
          if (globalTheme == "light") {
            document.body.classList.add("dark");
          } else {
            document.body.classList.remove("dark");
          }
        }}
        shape="round"
        icon={(globalTheme == "light" && <MoonOutlined />) || <SunOutlined />}
        id="changeThemeBtn"
      />
    </ConfigProvider>
  );
}

export default App;

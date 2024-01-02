import React from "react";
import { Spin } from "antd";

import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader">
        <div className="loader-inner">
          <Spin size="large" />
        </div>
      </div>
    </div>
  );
}

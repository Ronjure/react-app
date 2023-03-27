import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function BackRoot() {
  return (
    <div>
      <Link to="/">
        <Typography.Link>返回</Typography.Link>
      </Link>
      {/* <a href="/">dsfgdsf</a> */}
    </div>
  )
}

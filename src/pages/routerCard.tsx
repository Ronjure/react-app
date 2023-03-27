import React from "react";
import {
  Link,
} from "react-router-dom";

import { Typography } from 'antd';


export default function RouterCard() {
  return (
    <div>
      <Link to="/first">
        <Typography.Link>路由一：/first</Typography.Link>
      </Link>
    </div>
  )
}

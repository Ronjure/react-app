import { Outlet } from "react-router-dom";

export function ReduxPage() {
  return (
    <div>
      这里是Redux主页面
      <Outlet />
    </div>
  )
}

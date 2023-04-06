import { Outlet } from "react-router-dom";

export function RoutePage() {
  return (
    <div>
      <span>这里是路由使用页面</span>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

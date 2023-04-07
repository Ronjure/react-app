import { Outlet } from "react-router-dom";

export function RoutePage() {
  return (
    <div>
      <h2>这里是路由使用页面</h2>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

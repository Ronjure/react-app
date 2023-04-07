import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div>
      <Empty description="您要访问的页面不存在！">
        <Button type="primary" onClick={() => navigate('/')}>返回主页</Button>
      </Empty>
    </div>
  )
}

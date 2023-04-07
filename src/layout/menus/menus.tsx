import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Menus() {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: '路由',
      key: '/route',
      children: [
        {
          label: '基础路由',
          key: '/route/basic',
        },
        {
          label: '路由参数',
          key: '/route/params',
        }
      ],
    },
    {
      label: '状态',
      key: '/redux',
      children: [
        {
          label: '基础状态',
          key: '/redux/basic',
        }
      ],
    }
  ]
  const changeMenu = ({ key }) => {
    navigate(key)
  }
  return (
    <Menu items={menuItems} mode="inline" onClick={changeMenu} />
  )
}

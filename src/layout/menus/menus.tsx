import { Menu } from "antd";
import { useMatches, useNavigate } from "react-router-dom";

interface menuItem {
  key: string,
  children?: menuItem[]
}

function getMatchKey(key: string, menus: menuItem[], expandKeys = [] as string[]) {
  const subMenu = menus.find(menu => key.includes(menu.key))

  let allKeys = [...expandKeys]
  if (subMenu?.key) {
    allKeys.push(subMenu.key)
  }

  if (subMenu?.children) {
    return getMatchKey(key, subMenu.children, allKeys)
  }
  return [subMenu?.key, allKeys]
}

export default function Menus() {
  const navigate = useNavigate()

  const matches = useMatches()

  const longestRoute = matches.pop()?.pathname || ''

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
  const [defaultSelectedKey, defaultOpenKeys] = getMatchKey(longestRoute, menuItems)



  const changeMenu = ({ key }) => {
    navigate(key)
  }
  return (
    <Menu items={menuItems} mode="inline" defaultSelectedKeys={[defaultSelectedKey]} defaultOpenKeys={defaultOpenKeys} onClick={changeMenu} />
  )
}

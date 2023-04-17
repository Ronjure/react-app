import { Button, Input, Card } from "antd";
import { useState } from "react";
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

export default function RouteParamWrapper() {
  const navigate = useNavigate()
  const params = useParams()
  const [searchParams] = useSearchParams()

  const [param, setParam] = useState(params?.param || '')

  const initQuerys = [] as { key: string, value: string }[]
  searchParams?.forEach((value, key) => {
    initQuerys.push({ key, value })
  })

  const [querys, setQuerys] = useState(initQuerys?.length ? initQuerys : [{ key: '', value: '' }])

  const handleParamChange = e => {
    setParam(e.target.value)
  }
  const handleKeyChange = (e, index) => {
    const midQuerys = [...querys]
    midQuerys[index].key = e.target.value
    setQuerys(midQuerys)
  }
  const handleValueChange = (e, index) => {
    const midQuerys = [...querys]
    midQuerys[index].value = e.target.value
    setQuerys(midQuerys)
  }
  const handleAddQuery = (index) => {
    const midQuerys = [...querys]
    midQuerys.splice(index + 1, 0, { key: '', value: '' })
    setQuerys(midQuerys)
  }
  const handleRemoveQuery = (index) => {
    if (querys.length === 1) {
      return
    }
    const midQuerys = [...querys]
    midQuerys.splice(index, 1)
    setQuerys(midQuerys)
  }

  const handleNavigate = () => {
    const keyedQuery = querys.filter(query => query.key)
    const qStr = keyedQuery.map(query => `${query.key}=${query.value}`).join('&')
    navigate(`${param}?${qStr}`)
  }

  return (
    <div className="route-param-wrapper">
      <Card>
        <Input
          addonBefore={<div>param: </div>}
          value={param}
          maxLength={100}
          showCount
          placeholder="请输入路由参数"
          onChange={handleParamChange}
        >
        </Input>
        <div className="query-wrapper">
          {
            querys.map((query, index) => (
              <div key={index} className="query-items">
                <Input
                  addonBefore={<div>key: </div>}
                  maxLength={100}
                  value={query.key}
                  onChange={e => handleKeyChange(e, index)}
                  placeholder="请输入查询参数"
                >
                </Input>
                <Input
                  addonBefore={<div>value: </div>}
                  maxLength={100}
                  value={query.value}
                  onChange={e => handleValueChange(e, index)}
                  placeholder="请输入参数值"
                >
                </Input>
                <Button type="primary" onClick={() => handleAddQuery(index)}>
                  <PlusOutlined />
                </Button>
                <Button danger disabled={querys.length === 1} onClick={() => handleRemoveQuery(index)}>
                  <DeleteOutlined />
                </Button>
              </div>
            ))
          }
        </div>
        <div>
          <Button type="primary" onClick={handleNavigate}>跳转</Button>
        </div>
      </Card>
      <Card>
        <Outlet></Outlet>
      </Card>
    </div>
  )
}

import { Descriptions } from 'antd'
import { useLoaderData, useParams } from "react-router-dom"

export default function RouteParams() {
  const params = useParams()


  const loaderData = useLoaderData() as { url: URL }
  const searchParams = loaderData.url.searchParams

  const querys: { key: string, value: string }[] = []


  searchParams.forEach((value, key) => {
    querys.push({ key, value })
  })

  return (
    <>
      <div>
      <Descriptions bordered title="路由参数">
        <Descriptions.Item label="路由参数">
                    { params.param }
        </Descriptions.Item>
      </Descriptions>
      </div>
      <div>
        <Descriptions bordered title="searchParams">
          {
            querys.map((query, index) => (
                <Descriptions.Item label={query.key} key={index}>
                  { query.value }
                </Descriptions.Item>
            ))
          }
        </Descriptions>
      </div>
    </>
  )
}

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { message: string }

  return (
    <div>
      <h1>页面找不到了……</h1>
      <span>{error.message}</span>
    </div>
  )
}

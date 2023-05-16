import { Upload } from "antd";

export default function UploadMD (props) {
  const handleUpload = (data) => {
    const reader = new FileReader()

    reader.readAsText(data.file)

    reader.onload = () => {
      if(reader.readyState === 2) {
        props.setContent(reader.result as string)
        data.onSuccess()
      }
    }
  }
  return (
    <Upload.Dragger accept=".md" customRequest={handleUpload} maxCount={1}>
      <p>
        点击或者拖拽到此处进行上传
      </p>
    </Upload.Dragger>
  )
}

import { useDispatch } from "react-redux";
import UploadMD from "./upload";
import { Outlet, useMatches } from "react-router-dom";
import { setEditorContent } from "../../store/md-editor";
import { setViewerContent } from "../../store/md-viewer";
import { useEffect } from "react";

export default function Markdown() {
  const dispatch = useDispatch()
  const matchRoute = useMatches().pop()?.pathname.split('/')[2]

  const uploadContent = (content: string) => {
    if (matchRoute === 'editor') {
      dispatch(setEditorContent(content))
    }
    if (matchRoute === 'viewer') {
      dispatch(setViewerContent(content))
    }
  }

  useEffect(() => {
    console.log(matchRoute);
  }, [matchRoute])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}>
      <div style={{ margin: '14px 20px', height: '200px', backgroundColor: '#fff', borderRadius: '5px' }}>
        <UploadMD setContent={uploadContent}></UploadMD>
      </div>
      <div style={{ textAlign: 'start', margin: '14px 20px', backgroundColor: '#fff', maxHeight: '80vh', overflow: 'auto' }}><Outlet /></div>

    </div>
  )
}

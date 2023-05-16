import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/i18n/zh-cn'
import React from 'react'
import { connect } from 'react-redux';

class MarkdownViewerComponent extends React.Component {
  el = React.createRef<HTMLDivElement>()
  viewerInstance

  componentDidMount(): void {
    this.viewerInstance = new Viewer({
      el: this.el.current!,
      initialValue: (this.props as any).content || '> 从左侧区域导入本地 markdown 文件',
    })
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    this.viewerInstance.setMarkdown((this.props as any).content)
  }

  render(): React.ReactNode {
    return (
      <div style={{backgroundColor: '#fff', minHeight: '200px'}} ref={this.el}></div>
    )
  }
}

const MarkdownViewer = connect((state: { mdViewer: { content: string } }) => {
  return state.mdViewer
})(MarkdownViewerComponent)

export default MarkdownViewer
